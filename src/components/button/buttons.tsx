import Link from "next/link";
import { BiCog, BiPlus } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { FaRegEdit } from "react-icons/fa";
import { LuMoveDown, LuMoveUp } from "react-icons/lu";
import { RiEditLine } from "react-icons/ri";

type ButtonPropsType = {
	text?: string;
	href: string;
};

const generaStyle = "text-white font-bold p-2 text-xs w-fit rounded-sm cursor-pointer";

export const Buttons = {
	Solid: {
		Cyan: {
			Link: ({ text, href }: ButtonPropsType) => (
				<Link href={href} className={`${generaStyle} bg-[#0891B2] hover:bg-[#06748e] active:bg-[#0891B2]`}>
					{text}
				</Link>
			),
			Click: ({ text }: Pick<ButtonPropsType, "text">) => (
				<button type='button' className={`${generaStyle} bg-[#0891B2] hover:bg-[#06748e] active:bg-[#0891B2]`}>
					{text}
				</button>
			),
		},
		Yellow: {
			Link: ({ text, href }: ButtonPropsType) => (
				<Link href={href} className={`${generaStyle} bg-[#d5c10a] hover:bg-[#b5a409] active:bg-[#d5c10a]`}>
					{text}
				</Link>
			),
			Click: ({ text }: Pick<ButtonPropsType, "text">) => <div className={`${generaStyle} bg-[#d5c10a] hover:bg-[#b5a409] active:bg-[#d5c10a]`}>{text}</div>,
		},
		Red: {
			Click: ({ text }: Pick<ButtonPropsType, "text">) => {
				return <button className={`${generaStyle} bg-[#EA580C] hover:bg-[#bb460a] active:bg-[#EA580C]`}>{text}</button>;
			},
		},
		Gray: {
			Click: ({ text }: Pick<ButtonPropsType, "text">) => {
				return <button className={`text-black font-bold p-2 text-xs w-fit rounded-sm cursor-pointer bg-[#ebeef2] hover:bg-[#bcbec2] active:bg-[#ebeef2]`}>{text}</button>;
			},
		},
	},
	Outline: {
		Hover: {
			Gray: ({ text, href }: ButtonPropsType) => {
				return (
					<Link href={href} className={`${generaStyle} bg-transparent border-[1px] border-transparent hover:border-slate-100`}>
						{text}
					</Link>
				);
			},
		},
		Solid: {
			Gray: {
				Click: ({ text }: Pick<ButtonPropsType, "text">) => {
					return (
						<button type='button' className='text-black font-bold p-2 text-xs w-fit rounded-sm cursor-pointer bg-transparent border-[1px]'>
							{text}
						</button>
					);
				},
			},
		},
	},
	Close: {
		Icon: () => (
			<button className={`${generaStyle} bg-[#DC2626] hover:bg-[#b01e1e] active:bg-[#DC2626]`} type='button'>
				<CgClose />
			</button>
		),
	},
	Submit: {
		Save: ({ text = "Lưu" }: Pick<ButtonPropsType, "text">) => (
			<button className={`${generaStyle}  bg-[#65A30D] hover:bg-[#51820a] active:bg-[#65A30]`} type='submit'>
				{text}
			</button>
		),
		Delete: {
			Icon: () => (
				<button className={`${generaStyle} bg-[#DC2626] hover:bg-[#b01e1e] active:bg-[#DC2626]`} type='submit'>
					<CgClose />
				</button>
			),
		},
		Login: {
			Text: ({ text = "Đăng nhập" }: Pick<ButtonPropsType, "text">) => (
				<button className={`${generaStyle}  bg-[#0891B2] hover:bg-[#06748e] active:bg-[#0891B2]`} type='submit'>
					{text}
				</button>
			),
		},
	},
	Create: {
		TextIcon: () => {
			return (
				<button type='button' className={`${generaStyle} flex items-center gap-2 bg-[#4c78dd] hover:bg-[#3d60b1] active:bg-[#4c78dd]`}>
					<div>Tạo mới</div>
					<BiPlus />
				</button>
			);
		},
		Text: ({ text = "Tạo mới" }: Pick<ButtonPropsType, "text">) => {
			return (
				<button type='button' className={`${generaStyle} flex items-center gap-2 bg-[#4c78dd] hover:bg-[#3d60b1] active:bg-[#4c78dd]`}>
					<div>{text}</div>
				</button>
			);
		},
		Icon: () => {
			return (
				<button type='button' className={`${generaStyle} flex items-center gap-2 bg-[#4c78dd] hover:bg-[#3d60b1] active:bg-[#4c78dd]`}>
					<BiPlus />
				</button>
			);
		},
	},
	Delete: {
		Click: {
			Icon: () => (
				<button className={`${generaStyle} bg-[#DC2626] hover:bg-[#b01e1e] active:bg-[#DC2626]`}>
					<CgClose />
				</button>
			),
		},
	},
	Move: {
		Up: {
			Icon: () => (
				<div className={`${generaStyle} bg-[#d5c10a] hover:bg-[#b5a409] active:bg-[#d5c10a]`}>
					<LuMoveUp />
				</div>
			),
		},
		Down: {
			Icon: () => (
				<div className={`${generaStyle} bg-[#d5c10a] hover:bg-[#b5a409] active:bg-[#d5c10a]`}>
					<LuMoveDown />
				</div>
			),
		},
	},
	Edit: {
		Link: {
			Icon: ({ href }: Pick<ButtonPropsType, "href">) => (
				<Link href={href} className={`${generaStyle} bg-[#d5c10a] hover:bg-[#b5a409] active:bg-[#d5c10a]`}>
					<FaRegEdit />
				</Link>
			),
		},
	},
	Setting: {
		Click: {
			Icon: () => (
				<button className={`${generaStyle} bg-[#d5c10a] hover:bg-[#b5a409] active:bg-[#d5c10a]`}>
					<BiCog />
				</button>
			),
		},
	},
	Reset: {
		Click: {
			Text: ({ text = "Làm mới" }: Pick<ButtonPropsType, "text">) => (
				<button type='button' className={`${generaStyle} bg-[#DC2626] hover:bg-[#b01e1e] active:bg-[#DC2626]`}>
					{text}
				</button>
			),
		},
	},
};
