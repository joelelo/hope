import React from 'react';

const Player = () => {
	return (
		<div className=" flex h-1/3 bg-vin1 align-middle border-y-8 border-vin3">
			<div className="flex rounded-full h-1/2 aspect-square bg-vin4 my-auto ml-60 border-vin2 border-8 shadow-2xl">
				<div className="rounded-full h-3/4 aspect-square bg-vin4 border-vin2 border-8 m-auto"></div>
			</div>
			<div className="flex rounded-t-2xl bg-vin4 h-1/5 w-1/3 aspect-square mt-auto ml-auto hover:bg-vin3 text-center">
				<p className="m-auto text-vin1 text-2xl font-bold">Klik Disini</p>
			</div>
			<div className="flex rounded-full h-1/2 aspect-square bg-vin4 my-auto ml-auto mr-60 border-vin2 border-8 shadow-2xl">
				<div className="rounded-full h-3/4 aspect-square bg-vin4 border-vin2 border-8 m-auto"></div>
			</div>
		</div>
	);
};

export default Player;
