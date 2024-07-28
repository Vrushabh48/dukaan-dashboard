import ColouredCard from "./ColouredCard";

export default function Card() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h5 className="font-medium text-xl">OverView</h5>
        <button className="flex items-center gap-3 border rounded px-[14px] py-[6px] bg-white text-[#4D4D4D]">
          This Month{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>

      <div className="flex gap-5 flex-wrap">
        <ColouredCard />
        <div className="flex-grow rounded-[8px] bg-white p-5 flex flex-col gap-4 shadow-sm h-fit min-w-[300px]">
          <h5 className="flex gap-3 items-center text-[#4D4D4D]">
            Amount Pending
          </h5>
          <div className="flex justify-between items-center">
            <p className="text-3xl font-medium">₹92,312.20</p>
            <p className="flex items-center font-medium text-base underline text-[#146EB4]">
              {" "}
              13 Orders
            </p>
          </div>
        </div>
        <div className="flex-grow rounded-[8px] bg-white p-5 flex flex-col gap-4 shadow-sm h-fit min-w-[300px]">
          <h5 className="flex gap-3 items-center text-[#4D4D4D]">
            Amount Processed
          </h5>
          <div className="flex justify-between items-center">
            <p className="text-3xl font-medium">₹23,92,312.19</p>
          </div>
        </div>
      </div>
    </section>
  );
}
