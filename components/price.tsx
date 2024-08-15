export function Price() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white dark:bg-[#1e293b] dark:text-[#e2e8f0] rounded-lg shadow-md border border-gray-300 dark:border-[#334155] max-w-4xl w-full  p-8 leading-[1.6] mx-5 my-[15%] md:my-[5%] lg:my-0">
        <h2 className="text-2xl font-bold mb-4 head text-gray-900 dark:head ">
          API Pricing
        </h2>
        <p className="mb-6 text-gray-700 dark:text-[#e2e8f0]">
          Our API pricing is based on the model used and the number of tokens
          processed. Here's a breakdown of the costs:
        </p>
        <div className="overflow-x-auto rounded-md">
          <table className="min-w-full border border-gray-300 dark:border-gray-700 border-collapse bg-gray-100 dark:bg-gray-800">
            <thead className="bg-blue-200 dark:bg-[#6366f1] p-4 uppercase text-[12.8px]">
              <tr className="rounded-lg">
                <th className="p-4 text-left text-gray-900 dark:text-[#FFF]">
                  API
                </th>
                <th className="p-4 text-left text-gray-900 dark:text-[#FFF]">
                  Model
                </th>
                <th className="p-4 text-left text-gray-900 dark:text-[#FFF]">
                  Price per 1K tokens
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border-b border-gray-300 dark:border-gray-700">
                  OpenAI
                </td>
                <td className="p-4 border-b border-gray-300 dark:border-gray-700">
                  GPT-3.5
                </td>
                <td className="p-4 border-b border-gray-300 dark:border-gray-700">
                  $0.002
                </td>
              </tr>
              <tr>
                <td className="p-4 border-b border-gray-300 dark:border-gray-700">
                  OpenAI
                </td>
                <td className="p-4 border-b border-gray-300 dark:border-gray-700">
                  GPT-4
                </td>
                <td className="p-4 border-b border-gray-300 dark:border-gray-700">
                  $0.03
                </td>
              </tr>
              <tr>
                <td className="p-4 border-b border-gray-300 dark:border-gray-700">
                  Together AI
                </td>
                <td className="p-4 border-b border-gray-300 dark:border-gray-700">
                  Llama-2-70b
                </td>
                <td className="p-4 border-b border-gray-300 dark:border-gray-700">
                  $0.0008
                </td>
              </tr>
              <tr>
                <td className="p-4 border-b border-gray-300 dark:border-gray-700 rounded-bl-md">
                  Together AI
                </td>
                <td className="p-4 border-b border-gray-300 dark:border-gray-700">
                  Llama-2-13b
                </td>
                <td className="p-4 border-b border-gray-300 dark:border-gray-700">
                  $0.0006
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-2 head text-gray-900 dark:head">
            Token Estimation
          </h3>
          <p className="mb-4 text-gray-700 dark:text-[#e2e8f0]">
            On average, 1 token is approximately 4 characters or 0.75 words. For
            precise pricing, we recommend using our token calculator tool.
          </p>
          <h3 className="text-lg font-bold mb-2  dark:text-[#a5b4fc]">
            Billing
          </h3>
          <p className="text-gray-700 dark:text-[#e2e8f0]">
            You will only be charged for the tokens used in generating the book.
            The API tracks token usage and bills accordingly. Detailed usage
            reports are available in your account dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}
