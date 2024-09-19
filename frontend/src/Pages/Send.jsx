import { useSearchParams } from 'react-router-dom';

export default function Send({firstName}) {

    
  return (
    <div className="bg-[#E2E8F0] h-screen w-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-[300px]">
        <p className="text-center text-2xl font-bold mb-6">Send Money</p>
        <div className="flex items-center mb-4">
          <div className="bg-green-500 text-white h-12 w-12 rounded-full flex justify-center items-center text-2xl font-bold">
            A
          </div>
          <p className="ml-4 text-xl font-semibold">{firstName}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Amount (in Rs)
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter amount"
          />
        </div>
        <button className="bg-green-500 w-full py-2 rounded-md text-white font-semibold">
          Initiate Transfer
        </button>
      </div>
    </div>
  );
}
