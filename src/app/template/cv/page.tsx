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
		<div className='flex-grow overflow-y-scroll grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 grid-rows-3 gap-4 p-4'>
			{data.map((t: Template) => {
				return (
					<div key={t._id} className='h-fit flex flex-col border-[1px] border-slate-200'>
						<div className='bg-white p-2 grid place-items-center'>
							<Image src={t.thumbnail} width={300} height={350} alt='thumbnail' draggable='false' loading='lazy' />
						</div>
						<Link className='text-center py-2 bg-slate-200 hover:bg-slate-300' href={`/template/cv/${t.name}`}>
							{t.name}
						</Link>
					</div>
				);
			})}
		</div>
	);
}
