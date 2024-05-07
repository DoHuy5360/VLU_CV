export default function SelectFile({ name, htmlFor }: { name: string; htmlFor: string }) {
	return (
		<label htmlFor={htmlFor} className='flex items-center gap-2 text-xs text-center bg-[#EFEFEF] hover:bg-[#E5E5E5] border-[1px] border-[#767676] rounded-sm p-1 w-fit cursor-pointer'>
			<div>{name}</div>
		</label>
	);
}
