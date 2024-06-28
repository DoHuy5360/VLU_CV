import { Buttons } from "@/components/button/buttons";
import News from "@/models/news";
import { connectToDatabase } from "@/services/mongoosedb";

export default async function Page() {
	await connectToDatabase();
	const listOfTheNews = await News.find().sort({ createdAt: -1 });
	return (
		<div>
			<div className='flex justify-end p-2'>
				<div>
					<Buttons.Create.Icon />
				</div>
			</div>
			<div>
				<div>Tính năng chưa khả dụng</div>
				{listOfTheNews.map((e) => {
					return (
						<div key={80}>
							<div>{e.title}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
