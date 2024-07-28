export default function Table() {
  return (
    <div className="grid gap-5">
      <div className="flex justify-between items-center">
        <h5 className="font-medium text-xl">Transactions | This Month</h5>
      </div>
      <div className="flex gap-10">
        <button className="px-4 py-[6px] bg-[#E6E6E6] text-[#808080] rounded-full">
          PayOuts (22)
        </button>
        <button className="px-4 py-[6px] bg-[#146EB4] text-[#FFFFFF] rounded-full">
          Refunds (6)
        </button>
      </div>

      <div>
        <div>
          <div className="flex items-center gap-2 px-4 py-[6px] border border-[#D9D9D9] text-[#808080] rounded w-full max-w-[300px]">
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
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search features, tutorials..."
              className="bg-transparent outline-none w-full"
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-b">
          <colgroup>
            <col className="w-1/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
          </colgroup>
          <thead className="text-[#4D4D4D]">
            <tr className="bg-[#F2F2F2]">
              <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider rounded-l">
                Order ID
              </th>
              <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider">
                Status
              </th>
              <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider">
                Transaction ID
              </th>
              <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider">
                Refund Date
              </th>
              <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider">
                Order Amount
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-[#E6E6E6]">
            <tr className="text-sm">
              <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                #281209
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                Successful
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                TRX123456
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                Today, 8:45 PM
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                ₹1125.00
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                #281209
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                Successful
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                TRX123456
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                Today, 8:45 PM
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                ₹1125.00
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                #281209
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                Successful
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                TRX123456
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                Today, 8:45 PM
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                ₹1125.00
              </td>
            </tr>

            <tr className="text-sm">
              <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                #281209
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                Successful
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                TRX123456
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                Today, 8:45 PM
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                ₹1125.00
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                #281209
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                Successful
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                TRX123456
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                Today, 8:45 PM
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                ₹1125.00
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                #281209
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                Successful
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                TRX123456
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                Today, 8:45 PM
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                ₹1125.00
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                #281209
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                Successful
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                TRX123456
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                Today, 8:45 PM
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                ₹1125.00
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                #281209
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                Successful
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                TRX123456
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                Today, 8:45 PM
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                ₹1125.00
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                #281209
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                Successful
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                TRX123456
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                Today, 8:45 PM
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                ₹1125.00
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                #281209
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                Successful
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                TRX123456
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                Today, 8:45 PM
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                ₹1125.00
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                #281209
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                Successful
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                TRX123456
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                Today, 8:45 PM
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                ₹1125.00
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                #281209
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                Successful
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                TRX123456
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                Today, 8:45 PM
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                ₹1125.00
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                #281209
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                Successful
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                TRX123456
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                Today, 8:45 PM
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                ₹1125.00
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
