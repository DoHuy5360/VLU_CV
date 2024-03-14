"use client";
import UserAttrReferenceInput from "@/components/cvElements/UserAttrReferenceInput";
import { CvContext } from "@/contexts/cvProvider";
import { useContext } from "react";

function Head() {
	const { state } = useContext(CvContext);
	return (
		<div className='section flex gap-2 justify-between'>
			<div className='flex flex-col'>
				<UserAttrReferenceInput
					className='text-2xl font-bold'
					type='update-user-name'
					value={state.attrs.head.name}
				/>
				<UserAttrReferenceInput
					type='update-user-position'
					value={state.attrs.head.position}
				/>
			</div>
			<div className='flex flex-col gap-2 p-2 border-black border-l-2 pl-2 text-xs'>
				<div className='flex gap-2 items-center'>
					<i className='fa-solid fa-phone'></i>
					<div className='flex gap-1'>
						<div>Phone:</div>
						<UserAttrReferenceInput
							type='update-user-phone'
							value={state.attrs.head.phone}
						/>
					</div>
				</div>
				<div className='flex gap-2 items-center'>
					<i className='fa-solid fa-envelope'></i>
					<div className='flex gap-1'>
						<div>Email:</div>
						<UserAttrReferenceInput
							type='update-user-email'
							value={state.attrs.head.email}
						/>
					</div>
				</div>
				<div className='flex gap-2 items-center'>
					<i className='fa-solid fa-location-dot'></i>
					<div className='flex gap-1'>
						<div>Address:</div>
						<UserAttrReferenceInput
							type='update-user-address'
							value={state.attrs.head.address}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Head;
