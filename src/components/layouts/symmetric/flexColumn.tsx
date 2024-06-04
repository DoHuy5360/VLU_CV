export default function FlexColumn({ children }: { children: JSX.Element[] }) {
	return <div className='flex flex-col gap-6'>{...children}</div>;
}
