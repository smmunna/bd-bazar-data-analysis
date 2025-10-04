import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      {/* ---------- Header ---------- */}
      <section className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2">
          আজকের খুচরা বাজারদর - ঢাকা মহানগর
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          উৎস:{" "}
          <a
            href="https://tcb.gov.bd/site/view/daily_rmp/Today's-retail-market-price-in-Dhaka-city"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            ট্রেডিং কর্পোরেশন অব বাংলাদেশ (TCB)
          </a>
        </p>
      </section>

      {/* ---------- ব্যবহারবিধি ---------- */}
      <section className="bg-green-50 border border-green-200 rounded-lg p-5 md:p-6 mb-8 text-gray-800 leading-relaxed">
        <h2 className="text-lg md:text-xl font-semibold text-green-700 mb-2">
          🧭 ওয়েবসাইট ব্যবহারের নিয়মাবলী:
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-sm md:text-base">
          <li>
            প্রথমে নিচের লিংক থেকে{" "}
            <strong>“আজকের খুচরা বাজারদর (ঢাকা মহানগর)”</strong> Excel ফাইলটি{" "}
            <span className="text-blue-700 font-medium">ডাউনলোড</span> করুন।
          </li>
          <li>
            তারপর ওয়েবসাইটে ফিরে এসে{" "}
            <strong>“রিপোর্ট দেখুন”</strong> মেনুতে গিয়ে Excel ফাইলটি{" "}
            <span className="text-blue-700 font-medium">আপলোড</span> করুন।
          </li>
          <li>
            আপলোডের পর স্বয়ংক্রিয়ভাবে বাজার বিশ্লেষণ টেবিল প্রদর্শিত হবে, যেখানে
            প্রতিটি পণ্যের বর্তমান, সাপ্তাহিক ও মাসিক মূল্য পরিবর্তন দেখা যাবে।
          </li>
          <li>
            এই তথ্যগুলো শুধুমাত্র TCB-এর অফিসিয়াল ওয়েবসাইট থেকে সংগৃহীত
            ডেটার ভিত্তিতে প্রদর্শিত হয়।
          </li>
        </ol>

        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://tcb.gov.bd/site/view/daily_rmp/Today's-retail-market-price-in-Dhaka-city"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
          >
            অফিসিয়াল সাইট দেখুন ↗
          </a>
          <a
            href="https://tcb.gov.bd/site/view/daily_rmp/Today's-retail-market-price-in-Dhaka-city"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-blue-600 text-blue-700 px-5 py-2 rounded-md hover:bg-blue-100 transition"
          >
            Excel ফাইল ডাউনলোড করুন ⬇
          </a>
          <Link
            to="/report"
            className="inline-block bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition"
          >
            রিপোর্ট দেখুন 📊
          </Link>
        </div>
      </section>

      {/* ---------- Embedded Official Preview ---------- */}
      <section className="mb-10">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
          অফিসিয়াল ওয়েবসাইট প্রিভিউ:
        </h2>
        <div className="border rounded-lg overflow-hidden shadow-sm">
          <iframe
            src="https://tcb.gov.bd/site/view/daily_rmp/Today's-retail-market-price-in-Dhaka-city"
            title="TCB Retail Market Price"
            width="100%"
            height="600"
            className="border-0 w-full"
          />
        </div>
      </section>

      {/* ---------- Future Integration Info ---------- */}
      <section className="text-center text-gray-500 text-sm md:text-base border border-dashed p-6 rounded-lg">
        Developed by <a href="http://www.github.com/smmunna">Sm.Munna</a>
      </section>
    </div>
  );
}

export default HomePage;
