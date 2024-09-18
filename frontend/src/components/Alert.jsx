import React, { useState } from 'react';

export default function Alert(alertMessahe) {
  const [isVisible, setIsVisible] = useState(false);

  const alertFunction = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 2000); // Hide the alert after 2 seconds
  };

  return (
    <div className="p-20">
      <button
        className="p-4 border border-black bg-blue-500 rounded-xl"
        onClick={alertFunction}
      >
        Click me
      </button>

      {isVisible && (
        <div className="mt-4 p-4 w-80 h-16 bg-red-500 text-white rounded-md">
          {alertMessahe}
        </div>
      )}
    </div>
  );
}
