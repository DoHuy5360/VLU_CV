"use client";
import Login from "./_component/login";
import Register from "./_component/register";

export default () => {
	return (
		<div className='grid xl:grid-cols-2 md:grid-cols-1 h-dvh'>
			<Login />
			<Register />
		</div>
	);
};
