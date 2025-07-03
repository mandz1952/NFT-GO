import Image from "next/image";

export function NavButton({image, title}: {image: string; title: string}) {
    return (
        <div className="flex flex-col items-center gap-1 py-2">
            <Image src={image} alt={title} width={26} height={26} />
            <span className="text-white text-xs">{title}</span>
        </div>
    )
}