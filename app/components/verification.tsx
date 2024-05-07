"use client";

import { useState } from "react";

function Verification() {
  const [verify, setVerify] = useState(null);
  return (
    <button className=" w-32 border-2 border-green-400 rounded-2xl text-green-200">
      Verfified
    </button>
  );
}

export default Verification;
