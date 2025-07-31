// SETUP COUNTDOWN TIME /////////////////////////////////////////////////////////////////////////////////////////////

export const TARGET_DATE = new Date("2025-08-24T12:30:00"); //ubah tanggal
//

// SETUP CTA ////////////////////////////////////////////////////////////////////////////////////////////////////////

// Calendar
export interface CalendarEvent {
    name: string;
    description: string;
    start: string;
    end: string;
    location: string;
}

export const CALENDAR_EVENT: CalendarEvent = {
    name: "Minecrafter Bersatu Vol. 3 - 2025",
    description: "Agustusan di Minecraft, Merayakan HUT 80 RI",
    start: "2025-08-31T12:30:00+07:00",
    end: "2025-09-07T18:00:00+07:00",
    location: "Discord MineInd & Server Minecraft MCB",
};

export const CALENDAR_MSG = "";

// Form
export const FORM_URL = "https://forms.gle/J6bZGmpmKxsqLeSU8"; // link gform pendaftaran peserta
export const FORM_MSG = "Pendaftaran peserta dibuka hingga 17 Agustus 2025";
export const FORM_DATE = new Date("2025-08-01T08:00:00"); // tanggal form dibuka

// Livestream
export const YT_URL = "https://www.youtube.com/@MineindCommunity"; // link channel yt tuan rumah
export const YT_MSG = "Saksikan siaran langsung keseruan #MCB2025 sekarang!";
export const YT_DATE = new Date("2025-08-24T12:30:00");

// Alert
export const ALERT_MSG = "Minecraft Bersatu Vol. 3 - 2025 resmi tamat";
export const ALERT_DES =
    "Terimakasih atas partisipasinya, sampai jumpa di acara MCBersatu selanjutnya!";
export const ALERT_DATE = new Date("2025-09-07T18:00:00");
//

// SETUP VIDEO BANNER ///////////////////////////////////////////////////////////////////////////////////////////////

export const VIDEO_SWITCH_DATE = FORM_DATE;

export const VIDEO_BANNER =
    new Date() >= VIDEO_SWITCH_DATE
        ? "https://gg6oykpzrfkxfwru.public.blob.vercel-storage.com/videos/mcb.mp4"
        : "https://gg6oykpzrfkxfwru.public.blob.vercel-storage.com/videos/teaser-2025.mp4"; // ubah file video banner

export const HUTRI_LOGO =
    "https://gg6oykpzrfkxfwru.public.blob.vercel-storage.com/images/logo/hutri/hut80ri.svg"; // ubah file logo hut ri
//

// SETUP TIMELINE ///////////////////////////////////////////////////////////////////////////////////////////////////

export interface Slot {
    time: string;
    title: string;
    description: string;
}

export interface TabInfo {
    value: string;
    label: string;
    date: Date;
    slots: Slot[];
}

// Kelola konfigurasi data timeline
export const tabsConfig: TabInfo[] = [
    {
        value: "date 1",
        label: "1 Agustus 2025",
        date: new Date("2025-08-01"),
        slots: [
            {
                time: "08.00 WIB - 17/08",
                title: "Pendaftaran peserta",
                description:
                    "Dibuka pendaftaran peserta hingga tanggal 17 Agustus 2025.",
            },
        ],
    },
    {
        value: "date 2",
        label: "31 Agustus 2025",
        date: new Date("2025-08-31"),
        slots: [
            {
                time: "12.30 - 13.00 WIB",
                title: "Upacara pembukaan",
                description:
                    "Memulai acara dengan upacara dan pengenalan singkat tentang acara",
            },
            {
                time: "13.00 - 17.00 WIB",
                title: "Perlombaan babak eliminasi",
                description:
                    "Peserta memainkan lomba minigames untuk memenangkan babak eliminasi dan memperebutkan posisi di babak final",
            },
            {
                time: "17.00 - 17.30 WIB",
                title: "Seleksi babak final",
                description:
                    "Panitia melakukan seleksi terhadap peserta lomba minigames untuk melanjutkan babak final",
            },
        ],
    },
    // {
    //     value: "date 3",
    //     label: "31 Agustus 2025",
    //     date: new Date("2025-08-31"),
    //     slots: [
    //         {
    //             time: "12.30 - 13.00 WIB",
    //             title: "Upacara Pembukaan final",
    //             description:
    //                 "Memulai babak final dengan upacara untuk disiarkan langsung",
    //         },
    //         {
    //             time: "13.00 - 17.00 WIB",
    //             title: "Perlombaan babak final (Bedrock)",
    //             description:
    //                 "Tim terbaik kategori Bedrock saling beradu untuk gelar juara.",
    //         },
    //     ],
    // },
    {
        value: "date 3",
        label: "7 September 2025",
        date: new Date("2025-09-07"),
        slots: [
            {
                time: "12.30 - 13.00 WIB",
                title: "Upacara Pembukaan final",
                description:
                    "Memulai babak final dengan upacara untuk disiarkan langsung",
            },
            {
                time: "13.00 - 17.00 WIB",
                title: "Perlombaan babak final",
                description:
                    "Tim terbaik kategori Java akan bertanding di babak final untuk menentukan pemenang.",
            },
            {
                time: "17.15 WIB - Selesai",
                title: "Penutupan & After party",
                description:
                    "Acara ditutup dengan pengumuman pemenang dan hiburan",
            },
        ],
    },
];
//

