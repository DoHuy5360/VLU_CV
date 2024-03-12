import {
	FaCalendar,
	FaCompass,
	FaHome,
	FaInfoCircle,
	FaPhoneAlt,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export type HeadProps = {
	name: string;
	avatar: string;
	position: string;
	phone: string;
	email: string;
	address: string;
	website: string;
	birth: string;
	gender: string;
};

function Info({
	phone,
	email,
	address,
	website,
	birth,
	gender,
}: HeadProps) {
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
					<div>{phone}</div>
				</div>
				<div className='flex flex-col gap-1'>
					<div className='font-bold'>Email</div>
					<div>{email}</div>
				</div>
				<div className='flex flex-col gap-1'>
					<div className='font-bold'>Address</div>
					<div>{address}</div>
				</div>
				<div className='flex flex-col gap-1'>
					<div className='font-bold'>Website</div>
					<div>{website}</div>
				</div>
				<div className='flex flex-col gap-1'>
					<div className='font-bold'>Birth</div>
					<div>{birth}</div>
				</div>
				<div className='flex flex-col gap-1'>
					<div className='font-bold'>Gender</div>
					<div>{gender}</div>
				</div>
			</div>
		</div>
	);
}

export default Info;
