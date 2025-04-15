import Header from '@/components/sections/header';
import { Head } from '@inertiajs/react';

export default function Landing() {
    return (
        <>
            <Head title="Portfolio" />
            <div className="app">
                <Header />
            </div>
        </>
    );
}
