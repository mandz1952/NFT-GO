import {NftCard} from "@/feature/grid/ui/nft-card";
import {Layout} from "@/feature/grid/ui/layout";
import {Button} from "@/shared/ui/button";

export function NftList({imgNft, isProfile}: {isProfile: boolean, imgNft: string}) {

    const nftItems = Array(12)
        .fill(null)
        .map((_, index) => ({
            id: index + 1,
            price: "195.89",
            image: imgNft,
        }))

    return (
        <div>
            <Layout>
                {nftItems.map((item) => (
                    <NftCard isProfile={isProfile} image={item.image} key={item.id} price={item.price}/>
                ))}
            </Layout>
            {isProfile && (
            <div className="fixed bottom-20 left-7 w-[370px] max-w-sm bg-[#ffffff]/10 flex gap-2">
                <Button
                    className="flex-1 bg-gradient-to-r from-[#18CD00] to-[#54BA39] hover:bg-[#21ee43]/80 text-white font-medium py-4 rounded-xl w-[180px] h-[54px]">
                    Забрать
                </Button>
                <Button
                    className="flex-1 bg-gradient-to-r from-[#3900D7] to-[#8B5CD7] hover:bg-[#8845f5]/80 text-white font-medium py-4 rounded-xl w-[180px] h-[54px]">
                    Продать
                </Button>
            </div>
        )}
        </div>

    )
}