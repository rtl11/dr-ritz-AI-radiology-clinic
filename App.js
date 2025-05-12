import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import DrRitzChatBot from "./components/DrRitzChatBot";

function Home() {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">🏥 Dr. Ritz Radiology Clinic</h1>
      <p className="text-lg text-gray-700 mb-6">Expert diagnostics powered by AI. Fast, accurate, and accessible.</p>
      <div className="space-x-4">
        <Link to="/analyze" className="bg-blue-600 text-white px-4 py-2 rounded">Upload & Analyze</Link>
        <Link to="/chat" className="bg-green-600 text-white px-4 py-2 rounded">Chat with Dr. Ritz AI</Link>
        <Link to="/learn" className="bg-indigo-600 text-white px-4 py-2 rounded">Learn Radiology</Link>
      </div>
    </div>
  );
}

function Analyze() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">🩻 Upload X-Ray for AI Analysis</h2>
      <p className="text-gray-600">[Upload functionality coming soon]</p>
    </div>
  );
}

function LearnRadiology() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">📘 Learn Radiology</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Basics of Chest X-ray Interpretation</li>
        <li>Radiological Signs and Their Meanings</li>
        <li>Case of the Week (Coming Soon)</li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav className="bg-white shadow-md p-4 flex justify-between">
        <Link to="/" className="text-lg font-bold text-blue-700">Dr. Ritz Radiology</Link>
        <div className="space-x-4">
          <Link to="/analyze" className="text-blue-600 hover:underline">Analyze</Link>
          <Link to="/chat" className="text-green-600 hover:underline">Chat</Link>
          <Link to="/learn" className="text-indigo-600 hover:underline">Learn</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analyze" element={<Analyze />} />
        <Route path="/chat" element={<DrRitzChatBot />} />
        <Route path="/learn" element={<LearnRadiology />} />
      </Routes>
    </Router>
  );
}

export default App;
