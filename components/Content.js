import React from 'react';

const Content = ({ head, con }) => {
	return (
		<div className=" bg-vin4 lg:px-60 sm:px-10 text-vin2">
			<div className="w-auto border-b-4 border-vin2 text-5xl font-normal font-serif  pt-20 mx-10 lg:mx-0 mb-10">{head}</div>
			<div className="flex flex-col lg:flex-row px-10 text-2xl ">{con}</div>
		</div>
	);
};

export default Content;
