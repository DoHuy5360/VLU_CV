export default function Rows({ children }: { children: JSX.Element[] }) {
	return (
		<div className='grid grid-cols-1 gap-6'>
			{...children}
		</div>
	);
}
