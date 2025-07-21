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
    let startParams: string | null = null;
    useEffect(() => {


        // Проверка Telegram Web App
        if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
            console.log('Telegram WebApp:', window.Telegram.WebApp.initDataUnsafe);
            startParams = window.Telegram.WebApp.initDataUnsafe.start_param || null;
            window.Telegram.WebApp.ready(); // Сообщаем Telegram, что приложение готово
        }

        // Резервный вариант: извлечение startapp из URL
        if (!startParams && typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            startParams = params.get('startapp');
            console.log('URL searchParams:', Object.fromEntries(params));
        }

        console.log('ParamsRoute: startapp=', startParams);

        if (startParams) {
            switch (startParams) {
                case Menu.MARKET:
                    console.log('Redirecting to /');
                    router.replace('/', { scroll: false });
                    break;
                case Menu.TOP:
                    console.log('Redirecting to /top');
                    router.replace('/top', { scroll: false });
                    break;
                case Menu.ROCKET:
                    console.log('Redirecting to /rocket');
                    router.replace('/rocket', { scroll: false });
                    break;
                case Menu.FRIENDS:
                    console.log('Redirecting to /friends');
                    router.replace('/friends', { scroll: false });
                    break;
                case Menu.PROFILE:
                    console.log('Redirecting to /profile');
                    router.replace('/profile', { scroll: false });
                    break;
                default:
                    console.log('Redirecting to default /');
                    router.replace('/', { scroll: false });
                    break;
            }
        } else {
            console.log('No startapp parameter, staying on current page');
        }
    }, [router]);

    return {startParams}; // Компонент ничего не рендерит
}