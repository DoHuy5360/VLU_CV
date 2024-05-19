import { Buttons } from "@/components/button/buttons";
import { connectToDatabase } from "@/libs/mongoosedb";
import CV from "@/models/cv";
import Image from "next/image";
import Link from "next/link";

type Template = {
	_id: string;
	name: string;
	thumbnail: string;
};

export default async function F() {
	await connectToDatabase();
	const data = await CV.find({});
	return (
		<div className='flex-grow overflow-y-scroll grid grid-rows-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4'>
			{data.map((e: Template) => {
				return (
					<div key={e._id} className='flex flex-col border-[1px] border-slate-200 h-full'>
						<div className='w-full h-full overflow-hidden bg-white p-2 grid place-items-center flex-grow'>
							<Image src={e.thumbnail} width={250} height={0} className='border-[1px]' alt='thumbnail' draggable='false' loading='lazy' />
						</div>
						<div className='flex justify-between items-center p-2 border-t-[1px]'>
							<div className='text-sm'>{e.name}</div>
							<Buttons.Edit.Link.Icon href={`/template/cv/${e.name}`} />
						</div>
					</div>
				);
			})}
		</div>
	);
}
