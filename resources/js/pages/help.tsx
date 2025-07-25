import { CtaBtn } from '@/components/cta-btn';
import { FaqSection } from '@/components/faq-section';
import { Button } from '@/components/ui/button';
import { Drawer } from '@/components/ui/drawer';
import { ALERT_DATE } from '@/data/config';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';

const isAfterDate = (date: Date) => {
    return new Date() >= date;
};

export default function Help() {
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

    // fungsi sticky FAQ
    const section2Ref = useRef<HTMLElement>(null);
    const faqRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [faqStyle, setFaqStyle] = useState<React.CSSProperties>({ position: 'relative', top: 0, width: 'auto' });
    const [contentStyle, setContentStyle] = useState<React.CSSProperties>({ marginLeft: 0 });

    useEffect(() => {
        const handleScrollFaq = () => {
            const faqEl = faqRef.current;
            const contEl = contentRef.current;
            const sectEl = section2Ref.current;
            if (!faqEl || !contEl || !sectEl) return;

            const w = window.innerWidth;
            const isDesktop = w >= 1024;
            const headerOffset = 200;
            const scrollY = window.scrollY;
            const sectTop = sectEl.offsetTop;
            const sectHeight = sectEl.offsetHeight;
            const sectBottom = sectTop + sectHeight;
            const faqHeight = faqEl.offsetHeight;
            const faqWidth = faqEl.offsetWidth;
            const fixedTop = headerOffset;
            const scrollPos = scrollY + fixedTop;

            if (!isDesktop || scrollPos < sectTop) {
                // normal flow
                setFaqStyle({ position: 'relative', top: 0, width: 'auto' });
                setContentStyle({ marginLeft: 0 });
            } else if (scrollPos + faqHeight < sectBottom) {
                // sticky
                setFaqStyle({ position: 'fixed', top: fixedTop, width: faqWidth });
                // apply content margin equal to sidebar width + gap (e.g., 40px)
                setContentStyle({ marginLeft: faqWidth + 40 });
            } else {
                // after section bottom
                const bottomOffset = sectHeight - faqHeight;
                setFaqStyle({ position: 'absolute', top: bottomOffset, width: faqWidth });
                setContentStyle({ marginLeft: faqWidth + 40 });
            }
        };
        window.addEventListener('scroll', handleScrollFaq);
        window.addEventListener('resize', handleScrollFaq);
        handleScrollFaq();
        return () => {
            window.removeEventListener('scroll', handleScrollFaq);
            window.removeEventListener('resize', handleScrollFaq);
        };
    }, []);

    // fungsi direct email
    const handleClick = () => {
        window.location.href = 'mailto:panitia@mcbersatu.com?subject=Bantuan%20Minecrafter%20Bersatu'; // pasang link email
    };

    return (
        <AppLayout>
            <Head title="Bantuan" />
            <div className="font-opensans mb-40 flex min-h-screen w-full flex-col bg-[#F0F0F0] text-[#101010] dark:bg-[#F0F0F0]">
                {/* Section 1 */}

                <section
                    ref={sectionRef}
                    className="h-auto min-h-screen w-full bg-cover bg-top-right bg-no-repeat select-none"
                    style={{ backgroundImage: `url("../images/mcb-bg.svg")` }}
                >
                    <div className="flex w-full items-center gap-[50vh] pt-[40vh] lg:max-2xl:pt-[60vh]">
                        <div className="flex w-full items-center">
                            <h1 className="font-lato ml-[10%] w-[20%] text-left text-4xl font-black text-[#101010]">BANTUAN MINECRAFTER BERSATU</h1>
                        </div>
                        <div className="relative block h-[515px] w-full md:max-2xl:hidden" />
                    </div>
                </section>

                {/* Section 2 */}

                <section ref={section2Ref} className="relative my-14 flex w-full px-[5%]">
                    <div className="mx-auto flex w-[90%] flex-col justify-center gap-10 md:w-[80%] lg:max-2xl:w-[90%] lg:max-2xl:flex-row lg:max-2xl:justify-between">
                        <div ref={faqRef} style={faqStyle} className="space-y-5 transition-transform duration-300 select-none lg:w-[40%]">
                            <h3 className="text-left text-3xl font-bold text-pretty">Pertanyaan Umum</h3>
                            <p className="w-[80%] text-sm font-normal text-pretty lg:w-80">
                                Temukan jawaban yang mungkin ingin kamu ketahui terkait acara ini!
                            </p>
                        </div>

                        <div ref={contentRef} style={contentStyle} className="relative flex w-full justify-center lg:max-2xl:justify-end">
                            <FaqSection />
                        </div>
                    </div>
                </section>

                {/* Section 3 */}

                <section ref={lastSectionRef} className="my-14 h-full w-full px-[5%] select-none">
                    <div className="flex h-auto min-h-60 border-5 border-t-[#D0D0D0] border-r-[#D0D0D0] border-b-[#FFFFFF] border-l-[#FFFFFF] bg-[#D9D9D9]/70 px-5 py-10 md:px-10">
                        <div className="mx-auto my-10 flex w-full flex-col items-center justify-center gap-20 lg:max-2xl:w-[80%] lg:max-2xl:flex-row lg:max-2xl:justify-between">
                            <h3 className="font-lato w-full text-center text-3xl font-black lg:max-2xl:w-80 lg:max-2xl:text-left">
                                Butuh Bantuan atau Menemukan Masalah?
                            </h3>
                            <Button
                                onClick={handleClick}
                                className="font-lato mx-auto h-10 w-[90%] cursor-pointer border border-[#101010] bg-transparent text-center font-normal text-[#101010] hover:border-[#BC2626] hover:bg-transparent hover:text-[#BC2626] min-[1440px]:max-2xl:w-[10%] sm:w-[60%] md:w-[50%] lg:mx-0 lg:w-[30%]"
                            >
                                Hubungi Panitia
                            </Button>
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
