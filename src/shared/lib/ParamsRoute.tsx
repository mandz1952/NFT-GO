'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const Menu = {
    MARKET: '',
    TOP: 'top',
    ROCKET: 'rocket',
    FRIENDS: 'friends',
    PROFILE: 'profile',
};

export default function ParamsRoute() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const startParams = searchParams.get('startapp');

    useEffect(() => {
        console.log(startParams)
        if (startParams) {
            switch (startParams) {
                case Menu.MARKET:
                    router.replace('/', { scroll: false });
                    break;
                case Menu.TOP:
                    router.replace(`/${Menu.TOP}`, { scroll: false });
                    break;
                case Menu.ROCKET:
                    router.replace(`/${Menu.ROCKET}`, { scroll: false });
                    break;
                case Menu.FRIENDS:
                    router.replace(`/${Menu.FRIENDS}`, { scroll: false });
                    break;
                case Menu.PROFILE:
                    router.replace(`/${Menu.PROFILE}`, { scroll: false });
                    break;
                default:
                    router.replace('/', { scroll: false }); // Страница по умолчанию
                    break;
            }
        }
    }, [startParams, router]);

    return <>{startParams}</>; // Компонент ничего не рендерит
}