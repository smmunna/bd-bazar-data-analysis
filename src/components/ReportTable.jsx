function ReportTable({ data }) {
  if (!data.length) return null;

  const formatPercentIfNeeded = (value, category) => {
    if (category?.trim() === "যে সকল পণ্যের মূল্য হ্রাস/বৃদ্ধি হয়েছেঃ") {
      const num = parseFloat(value);
      if (!isNaN(num)) {
        return (Math.floor(num * 100) / 100).toFixed(2) + "%";
      }
    }
    return value;
  };

  const isSummaryRow = (item) => {
    const first = (item.product || "").trim();
    return (
      first === "পণ্যের নাম" ||
      first === "অদ্যকার মূল্য(টাকায়)" ||
      first.includes("মূল্যের%") ||
      first.includes("মূল্য(টাকায়)")
    );
  };

  return (
    <div className="overflow-y-auto max-h-[80vh]"> {/* ✅ Scrollable container */}
      <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg">
        <thead className="bg-gray-200 sticky top-0 z-10"> {/* ✅ Fixed header */}
          <tr>
            <th className="border p-2">Product</th>
            <th className="border p-2">Unit</th>
            <th className="border p-2">Today Min</th>
            <th className="border p-2">Today Max</th>
            <th className="border p-2">Last Week</th>
            <th className="border p-2">Last Month</th>
            <th className="border p-2">মাসিক মূল্যের হ্রাস/বৃদ্ধি</th>
          </tr>
        </thead>
        <tbody>
          {data.reduce((acc, item, i, arr) => {
            if (isSummaryRow(item)) return acc;

            const prev = arr[i - 1];
            const showCategory = !prev || prev.category !== item.category;

            if (showCategory) {
              acc.push(
                <tr key={`cat-${i}`} className="bg-blue-100">
                  <td
                    colSpan="7"
                    className="text-left font-semibold p-2 text-blue-900"
                  >
                    {item.category}
                  </td>
                </tr>
              );
            }

            acc.push(
              <tr key={i} className="text-center hover:bg-gray-50">
                {item.product && (
                  <>
                    <td className="border p-2">{item.product}</td>
                    <td className="border p-2">{item.unit}</td>
                    <td className="border p-2">{item.today_min}</td>
                    <td className="border p-2">{item.today_max}</td>
                    <td className="border p-2">
                      {item.lastweek_min} - {item.lastweek_max}
                    </td>
                    <td className="border p-2">
                      {formatPercentIfNeeded(item.lastmonth_min, item.category)} -{" "}
                      {formatPercentIfNeeded(item.lastmonth_max, item.category)}
                    </td>
                    <td
                      className={`border p-2 ${
                        typeof item.year_min === "number"
                          ? item.year_min < 0
                            ? "bg-green-200"
                            : item.year_min > 0
                            ? "bg-red-200"
                            : ""
                          : ""
                      }`}
                    >
                      {typeof item.year_min === "number" ? (
                        <>
                          <span>
                            {item.year_min % 1 !== 0
                              ? item.year_min.toFixed(2)
                              : item.year_min}
                          </span>
                          %
                        </>
                      ) : (
                        <span>N/A</span>
                      )}
                    </td>
                  </>
                )}
              </tr>
            );

            return acc;
          }, [])}
        </tbody>
      </table>
    </div>
  );
}

export default ReportTable;
