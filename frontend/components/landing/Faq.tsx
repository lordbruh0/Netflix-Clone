'use client';

import { useState } from 'react';
import { arrayFaq } from '@/data/Faq'; // Sesuaikan path sesuai struktur proyekmu
import { Plus, X } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

return (
    <div className='py-8'>
        {arrayFaq.map((faq, index) => (
            <div key={faq.id} className="mb-2 rounded">
                <button
                    className="w-full text-left py-6 px-6 bg-zinc-800    text-white flex justify-between hover:bg-zinc-700 transition-colors text-2xl rounded-2xl border-white/10 border-[1px]"
                    onClick={() => toggleFAQ(index)}
                >
                    {faq.question}
                    <span>{openIndex === index ? <X />  : < Plus /> }</span>
                </button>
                <div
                    className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openIndex === index ? 'max-h-screen' : 'max-h-0'}`}
                >
                    <div className="py-6 px-6 bg-zinc-800 text-white whitespace-pre-line border-t-2 border-black rounded-2xl">
                        {faq.answer}
                    </div>
                </div>
            </div>
        ))}
    </div>
);
}
