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
					? 'fixed text-white w-full h-fit pt-1 pb-2 pl-20 bg-vin1 z-30 justify-end space-x-4'
					: 'fixed text-white w-full h-fit pt-1 pb-2 pl-20 z-30 justify-end space-x-4'
			}
		>
			<a className="font-extralight text-4xl p-2 w-fit h-full hover:bg-vin2" href="#home">
				Home
			</a>
			<a className="font-extralight text-4xl p-2 w-fit h-full hover:bg-vin2" href="#schedule">
				Schedule
			</a>
			<a className="font-extralight text-4xl p-2 w-fit h-full hover:bg-vin2" href="#about">
				About us
			</a>
		</div>
	);
};

export default Navbar;
