import React, { useEffect, useState } from 'react';

const Navbar = () => {
	const [scroll, setScroll] = useState(0);
	const handleScroll = () => {
		const pos = window.scrollY;
		setScroll(pos);
	};
	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
	return (
		<div
			className={
				scroll > 10
					? 'fixed flex text-white w-full h-fit pt-1 pb-2 lg:pl-20 sm:p-auto bg-vin1 z-30 justify-start space-x-4'
					: 'fixed flex text-white w-full h-fit pt-1 pb-2 lg:pl-20 sm:p-auto bg-vin1 lg:bg-transparent z-50 justify-start space-x-4'
			}
		>
			<a className="font-extralight lg:text-4xl sm:text-2xl p-2 w-fit h-full hover:bg-vin2 text-2xl" href="#home">
				Home
			</a>
			<a className="font-extralight lg:text-4xl sm:text-2xl p-2 w-fit h-full hover:bg-vin2 text-2xl" href="#schedule">
				Schedule
			</a>
			<a className="font-extralight lg:text-4xl sm:text-2xl p-2 w-fit h-full hover:bg-vin2 text-2xl" href="#about">
				About us
			</a>
		</div>
	);
};

export default Navbar;
