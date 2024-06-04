import { Head } from "@/types/userData";
import Image from "next/image";

export default function F(data: Head) {
	return (
		<div className='section flex gap-2 justify-between'>
			<div className='flex gap-4'>
				<div>
					<Image src={data.avatar || "image/user.jpg"} className='rounded-full overflow-hidden border-[1px]' draggable={false} width={150} height={150} alt='avatar' />
				</div>
				<div className='flex flex-col'>
					<div className='text-2xl font-bold'>{data.name}</div>
					{data.position}
				</div>
			</div>
			<div className='flex flex-col justify-start gap-2 p-2 pl-2 text-xs'>
				{data.phone !== "" && <div className='text-right'>{data.phone}</div>}
				{data.email !== "" && <div className='text-right'>{data.email}</div>}
				{data.address.length > 0 && <div className='text-right'>{data.address}</div>}
			</div>
		</div>
	);
}
