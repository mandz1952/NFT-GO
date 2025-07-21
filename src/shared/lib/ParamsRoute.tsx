'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

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
            const path = startParam.startsWith('/') ? startParam : `/${startParam}`;
            console.log(`Redirecting to ${path}`);
            router.replace(path, { scroll: false });
        } else {
            console.log('No startapp parameter, staying on current page');
        }
    }, [router, searchParams]);

    return null; // Компонент ничего не рендерит
}
