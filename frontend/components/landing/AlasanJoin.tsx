"use client"

import { Monitor, MonitorCheck, MonitorCheckIcon, MonitorDown, Telescope, Sticker } from "lucide-react"
import { useState } from "react";

interface AlasanCardProps {
    title: string;
    sub: string;
    icon: React.ReactNode;
}

const AlasanCard: React.FC<AlasanCardProps> = ({ title, sub, icon }) => {
    return (
        <div className="bg-gradient-to-t from-pink-600 to-blue-950 rounded-2xl p-6 w-[400px] h-[450px] flex flex-col justify-between">  
            <div>
                <h1 className="font-bold text-3xl">{title}</h1>
                <p className="pt-10 text-[19px] font-light">{sub}</p>
            </div>
            <div className="w-full flex justify-end">
                {icon}
            </div>
        </div>
    );
};


const alasanContainer = () => {
    return (
        <div className="flex w-full justify-between items-center gap-5 py-8">
           <AlasanCard title={"Nikmati di TV-mu"} sub={"Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV, pemutar Blu-ray, dan banyak lagi."} icon={<MonitorCheckIcon size={100}/>} />
           <AlasanCard title={"Download acara TV untuk menontonnya secara offline"} sub={"Simpan favoritmu dengan mudah agar selalu ada acara TV dan film yang bisa ditonton."} icon={<MonitorDown size={100}/>} />
           <AlasanCard title={"Tonton di mana pun"} sub={"Streaming film dan acara TV tak terbatas di ponsel, tablet, laptop, dan TV-mu."} icon={<Telescope size={100}/>} />
           <AlasanCard title={"Buat profil untuk anak"} sub={"Kirim anak-anak untuk bertualang bersama karakter favorit di dunia yang dibuat khusus untuk mereka — gratis dengan keanggotaanmu."} icon={<Sticker size={100}/>} />
        </div>
    )
}
export default alasanContainer;