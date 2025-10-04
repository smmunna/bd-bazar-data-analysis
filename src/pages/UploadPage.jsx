import { useState } from "react";
import FileUploader from "../components/FileUploader";
import ReportTable from "../components/ReportTable";

function UploadPage() {
  const [data, setData] = useState([]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">
        Upload Daily Bazar Report
      </h1>
      <FileUploader setData={setData} />
      {data.length > 0 && (
        <>
          <h2 className="text-xl font-semibold mt-6 mb-2">Parsed Report</h2>
          <ReportTable data={data} />
        </>
      )}
    </div>
  );
}

export default UploadPage;
