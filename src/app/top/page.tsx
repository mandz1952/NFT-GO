import {MarathonTimer} from "@/feature/marathonTime";
import {InfoBanner} from "@/shared/ui/info-banner";
import {RewardSection} from "@/feature/reward-section";
import {Leaderboard} from "@/feature/leaderboard/conteiner/leaderboard";

export default function Page() {
    return (
        <div className={'flex flex-col gap-2'}>
            <MarathonTimer/>
            <InfoBanner/>
            <RewardSection/>
            <Leaderboard/>
        </div>
    )
}