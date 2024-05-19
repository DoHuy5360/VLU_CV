import Link from "next/link";

export default function GrayLink({
    text,
    href
}: {
    text: string
    href: string
}){
    return <Link className='whitespace-nowrap px-2 py-1 hover:bg-[#f6f7f9]' href={href}>
    {text}
</Link>
}