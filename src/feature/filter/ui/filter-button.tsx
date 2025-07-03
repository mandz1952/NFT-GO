
import {Button} from "@/shared/ui/button";
import {ReactNode} from "react";

export function FilterButton ({children}: {children: ReactNode}) {
    return (
        <Button className="bg-[#231c46] hover:bg-[#231c46]/90 w-10 h-10 rounded-lg p-0">
            {children}
        </Button>
    )
}