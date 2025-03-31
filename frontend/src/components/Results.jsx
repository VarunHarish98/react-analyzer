import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Flame, Bolt, ClipboardCheck } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const mockRepoData = [
  {
    name: "/react-analyzer",
    data: {
      stats: { unnecessaryRenders: 6, heavyComponents: 2, suggestions: 3 },
      components: [
        { name: "Dashboard.jsx", renders: 58, expensive: true, memoSuggestion: true },
        { name: "Sidebar.jsx", renders: 47, expensive: true, memoSuggestion: false },
        { name: "UserCard.jsx", renders: 38, expensive: false, memoSuggestion: true },
      ],
      suggestions: [
        { text: "Wrap <UserCard /> in React.memo", tag: "React.memo" },
        { text: "Move heavy logic from Dashboard.jsx render to useMemo", tag: "useMemo" },
        { text: "Consider splitting Sidebar.jsx into smaller chunks", tag: "Code Splitting" },
      ],
    },
  },
  {
    name: "open-source/ui-lib",
    data: {
      stats: { unnecessaryRenders: 4, heavyComponents: 1, suggestions: 2 },
      components: [
        { name: "Button.jsx", renders: 34, expensive: false, memoSuggestion: true },
        { name: "Modal.jsx", renders: 62, expensive: true, memoSuggestion: true },
      ],
      suggestions: [
        { text: "Optimize Modal.jsx with useCallback", tag: "useCallback" },
        { text: "Memoize props passed to Button.jsx", tag: "React.memo" },
      ],
    },
  },
];

const StatIcons = [
  <ClipboardCheck className="h-6 w-6" />,
  <Flame className="h-6 w-6" />,
  <Bolt className="h-6 w-6" />,
];

export default function Dashboard() {
  const reportRef = useRef();
  const [activeRepoIndex, setActiveRepoIndex] = useState(0);
  const { stats, components, suggestions } = mockRepoData[activeRepoIndex].data;

  const exportToPDF = async () => {
    const canvas = await html2canvas(reportRef.current);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({ orientation: "portrait", unit: "px", format: "a4" });
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("react-analysis-report.pdf");
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-white to-gray-50 text-black font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 bg-white p-6 space-y-2 sticky top-0 h-screen">
        <h2 className="text-lg font-bold mb-2">📁 Repositories</h2>
        {mockRepoData.map((repo, i) => (
          <button
            key={repo.name}
            onClick={() => setActiveRepoIndex(i)}
            className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition ${
              activeRepoIndex === i ? "bg-black text-white" : "hover:bg-gray-100 text-black"
            }`}
          >
            {repo.name}
          </button>
        ))}
        <Link
          to="/upload"
          className="block mt-6 text-center text-sm border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white"
        >
          + Upload New Repo
        </Link>
      </aside>

      {/* Main Panel */}
      <div className="flex-1">
        <header className="border-b border-gray-200 px-8 py-6 flex justify-between items-center shadow-sm bg-white sticky top-0 z-10">
          <h1 className="text-2xl font-bold tracking-tight">🚀 React Analyzer</h1>
          <button
            onClick={exportToPDF}
            className="border border-black px-5 py-2 rounded-full hover:bg-black hover:text-white text-sm transition"
          >
            Export PDF
          </button>
        </header>

        <main ref={reportRef} className="p-8 grid gap-12 max-w-6xl mx-auto">
          {/* Summary Cards */}
          <motion.section
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {Object.entries(stats).map(([label, value], idx) => (
              <motion.div
                key={label}
                className="border border-black rounded-xl p-6 text-center hover:shadow-md bg-white transition-transform duration-200"
                whileHover={{ scale: 1.04 }}
              >
                <div className="flex justify-center mb-3 text-black">{StatIcons[idx]}</div>
                <h2 className="text-3xl font-extrabold">{value}</h2>
                <p className="text-sm text-gray-600 mt-1">
                  {label.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}
                </p>
              </motion.div>
            ))}
          </motion.section>

          {/* Component Table */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <h3 className="text-xl font-semibold mb-5">📁 Component Breakdown</h3>
            <div className="overflow-x-auto rounded-md">
              <table className="w-full text-sm text-left text-gray-700 border border-gray-200 rounded-md overflow-hidden">
                <thead className="bg-gray-100 text-gray-600 text-xs">
                  <tr>
                    <th className="px-4 py-3">Component</th>
                    <th className="px-4 py-3">Render Count</th>
                    <th className="px-4 py-3">Expensive?</th>
                    <th className="px-4 py-3">Memo Suggested?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {components.map((comp, i) => (
                    <motion.tr
                      key={i}
                      className={`${
                        comp.expensive ? "bg-red-50" : "bg-white"
                      } hover:bg-gray-50 transition-all`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <td className="px-4 py-3 font-mono whitespace-nowrap">{comp.name}</td>
                      <td className="px-4 py-3">{comp.renders}</td>
                      <td className="px-4 py-3">{comp.expensive ? "Yes" : "No"}</td>
                      <td className="px-4 py-3">{comp.memoSuggestion ? "Yes" : "No"}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Suggestions */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <h3 className="text-xl font-semibold mb-6">✅ Optimization Tips</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {suggestions.map((item, i) => (
                <motion.div
                  key={i}
                  className="border border-gray-200 rounded-md p-4 bg-gray-50 hover:bg-gray-100 transition shadow-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <p className="text-sm text-gray-800 mb-2">{item.text}</p>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-black text-white rounded">
                    {item.tag}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </main>

        <footer className="py-6 text-center text-xs text-gray-500 border-t border-gray-200">
          &copy; 2025 React Analyzer · Performance insights you can trust.
        </footer>
      </div>
    </div>
  );
}
