"use client"

import {Card} from "@/shared/ui/card";
import {Button} from "@/shared/ui/button";
import {useState} from "react";

export function LanguageSelection() {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [selectedLanguage, setSelectedLanguage] = useState("russian")

    return (
        <Card className="bg-[#231C46] p-4 mb-6 border-none">
            <h3 className="text-white font-medium mb-4">Выбрать язык</h3>
            <div className="flex gap-3 bg-[#262352]">
                <Button
                    onClick={() => setSelectedLanguage("russian")}
                    className={`flex-1 py-3 rounded-xl font-medium bg-gradient-to-r from-[#6100FF] to-[#B384FF]`}
                >
                    Русский
                </Button>
                <Button
                    onClick={() => setSelectedLanguage("english")}
                    className={`flex-1 py-3 rounded-xl font-medium bg-[#262352]`}
                >
                    English
                </Button>
            </div>
        </Card>
    )
}