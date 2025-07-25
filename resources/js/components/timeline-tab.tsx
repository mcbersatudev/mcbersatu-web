import { tabsConfig as tabs } from '@/data/config';
import clsx from 'clsx';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from './ui/carousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function Timeline() {
    const today = useMemo(() => {
        const d = new Date();
        d.setHours(0, 0, 0, 0);
        return d;
    }, []);

    const defaultTabValue = useMemo(() => {
        const sorted = [...tabs].sort((a, b) => a.date.getTime() - b.date.getTime());
        const passed = sorted.filter((tab) => tab.date <= today);
        return passed.length > 0 ? passed[passed.length - 1].value : sorted[0].value;
    }, [today]);

    // Carousel API & syncing with Tabs
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();
    const defaultIndex = useMemo(() => tabs.findIndex((t) => t.value === defaultTabValue), [defaultTabValue]);
    const [activeIndex, setActiveIndex] = useState(defaultIndex);
    const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        if (carouselApi && defaultIndex >= 0) {
            carouselApi.scrollTo(defaultIndex);
            setActiveIndex(defaultIndex);
        }
    }, [carouselApi, defaultIndex]);

    useEffect(() => {
        if (!carouselApi) return;
        const onSelect = () => setActiveIndex(carouselApi.selectedScrollSnap());
        carouselApi.on('select', onSelect);
        return () => void carouselApi.off('select', onSelect);
    }, [carouselApi]);

    useEffect(() => {
        const el = contentRefs.current[activeIndex];
        if (el) el.scrollTop = 0;
    }, [activeIndex]);

    const activeTab = tabs[activeIndex];
    const [isHiddenLeft, setIsHiddenLeft] = useState(false);
    const [isHiddenRight, setIsHiddenRight] = useState(false);

    return (
        <>
            <Tabs
                defaultValue={defaultTabValue}
                className="mx-auto hidden w-full px-0 min-[1440px]:w-[30%] md:w-[80%] md:max-2xl:block lg:w-full lg:max-2xl:px-[5%] xl:w-[70%]"
            >
                <TabsList className="flex w-full gap-x-1 rounded-none border-b border-[#BC2626] bg-transparent p-0 md:max-2xl:gap-3">
                    {tabs.map((tab, tabIdx) => (
                        <TabsTrigger
                            key={`${tab.value}-${tabIdx}`}
                            value={tab.value}
                            className="lg-max-2xl:text-base flex-1/4 cursor-pointer rounded-none p-2 text-center text-sm text-[#101010] hover:border-b-2 hover:border-b-[#E74342] data-[state=active]:border-b-2 data-[state=active]:border-b-[#E74342] data-[state=active]:bg-white/30 lg:max-2xl:w-28 dark:text-[#101010] dark:hover:border-b-[#E74342] dark:data-[state=active]:border-b-[#E74342] dark:data-[state=active]:bg-white/30"
                        >
                            {tab.label}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {tabs.map((tab, tabIdx) => (
                    <TabsContent key={`${tab.value}-${tabIdx}`} value={tab.value}>
                        {tab.slots.map((slot, slotIdx) => (
                            <div key={`${tab.value}-slot-${slotIdx}`} className="my-7 flex w-full gap-x-8">
                                <p className="w-[30%] text-[#101010]/70">{slot.time}</p>
                                <div className="w-[90%]">
                                    <h5 className="text-xl font-bold text-[#101010]">{slot.title}</h5>
                                    <p className="mt-5 text-[#101010]/70">{slot.description}</p>
                                </div>
                            </div>
                        ))}
                    </TabsContent>
                ))}
            </Tabs>

            {/* === Mobile Carousel === */}
            <div className="block md:max-2xl:hidden">
                <Carousel setApi={setCarouselApi} className="mx-auto my-5 mb-20 w-full overflow-hidden select-none">
                    <CarouselContent className="mt-16 flex h-80 w-full items-start space-x-0">
                        {tabs.map((tab, tabIdx) => (
                            <CarouselItem key={`${tab.value}-carousel-${tabIdx}`} className="h-80 w-full flex-none overflow-hidden">
                                <div
                                    ref={(el) => {
                                        contentRefs.current[tabIdx] = el;
                                    }}
                                    className="h-full overflow-y-auto [&::-webkit-scrollbar]:hidden"
                                >
                                    {tab.slots.map((slot, slotIdx) => (
                                        <div key={`${tab.value}-carousel-slot-${slotIdx}`} className="my-8 flex w-full flex-col gap-2">
                                            <p className="w-full text-sm text-[#101010]/70">{slot.time}</p>
                                            <div className="w-[80%]">
                                                <h5 className="text-xl font-bold text-[#101010]">{slot.title}</h5>
                                                <p className="mt-4 text-[#101010]/70">{slot.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div className="absolute top-0 flex h-16 w-full items-center justify-between gap-5 border-b-3 border-b-[#E74342] bg-white/30 p-3 dark:border-b-[#E74342] dark:bg-white/30">
                        {activeTab && (
                            <div
                                key={`${activeTab.value}-active-label`}
                                className="mb-2 text-center text-[#101010] dark:text-[#101010]"
                                data-value={activeTab.value}
                            >
                                {activeTab.label}
                            </div>
                        )}
                        <div className="flex gap-3">
                            <CarouselPrevious
                                onMouseEnter={() => setIsHiddenLeft(true)}
                                onMouseLeave={() => setIsHiddenLeft(false)}
                                className={clsx(
                                    'static top-0 z-10 my-auto h-8 w-8 translate-0 cursor-pointer border-none bg-transparent text-[#1e1e1e] shadow-md shadow-black/20 transition-opacity hover:text-zinc-400 disabled:opacity-30 dark:text-[#d9d9d9]',
                                    isHiddenLeft ? 'opacity-100' : 'opacity-100',
                                )}
                            />
                            <CarouselNext
                                onMouseEnter={() => setIsHiddenRight(true)}
                                onMouseLeave={() => setIsHiddenRight(false)}
                                className={clsx(
                                    'static top-0 z-10 my-auto h-8 w-8 translate-0 cursor-pointer border-none bg-transparent text-[#1e1e1e] shadow-md shadow-black/20 transition-opacity hover:text-zinc-400 disabled:opacity-30 dark:text-[#d9d9d9]',
                                    isHiddenRight ? 'opacity-100' : 'opacity-100',
                                )}
                            />
                        </div>
                    </div>
                </Carousel>
            </div>
        </>
    );
}
