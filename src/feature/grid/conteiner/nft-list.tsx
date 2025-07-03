import {NftCard} from "@/feature/grid/ui/nft-card";
import {Layout} from "@/feature/grid/ui/layout";

export function NftList() {

    const nftItems = Array(12)
        .fill(null)
        .map((_, index) => ({
            id: index + 1,
            price: "195.89",
            image: "/nft-1.png",
        }))

    return (
        <Layout>
            {nftItems.map((item) => (
                <NftCard image={item.image} key={item.id} price={item.price}/>
            ))}
        </Layout>
    )
}