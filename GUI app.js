import React, { useState } from "react";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [logs, setLogs] = useState([]);

  const handleUpload = () => {
    if (!file) return;

    const newLog = {
      id: logs.length + 1,
      name: file.name,
      status: "Uploaded",
      date: new Date().toLocaleString(),
    };

    setLogs([newLog, ...logs]);
  };

  return (
    <div className="app-container">
      <h1 style={{ textAlign: "center" }}>
        Coupa Direct Materials Asset - GUI App
      </h1>

      <div className="dashboard">
        {/* Upload Section */}
        <div className="card">
          <h1 className="title">Coupa Asset Sync Dashboard</h1>
          <div className="upload-section">
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <button onClick={handleUpload}>Upload</button>
          </div>
        </div>

        {/* Logs Table */}
        <div className="card">
          <h2 className="subtitle">Upload Logs</h2>
          <table className="logs-table">
            <thead>
              <tr>
                <th>#</th>
                <th>File Name</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.id}>
                  <td>{log.id}</td>
                  <td>{log.name}</td>
                  <td>{log.status}</td>
                  <td>{log.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
