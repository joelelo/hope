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
        wave = new Wave(audioRef.current, canvasRef.current);
        wave.addAnimation(
          new wave.animations.Lines({
            lineColor: "red",
            count: 100,
          })
        );
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
          alt=""
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
        <Image
          alt="bg"
          src={"/radio15.jpg"}
          layout="responsive"
          width={1920}
          height={950}
          priority="true"
        />
      </div>
      <div className="sm:mx-auto">
        <div className="mx-auto w-full max-w-5xl">
          {/* TODO: > 850 single cols */}
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
        </div>
        <Content head={"Schedule"} con={<Schedule schedule={schedule} />} />
        <Content
          head={"About"}
          con={
            <p id="about" className=" rounded-md bg-white p-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#8217;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
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
//local
import connectDB from "../lib/connectDB";
import Schedulemodel from "../models/Schedulemodel";
import Contentmodel from "../models/Contentmodel";

export const getStaticProps = async (ctx) => {
  connectDB();
  const contents = await Contentmodel.find({}).sort({ index: 1 });
  const schedule = await Schedulemodel.find({}).sort({ ind: 1 });
  return {
    props: {
      schedule: JSON.parse(JSON.stringify(schedule)),
      contents: JSON.parse(JSON.stringify(contents)),
    },
  };
};
