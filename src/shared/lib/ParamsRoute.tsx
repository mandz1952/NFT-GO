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
        console.log('ParamsRoute: useEffect started');

        let startParams: string | null = null;

        // Проверка Telegram Web App
        if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
            console.log('Telegram WebApp available:', window.Telegram.WebApp.initDataUnsafe);
            startParams = window.Telegram.WebApp.initDataUnsafe.start_param || null;
            window.Telegram.WebApp.ready();
            console.log('Telegram start_param:', startParams);
        } else {
            console.log('Telegram WebApp not available');
        }

        // Резервный вариант: извлечение startapp из URL
        if (!startParams && typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            startParams = params.get('startapp');
            console.log('URL searchParams:', Object.fromEntries(params));
            console.log('URL startapp:', startParams);
        }

        console.log('Final startParams:', startParams);

        if (startParams) {
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
                    console.log('Redirecting to default /');
                    router.push('/', { scroll: false });
                    break;
            }
        } else {
            console.log('No startapp parameter, staying on current page');
        }
    }, [router]);

    return null; // Компонент ничего не рендерит
}