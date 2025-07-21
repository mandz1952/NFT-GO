'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ParamsRoute() {
    const router = useRouter();

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

        if (startParam !== null) {
            const path = startParam.startsWith('/') ? startParam : `/${startParam}`;
            console.log(`Redirecting to ${path}`);
            router.replace(path, { scroll: false });
        } else {
            console.log('No startapp parameter, staying on current page');
        }
    }, [router]);

    return null; // Компонент ничего не рендерит
}
