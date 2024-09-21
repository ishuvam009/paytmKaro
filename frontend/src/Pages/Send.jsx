import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export default function Send() {

    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [balance, setBalance] = useState("");

    const handleClick = ()=>{
        axios({
            url:"https://paytmkaro-gcp0.onrender.com/api/v1/account/transaction",
            method: "POST",
            data:{
                senderId: "66ebea4ea9d4167387f63a6e",
                recipientId: id,
                amount: balance,
            },
        })
    }

  return (
    <div className="bg-[#E2E8F0] h-screen w-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-[300px]">
        <p className="text-center text-2xl font-bold mb-6">Send Money</p>
        <div className="flex items-center mb-4">
          <div className="bg-green-500 text-white h-12 w-12 rounded-full flex justify-center items-center text-2xl font-bold">
            {name[0].toUpperCase()}
          </div>
          <p className="ml-4 text-xl font-semibold">{name}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Amount (in Rs)
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter amount"
            onChange={e=>{setBalance(e.target.value)}}
          />
        </div>
        <button className="bg-green-500 w-full py-2 rounded-md text-white font-semibold" onClick={handleClick}>
          Initiate Transfer
        </button>
      </div>
    </div>
  );
}
