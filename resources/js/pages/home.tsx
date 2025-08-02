import { Countdown } from "@/components/countdown";
import { Credits } from "@/components/credits";
import { CtaBtn } from "@/components/cta-btn";
import { Timeline } from "@/components/timeline-tab";
import { Drawer } from "@/components/ui/drawer";
import {
    ALERT_DATE,
    FORM_DATE,
    HUTRI_LOGO,
    TARGET_DATE,
    VIDEO_BANNER,
} from "@/data/config";
import { SectionType, homeSection } from "@/data/pages";
import AppLayout from "@/layouts/app-layout";
import { Head, Link } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";

const isAfterDate = (date: Date) => {
    return new Date() >= date;
};

export default function Home() {
    const [section1, section2] = homeSection as [SectionType, SectionType];

    // fungsi jadwal tampilan section dan drawer
    const showSections = isAfterDate(FORM_DATE);
    const hideDrawer = isAfterDate(ALERT_DATE);

    // fungsi efek parallax
    const [scrollX, setScrollX] = useState(0);
    const [scrollY, setScrollY] = useState(0);

    // fungsi drawer
    const [showDrawer, setShowDrawer] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const lastSectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollX(window.scrollY);
            setScrollY(window.scrollY);

            const viewportBottom = window.scrollY + window.innerHeight;
            const sec = sectionRef.current;
            const lastSec = lastSectionRef.current;
            const isMobile = window.innerWidth < 768;
            if (sec && lastSec) {
                const sec2Bottom = sec.offsetTop + sec.offsetHeight;
                const lastBottom = lastSec.offsetTop + lastSec.offsetHeight;

                setShowDrawer(
                    isMobile &&
                        viewportBottom > sec2Bottom &&
                        viewportBottom < lastBottom
                );
            }
        };

        if (!showDrawer) {
            (document.activeElement as HTMLElement)?.blur();
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [showDrawer]);

    return (
        <AppLayout>
            <Head title="Minecrafter Bersatu Vol. 3" />
            <div className="font-opensans mb-40 flex min-h-screen w-full flex-col bg-[#F0F0F0] text-[#101010] select-none dark:bg-[#F0F0F0]">
                {/* Section 1 */}

                <section
                    className="h-auto min-h-screen w-full bg-cover bg-top-right bg-no-repeat"
                    style={{ backgroundImage: `url("../images/mcb-bg.svg")` }}
                >
                    <div
                        className="flex w-full flex-col items-center justify-center gap-[25vh] pt-[25vh] lg:max-2xl:pt-[30vh]"
                        style={{ transform: `translateY(${scrollY * -0.2}px)` }}
                    >
                        <div className="flex w-full items-center justify-center">
                            <h1 className="font-minercraftory text-center text-5xl font-normal text-[#BC2626] max-[360px]:text-4xl min-[2160px]:text-[100px] lg:text-6xl [1440px]:text-8xl">
                                #MCB<span className="text-[#101010]">2025</span>
                            </h1>
                        </div>

                        <div className="relative flex w-full flex-col items-start justify-between gap-10 px-[5%] xl:max-2xl:flex-row xl:max-2xl:items-center">
                            <div className="flex flex-2/5 items-center gap-3">
                                <img
                                    src="../images/mcb-logo.svg"
                                    alt="MCB"
                                    className="font-minecraftfive hidden h-20 w-auto md:max-2xl:block"
                                />
                                <p className="font-opensans w-64 text-left text-xs font-medium text-pretty hyphens-auto text-[#101010]">
                                    {section1.text}
                                </p>
                            </div>
                            <div className="font-lato mx-auto flex w-full flex-col rounded-3xl bg-white p-5 shadow-lg sm:w-[80%] lg:w-[60%] xl:max-2xl:mx-0 xl:max-2xl:w-[540px]">
                                <div className="flex w-full flex-row items-center justify-between text-right text-[#101010] sm:max-2xl:flex-col sm:max-2xl:items-end">
                                    <h4 className="text-3xl font-semibold">
                                        Vol. 3
                                    </h4>
                                    <p className="text-base">31 Agustus 2025</p>
                                </div>
                                <Countdown targetDate={TARGET_DATE} />
                                <CtaBtn
                                    mode="button"
                                    className="mx-auto my-3 mt-3 h-10 w-[50%] cursor-pointer bg-[#101010] sm:max-2xl:mx-0 sm:max-2xl:my-0 sm:max-2xl:-mt-5 sm:max-2xl:ml-[70%] sm:max-2xl:w-[30%]"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2 */}

                <section ref={sectionRef} className="my-20 h-auto pt-20">
                    <div
                        className="relative -top-15 z-20 w-full max-[360px]:-top-20 sm:-top-20 lg:max-2xl:-top-20"
                        style={{ transform: `translateY(${scrollY * -0.1}px)` }}
                    >
                        <div
                            className="absolute -top-10 -right-30 h-80 w-[500px] bg-contain bg-center bg-no-repeat sm:right-20 lg:max-2xl:right-40"
                            style={{
                                transform: `translateX(${scrollX * 0.5}px)`,
                                backgroundImage: `url("../images/megamendung-a.svg")`,
                            }}
                        />
                        <div
                            className="absolute -top-20 -left-50 h-80 w-[500px] bg-contain bg-center bg-no-repeat sm:left-10 lg:max-2xl:left-20"
                            style={{
                                transform: `translateX(${scrollX * -0.3}px)`,
                                backgroundImage: `url("../images/megamendung-b.svg")`,
                            }}
                        />
                    </div>

                    <div className="relative h-[500px] w-full px-[5%]">
                        <video
                            src={VIDEO_BANNER}
                            autoPlay
                            loop
                            muted
                            className="h-full w-full object-cover opacity-70 shadow-[4px_3px_10px_3px_rgba(0,0,0,0.3)]"
                        />
                        <img
                            src={HUTRI_LOGO}
                            className="absolute bottom-0 left-[7vw] h-24 w-auto object-contain object-center"
                        />
                        <div className="absolute inset-0 h-full w-full bg-transparent" />
                    </div>
                </section>

                {showSections && (
                    <>
                        {/* Section 3 */}

                        <section className="relative my-14 h-auto md:h-[600px] lg:max-2xl:h-[500px]">
                            <div className="flex flex-col gap-5 px-[5%] md:max-2xl:gap-10 lg:max-2xl:flex-row">
                                <h3 className="font-lato mx-auto w-full px-0 text-left text-3xl font-black text-balance md:w-[70%] lg:w-[20%] lg:max-2xl:px-[5%] xl:max-2xl:w-[30%]">
                                    Linimasa dan Susunan Acara
                                </h3>
                                <Timeline />
                            </div>
                            <div
                                className="absolute top-40 hidden h-80 w-[600px] bg-contain bg-center bg-no-repeat lg:-left-80 lg:max-2xl:block xl:max-2xl:-left-60"
                                style={{
                                    backgroundImage: `url("../images/megamendung-d.svg")`,
                                }}
                            />
                        </section>

                        {/* Section 4 */}

                        <section className="my-14 h-auto px-[5%]">
                            <div className="flex h-auto min-h-[300px] flex-col items-center justify-center gap-8 border-5 border-t-[#D0D0D0] border-r-[#D0D0D0] border-b-[#FFFFFF] border-l-[#FFFFFF] bg-[#D9D9D9]/70 px-5 py-10 md:px-10">
                                <h3 className="font-lato text-center text-3xl font-black">
                                    Rayakan Hari Kemerdekaan Bersama
                                </h3>
                                <p className="w-full text-center text-sm min-[1440px]:max-2xl:w-[50%] md:w-[80%]">
                                    {section2.text}
                                </p>
                                <div className="mt-10 flex w-full flex-col gap-5">
                                    <CtaBtn
                                        mode="button"
                                        className="font-lato mx-auto h-10 w-[90%] cursor-pointer border border-[#101010] bg-transparent text-center font-normal text-[#101010] hover:border-[#BC2626] hover:bg-transparent hover:text-[#BC2626] min-[1440px]:max-2xl:w-[10%] sm:w-[60%] md:w-[50%] lg:w-[30%]"
                                    >
                                        Ikuti acara
                                    </CtaBtn>
                                    <Link
                                        href="/about"
                                        className="mx-auto w-[60%] text-center text-xs hover:text-[#BC2626] hover:underline md:w-[20%]"
                                    >
                                        Pelajari selengkapnya
                                    </Link>
                                </div>
                            </div>
                        </section>

                        {/* Section 5 */}

                        <section className="my-14 h-auto">
                            <Credits />
                        </section>
                    </>
                )}

                {/* Section 6 */}

                <section ref={lastSectionRef} className="my-14 h-auto px-[5%]">
                    <div className="font-lato h-full w-full">
                        <h3 className="ml-0 text-3xl font-black sm:ml-5 md:max-2xl:ml-16">
                            Arsip
                        </h3>
                        <div className="justify-arround flex w-full pt-14">
                            <a
                                className="mx-auto block text-center text-sm font-normal hover:text-[#BC2626] focus:opacity-40"
                                title="Vol.1"
                                href="https://www.youtube.com/live/2fII-MVkp14?si=ZaSxMJBqJ3ApCI0z"
                            >
                                [2023]
                            </a>
                            <a
                                className="mx-auto block text-center text-sm font-normal hover:text-[#BC2626] focus:opacity-40"
                                title="Vol.2"
                                href="https://www.youtube.com/live/efN5g1wQBsg?feature=share"
                            >
                                [2024]
                            </a>
                            <a
                                className="mx-auto block text-center text-sm font-normal hover:text-[#BC2626] focus:opacity-40"
                                title="Vol.3: Segera kembali"
                            >
                                [2025]
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            {/* CTA Mobile Drawer */}
            {!hideDrawer && (
                <Drawer open={showDrawer} preventScrollRestoration>
                    <CtaBtn mode="drawer" className="h-12" />
                </Drawer>
            )}
        </AppLayout>
    );
}
