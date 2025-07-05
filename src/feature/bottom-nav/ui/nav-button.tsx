import Image from "next/image";
import Link from "next/link";

export function NavButton({image, title, page}: {image: string; title: string, page: string}) {
    return (
        <Link href={page} className="flex flex-col items-center gap-1 py-2">
            <Image src={image} alt={title} width={26} height={26} />
            <span className="text-white text-xs">{title}</span>
        </Link>
    )
}