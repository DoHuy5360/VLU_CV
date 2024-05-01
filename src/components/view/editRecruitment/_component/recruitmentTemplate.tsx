import { RecruitmentDataForm } from "../editRecruitment";

export default function RecruitmentTemplate({ data }: { data: RecruitmentDataForm }) {
	return (
		<div className='flex-grow h-full overflow-y-scroll'>
			<div className='grid grid-cols-[150px_1fr] gap-2 border-b-[1px] p-2'>
				<div className='justify-self-end text-right font-bold'>Tiêu đề:</div>
				<div className='whitespace-pre-line'>{data.title}</div>
			</div>
			<div className='grid grid-cols-[150px_1fr] gap-2 border-b-[1px] p-2'>
				<div className='justify-self-end text-right font-bold'>Vị trí tuyển:</div>
				<div className='whitespace-pre-line'>{data.position}</div>
			</div>
			<div className='grid grid-cols-[150px_1fr] gap-2 border-b-[1px] p-2'>
				<div className='justify-self-end text-right font-bold'>Mô tả công việc:</div>
				<div className='whitespace-pre-line'>{data.description}</div>
			</div>
			<div className='grid grid-cols-[150px_1fr] gap-2 border-b-[1px] p-2'>
				<div className='justify-self-end text-right font-bold'>Trách nhiệm:</div>
				<div className='whitespace-pre-line'>{data.responsibility}</div>
			</div>
			<div className='grid grid-cols-[150px_1fr] gap-2 border-b-[1px] p-2'>
				<div className='justify-self-end text-right font-bold'>Yêu cầu:</div>
				<div className='whitespace-pre-line'>{data.requirement}</div>
			</div>
			<div className='grid grid-cols-[150px_1fr] gap-2 border-b-[1px] p-2'>
				<div className='justify-self-end text-right font-bold'>Phúc lợi:</div>
				<div className='whitespace-pre-line'>{data.benefit}</div>
			</div>
			<div className='grid grid-cols-[150px_1fr] gap-2 border-b-[1px] p-2'>
				<div className='justify-self-end text-right font-bold'>Địa chỉ:</div>
				<div className='whitespace-pre-line'>{data.address}</div>
			</div>
			<div className='grid grid-cols-[150px_1fr] gap-2 border-b-[1px] p-2'>
				<div className='justify-self-end text-right font-bold'>Kinh nghiệm:</div>
				<div className='whitespace-pre-line'>{data.experience.title}</div>
			</div>
			<div className='grid grid-cols-[150px_1fr] gap-2 border-b-[1px] p-2'>
				<div className='justify-self-end text-right font-bold'>Mức lương:</div>
				<div className='whitespace-pre-line'>{data.salary}</div>
			</div>
			<div className='grid grid-cols-[150px_1fr] gap-2 border-b-[1px] p-2'>
				<div className='justify-self-end text-right font-bold'>Lịch làm việc:</div>
				<div className='whitespace-pre-line'>{data.schedule}</div>
			</div>
			<div className='grid grid-cols-[150px_1fr] gap-2 border-b-[1px] p-2'>
				<div className='justify-self-end text-right font-bold'>Đăng tuyển lúc:</div>
				<div className='whitespace-pre-line'>{data.startAt}</div>
			</div>
			<div className='grid grid-cols-[150px_1fr] gap-2 border-b-[1px] p-2'>
				<div className='justify-self-end text-right font-bold'>Hết hạn lúc:</div>
				<div className='whitespace-pre-line'>{data.closeAt}</div>
			</div>
			<div className='grid grid-cols-[150px_1fr] gap-2 border-b-[1px] p-2'>
				<div className='justify-self-end text-right font-bold'>Trạng thái hiển thị</div>
				<div className='whitespace-pre-line'>{data.isHide ? "Đang ẩn" : "Đang hiển thị"}</div>
			</div>
			<div className='grid grid-cols-[150px_1fr] gap-2 border-b-[1px] p-2'>
				<div className='justify-self-end text-right font-bold'>Trạng thái hoạt động:</div>
				<div className='whitespace-pre-line'>{data.isClose ? "Không còn hoạt động" : "Còn hoạt động"}</div>
			</div>
		</div>
	);
}
