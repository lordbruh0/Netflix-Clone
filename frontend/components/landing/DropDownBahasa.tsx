"use client";

import { ChevronDown, ChevronUp, Languages } from "lucide-react";
import { useState } from "react";

export default function DropdownBahasa() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-center gap-3">
      {/* Dropdown Container */}
      <div className="relative">
        <div
          className="flex items-center bg-transparent border px-4 py-2 gap-2 rounded-sm cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Languages width={16} height={16} />
          <span className="bg-transparent text-white transition text-sm">
            Bahasa Indonesia
          </span>
          {isOpen ? <ChevronUp width={16} height={16} /> : <ChevronDown width={16} height={16} />}
        </div>

        {/* Menu Dropdown */}
        {isOpen && (
          <div className="absolute left-0 top-full mt-1 bg-white/50 rounded-sm overflow-hidden z-20 w-full">
            <ul>
              <li className="py-2 px-4 text-sm cursor-pointer">
                English
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
