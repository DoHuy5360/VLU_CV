import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { provinces } from "./constant/province";
import { address } from "./constant/address";
import { useForm, useFormContext } from "react-hook-form";
import { RecruiterDataForm } from "./register/recruiter";
import { positions } from "./constant/position";

type District = {
	id: number;
	title: string;
	name: string;
	alias: string;
};

export default function Company() {
	const {
		setValue,
		getValues,
		trigger,
		formState: { errors },
	} = useFormContext<RecruiterDataForm>();

	const [isShowProvince, setShowProvince] = useState(false);
	const [isShowDistrict, setShowDistrict] = useState(false);
	const [isShowPosition, setShowPosition] = useState(false);
	const [districts, setDistricts] = useState<District[] | null>(null);
	return (
		<div className='flex flex-col gap-2'>
			<div className='flex gap-2 select-none'>
				<div className='flex flex-col gap-1'>
					<div
						onClick={() => {
							setShowProvince((pre) => !pre);
						}}
						className='flex gap-2 border-[1px] border-slate-200 py-1 px-2 items-center text-center w-fit cursor-pointer'
					>
						<div className='whitespace-nowrap'>{getValues("province") || "Tỉnh thành"}</div>
						<IoMdArrowDropdown />
					</div>
					{isShowProvince && (
						<div className='flex flex-col h-28 overflow-y-scroll border-[1px] border-slate-200 translate-y-[-1px] w-fit'>
							{provinces.map((e) => {
								return (
									<div
										key={e.id}
										onClick={() => {
											setDistricts(e.districts);
											setShowProvince(false);
											setShowDistrict(true);
											setValue("province", e.name);
											trigger("province");
											setValue("district", null);
										}}
										className='px-2 py-1 hover:bg-slate-100 select-none'
									>
										{e.name}
									</div>
								);
							})}
						</div>
					)}
					<div className='text-red-500 text-xs'>{errors.province?.message}</div>
				</div>
				<div className='flex flex-col gap-1'>
					<div
						onClick={() => {
							setShowDistrict((pre) => !pre);
						}}
						className='flex gap-2 border-[1px] border-slate-200 py-1 px-2 items-center text-center w-fit cursor-pointer'
					>
						<div className='whitespace-nowrap'>{getValues("district") || "Quận huyện"}</div>
						<IoMdArrowDropdown />
					</div>
					{districts !== null && (
						<>
							<div
								className={`${
									!isShowDistrict && "hidden"
								} flex flex-col max-h-28 overflow-y-scroll border-[1px] border-slate-200 translate-y-[-1px] w-fit`}
							>
								{districts.map((e) => {
									return (
										<div
											key={e.id}
											className='px-2 py-1 hover:bg-slate-100 select-none'
											onClick={() => {
												setShowDistrict(false);
												setValue("district", e.title);
												trigger("district");
											}}
										>
											{e.title}
										</div>
									);
								})}
							</div>
							<div className='text-red-500 text-xs'>{errors.district?.message}</div>
						</>
					)}
				</div>
			</div>
			<div className='flex flex-col gap-1'>
				<div
					onClick={() => {
						setShowPosition((pre) => !pre);
					}}
					className='flex gap-2 border-[1px] border-slate-200 py-1 px-2 items-center text-center w-fit cursor-pointer'
				>
					<div className='whitespace-nowrap'>{getValues("position") || "Chức vụ"}</div>
					<IoMdArrowDropdown />
				</div>
				{isShowPosition && (
					<div className='flex flex-col h-28 overflow-y-scroll border-[1px] border-slate-200 translate-y-[-1px] w-fit'>
						{positions.map((e, i) => {
							return (
								<div
									key={i}
									onClick={() => {
										setValue("position", e);
										trigger("position");
										setShowPosition(false);
									}}
									className='px-2 py-1 hover:bg-slate-100 select-none'
								>
									{e}
								</div>
							);
						})}
					</div>
				)}
				<div className='text-red-500 text-xs'>{errors.position?.message}</div>
			</div>
		</div>
	);
}
