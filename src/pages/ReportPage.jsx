/* eslint-disable no-unused-vars */
import { useState } from "react";
import ReportTable from "../components/ReportTable";
import PriceChart from "../components/PriceChart";

function ReportPage() {
  const [data, setData] = useState([]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Daily Bazar Report</h1>
      {data.length > 0 ? (
        <>
          <ReportTable data={data} />
          <PriceChart data={data.slice(0, 10)} />
        </>
      ) : (
        <p className="text-gray-500">
          No data yet. Please upload an Excel file from the Upload page.
        </p>
      )}
    </div>
  );
}

export default ReportPage;
