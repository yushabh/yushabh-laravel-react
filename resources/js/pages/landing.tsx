import Header from '@/components/sections/header';
import { Head } from '@inertiajs/react';
import Footer from '@/components/sections/footer';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Portfolio from '@/components/sections/portfolio';
import Resume from '@/components/sections/resume';
import { Contact } from 'lucide-react';
import ScrollToTop from '@/components/sections/scrolltotop';

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
                    <Resume />
                    <Contact />
                </main>
                <Footer />
                <ScrollToTop />
            </div>
        </>
    );
}
