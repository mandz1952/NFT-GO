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

    useEffect(() => {
        let startParam: string | null = null;

        // Проверка Telegram Web App
        if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
            console.log('Telegram WebApp:', window.Telegram.WebApp.initDataUnsafe);
            if (window.Telegram.WebApp.initDataUnsafe?.start_param) {
                startParam = window.Telegram.WebApp.initDataUnsafe.start_param;
            }
            window.Telegram.WebApp.ready(); // Сообщаем Telegram, что приложение готово
        }

        // Если параметр не найден в Telegram, ищем в URL
        if (!startParam) {
            startParam = searchParams.get('startapp');
        }

        if (startParam !== null) {
            switch (startParam) {
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
                    console.log(`Redirecting to default / for param: ${startParam}`);
                    router.replace('/', { scroll: false });
                    break;
            }
        } else {
            console.log('No startapp parameter, staying on current page');
        }
    }, [router, searchParams]);

    return null; // Компонент ничего не рендерит
}