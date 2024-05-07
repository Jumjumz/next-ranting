"use client";

import { useState } from "react";

function Status() {
  const [status, setStatus] = useState();
  return (
    <button className=" w-24 border-2 bg-green-900 border-green-400 rounded-2xl text-green-200">
      Active
    </button>
  );
}

export default Status;
