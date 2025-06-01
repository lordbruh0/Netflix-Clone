import Image from "next/image";
import landing_page from "../public/image/background_landing_page.jpg";
import NavBar from "@/components/landing/NavBar";
import { ChevronRight } from "lucide-react";
import InputButton from "@/components/landing/inputButton";
import TrendingSlider from "@/components/landing/TopMovie/TrendingSlider";
import AlasanContainer from "@/components/landing/AlasanJoin";
import Dropdown from "@/components/landing/DropDown";
import DropdownBahasa from "@/components/landing/DropDownBahasa";
import FAQ from "@/components/landing/Faq";


export default function Home() {
  return (
    <main>
      <div className="bg-gradient-to-t from-zinc-900 via-red-950 to-zinc-950">
        <div className="z-30 text-white">
          <NavBar />
        </div>
        <div className="w-full h-screen relative">
          <section className="relative w-auto h-screen justify-center m-10">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover rounded-[30px]"
            >
              <source src="/image/video-background.mp4" type="video/mp4" />
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-9 flex flex-col justify-center items-center rounded-[30px]">
              <h1 className="text-white text-6xl font-bold text-center w-6/12">Saksikan film, acara TV tak terbatas, dan banyak lagi.</h1>
              <p className="text-white text-center mt-10 font-medium text-2xl">Harga mulai dari Rp 54.000. Batalkan kapan pun.</p>

              <div className="pt-10">
                <p className="pb-5">Siap menonton? Masukan email untuk membuat atau memulai lagi keanggotaanmu.</p>
                <InputButton></InputButton>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className=" w-full pt-20 bg-gradient-to-t from-zinc-950 to-zinc-950">
        <div className="w-auto flex flex-col items-center justify-center mx-48">
          <div className="w-full">
            <div className="w-full">
              <h1 className="text-3xl font-extrabold">Sedang Tren Sekarang</h1>
            </div>
            <div>
              <TrendingSlider />
            </div>
          </div>
          <div className="w-full mt-20">
            <div className="w-full">
              <h1 className="text-3xl font-extrabold">Alasan Lainnya untuk Bergabung</h1>
            </div>
            <div>
              <AlasanContainer />
            </div>
          </div>
          <div className="w-full mt-20">
            <div className="w-full">
              <h1 className="text-3xl font-extrabold">Tanya Jawab Umum</h1>
            </div>
            <div>
              <FAQ />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center my-20">
            <div>
              <p className="pb-5">Siap menonton? Masukan email untuk membuat atau memulai lagi keanggotaanmu.</p>
              <InputButton></InputButton>
            </div>
          </div>
          <div className="w-full mt-20 mb-24">
            <div className="w-full flex gap-1">
              <h1 className="text-base font-light">Ada pertanyaan? Hubungin</h1>
              <h1 className="text-base font-light underline">007-803-321-8275</h1>
            </div>
            <div className="flex w-full justify-between">
              <div className="flex mt-10">
                <div className="space-y-2">
                  <h1 className="text-base font-light underline">Tanya Jawab</h1>
                  <h1 className="text-base font-light underline">Hubungin Investor</h1>
                  <h1 className="text-base font-light underline">Cara Menonton</h1>
                  <h1 className="text-base font-light underline">Informasi Perusahaan</h1>
                  <h1 className="text-base font-light underline">Hanya di Netflix</h1>
                </div>
              </div>
              <div className="flex mt-10">
                <div className="space-y-2">
                  <h1 className="text-base font-light underline">Pusat Bantuan</h1>
                  <h1 className="text-base font-light underline">Lowongan Kerja</h1>
                  <h1 className="text-base font-light underline">Ketentuan Penggunaan</h1>
                  <h1 className="text-base font-light underline">Hubungin Kami</h1>
                </div>
              </div>
              <div className="flex mt-10">
                <div className="space-y-2">
                  <h1 className="text-base font-light underline">Akun</h1>
                  <h1 className="text-base font-light underline">Tukar Kartu Hadiah</h1>
                  <h1 className="text-base font-light underline">Privasi</h1>
                  <h1 className="text-base font-light underline">Uji Kecepetan</h1>
                </div>
              </div>
              <div className="flex mt-10">
                <div className="space-y-2">
                  <h1 className="text-base font-light underline">Pusat Media</h1>
                  <h1 className="text-base font-light underline">Beli Kartu Hadiah</h1>
                  <h1 className="text-base font-light underline">Preferensi Cookie</h1>
                  <h1 className="text-base font-light underline">Informasi Legal</h1>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <DropdownBahasa />
            </div>
            <div className="mt-10">
              <p className="text-xs text-white/55">Netflix Indonesia</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
