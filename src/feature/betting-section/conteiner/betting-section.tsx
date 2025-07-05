"use client"

import {Card, CardContent} from "@/shared/ui/card";
import {useState} from "react";
import {BetTabs} from "@/feature/betting-section/ui/bet-tabs";
import {BetControl} from "@/feature/betting-section/ui/bet-control";

export function BettingSection() {

    const [betAmount1, setBetAmount1] = useState(20)
    const [betAmount2, setBetAmount2] = useState(20)
    const [activeTab, setActiveTab] = useState("balance")

    const presetAmounts = [1, 5, 10, 20, 50]

    const adjustBet = (amount: number, setter: (value: number) => void, increment: boolean) => {
        if (increment) {
            setter(amount + 1)
        } else {
            setter(Math.max(1, amount - 1))
        }
    }

    return (
        <Card className="bg-[#231c46] border-[#533189]">
            <CardContent className="">
                <div className="mb-4">
                    <span className="text-[#969696] text-sm">Выбрать тип ставки</span>
                </div>

                <BetTabs activeTab={activeTab} setActiveTab={setActiveTab}/>

                <div className="space-y-2">
                    <BetControl adjustBet={adjustBet} betAmount1={betAmount1} presetAmounts={presetAmounts} setBetAmount1={setBetAmount1} />

                    <BetControl adjustBet={adjustBet} betAmount1={betAmount2} presetAmounts={presetAmounts} setBetAmount1={setBetAmount2}/>
                </div>
                <div className="mt-4 text-[#969696] text-sm">Всего ставок: 100</div>
            </CardContent>
        </Card>
    )
}