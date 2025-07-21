'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Menu = {
    MARKET: '',
    TOP: 'top',
    ROCKET: 'rocket',
    FRIENDS: 'friends',
    PROFILE: 'profile',
};

export default function ParamsRoute() {
    const router = useRouter();

    useEffect(() => {
        // Проверка Telegram Web App и извлечение start_param
        let startParams: string | null = null;

        if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
            const command = window.Telegram.WebApp.initDataUnsafe.start_param
            if (command) {
                switch (command) {
                    case Menu.MARKET:
                        console.log('Redirecting to /');
                        router.replace(`/${Menu.MARKET}`, { scroll: false });
                        break;
                    case Menu.TOP:
                        console.log('Redirecting to /top');
                        router.replace(`/${Menu.TOP}`, { scroll: false });
                        break;
                    case Menu.ROCKET:
                        console.log('Redirecting to /rocket');
                        router.replace(`/${Menu.ROCKET}`, { scroll: false });
                        break;
                    case Menu.FRIENDS:
                        console.log('Redirecting to /friends');
                        router.replace(`/${Menu.FRIENDS}`, { scroll: false });
                        break;
                    case Menu.PROFILE:
                        console.log('Redirecting to /profile');
                        router.replace(`/${Menu.PROFILE}`, { scroll: false });
                        break;
                    default:
                        console.log('Redirecting to default /');
                        router.replace('/', { scroll: false });
                        break;
                }
            }
        }

    }, [router]);

    return null; // Компонент ничего не рендерит
}