import Header from '@/components/sections/header';
import { Head } from '@inertiajs/react';
import Footer from '@/components/sections/footer';

export default function Landing() {
    return (
        <>
            <Head title="Portfolio" />
            <div className="app">
                <Header />
                <Footer />
            </div>
        </>
    );
}
