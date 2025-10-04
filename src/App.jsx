import { Routes, Route, Link } from "react-router-dom";
import UploadPage from "./pages/UploadPage";
import ReportPage from "./pages/ReportPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-blue-600 text-white p-4 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/upload">Upload</Link>
        <Link to="/report">Report</Link>
      </nav>

      <div className="p-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/report" element={<ReportPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
