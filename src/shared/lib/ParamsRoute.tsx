'use client';

import { useEffect, useState, useCallback } from 'react';
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
    const [tgReady, setTgReady] = useState(false);

    const handleTelegramReady = useCallback(() => {
        console.log('Telegram WebApp is ready or was already ready.');
        setTgReady(true);

        let startParams: string | null = null;

        if (window.Telegram && window.Telegram.WebApp) {
            console.log('Telegram WebApp available:', window.Telegram.WebApp.initDataUnsafe);
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

        console.log('Final startParams:', startParams);

        if (startParams !== null) {
            const param = startParams.toLowerCase();
            console.log('Processing param:', param);
            switch (param) {
                case Menu.MARKET:
                    console.log('Redirecting to /');
                    router.push('/', { scroll: false });
                    break;
                case Menu.TOP:
                    console.log('Redirecting to /top');
                    router.push('/top', { scroll: false });
                    break;
                case Menu.ROCKET:
                    console.log('Redirecting to /rocket');
                    router.push('/rocket', { scroll: false });
                    break;
                case Menu.FRIENDS:
                    console.log('Redirecting to /friends');
                    router.push('/friends', { scroll: false });
                    break;
                case Menu.PROFILE:
                    console.log('Redirecting to /profile');
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
        // Check if the script is already loaded
        if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initData) {
            handleTelegramReady();
            return;
        }

        // If not, wait for the ready event
        window.addEventListener('telegramWebAppReady', handleTelegramReady);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('telegramWebAppReady', handleTelegramReady);
        };
    }, [handleTelegramReady]);

    return null
}