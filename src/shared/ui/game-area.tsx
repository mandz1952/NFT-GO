import {Card, CardContent} from "@/shared/ui/card";
import {Progress} from "@/shared/ui/progress";
import Image from "next/image";

export function GameArea() {
    return (
        <Card className="bg-[#150f27] border-[#984EED80] mb-6 text-white">
            <CardContent className="p-8 text-center">
                <div className="mb-6">
                    <Image src={'/rocket/rocket.png'} alt={'rocket'} width={50} height={50} className="w-16 h-16 mx-auto text-[#984eed] mb-4" />
                </div>
                <h2 className="text-xl font-bold mb-2">ОЖИДАНИЕ</h2>
                <h3 className="text-lg mb-6">СЛЕДУЮЩЕГО РАУНДА</h3>
                <Progress value={30} className="h-2 bg-[#96969680]" />
            </CardContent>
        </Card>
    )
}