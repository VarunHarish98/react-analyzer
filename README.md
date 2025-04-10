# React Analyzer 🧠⚛️

A frontend prototype for a tool that **analyzes React component performance** and provides optimization suggestions such as memoization, code splitting, and render reduction tips.

---

## ✨ Features

- 📦 **Upload zipped React projects** (UI-ready for future backend integration)
- 📊 **Visual results dashboard** with:
  - Component render stats
  - Optimization flags (e.g., `React.memo`, `useMemo`, `Code Splitting`)
- 📄 **Export results as PDF**
- ⚡️ Built using **React + Vite**, styled with **Tailwind CSS**
- 🎞️ Animations via **Framer Motion**, icons via **Lucide-react**

---

## 🛠 Tech Stack

- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)
- [html2canvas](https://html2canvas.hertzen.com/)
- [jsPDF](https://github.com/parallax/jsPDF)

---

## 📁 Project Structure

frontend/ ├── src/ │ ├── app/ # Pages like dashboard, upload │ ├── components/ # UI components (Upload, Results, etc.) │ ├── hooks/ # Custom hooks │ ├── lib/ # Utility logic │ └── App.jsx # Routes (/, /upload, /results) ├── public/ └── tailwind.config.js


---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/VarunHarish98/react-analyzer.git
cd react-analyzer/frontend
```
### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Dev Server

```bash
npm run dev
```


## 🧪 Current Limitations

- Upload logic is not yet implemented (no backend).
- Component analysis data is mocked for UI demonstration.
- No authentication or persistent storage yet.

## 📌 Roadmap

- [ ] Implement backend to parse uploaded `.zip` files and extract React component info
- [ ] Use AST parsing (e.g., Babel) to analyze render patterns
- [ ] Enable drag-and-drop file analysis in-browser
- [ ] Add performance charts and graphs
- [ ] Save past analyses per user

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to add.
