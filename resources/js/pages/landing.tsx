import Header from '@/components/sections/header';
import { Head } from '@inertiajs/react';
import Footer from '@/components/sections/footer';
import Hero from '@/components/sections/hero';

export default function Landing() {
    return (
        <>
            <Head title="Portfolio" />
            <div className="app">
                <Header />
                <main>
                    <Hero />
                </main>
                <Footer />
            </div>
        </>
    );
}
