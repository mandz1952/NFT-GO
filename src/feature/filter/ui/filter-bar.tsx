"use client"

import Image from "next/image";
import {Input} from "@/shared/ui/input";
import {useEffect, useState} from "react";

export function FilterBar({filterName, min, defaultValue, max, type, onValueChange}: {filterName: string, min: number, max: number, onValueChange?: (value: number) => void, defaultValue?: number, type: "min" | "max";}) {

    const initialValue = defaultValue !== undefined ? defaultValue : type === "min" ? min : max;
    const [value, setValue] = useState<number | string>(initialValue);

    useEffect(() => {
        let newValue = Number(value);
        if (isNaN(newValue)) {
            newValue = type === "min" ? min : max;
        } else if (newValue < min) {
            newValue = min;
        } else if (newValue > max) {
            newValue = max;
        }
        setValue(newValue);
        if (onValueChange) {
            onValueChange(newValue);
        }
    }, [min, max, type, onValueChange]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        let newValue: number | string = inputValue;

        // Если введено число, проверяем диапазон
        if (inputValue !== "" && !isNaN(Number(inputValue))) {
            newValue = Number(inputValue);
            if (newValue < min) {
                newValue = min;
            } else if (newValue > max) {
                newValue = max;
            }
        }

        setValue(newValue);
        if (onValueChange && typeof newValue === "number") {
            onValueChange(newValue);
        }
    };

    return (
        <div className="flex-1">
            <div className="bg-[#231c46] rounded-lg pr-2 py-1.5 flex items-center">
                <Input
                    type="number"
                    className="text-[#707579] border-none text-sm text-left [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    min={min}
                    max={max}
                    placeholder={filterName}
                    value={value}
                    onChange={handleInputChange}
                />
                {/*<span className="text-[#707579] text-sm">{filterName}</span>*/}
                <div className="w-4 h-2.5 bg-[#0098ea] rounded-full flex items-center justify-center">
                    <Image src={'/tonCoin.svg'} alt={"ton Coin"} width={15} height={15} />
                </div>
            </div>
        </div>
    )
}