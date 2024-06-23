export default function layout({ children }: { children: JSX.Element }) {
	return (
		<div className='h-dvh flex flex-col'>
			<div className='p-2 border-b-[1px]'>Home</div>
			{children}
		</div>
	);
}