// SETUP CREDIT /////////////////////////////////////////////////////////////////////////////////////////////////////

export interface Plot {
    name: string;
    image: string;
    url: string;
}

export interface CreditInfo {
    title: string;
    plots: Plot[];
}

// Kelola konfigurasi data sponsor dan kontributor di sini
export const creditsConfig: CreditInfo[] = [
    {
        title: "Disponsori Oleh",
        plots: [
            {
                name: "",
                image: "",
                url: "",
            },
            {
                name: "",
                image: "",
                url: "",
            },
            {
                name: "",
                image: "",
                url: "",
            },
        ],
    },
    {
        title: "Berkolaborasi Dengan",
        plots: [
            {
                name: "MinecraftID",
                image: "https://gg6oykpzrfkxfwru.public.blob.vercel-storage.com/images/logo/komunitas/2025/minecraftid.svg",
                url: "https://www.minecraft-id.net/",
            },
            {
                name: "Minecraft Sejati",
                image: "https://gg6oykpzrfkxfwru.public.blob.vercel-storage.com/images/logo/komunitas/2025/mcsejati.svg",
                url: "https://s.id/mcsejatigroups",
            },
            {
                name: "MineInd Community",
                image: "https://gg6oykpzrfkxfwru.public.blob.vercel-storage.com/images/logo/komunitas/2025/mineind.svg",
                url: "https://dsc.gg/mineind",
            },
            {
                name: "Chronoscraft",
                image: "https://gg6oykpzrfkxfwru.public.blob.vercel-storage.com/images/logo/komunitas/2025/chronoscraft.svg",
                url: "https://chat.whatsapp.com/HLHWgwpmDAnCnJmIwWIq4a?mode=r_t",
            },
            {
                name: "Sahabat Minecrafter",
                image: "https://gg6oykpzrfkxfwru.public.blob.vercel-storage.com/images/logo/komunitas/2025/sahabatmc.svg",
                url: "https://sahabatmcid.my.id",
            },
            {
                name: "Motion Minecraft",
                image: "https://gg6oykpzrfkxfwru.public.blob.vercel-storage.com/images/logo/komunitas/2025/motionmc.svg",
                url: "https://discord.gg/motionime",
            },
            // {
            //     name: "",
            //     image: "",
            //     url: "",
            // },
            // {
            //     name: "",
            //     image: "",
            //     url: "",
            // },
            // {
            //     name: "",
            //     image: "",
            //     url: "",
            // },
            // {
            //     name: "",
            //     image: "",
            //     url: "",
            // },
        ],
    },
    {
        title: "Mitra IT Resmi",
        plots: [
            {
                name: "YueMi Development",
                image: "https://gg6oykpzrfkxfwru.public.blob.vercel-storage.com/images/logo/mitra/2025/yuemi.svg",
                url: "https://dsc.gg/yuemi",
            },
            {
                name: "",
                image: "",
                url: "",
            },
        ],
    },
    {
        title: "Mitra Acara",
        plots: [
            {
                name: "",
                image: "",
                url: "",
            },
            {
                name: "",
                image: "",
                url: "",
            },
            {
                name: "",
                image: "",
                url: "",
            },
        ],
    },
    {
        title: "Mitra Media",
        plots: [
            {
                name: "",
                image: "",
                url: "",
            },
            {
                name: "",
                image: "",
                url: "",
            },
            {
                name: "",
                image: "",
                url: "",
            },
            {
                name: "",
                image: "",
                url: "",
            },
        ],
    },
];
//
