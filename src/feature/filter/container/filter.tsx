import {Grid2X2, FunnelX} from "lucide-react";
import {SearchBar} from "@/feature/filter/ui/search-bar";
import {FilterBar} from "@/feature/filter/ui/filter-bar";
import {FilterButton} from "@/feature/filter/ui/filter-button";

export function Filter() {
    return (
        <>
            <div className="px-4 py-4">
                <SearchBar/>
            </div>
            <div className="flex items-center gap-3 px-4 py-2">
                <FilterBar filterName={'Min price'}/>

                <div className="w-6 h-0.5 bg-[#707579]"></div>

                <FilterBar filterName={'Max price'}/>

                <FilterButton>
                    <Grid2X2 className="w-5 h-5 text-white"/>
                </FilterButton>

                <FilterButton>
                    <FunnelX className="w-5 h-5 text-[#942123]"/>
                </FilterButton>

            </div>
        </>

    )
}