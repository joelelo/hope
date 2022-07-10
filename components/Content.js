import React from 'react';

const Content = ({ head, con }) => {
	return (
		<div className=" bg-vin4 px-60 text-vin2">
			<div className="w-auto border-b-4 border-vin2 text-5xl font-normal font-serif  pt-20 ">{head}</div>
			<div className="flex px-10 text-2xl">{con}</div>
		</div>
	);
};

export default Content;
