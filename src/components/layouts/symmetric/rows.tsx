export default function Rows({ children }: { children: JSX.Element[] }) {
	return (
		<div className='flex flex-col gap-6'>
			{children.map((c, i) => (
				<div key={i}>{c}</div>
			))}
		</div>
	);
}
