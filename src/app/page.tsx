import {Header} from "@/shared/ui/header";
import {Filter} from "@/feature/filter";
import {NftList} from "@/feature/grid";
import {BottomNav} from "@/feature/bottom-nav";

export default function Home() {
  return (
    <div className={'bg-[#150f27] min-h-screen text-white  mx-auto relative'}>
        <Header />
        <Filter/>
        <NftList/>
        <BottomNav/>
    </div>
  );
}
