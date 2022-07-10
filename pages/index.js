import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Content from '../components/Content';
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from 'react-icons/ai';
import { useState, useRef, useEffect } from 'react';
import { Wave } from '@foobar404/wave';
import Schedule from '../components/Schedule';
export default function Home() {
	const audioRef = useRef();
	const canvasRef = useRef();
	const [playing, setPlaying] = useState(true);
	let wave;
	useEffect(() => {
		if (wave === undefined) {
			try {
				console.log(typeof(wave))
				wave = new Wave(audioRef.current, canvasRef.current);
				wave.addAnimation(
					new wave.animations.Lines({
						lineColor: 'red',
						count: 100,
					})
				);
				console.log(typeof(wave))
			} catch (error) {
				console.log('Refresh page!!');
			}
		}
	}, []);
	const handlePlay = () => {
		const prev = playing;
		setPlaying(!prev);
		prev ? audioRef.current.play() : audioRef.current.pause();
	};
	return (
		<div className="relative h-screen w-screen bg-vin4 overflow-x-hidden lg:overflow-x-visible">
			<audio ref={audioRef} src="/audio/sample2.mp3" />
			<Navbar />
			<div className="relative overflow-hidden lg:w-full w-2s aspect-img">
				<div className="absolute text-titm lg:text-tit z-20 top-1/4 lg:top-1/3 left-1/20  font-bold text-vin2 italic">Hope Radio</div>
				<div className="absolute text-titm lg:text-tit z-20 top-1/3 lg:top-2/5 left-1/10 text-red-500 font-cursive">Atmosfir</div>
				{playing ? (
					<AiOutlinePlayCircle onClick={handlePlay} className="absolute z-10 text-vin2 w-1/3 h-1/3 bottom-1/5 left-1/10 lg:w-1/5 lg:h-1/5 lg:left-1/5" />
				) : (
					<AiOutlinePauseCircle onClick={handlePlay} className="absolute z-10 text-vin2 w-1/3 h-1/3 bottom-1/5 left-1/10 lg:w-1/5 lg:h-1/5 lg:left-1/5" />
				)}
				<canvas ref={canvasRef} className="absolute z-20 right-1/5 top-3/5 w-1/5 h-1/10 "></canvas>
				<Image src={'/radio13.jpg'} layout="fill" priority="true" />
			</div>
			<div className="w-1/2">{/* <Image src={'/radio4clean.png'} height={521} width={864} layout="responsive" /> */}</div>
			{/* <Player /> */}
			<Content
				head={'Engkau Baik'}
				con={
					<>
						<p className="text-vin1 basis-1/2 pb-10">
							<span className="text-vin2 font-bold">ENGKAU BAIK </span>
							Sebuah persembahan Pujian baru dari Bekasi Hope Church & Jonah Chen, tentang kebaikkan Tuhan, kiranya lagu ini dapat
							menjadi menjadi berkat bagi Gereja-Gereja karena mudah di nyanyikan untuk jemaat semua. ENGKAU BAIK (Jonah Chen) Pujian
							hormat bagi Allah tak terukur kebaikkannya setiap hari ku menikmati setiap waktu Engkau baik Reff: Engkau baik sangat baik
							besar setiaMu Tuhan di hidupku Engkau baik sangat baik besar setiaMu TUhan di hidupku ku nyanyi haleluyah haleluyah,
							haleluluyah Besar Tuhan di hidupku (2x)
						</p>
						<iframe
							className="basis-1/3 aspect-video m-auto drop-shadow-xl"
							width=""
							height=""
							src="https://www.youtube.com/embed/0vZRFq09zeE"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</>
				}
			/>
			<Content
				head={'Tetap Percaya'}
				con={
					<>
						<iframe
							className="basis-1/3 aspect-video m-auto drop-shadow-xl"
							width=""
							height=""
							src="https://www.youtube.com/embed/-7zg8wusTe0"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
						<p className="text-vin1 basis-1/2 pb-10">
							<span className="text-vin2 font-bold">TETAP PERCAYA by: Jonah Chen</span> Jonah Chen sangat besyukur mendapatkan
							kesempatan untuk bisa menyanyikan lagu <q>TETAP PERCAYA.</q> di studio Unlimited Worship serta pujian ini bisa menjadi
							berkat buat pemirsa di rumah yang menyaksikan chanel 1st media chanel 89 Praise, lagu ini release tahun 2021 yang lalu dan
							sudah bisa di dengerin di semua platform digital. kiranya Pujian ini menjadi berkat buat saudara semua untuk tetap percaya
							kepada Tuhan yg kuasanya dan janjiNya tidak berubah dulu sekarang dan selamanya.
						</p>
					</>
				}
			/>
			<Content head={'Schedule'} con={<Schedule />} />
		</div>
	);
}
//absolute top-0 right-0 h-auto w-1/2
