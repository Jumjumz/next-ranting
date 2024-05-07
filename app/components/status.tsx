"use client";

import { useState } from "react";

function Status() {
  const [status, setStatus] = useState(0);

  const changeColor = () => {
    if (!status) {
      setStatus(1);
    } else {
      setStatus(0);
    }
  };

  return (
    <div className=" w-36 h-full flex justify-center">
      <button
        className={
          status
            ? " w-24 border-2 bg-green-900 border-green-400 rounded-2xl text-green-200"
            : " w-32 border-2 bg-red-900 border-red-400 rounded-2xl text-red-200"
        }
        onClick={changeColor}
      >
        {status ? "Active" : "Blacklisted"}
      </button>
    </div>
  );
}

export default Status;
