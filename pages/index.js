import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";
import { useState, useRef, useEffect } from "react";
import { Wave } from "@foobar404/wave";
import Schedule from "../components/Schedule";
import Footer from "../components/Footer";
export default function Home({ schedule, contents }) {
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
    <div className="relative h-full w-full overflow-x-hidden  lg:overflow-x-visible">
      <div className="fixed left-0 -bottom-1/4 -z-50 aspect-square w-1/3 ">
        <Image
          src="/sunfl2.jpg"
          layout="responsive"
          width={957}
          height={1000}
        ></Image>
      </div>
      <audio ref={audioRef} src="/audio/sample2.mp3" />
      <Navbar />
      <div className="relative aspect-img w-2s overflow-hidden shadow-bot lg:w-full">
        <div className="absolute top-3/10 left-1/20 z-20 text-titm font-bold italic  text-vin2 lg:top-1/3 lg:text-tit">
          Hope Radio
        </div>
        <div className="absolute top-2/5 left-1/10 z-20 font-cursive text-titm text-red-500 lg:top-2/5 lg:text-tit">
          Atmosfir
        </div>
        <div className="absolute bottom-1/5 left-1/20 z-20 font-serif text-herom text-vin2 lg:top-6/10 lg:text-hero">
          Hope Atmosfir Radio radio Bekasi Hope Church <br /> Dengarkan
          sekarang!! <br />
          Klik tombol play untuk mendengarkan radio
        </div>
        {playing ? (
          <AiOutlinePlayCircle
            onClick={handlePlay}
            className="invisible absolute right-1/5 top-3/5 z-30 h-1/10 w-1/5 cursor-pointer text-red-500 sm:visible"
          />
        ) : (
          <AiOutlinePauseCircle
            onClick={handlePlay}
            className="invisible absolute right-1/5 top-3/5 z-30 h-1/10 w-1/5 cursor-pointer text-red-500 opacity-50 sm:visible"
          />
        )}
        <canvas
          ref={canvasRef}
          className="absolute right-1/5 top-3/5 z-20 h-1/10 w-1/5 "
        ></canvas>
        <Image src={"/radio15.jpg"} layout="fill" priority="true" />
      </div>
      <div className="mx-56">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {contents.map((content) => {
            return (
              <Content
                key={content._id}
                head={content.head}
                con={
                  <>
                    <iframe
                      className="aspect-video basis-1/2 drop-shadow-xl sm:mx-5 sm:mb-10"
                      width=""
                      height=""
                      src={content.utubeUrl}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <p className="basis-1/2 rounded-md bg-white p-5 font-serif text-vin1">
                      {content.text}
                    </p>
                  </>
                }
              />
            );
          })}
        </div>
        {/* <div className="mx-10 flex flex-col sm:flex-row">
        <Content
          head={"Engkau Baik"}
          con={
            <>
              <iframe
                className="aspect-video basis-1/2 drop-shadow-xl sm:mx-5 sm:mb-10"
                width=""
                height=""
                src="https://www.youtube.com/embed/0vZRFq09zeE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p className="basis-1/2 rounded-md bg-white p-5  pb-10 text-vin1">
                <span className="font-bold text-vin2">ENGKAU BAIK </span>
                Sebuah persembahan Pujian baru dari Bekasi Hope Church & Jonah
                Chen, tentang kebaikkan Tuhan, kiranya lagu ini dapat menjadi
                menjadi berkat bagi Gereja-Gereja karena mudah di nyanyikan
                untuk jemaat semua. ENGKAU BAIK (Jonah Chen) Pujian hormat bagi
                Allah tak terukur kebaikkannya setiap hari ku menikmati setiap
                waktu Engkau baik Reff: Engkau baik sangat baik besar setiaMu
                Tuhan di hidupku Engkau baik sangat baik besar setiaMu TUhan di
                hidupku ku nyanyi haleluyah haleluyah, haleluluyah Besar Tuhan
                di hidupku (2x)
              </p>
            </>
          }
        />
        <Content
          head={"Tetap Percaya"}
          con={
            <>
              <iframe
                className="aspect-video basis-1/2 drop-shadow-xl sm:mx-5 sm:mb-10"
                width=""
                height=""
                src="https://www.youtube.com/embed/-7zg8wusTe0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p className="basis-1/2 rounded-md bg-white p-5 pb-10 text-vin1">
                <span className="font-bold text-vin2">
                  TETAP PERCAYA by: Jonah Chen
                </span>{" "}
                Jonah Chen sangat besyukur mendapatkan kesempatan untuk bisa
                menyanyikan lagu <q>TETAP PERCAYA.</q> di studio Unlimited
                Worship serta pujian ini bisa menjadi berkat buat pemirsa di
                rumah yang menyaksikan chanel 1st media chanel 89 Praise, lagu
                ini release tahun 2021 yang lalu dan sudah bisa di dengerin di
                semua platform digital. kiranya Pujian ini menjadi berkat buat
                saudara semua untuk tetap percaya kepada Tuhan yg kuasanya dan
                janjiNya tidak berubah dulu sekarang dan selamanya.
              </p>
              <div id="schedule"></div>
            </>
          }
        />
      </div> */}
        <Content head={"Schedule"} con={<Schedule schedule={schedule} />} />
        <Content
          head={"About"}
          con={
            <p id="about" className=" rounded-md bg-white p-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          }
        />
      </div>
      <Footer />
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const res = await fetch("http://localhost:3000/api/schedule");
  const { schedule } = await res.json();
  const res2 = await fetch("http://localhost:3000/api/content");
  const { contents } = await res2.json();
  return {
    props: { schedule, contents },
  };
};
//absolute top-0 right-0 h-auto w-1/2
