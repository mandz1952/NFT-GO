"use client"

import {Button} from "@/shared/ui/button";
import {Input} from "@/shared/ui/input";
import {Minus, Plus} from "lucide-react";
import {useState} from "react";
import {Deposit} from "@/feature/deposit";

export function BetControl ({presetAmounts, adjustBet, betAmount1, setBetAmount1}: {presetAmounts: number[], setBetAmount1: (value: number) => void, betAmount1: number,adjustBet: (value: number, fun: (value: number) => void, b: boolean ) => void}) {

    const [showDepositModal, setShowDepositModal] = useState(false)

    return (
        <div className="flex bg-[#262352] rounded-[20px]">
            <div className="flex flex-col bg-[#1B1636] rounded-lg items-center p-2 my-2 ml-0.5 gap-3">
                <div className="flex bg-[#1B1636] items-center rounded-lg gap-2">
                    <Button
                        size="sm"
                        variant="ghost"
                        className="w-8 h-8 p-0 text-[#969696] hover:text-white"
                        onClick={() => adjustBet(betAmount1, setBetAmount1, false)}
                    >
                        <div
                            className={'flex justify-center items-center bg-[#241E44] rounded-[10px] w-[35px] h-[35px]'}>
                            <Minus className="bg-[#241E44] w-4 h-4"/>
                        </div>
                    </Button>
                    <Input value={betAmount1} onChange={event => setBetAmount1(Number(event.target.value))} className="border-none text-white font-bold text-xl min-w-[40px] text-center"/>
                    <Button
                        size="sm"
                        variant="ghost"
                        className="w-8 h-8 p-0 text-[#969696] hover:text-white"
                        onClick={() => adjustBet(betAmount1, setBetAmount1, true)}
                    >
                        <div
                            className={'flex justify-center items-center bg-[#241E44] rounded-[10px] w-[35px] h-[35px]'}>
                            <Plus className="w-4 h-4"/>
                        </div>

                    </Button>
                </div>

                <div className="flex gap-1">
                    {presetAmounts.map((amount) => (
                        <Button
                            key={amount}
                            size="sm"
                            variant="ghost"
                            className="text-[#969696] hover:text-white bg-[#241E44] rounded-[5px] w-[30px] h-[20px] text-xs"
                            onClick={() => setBetAmount1(amount)}
                        >
                            {amount}
                        </Button>
                    ))}

                </div>
            </div>
            <div className={'w-[100%] py-2 px-1'}>
                <Button
                    onClick={() => {setShowDepositModal(true)}}
                    className="bg-gradient-to-r from-[#8845f5] to-[#B384FF] hover:bg-[#8845f5]/80 text-white rounded-[20px] font-bold w-[100%] h-[100%]">СТАВИТЬ</Button>
            </div>
            <Deposit showDepositModal={showDepositModal} setShowDepositModal={setShowDepositModal}/>
        </div>
    )
}