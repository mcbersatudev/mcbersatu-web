import { SectionType, homeSection } from '@/data/pages';

export default function AppFooter() {
    const [section1] = homeSection as [SectionType, SectionType];

    return (
        <footer>
            <div className="mx-auto flex w-full justify-center bg-[#800000] px-[5%] select-none min-[1440px]:w-[95%] min-[2160px]:w-[90%]">
                <div className="flex w-full gap-5">
                    <div className="relative flex h-full flex-1/4 justify-center">
                        <div className="absolute right-8 h-full w-[100px] bg-[url(../images/mcb-pattern.svg)] bg-cover bg-center bg-no-repeat md:max-2xl:static md:max-2xl:h-[560px]" />
                    </div>

                    <div className="flex h-full flex-3/4 flex-col items-end justify-end gap-40 py-10">
                        <div className="flex flex-col items-end gap-5">
                            <div className="h-20 w-20 bg-[url(../images/mcb-w-logo.svg)] bg-contain bg-center bg-no-repeat" />
                            <p className="font-opensans w-64 text-right text-sm text-balance text-white max-[360px]:w-56 max-[360px]:text-xs sm:w-[300px]">
                                {section1.text}
                            </p>
                            <div className="mt-10 flex gap-10">
                                <a title="Instagram" href="https://www.instagram.com/mcbersatu/" target="_blank" className="group">
                                    <div className="h-8 w-8 bg-[url(../images/instagram.svg)] bg-contain bg-center bg-no-repeat group-hover:scale-110" />
                                </a>
                                <a title="Tiktok" href="https://www.tiktok.com/@mcbersatu" target="_blank" className="group">
                                    <div className="h-8 w-8 bg-[url(../images/tiktok.svg)] bg-contain bg-center bg-no-repeat group-hover:scale-110" />
                                </a>
                                <a title="X" href="https://www.x.com/mcbersatu/" target="_blank" className="group">
                                    <div className="h-8 w-8 bg-[url(../images/twitterx.svg)] bg-contain bg-center bg-no-repeat group-hover:scale-110" />
                                </a>
                            </div>
                        </div>

                        <p className="text-right text-xs font-light text-balance text-white">Proudly presented by &copy; Minecrafter Bersatu.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
