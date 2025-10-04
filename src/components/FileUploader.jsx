import * as XLSX from "xlsx";

function FileUploader({ setData }) {
  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      const data = new Uint8Array(evt.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const json = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      // --- Extract data, starting from actual table rows ---
      const rows = [];
      let currentCategory = "";

      json.slice(8).forEach((row) => {
        const firstCol = row[0];
        const unit = row[1];

        // Detect category (like "চাল", "ডাল" etc.)
        const isCategory = !unit && typeof firstCol === "string" && firstCol.trim() !== "";

        if (isCategory) {
          currentCategory = firstCol.trim();
        } else if (firstCol && unit) {
          rows.push({
            category: currentCategory,
            product: firstCol,
            unit: unit,
            today_min: row[2],
            today_max: row[3],
            lastweek_min: row[4],
            lastweek_max: row[5],
            lastmonth_min: row[6],
            lastmonth_max: row[7],
            year_min: row[8],
            year_max: row[9],
          });
        }
      });

      setData(rows.filter((r) => r.product));
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="border-2 border-dashed border-gray-400 p-6 rounded-xl text-center bg-white">
      <input type="file" accept=".xlsx,.xls" onChange={handleFile} />
      <p className="text-gray-500 mt-2">Upload your daily bazar Excel file</p>
    </div>
  );
}

export default FileUploader;
