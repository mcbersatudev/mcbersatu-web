import { CtaBtn } from '@/components/cta-btn';
import { Drawer } from '@/components/ui/drawer';
import { ALERT_DATE } from '@/data/config';
import { SectionType, guideSection } from '@/data/pages';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';

const isAfterDate = (date: Date) => {
    return new Date() >= date;
};

export default function Guide() {
    const [section1, section2, section3] = guideSection as [SectionType, SectionType, SectionType];

    // fungsi jadwal tampilan drawer
    const hideDrawer = isAfterDate(ALERT_DATE);

    // fungsi drawer
    const [, setScrollX] = useState(0);
    const [, setScrollY] = useState(0);
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

                setShowDrawer(isMobile && viewportBottom > sec2Bottom && viewportBottom < lastBottom);
            }
        };

        if (!showDrawer) {
            (document.activeElement as HTMLElement)?.blur();
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [showDrawer]);

    return (
        <AppLayout>
            <Head title="Panduan" />
            <div className="font-opensans mb-40 flex min-h-screen w-full flex-col bg-[#F0F0F0] text-[#101010] dark:bg-[#F0F0F0]">
                {/* Section 1 */}

                <section
                    ref={sectionRef}
                    className="h-auto min-h-screen w-full bg-cover bg-top-right bg-no-repeat select-none"
                    style={{ backgroundImage: `url("../images/mcb-bg.svg")` }}
                >
                    <div className="flex w-full items-center gap-[50vh] pt-[40vh] lg:max-2xl:pt-[60vh]">
                        <div className="flex w-full items-center">
                            <h1 className="font-lato ml-[10%] w-[20%] text-left text-4xl font-black text-[#101010]">PANDUAN MINECRAFTER BERSATU</h1>
                        </div>
                        <div className="relative block h-[515px] w-full md:max-2xl:hidden" />
                    </div>
                </section>

                {/* Section 2 */}

                <section className="my-14 h-full w-full px-[5%]">
                    <div className="mx-auto block w-auto items-start justify-center gap-14 md:w-[80%] lg:max-2xl:flex lg:max-2xl:w-auto lg:max-2xl:justify-between">
                        <p className="my-0 w-auto text-justify text-sm font-normal whitespace-pre-line lg:max-2xl:w-[50%]">{section1.text}</p>
                    </div>

                    <div className="mx-auto mt-14 flex w-auto flex-col justify-around gap-x-8 py-14 md:w-[80%] lg:max-2xl:w-auto lg:max-2xl:flex-row">
                        <h3 className="mb-8 w-auto text-left text-3xl font-bold lg:w-[20%] xl:max-2xl:w-[10%]">Perlombaan Minigames</h3>
                        <p className="w-auto text-justify text-sm font-normal whitespace-pre-line lg:max-2xl:w-[60%]">{section2.text}</p>
                    </div>

                    {section3.text && (
                        <div className="mx-auto flex w-auto flex-col justify-around gap-x-8 pt-14 md:w-[80%] lg:max-2xl:w-auto lg:max-2xl:flex-row">
                            <h3 className="mb-8 w-auto text-left text-3xl font-bold lg:w-[20%] xl:max-2xl:w-[10%]">Perlombaan Karya</h3>
                            <p className="w-auto text-justify text-sm font-normal whitespace-pre-line lg:max-2xl:w-[60%]">{section3.text}</p>
                        </div>
                    )}
                </section>

                {/* Section 3 */}
                <section ref={lastSectionRef} />
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
