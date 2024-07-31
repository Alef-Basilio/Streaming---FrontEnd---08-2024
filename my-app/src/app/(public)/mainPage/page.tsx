'use client';

import { useRouter } from 'next/navigation';

export default function MainPage() {
    const router = useRouter()

    return (
        <>
            <button onClick={(e) => { router.push('/'); e.preventDefault()}}>page1</button>
        </>
    )
}