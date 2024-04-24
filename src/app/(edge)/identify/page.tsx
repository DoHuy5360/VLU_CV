"use client";
import { updateAccountRole } from "@/actions/general/updateAccountRole";
import { redirect } from "next/navigation";
import { BsArrowRight } from "react-icons/bs";

export default () => {
	return (
		<div className='grid place-items-center h-dvh'>
			<div className='flex flex-col gap-3 p-3 border-[1px] border-slate-200'>
				<div className='text-lg'>Bạn là?</div>
				<div className='flex flex-col'>
					<div className='text-sm text-blue-500'>Chọn 1 trong 2 vai trò sau để hệ thống hiển thị giao diện phù hợp với bạn</div>
					<div className='text-xs text-red-500'>Lưu ý: Không thể thay đổi vai trò sau khi chọn.</div>
				</div>
				<div className='grid grid-cols-2 gap-4'>
					<form
						action={async () => {
							const isSuccess = await updateAccountRole("recruiter");
							if (isSuccess) {
								alert("Cập nhật thành công!");
								redirect("/home");
							} else {
								alert("Cập nhật thất bại!");
							}
						}}
						className='flex flex-col items-start border-[1px] p-2'
					>
						<div className='font-bold'>Nhà tuyển dụng</div>
						<div className='flex items-center gap-1'>
							<BsArrowRight />
							<div>Tạo đơn tuyển dụng</div>
						</div>
						<button className='px-3 py-0.5 text-sm mt-3 bg-green-200 hover:bg-green-300 rounded-full' type='submit'>
							Chọn
						</button>
					</form>
					<form
						action={async () => {
							const isSuccess = await updateAccountRole("candidate");
							if (isSuccess) {
								alert("Cập nhật thành công!");
								redirect("/home");
							} else {
								alert("Cập nhật thất bại!");
							}
						}}
						className='flex flex-col items-start border-[1px] p-2'
					>
						<div className='font-bold'>Ứng cử viên</div>
						<div className='flex items-center gap-1'>
							<BsArrowRight />
							<div>Tạo CV/Portfolio</div>
						</div>
						<button className='px-3 py-0.5 text-sm mt-3 bg-green-200 hover:bg-green-300 rounded-full' type='submit'>
							Chọn
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
