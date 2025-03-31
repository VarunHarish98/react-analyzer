import React from "react";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-white text-black flex flex-col justify-between font-sans">
            <header className="w-full border-b border-gray-200 px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
                <h1 className="text-xl font-bold">React Analyzer</h1>
                <nav className="flex gap-6 text-sm">
                    <a href="#features" >Features</a>
                    <a href="#how" >How it works</a>
                    <a href="upload" >Upload</a>
                </nav>
            </header>

            {/* Hero */}
            <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-4xl py-2 md:text-6xl font-extrabold tracking-tight max-w-4xl mb-4">
                    Pinpoint Performance Bottlenecks in Your React App
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mb-8">
                    Upload your React codebase and let us analyze component renders,
                    expensive operations, and state usage automatically.
                </p>

                {/* Call to Action */}
                <div className="flex flex-col md:flex-row gap-4">
                    <a
                        href="/upload"
                        className="px-6 py-3 text-sm font-medium border border-black hover:bg-black hover:text-white transition rounded-md"
                    >
                        Upload Codebase
                    </a>
                </div>
            </main>

            {/* Features */}
            <section id="features" className="py-20 px-6 ">
                <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 text-center">
                    {[
                        {
                            title: "Detect Unnecessary Renders",
                            desc: "Catch components that re-render without changes using fiber tree diffing.",
                        },
                        {
                            title: "Flag Expensive Functions",
                            desc: "Spot heavy computations inside render cycles that should be memoized.",
                        },
                        {
                            title: "Visual Flamegraph",
                            desc: "Understand render timing and re-render chains with interactive flamegraphs.",
                        },
                    ].map(({ title, desc }, idx) => (
                        <div key={idx}>
                            <h3 className="text-xl font-semibold mb-2">{title}</h3>
                            <p className="text-gray-600 text-sm">{desc}</p>
                        </div>
                    ))}
                </div>
            </section>


            {/* Footer */}
            <footer className="py-6 border-t border-gray-200 text-center text-xs text-gray-500">
                &copy; 2025 React Analyzer · Built for developers · No tracking · Fully private
            </footer>
        </div>
    );
}
