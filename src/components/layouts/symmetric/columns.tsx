export default function Columns({ children }: { children: JSX.Element[] }) {
	return <div className='sections grid grid-cols-2 gap-10'>{...children}</div>;
}
