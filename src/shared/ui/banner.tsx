import {Button} from "@/shared/ui/button";
import Image from "next/image";

export function Banner ({title} : {title: string}) {
    return (
        <Button className="w-full bg-[#262352] hover:bg-[#533189] flex justify-start py-6 text-white rounded-[10px]">
            <Image src={'/friends/ticket.png'} alt="Ticket" width={25} height={25} />
            {title}
        </Button>
    )
}