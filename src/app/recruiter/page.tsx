"use client";
import Login from "./_component/login";
import Register from "./_component/register";

export default () => {
	return (
		<div className='grid grid-cols-2 h-dvh'>
			<Login />
			<Register />
		</div>
	);
};
