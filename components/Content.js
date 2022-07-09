import React from 'react';

const Content = ({ head, con }) => {
	return (
		<div className=" bg-vin4">
			<div className="w-auto border-b-4 border-vin1 text-6xl font-normal font-serif mx-20 pt-20 ">{head}</div>
			<div className="flex px-40 text-2xl">{con}</div>
		</div>
	);
};

export default Content;
