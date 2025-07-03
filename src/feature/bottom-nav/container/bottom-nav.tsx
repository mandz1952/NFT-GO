import {Layout} from "@/feature/bottom-nav/ui/layout";
import {NavButton} from "@/feature/bottom-nav/ui/nav-button";

export function BottomNav () {
    return (
        <Layout>
            <div className="flex items-center justify-around py-2">
                <NavButton image={'/bottomNav/market.svg'} title={"Market"} />
                <NavButton image={'/bottomNav/top.svg'} title={"Top"} />
                <NavButton image={'/bottomNav/rocket.svg'} title={"Rocket"} />
                <NavButton image={'/bottomNav/friends.svg'} title={"Friends"} />
                <NavButton image={'/bottomNav/profile.svg'} title={"Profile"} />
            </div>
        </Layout>
    )
}