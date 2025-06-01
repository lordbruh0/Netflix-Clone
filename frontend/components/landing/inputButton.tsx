"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";

const InputButton = () => {
    return (
        <div className="flex justify-center gap-3 items-start">
              <input type="text" className="bg-zinc-800/25 hover:bg-zinc-800 border border-gray-400/50 placeholder:text-white px-5 py-[13px] w-full rounded-full " placeholder="Alamat email" />
              <button className="flex bg-red-600 px-8 py-3 rounded-full">
                <h1 className="font-bold text-xl">Mulai</h1>
                <ChevronRight></ChevronRight>
              </button>
            </div>
    )
}
export default InputButton;