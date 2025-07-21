"use client"
import {useRouter, useSearchParams} from "next/navigation";

enum Menu {
    MARKET = "/",
    TOP = "top",
    ROCKET = "rocket",
    FRIENDS = "friends",
    PROFILE = "profile",
}

export const ParamsRoute = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const startParams = searchParams.get("startapp");

    if (startParams) {
        switch (startParams) {
            case Menu.MARKET:
                router.push(Menu.MARKET);
                break;
            case Menu.TOP:
                router.push(Menu.TOP);
                break;
            case Menu.ROCKET:
                router.push(Menu.ROCKET);
                break;
            case Menu.FRIENDS:
                router.push(Menu.FRIENDS);
                break;
            case Menu.PROFILE:
                router.push(Menu.PROFILE);
                break;
            default:
                return
        }
    }
}