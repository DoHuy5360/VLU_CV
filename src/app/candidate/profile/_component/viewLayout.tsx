export default function ViewLayout({ action, view }: { action: JSX.Element; view: JSX.Element }) {
	return (
		<div className='flex flex-col'>
			<div className='flex gap-2 text-sm py-2 justify-end'>{action}</div>
			{view}
		</div>
	);
}
