import { Head } from "@/types/userData";
import { FaCalendar, FaCompass, FaHome, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function F(data: Head) {
	return (
		<div className='section flex flex-col justify-self-start items-start gap-2'>
			<div className='flex flex-col gap-2 text-xs'>
				<div className='flex gap-2'>
					<FaPhoneAlt />
					<div>{data.phone}</div>
				</div>
				<div className='flex gap-2'>
					<IoMdMail />
					<div>{data.email}</div>
				</div>
				{data.address.length > 0 && (
					<div className='flex gap-2'>
						{data.address.length > 0 && <FaCompass />}
						<div>{data.address}</div>
					</div>
				)}
				{data.website.length > 0 && (
					<div className='flex gap-2'>
						{data.website.length > 0 && <FaHome />}
						<div>{data.website}</div>
					</div>
				)}
				{data.birth.length > 0 && (
					<div className='flex gap-2'>
						{data.birth.length > 0 && <FaCalendar />}
						<div>{data.birth}</div>
					</div>
				)}
				{data.gender.length > 0 && (
					<div className='flex gap-2'>
						{data.gender.length > 0 && <FaInfoCircle />}
						<div>{data.gender}</div>
					</div>
				)}
			</div>
		</div>
	);
}
