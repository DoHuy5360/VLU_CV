import { CvContext } from "@/contexts/cvProvider";
import { useContext } from "react";
import {
	FaCalendar,
	FaCompass,
	FaHome,
	FaInfoCircle,
	FaPhoneAlt,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Info() {
	const { state } = useContext(CvContext);

	return (
		<div className='relative'>
			<div className='translate-x-[-50%] gap-7 text-white absolute flex flex-col items-center bg-blue-400 px-2 py-4 rounded-full'>
				<FaPhoneAlt />
				<IoMdMail />
				<FaCompass />
				<FaHome />
				<FaCalendar />
				<FaInfoCircle />
			</div>
			<div className='flex flex-col p-3 pl-8 gap-2 text-xs'>
				<div className='flex flex-col gap-1'>
					<div className='font-bold'>Phone</div>
					<div>{state.attrs.head.phone}</div>
				</div>
				<div className='flex flex-col gap-1'>
					<div className='font-bold'>Email</div>
					<div>{state.attrs.head.email}</div>
				</div>
				<div className='flex flex-col gap-1'>
					<div className='font-bold'>Address</div>
					<div>{state.attrs.head.address}</div>
				</div>
				<div className='flex flex-col gap-1'>
					<div className='font-bold'>Website</div>
					<div>{state.attrs.head.website}</div>
				</div>
				<div className='flex flex-col gap-1'>
					<div className='font-bold'>Birth</div>
					<div>{state.attrs.head.birth}</div>
				</div>
				<div className='flex flex-col gap-1'>
					<div className='font-bold'>Gender</div>
					<div>{state.attrs.head.gender}</div>
				</div>
			</div>
		</div>
	);
}

export default Info;
