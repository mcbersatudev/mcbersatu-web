import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

export default function AppHeader() {
    //fungsi open menu
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    //fungsi efek navbar
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header>
            <div className={`fixed top-0 z-50 w-full transition-all duration-300 select-none ${scrolled ? 'backdrop-blur-3xl' : ''}`}>
                <div className="mx-auto my-2 h-12 w-[90%] content-center min-[1440px]:px-14 lg:w-[80%]">
                    <div className="flex items-center justify-between md:max-2xl:justify-center">
                        {/* MCB Logo */}
                        <div className="font-minecraftfive flex justify-start text-base tracking-wide text-[#101010] transition hover:text-[#BC2626] focus:text-[#BC2626] md:max-2xl:hidden">
                            <Link href="/">
                                <img src="../images/mcb-logo.svg" alt="MCB" className="h-10 w-auto" />
                            </Link>
                        </div>

                        {/* Desktop nav */}
                        <nav className="font-minecraftfive hidden w-full items-center justify-between gap-6 text-sm md:max-2xl:flex">
                            <Link
                                href="/"
                                className="text-base font-normal tracking-wide text-[#101010] transition duration-300 ease-in-out hover:text-[#BC2626] hover:delay-50 focus:text-[#BC2626]"
                            >
                                Beranda
                            </Link>
                            <Link
                                href="/about"
                                className="text-base font-normal tracking-wide text-[#101010] transition duration-300 ease-in-out hover:text-[#BC2626] hover:delay-50 focus:text-[#BC2626]"
                            >
                                Tentang
                            </Link>
                            <Link
                                href="/guide"
                                className="text-base font-normal tracking-wide text-[#101010] transition duration-300 ease-in-out hover:text-[#BC2626] hover:delay-50 focus:text-[#BC2626]"
                            >
                                Panduan
                            </Link>
                            <Link
                                href="/help"
                                className="text-base font-normal tracking-wide text-[#101010] transition duration-300 ease-in-out hover:text-[#BC2626] hover:delay-50 focus:text-[#BC2626]"
                            >
                                Bantuan
                            </Link>
                        </nav>

                        {/* Mobile toggle button */}
                        <div className="flex justify-end md:max-2xl:hidden">
                            <Button
                                onClick={toggleMenu}
                                className="font-minecraftfive h-auto cursor-pointer rounded-none bg-transparent text-base tracking-wide text-[#101010] shadow-none transition hover:bg-transparent hover:text-[#BC2626] focus:text-[#101010] active:text-slate-400"
                            >
                                {isOpen ? 'Tutup' : 'Menu'}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile nav */}
            <div
                className={`fixed inset-0 z-40 block h-screen w-full bg-[#F0F0F0] transition-all duration-700 ease-in-out md:max-2xl:hidden ${
                    isOpen ? '-translate-y-0' : '-translate-y-200 opacity-0 delay-500'
                }`}
            >
                <div
                    className={`mx-auto flex h-screen w-full flex-col justify-center gap-y-20 rounded-xl p-6 transition-opacity duration-700 ease-in-out sm:justify-start ${
                        isOpen ? 'opacity-100 delay-700' : 'opacity-0'
                    }`}
                >
                    <nav className="font-lato min-xs:gap-[3vh] min-xs:pt-[20vh] min-xs:text-2xl mx-auto my-auto flex w-[95%] flex-col gap-10 pt-0 text-left text-4xl md:my-40">
                        <Link
                            onClick={toggleMenu}
                            href="/"
                            className="flex h-10 justify-between font-normal text-[#101010] transition ease-in-out active:text-[#BC2626]"
                        >
                            Beranda
                        </Link>
                        <Link
                            onClick={toggleMenu}
                            href="/about"
                            className="flex h-10 justify-between font-normal text-[#101010] transition ease-in-out active:text-[#BC2626]"
                        >
                            Tentang
                        </Link>
                        <Link
                            onClick={toggleMenu}
                            href="/guide"
                            className="flex h-10 justify-between font-normal text-[#101010] transition ease-in-out active:text-[#BC2626]"
                        >
                            Panduan
                        </Link>
                        <Link
                            onClick={toggleMenu}
                            href="/help"
                            className="flex h-10 justify-between font-normal text-[#101010] transition ease-in-out active:text-[#BC2626]"
                        >
                            Bantuan
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
