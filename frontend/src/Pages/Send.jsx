import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Send() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const myId = localStorage.getItem("id")
  const [balance, setBalance] = useState("");
  const [notification, setNotification] = useState("");
  const [isProcessing, setIsProcessing] = useState(false); // Disable button while processing
  const navigate = useNavigate();

  const handleClick = async () => {
    const amount = parseFloat(balance);
    
    if (isNaN(amount) || amount <= 0) {
      setNotification("Please enter a valid amount.");
      return;
    }

    setIsProcessing(true); // Disable the button while processing
    try {
      const response = await axios({
        url: "http://localhost:3000/api/v1/account/transaction",
        method: "POST",
        data: {
          senderId: myId, // Your sender ID
          recipientId: id, // Receiver ID
          amount,
        },
      });

      setNotification("Transaction successful!");

      // After a short delay, redirect to the dashboard
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      console.error(error);
      setNotification("Transaction failed! Please try again.");
    } finally {
      setIsProcessing(false); // Re-enable the button
    }
  };

  return (
    <div className="bg-[#E2E8F0] h-screen w-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-[300px]">
        <p className="text-center text-2xl font-bold mb-6">Send Money</p>

        {/* Notification message */}
        {notification && (
          <div
            className={`text-center p-2 mb-4 ${
              notification === "Transaction successful!"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            } rounded-md`}
          >
            {notification}
          </div>
        )}

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
            type="number" // Changed to number type
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter amount"
            value={balance} // Bind the value to input
            onChange={(e) => setBalance(e.target.value)}
          />
        </div>
        <button
          className="bg-green-500 w-full py-2 rounded-md text-white font-semibold"
          onClick={handleClick}
          disabled={isProcessing} // Disable button while processing
        >
          {isProcessing ? "Processing..." : "Initiate Transfer"} {/* Show loading state */}
        </button>
      </div>
    </div>
  );
}
