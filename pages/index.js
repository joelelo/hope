import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";
import { useState, useRef, useEffect } from "react";
import { Wave } from "@foobar404/wave";
import Schedule from "../components/Schedule";
import Footer from "../components/Footer";
export default function Home() {
  const audioRef = useRef();
  const canvasRef = useRef();
  const [playing, setPlaying] = useState(true);
  let wave;
  useEffect(() => {
    if (wave === undefined) {
      try {
        console.log(typeof wave);
        wave = new Wave(audioRef.current, canvasRef.current);
        wave.addAnimation(
          new wave.animations.Lines({
            lineColor: "red",
            count: 100,
          })
        );
        console.log(typeof wave);
      } catch (error) {
        console.log("Refresh page!!");
      }
    }
  }, []);
  const handlePlay = () => {
    const prev = playing;
    setPlaying(!prev);
    prev ? audioRef.current.play() : audioRef.current.pause();
  };
  return (
    <div className="relative h-screen w-screen overflow-x-hidden  lg:overflow-x-visible">
      <audio ref={audioRef} src="/audio/sample2.mp3" />
      <Navbar />
      <div className="relative aspect-img w-2s overflow-hidden lg:w-full">
        <div className="absolute top-1/4 left-1/20 z-20 text-titm font-bold italic  text-vin2 lg:top-1/3 lg:text-tit">
          Hope Radio
        </div>
        <div className="absolute top-1/3 left-1/10 z-20 font-cursive text-titm text-red-500 lg:top-2/5 lg:text-tit">
          Atmosfir
        </div>
        {playing ? (
          <AiOutlinePlayCircle
            onClick={handlePlay}
            className="absolute bottom-1/5 left-1/10 z-10 h-1/3 w-1/3 text-vin2 lg:left-1/5 lg:h-1/5 lg:w-1/5"
          />
        ) : (
          <AiOutlinePauseCircle
            onClick={handlePlay}
            className="absolute bottom-1/5 left-1/10 z-10 h-1/3 w-1/3 text-vin2 lg:left-1/5 lg:h-1/5 lg:w-1/5"
          />
        )}
        <canvas
          ref={canvasRef}
          className="absolute right-1/5 top-3/5 z-20 h-1/10 w-1/5 "
        ></canvas>
        <Image src={"/radio14.jpg"} layout="fill" priority="true" />
      </div>
      <Content
        head={"Engkau Baik"}
        con={
          <>
            <p className="basis-1/2 pb-10 text-vin1">
              <span className="font-bold text-vin2">ENGKAU BAIK </span>
              Sebuah persembahan Pujian baru dari Bekasi Hope Church & Jonah
              Chen, tentang kebaikkan Tuhan, kiranya lagu ini dapat menjadi
              menjadi berkat bagi Gereja-Gereja karena mudah di nyanyikan untuk
              jemaat semua. ENGKAU BAIK (Jonah Chen) Pujian hormat bagi Allah
              tak terukur kebaikkannya setiap hari ku menikmati setiap waktu
              Engkau baik Reff: Engkau baik sangat baik besar setiaMu Tuhan di
              hidupku Engkau baik sangat baik besar setiaMu TUhan di hidupku ku
              nyanyi haleluyah haleluyah, haleluluyah Besar Tuhan di hidupku
              (2x)
            </p>
            {/* <iframe
              className="m-auto aspect-video basis-1/3 drop-shadow-xl"
              width=""
              height=""
              src="https://www.youtube.com/embed/0vZRFq09zeE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe> */}
          </>
        }
      />
      <Content
        head={"Tetap Percaya"}
        con={
          <>
            {/* <iframe
              className="m-auto aspect-video basis-1/3 drop-shadow-xl"
              width=""
              height=""
              src="https://www.youtube.com/embed/-7zg8wusTe0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe> */}
            <p className="basis-1/2 pb-10 text-vin1">
              <span className="font-bold text-vin2">
                TETAP PERCAYA by: Jonah Chen
              </span>{" "}
              Jonah Chen sangat besyukur mendapatkan kesempatan untuk bisa
              menyanyikan lagu <q>TETAP PERCAYA.</q> di studio Unlimited Worship
              serta pujian ini bisa menjadi berkat buat pemirsa di rumah yang
              menyaksikan chanel 1st media chanel 89 Praise, lagu ini release
              tahun 2021 yang lalu dan sudah bisa di dengerin di semua platform
              digital. kiranya Pujian ini menjadi berkat buat saudara semua
              untuk tetap percaya kepada Tuhan yg kuasanya dan janjiNya tidak
              berubah dulu sekarang dan selamanya.
            </p>
          </>
        }
      />
      <Content head={"Schedule"} con={<Schedule />} />
      <Footer />
    </div>
  );
}
//absolute top-0 right-0 h-auto w-1/2
