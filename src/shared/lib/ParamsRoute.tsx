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
        if (startParams) {
            switch (startParams) {
                case Menu.MARKET:
                    router.replace('/'); // Пустая строка преобразуется в главную страницу
                    break;
                case Menu.TOP:
                    router.replace(`/${Menu.TOP}`);
                    break;
                case Menu.ROCKET:
                    router.replace(`/${Menu.ROCKET}`);
                    break;
                case Menu.FRIENDS:
                    router.replace(`/${Menu.FRIENDS}`);
                    break;
                case Menu.PROFILE:
                    router.replace(`/${Menu.PROFILE}`);
                    break;
                default:
                    router.replace('/'); // Страница по умолчанию
                    break;
            }
        }
    }, [startParams, router]);

    return null; // Компонент ничего не рендерит
}