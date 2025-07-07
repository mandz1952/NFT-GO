import Image from "next/image";
import {Input} from "@/shared/ui/input";

export function FilterBar({filterName}: {filterName: string}) {
    return (
        <div className="flex-1">
            <div className="bg-[#231c46] rounded-lg pr-2 py-1.5 flex items-center">
                <Input className={'text-[#707579] border-none text-sm text-left'} placeholder={filterName} />
                {/*<span className="text-[#707579] text-sm">{filterName}</span>*/}
                <div className="w-4 h-2.5 bg-[#0098ea] rounded-full flex items-center justify-center">
                    <Image src={'/tonCoin.svg'} alt={"ton Coin"} width={15} height={15} />
                </div>
            </div>
        </div>
    )
}