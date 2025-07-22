'use client';

import { useEffect, useCallback } from 'react';
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

    const handleTelegramReady = useCallback(() => {
        console.log('Telegram WebApp is ready.');

        let startParams: string | null = null;

        if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.ready();
            startParams = window.Telegram.WebApp.initDataUnsafe.start_param || null;
            console.log('Telegram start_param:', startParams);
        } else {
            console.log('Telegram WebApp not available even after ready event.');
        }

        if (startParams === null && typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            startParams = params.get('startapp');
            console.log('URL fallback startapp:', startParams);
        }

        if (startParams !== null) {
            const param = startParams.toLowerCase();
            console.log('Processing param:', param);
            switch (param) {
                case Menu.MARKET:
                    router.push('/', { scroll: false });
                    break;
                case Menu.TOP:
                    router.push('/top', { scroll: false });
                    break;
                case Menu.ROCKET:
                    router.push('/rocket', { scroll: false });
                    break;
                case Menu.FRIENDS:
                    router.push('/friends', { scroll: false });
                    break;
                case Menu.PROFILE:
                    router.push('/profile', { scroll: false });
                    break;
                default:
                    console.log(`Unknown start_param '${param}', staying on current page.`);
                    break;
            }
        } else {
            console.log('No startapp parameter, staying on current page');
        }
    }, [router]);
    useEffect(() => {
        if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initData) {
            handleTelegramReady();
            return;
        }
        window.addEventListener('telegramWebAppReady', handleTelegramReady);

        return () => {
            window.removeEventListener('telegramWebAppReady', handleTelegramReady);
        };
    }, [handleTelegramReady]);


    return null;
}
