import {Plus} from 'lucide-react'
import {Button} from "@/shared/ui/button";
import Image from "next/image";


export function Header (){
    return (
        <div className="flex items-center justify-between px-4 py-4 gap-1">
            <div className="w-16 h-16 rounded-lg flex items-center justify-center ">
                <div className="text-xs text-center">
                    <Image src={'/logo.svg'} width={62} height={48} alt="logo" />
                </div>
            </div>

            <div className="flex items-center gap-2">
                <div className="bg-[#231c46] border-2 border-[#533189] rounded-lg px-4 py-2 flex items-center gap-2">
                    <Image src={'/tonCoin.svg'} alt={"ton Coin"} width={18} height={18} />
                    <span className="text-white text-lg font-semibold">0.00</span>
                    <Button className="bg-[#21ee43] hover:bg-[#21ee43]/90 text-black w-10 h-10 rounded-lg p-0">
                        <Plus className="w-5 h-5"/>
                    </Button>
                </div>

            </div>
            <div className="bg-[#231c46] border-2 border-[#533189] rounded-lg px-4 py-2 flex items-center">
                <Button className="bg-[#231c46] hover:bg-[#231c46]/90 text-white px-6 py-2 rounded-lg text-lg">
                    Connect Wallet
                </Button>
            </div>

        </div>
    )
}