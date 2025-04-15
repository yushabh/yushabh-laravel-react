import Header from '@/components/sections/header';
import { Head } from '@inertiajs/react';
import Footer from '@/components/sections/footer';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Portfolio from '@/components/sections/portfolio';

export default function Landing() {
    return (
        <>
            <Head title="Portfolio" />
            <div className="app">
                <Header />
                <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Portfolio />
                </main>
                <Footer />
            </div>
        </>
    );
}
