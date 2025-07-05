import {Multipliers} from "@/shared/ui/multipliers";
import {NewsBanner} from "@/shared/ui/news-banner";
import {GameArea} from "@/shared/ui/game-area";
import {BettingSection} from "@/feature/betting-section";
import {PlayersList} from "@/feature/players-list";

export default function Page() {
    return (
        <div className="flex flex-col gap-3">
            <NewsBanner/>
            <Multipliers/>
            <div className={'bg-[#8845F533]/20 h-[2px] w-[100%] '}></div>
            <GameArea/>
            <BettingSection/>
            <PlayersList/>
        </div>
    )
}