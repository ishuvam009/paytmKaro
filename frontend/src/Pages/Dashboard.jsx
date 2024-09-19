import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SendMoneyUsers from "../components/SendMoneyUsers";

export default function Dashboard() {
  const [balance, setBalance] = useState(0);
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const userBalance = await axios({
        url: "https://paytmkaro-gcp0.onrender.com/api/v1/account/balance",
        method: "POST",
        data: {
          userId: "66ebea4ea9d4167387f63a6e",
        },
      });
      const response = userBalance.data.balance;
      setBalance(parseFloat(response.$numberDecimal));
    };
    getData();
  }, []);

  //remove this userName.
  const userName = " Shuvam";

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await axios.get(
          `https://paytmkaro-gcp0.onrender.com/api/v1/user/bulk?filter=${filter}`
        );
        if (response.data.user) {
          setUsers(response.data.user);
          setError(null);
        } else {
          setUsers([]);
          setError(error);
        }
      } catch (error) {
        setError(error);
      }
    };

    if (filter) {
      fetchUserList();
    } else {
      setUsers([]);
    }
  }, [filter]);

  const navigate = useNavigate();
  const handleClick = (userID,userName)=>{
    navigate(`/send?id=${userID}&name=${userName}`)
    
  }

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
          <input
            type="text"
            className="w-full h-10 rounded-md"
            placeholder="Search users..."
            onChange={(e) => {
              const sanitizedValue = e.target.value.replace(/[^a-zA-Z0-9\s]/g, '');
              setFilter(sanitizedValue);
            }}
          />
          {error && <p className="text-red-700 mt-4">{error}</p>}
        </div>
        {users.map((user) => (
          <SendMoneyUsers
            key={user._id}
            firstname={user.firstName}
            lastname={user.lastName || ""}
            onClick={()=>handleClick(user._id, user.firstName)}
          />
        ))}
      </div>
    </>
  );
}
