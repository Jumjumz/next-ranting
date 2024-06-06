"use client";

import { useEffect, useState } from "react";
import dashboardInfo from "../lib/info";

export default function Status() {
  const [status, setStatus] = useState<boolean>(false);

  useEffect(() => {
    dashboardInfo.map((index) => {
      if (index.id) {
        dashboardInfo.push({ id: index.id, status: status });
      }
    });
  }, []);

  const changeColor = () => {
    if (!status) {
      setStatus(!status);
    } else {
      setStatus(false);
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
