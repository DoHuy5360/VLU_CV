import { Buttons } from "../button/buttons";

export default function NoData({ buttonName, redirectTo }: { buttonName?: string; redirectTo?: string }) {
	return (
		<div className='grid place-items-center h-full'>
			<div className='flex flex-col gap-2 items-center'>
				<div>Không tìm thấy dữ liệu</div>
				{redirectTo && <Buttons.Solid.Cyan.Link href={redirectTo} text={buttonName} />}
			</div>
		</div>
	);
}
