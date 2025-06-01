"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { arrayTopMovies, TopMovie } from "@/data/filmTop";
import "swiper/css";
import "swiper/css/pagination";
import { Star, PlusIcon, ChevronLeft, ChevronRight, X, Circle } from "lucide-react";
import InputButton from "../inputButton";

// Komponen Modal untuk Preview Film
const MoviePreviewModal = ({ movie, onClose }: { movie: TopMovie | null; onClose: () => void }) => {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-zinc-900 rounded-xl w-[600px] h-auto shadow-lg relative border-white/20 border">
        <button className="absolute top-3 right-3 text-white hover:text-black" onClick={onClose}>
          <X size={30} />
        </button>
        <img src={movie.image} alt={movie.title} className="w-full h-96 object-cover rounded-xl" />
        <div className="px-6 pb-6">
            <h2 className="text-5xl font-bold mt-4 pb-5 truncate">{movie.title}</h2>
          <div className="flex gap-3 items-center pb-5">
            <p className="text-sm font-semibold">{movie.year}</p>
            <Circle size={5} className="text-white" />
            <p className="text-sm font-semibold">{movie.umur}+</p>
            <Circle size={5} className="text-white" />
            <p className="text-sm font-semibold">{movie.category}</p>
            <Circle size={5} className="text-white" />
            <p className="text-sm font-semibold">{movie.genre}</p>
            <Circle size={5} className="text-white" />
            <p className="text-sm font-semibold">{movie.DetailGenre}</p>
          </div>
          <p className="text-sm font-semibold pb-5">{movie.subTitle}</p>
          <InputButton />
        </div>
      </div>
    </div>
  );
};

const TrendingSlider: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedMovie, setSelectedMovie] = useState<TopMovie | null>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="py-8 relative">
      <div className="px-4 md:px-6 lg:px-8">
        {/* Tombol Navigasi */}
        <button
          ref={prevRef}
          className="absolute top-1/2 -left-2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md  text-white rounded-md py-16 transition-all hover:bg-white/20"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          ref={nextRef}
          className="absolute top-1/2 -right-2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md text-white rounded-md py-16 transition-all hover:bg-white/20"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={5}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 16 },
            768: { slidesPerView: 3, spaceBetween: 16 },
            1024: { slidesPerView: 4, spaceBetween: 16 },
            1280: { slidesPerView: 5, spaceBetween: 16 },
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="movie-slider"
          onInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {arrayTopMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div
                className="relative group rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                onMouseEnter={() => setHoveredId(movie.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-[460px] object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Badge Rating */}
                <div className="absolute top-5 left-5">
                  <div className="text-white rounded-full py-2 text-sm font-bold flex w-16 bg-black justify-center items-center gap-[6px]">
                    <Star size={16} className="text-yellow-500" />
                    {movie.rating.toFixed(1)}
                  </div>
                </div>

                {/* Konten */}
                <div
                  className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${hoveredId === movie.id
                    ? 'bg-black/50 backdrop-blur-sm h-auto pb-6'
                    : 'bg-gradient-to-t from-black/80 to-black/15 pb-4'
                    }`}
                >
                  <h3 className="text-white font-bold text-2xl truncate">{movie.title}</h3>
                  <h1 className="font-thin text-xl text-gray-300">{movie.year}</h1>

                  {/* Tombol */}
                  <div
                    className={`flex justify-between items-center w-full mt-4 mb-1 transition-all duration-300 ${hoveredId === movie.id ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'
                      }`}
                  >
                    <button
                      className="bg-[#F45846] text-white font-medium rounded-full border border-[#F45846] py-[10px] w-48 text-lg transition-colors hover:bg-transparent hover:text-[#F45846] hover:border-white hover:font-bold"
                      onClick={() => setSelectedMovie(movie)} // Saat diklik, set preview movie
                    >
                      Watch Now
                    </button>
                    <button className="bg-slate-100/15 border border-white text-white rounded-full px-4 py-4 text-sm hover:bg-white/20 transition-colors">
                      <PlusIcon size={16} className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Tampilkan Modal Preview jika ada film yang dipilih */}
      <MoviePreviewModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </section>
  );
};

export default TrendingSlider;
