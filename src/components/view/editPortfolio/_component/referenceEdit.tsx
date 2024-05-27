import Link from "next/link";

export default function ReferenceEdit({ href, icon }: { href: string; icon: JSX.Element }) {
	return (
		<Link href={href} className='p-1 hover:bg-slate-200 cursor-pointer active:bg-orange-400'>
			{icon}
		</Link>
	);
}
