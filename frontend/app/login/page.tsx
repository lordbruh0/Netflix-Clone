"use client"

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Link from "next/link";
import logo from "@/public/image/logo.png";
import DropdownBahasa from "@/components/landing/DropDownBahasa";

const LoginPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [useLoginCode, setUseLoginCode] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const toggleLoginMode = () => {
    setUseLoginCode(!useLoginCode);
    // Reset errors when switching modes
    setPasswordError('');
    setPasswordTouched(false);
    setPassword('');
  };

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,13}$/;

    if (!value.trim()) {
      return "Masukkan email atau nomor telepon.";
    } else if (!emailRegex.test(value) && !phoneRegex.test(value)) {
      return "Masukkan email atau nomor telepon yang valid.";
    }
    return "";
  };

  const validatePassword = (value: string) => {
    if (!useLoginCode) {
      if (!value.trim()) {
        return "Kata sandi diperlukan.";
      } else if (value.length < 6) {
        return "Kata sandi minimal 6 karakter hingga 60 karakter.";
      }
    }
    return "";
  };

  const handleEmailChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    setEmail(value);
    if (emailTouched) {
      setEmailError(validateEmail(value));
    }
  };

  const handlePasswordChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    setPassword(value);
    if (passwordTouched) {
      setPasswordError(validatePassword(value));
    }
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
    setEmailError(validateEmail(email));
  };

  const handlePasswordBlur = () => {
    setPasswordTouched(true);
    setPasswordError(validatePassword(password));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Validate both fields
    const emailValidationResult = validateEmail(email);
    const passwordValidationResult = useLoginCode ? "" : validatePassword(password);

    setEmailError(emailValidationResult);
    setPasswordError(passwordValidationResult);
    setEmailTouched(true);
    setPasswordTouched(!useLoginCode);

    if (!emailValidationResult && !passwordValidationResult) {
      // Form is valid, proceed with submission logic
      if (useLoginCode) {
        console.log("Sending login code to:", email);
        // Add your API call for code login here
      } else {
        console.log("Form submitted:", { email, password, isChecked });
        // Add your API call for password login here
      }
    }
  };

  return (
    <div>
      <div className="w-full h-screen relative bg-zinc-950">
        <section className="relative w-auto h-screen justify-center">
          <header className="bg-opacity-0 pt-4 sticky top-0 z-50">
            <nav className="px-10 flex justify-between items-center bg-opacity-0">
              <Link href="/" className="text-2xl font-bold">
                <Image
                  src={logo}
                  alt="logo"
                  width={170}
                  height={170}
                />
              </Link>
            </nav>
          </header>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/image/video-background.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-9 flex flex-col justify-center items-center">
            <div className="bg-zinc-900/75 p-14 rounded-xl w-[500px]">
              <div className="mb-6">
                <h1 className="text-3xl font-bold">Masuk</h1>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col space-y-5 py-[16px]">
                <div className="flex flex-col space-y-4">
                  <div>
                    <input
                      type="text"
                      value={email}
                      onChange={handleEmailChange}
                      onBlur={handleEmailBlur}
                      className={`bg-zinc-800/25 hover:bg-zinc-800 border ${emailError && emailTouched ? 'border-red-500' : 'border-gray-400/50'} placeholder:text-white px-5 py-[15px] w-full rounded`}
                      placeholder="Email atau nomor ponsel"
                    />
                    {emailError && emailTouched && (
                      <div className="flex items-center mt-2 text-red-500 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <circle cx="12" cy="12" r="10" strokeWidth="2" />
                          <path strokeLinecap="round" strokeWidth="2" d="M10 10l4 4m0-4l-4 4" />
                        </svg>
                        <span>{emailError}</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Conditional rendering based on login mode */}
                  {!useLoginCode ? (
                    <div>
                      <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        onBlur={handlePasswordBlur}
                        className={`bg-zinc-800/25 hover:bg-zinc-800 border ${passwordError && passwordTouched ? 'border-red-500' : 'border-gray-400/50'} placeholder:text-white px-5 py-[15px] w-full rounded`}
                        placeholder="Kata sandi"
                      />
                      {passwordError && passwordTouched && (
                        <div className="flex items-center mt-2 text-red-500 text-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <circle cx="12" cy="12" r="10" strokeWidth="2" />
                            <path strokeLinecap="round" strokeWidth="2" d="M10 10l4 4m0-4l-4 4" />
                          </svg>
                          <span>{passwordError}</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-sm text-white/70 text-center py-3">
                      <p>Biaya SMS dan kuota mungkin berlaku.</p>
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    className="p-2 bg-red-600 text-white rounded font-medium hover:bg-red-700"
                  >
                    {useLoginCode ? "Kirim Kode Masuk" : "Masuk"}
                  </button>
                </div>
                <div className="text-center">
                  <h1 className="text-white/65">ATAU</h1>
                </div>
                <div className="w-full">
                  <button
                    type="button"
                    onClick={toggleLoginMode}
                    className="p-2 bg-white/20 text-white rounded font-medium hover:bg-white/10 w-full"
                  >
                    {useLoginCode ? "Gunakan Kata Sandi" : "Gunakan Kode Masuk"}
                  </button>
                </div>
                <div className="text-center">
                  <Link href={useLoginCode ? "/loginHelp" : "/loginHelp"}>
                    <h1 className="underline cursor-pointer hover:text-white/70 font-medium">
                      {useLoginCode ? "Lupa email atau nomor telepon?" : "Lupa sandi?"}
                    </h1>
                  </Link>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberPassword"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="h-5 w-5 bg-transparent rounded border-gray-300 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="rememberPassword"
                    className="ml-2 block cursor-pointer"
                  >
                    Ingat saya
                  </label>
                </div>
                <div className="flex">
                  <p className="text-white/60">Baru di Netflix?</p>
                  <p className="font-bold cursor-pointer hover:underline">Daftar Sekarang.</p>
                </div>
                <div className="flex flex-col space-y-1">
                  <p className="text-xs text-white/40 font-medium">Halaman ini dilindungi oleh reCAPTCHA Google untuk memastikan kamu bukan bot.</p>
                  <p className="text-blue-500 cursor-pointer underline text-sm">pelajarin selengkapnya</p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <div className="w-full py-10 bg-zinc-900">
        <div className="w-auto mx-48 bg-zinc-900">
          <div className="w-full flex gap-1">
            <h1 className="text-base font-light">Ada pertanyaan? Hubungin</h1>
            <h1 className="text-base font-light underline">007-803-321-8275</h1>
          </div>
          <div className="flex w-full justify-between">
            <div className="flex mt-10">
              <div className="space-y-2">
                <h1 className="text-base font-light underline">Tanya Jawab</h1>
                <h1 className="text-base font-light underline">Prefensi Cookie</h1>
              </div>
            </div>
            <div className="flex mt-10">
              <div className="space-y-2">
                <h1 className="text-base font-light underline">Pusat Bantuan</h1>
                <h1 className="text-base font-light underline">Informasi Perusahaan</h1>
              </div>
            </div>
            <div className="flex mt-10">
              <div className="space-y-2">
                <h1 className="text-base font-light underline">Ketentuan Pengguna</h1>
              </div>
            </div>
            <div className="flex mt-10">
              <div className="space-y-2">
                <h1 className="text-base font-light underline">Privasi</h1>
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
    </div>
  )
}

export default LoginPage;