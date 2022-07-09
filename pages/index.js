import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Content from '../components/Content';
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from 'react-icons/ai';
import { useState } from 'react';
export default function Home() {
	const [playing, setPlaying] = useState(true);

	const handlePlay = () => {
		const prev = playing;
		setPlaying(!prev);
	};
	return (
		<div className="relative h-screen w-screen bg-vin4">
			<Navbar />
			<div className="w-screen h-fit -z-50 overflow-hidden">
				<div className="absolute text-7xl z-20 top-1/3 left-11 ml-20 font-bold text-vin4 italic">Hope Radio</div>
				<div className="absolute text-7xl z-20 top-1/3 mt-20 ml-20 left-60 text-vin4 font-cursive">Atmosfir</div>
				{playing ? (
					<AiOutlinePlayCircle onClick={handlePlay} className="absolute z-20 text-vin4 w-40 h-40 top-1/3 left-60 mt-60 ml-40" />
				) : (
					<AiOutlinePauseCircle onClick={handlePlay} className="absolute z-20 text-vin4 w-40 h-40 top-1/3 left-60 mt-60 ml-40" />
				)}

				<Image src={'/radio11.jpg'} width={1920} height={850} layout="responsive" priority="true" />
			</div>
			<div className="w-1/2">{/* <Image src={'/radio4clean.png'} height={521} width={864} layout="responsive" /> */}</div>
			{/* <Player /> */}
			<Content
				con={
					<>
						<p className="text-vin1 basis-1/2 py-10">
							<span className="text-vin2 font-bold">ENGKAU BAIK </span>
							Sebuah persembahan Pujian baru dari Bekasi Hope Church & Jonah Chen, tentang kebaikkan Tuhan, kiranya lagu ini dapat
							menjadi menjadi berkat bagi Gereja-Gereja karena mudah di nyanyikan untuk jemaat semua. ENGKAU BAIK (Jonah Chen) Pujian
							hormat bagi Allah tak terukur kebaikkannya setiap hari ku menikmati setiap waktu Engkau baik Reff: Engkau baik sangat baik
							besar setiaMu Tuhan di hidupku Engkau baik sangat baik besar setiaMu TUhan di hidupku ku nyanyi haleluyah haleluyah,
							haleluluyah Besar Tuhan di hidupku (2x)
						</p>
						<iframe
							className="basis-1/3 aspect-video m-auto"
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
			></Content>
		</div>
	);
}
//absolute top-0 right-0 h-auto w-1/2
