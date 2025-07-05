import Image from "next/image";
import {ReferralBalance} from "@/feature/referral-balance";
import {Banner} from "@/shared/ui/banner";
import {FriendsList} from "@/feature/friends-list";

export default function Page() {
    return (
        <div className={'flex flex-col gap-3'}>
            <div className="px-6 mb-6">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-white text-xl font-bold mb-1">
                            Получи 10% от депозита
                            <br/>
                            вашего друга
                        </h2>
                    </div>
                    <div className="w-16 h-16 opacity-60">
                        <Image src={'/friends/nftGoLogo.png'} alt={'nft go logo'} width={91} height={100}/>
                    </div>
                </div>
            </div>
            <ReferralBalance />
            <Banner title={'Активировать промокод'} />
            <FriendsList/>
        </div>
    )
}