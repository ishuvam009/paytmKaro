import axios from "axios";
import { useState, useEffect} from "react";
export default function Dashboard() {

    const [balance,setBalance] = useState(0);

    useEffect(()=>{
        const getData = async ()=>{
            const userBalance = await axios({
                url:"http://localhost:3000/api/v1/account/balance",
                method:"POST",
                data:{
                    userId: "66eabc276777516286dd6e64",
                },
            })
            const response = userBalance.data.balance;
            setBalance(parseFloat(response.$numberDecimal));
        };
        getData();
    },[])

  const userName = "Shuvam";


  return (
    <>
      <div className="w-screen h-screen bg-[#E2E8F0] pt-6">
        <div className="flex justify-between border border-gray-300 shadow-sm">
          <p className="p-4 text-2xl font-bold">Paymets App</p>
          <p className="p-4 text-lg font-medium">Hello,{userName}</p>
        </div>
        <div className="p-4">
            <p className="font-bold text-xl">Your Balance: Rs {balance}</p>
            <p className="font-bold text-xl py-4">Users</p>
        </div>
        <div className="p-4">
            <input type="text" className="w-full h-10 rounded-md" placeholder="Search users..."/>
        </div>
      </div>
    </>
  );
}
