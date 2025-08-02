import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { CreditInfo, creditsConfig } from "@/data/config";
import AutoScroll from "embla-carousel-auto-scroll";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export function Credits() {
    const [sponsor, community, officialDev, eventPartner, mediaPartner] =
        creditsConfig as [
            CreditInfo,
            CreditInfo,
            CreditInfo,
            CreditInfo,
            CreditInfo
        ];

    // Plugin Carousel
    const plugin = React.useRef(
        AutoScroll({
            speed: 1, // slow constant speed (px/frame)
            startDelay: 0,
            playOnInit: true,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        })
    );

    // Helper untuk render gambar atau placeholder
    const renderLogo = (
        plot: { image?: string; name: string; url: string },
        idx: number
    ) => (
        <Tooltip key={`${plot.name || "logo"}-${idx}`}>
            <TooltipTrigger>
                <a
                    href={plot.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-24 md:max-2xl:h-28"
                >
                    {plot.image ? (
                        <img
                            src={plot.image}
                            alt={plot.name}
                            className="h-24 w-auto md:max-2xl:h-28"
                        />
                    ) : (
                        <div className="h-24 w-24 rounded-full bg-[#D9D9D9] md:max-2xl:h-28 md:max-2xl:w-28" />
                    )}
                </a>
            </TooltipTrigger>
            {plot.name && (
                <TooltipContent side="bottom">
                    <p>{plot.name}</p>
                </TooltipContent>
            )}
        </Tooltip>
    );

    // Siapkan sections untuk Official Dev, Event Partner, dan Media Partner
    const sections = [
        {
            key: "officialDev",
            title: officialDev.title,
            plots: officialDev.plots,
        },
        {
            key: "eventPartner",
            title: eventPartner.title,
            plots: eventPartner.plots,
        },
        {
            key: "mediaPartner",
            title: mediaPartner.title,
            plots: mediaPartner.plots,
        },
    ];

    // Filter hanya sections yang memiliki setidaknya satu plot.name
    const available = sections.filter((sec) =>
        sec.plots.some((plot) => plot.name)
    );

    return (
        <div className="my-10 flex w-full flex-col gap-20">
            {/* Sponsor */}
            {sponsor.plots.some((plot) => plot.name) && (
                <div className="font-lato flex w-full flex-col items-center gap-10 px-[5%]">
                    <h5 className="text-center text-xl font-bold">
                        {sponsor.title}
                    </h5>
                    <div className="flex flex-wrap items-center justify-center gap-10">
                        {sponsor.plots.map((plot, idx) =>
                            renderLogo(plot, idx)
                        )}
                    </div>
                </div>
            )}

            {/* Community */}
            {community.plots.some((plot) => plot.name) && (
                <div className="font-lato flex w-full flex-col items-center gap-10">
                    <h5 className="text-center text-xl font-bold">
                        {community.title}
                    </h5>

                    <Carousel
                        opts={{ loop: true, align: "center" }}
                        plugins={[plugin.current]}
                        className="relative"
                    >
                        <CarouselContent className="flex items-center gap-10 px-10">
                            {community.plots.map((plot, idx) => (
                                <CarouselItem
                                    key={`${plot.name || "carousel"}-${idx}`}
                                    className="flex-none"
                                >
                                    {renderLogo(plot, idx)}
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            )}

            {/* Dynamic Partners Section */}
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-20 flex-col md:max-2xl:flex-row md:max-2xl:justify-around px-[5%]">
                {available.map((sec) => (
                    <div
                        key={sec.key}
                        className="font-lato flex w-full flex-col items-center gap-10 md:w-auto"
                    >
                        <h5 className="text-center text-xl font-bold">
                            {sec.title}
                        </h5>
                        <div className="flex flex-wrap items-center justify-center gap-10">
                            {sec.plots.map((plot, i) => renderLogo(plot, i))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
