import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { provinces } from "./address/province";
import { address } from "./address/address";
import { useForm, useFormContext } from "react-hook-form";
import { RecruiterDataForm } from "./register";

type District = {
	id: number;
	title: string;
	name: string;
	alias: string;
};

export default function Province() {
	const {
		setValue,
		register,
		formState: { errors },
	} = useFormContext<RecruiterDataForm>();

	const [isShowProvince, setShowProvince] = useState(false);
	const [isShowDistrict, setShowDistrict] = useState(false);
	const [province, setProvince] = useState("Tỉnh thành");
	const [district, setDistrict] = useState("Quận huyện");
	const [districts, setDistricts] = useState<District[] | null>(null);
	return (
		<div className='flex gap-2 select-none'>
			<div className='flex flex-col gap-1'>
				<div
					onClick={() => {
						setShowProvince((pre) => !pre);
					}}
					className='flex gap-2 border-[1px] border-slate-200 py-1 px-2 items-center text-center w-fit cursor-pointer'
				>
					<div>{province}</div>
					<IoMdArrowDropdown />
				</div>
				<div className={`${!isShowProvince && "hidden"} flex flex-col h-28 overflow-y-scroll border-[1px] border-slate-200 translate-y-[-1px] w-fit`}>
					{provinces.map((e) => {
						return (
							<label
								key={e.id}
								onClick={() => {
									setProvince(e.name);
									setDistricts(e.districts);
									setShowProvince(false);
									setDistrict("Quận huyện");
									setShowDistrict(true);
									setValue("district", null);
								}}
								className='px-2 py-1 hover:bg-slate-100 select-none'
								htmlFor={e.alias}
							>
								{e.name}
								<input {...register("province")} type='radio' value={e.name} className='hidden' id={e.alias} />
							</label>
						);
					})}
				</div>
				<div className='text-red-500 text-xs'>{errors.province?.message}</div>
			</div>
			<div className='flex flex-col gap-1'>
				<div
					onClick={() => {
						setShowDistrict((pre) => !pre);
					}}
					className='flex gap-2 border-[1px] border-slate-200 py-1 px-2 items-center text-center w-fit cursor-pointer'
				>
					<div>{district}</div>
					<IoMdArrowDropdown />
				</div>
				{districts !== null && (
					<>
						<div
							className={`${!isShowDistrict && "hidden"} flex flex-col h-28 overflow-y-scroll border-[1px] border-slate-200 translate-y-[-1px] w-fit`}
						>
							{districts.map((e) => {
								return (
									<label
										key={e.id}
										className='px-2 py-1 hover:bg-slate-100 select-none'
										onClick={() => {
											setDistrict(e.title);
											setShowDistrict(false);
										}}
										htmlFor={e.alias}
									>
										{e.title}
										<input {...register("district")} type='radio' value={e.title} className='hidden' id={e.alias} />
									</label>
								);
							})}
						</div>
						<div className='text-red-500 text-xs'>{errors.district?.message}</div>
					</>
				)}
			</div>
		</div>
	);
}
