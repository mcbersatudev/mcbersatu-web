// SETUP COUNTDOWN TIME /////////////////////////////////////////////////////////////////////////////////////////////

export const TARGET_DATE = new Date("2025-08-31T12:30:00"); //ubah tanggal
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
    end: "2025-09-14T18:00:00+07:00",
    location: "Discord MineInd & Server Minecraft MCB",
};

export const CALENDAR_MSG = "";

// Form
export const FORM_URL = "https://forms.gle/J6bZGmpmKxsqLeSU8"; // link gform pendaftaran peserta
export const FORM_MSG =
    "Pendaftaran peserta diperpanjang hingga 23 Agustus 2025";
export const FORM_DATE = new Date("2025-08-01T08:00:00"); // tanggal form dibuka

// Livestream
export const YT_URL = "https://www.youtube.com/@MineindCommunity"; // link channel yt tuan rumah
export const YT_MSG = "Saksikan siaran langsung keseruan #MCB2025 sekarang!";
export const YT_DATE = new Date("2025-08-31T12:30:00");

// Alert
export const ALERT_MSG = "Minecraft Bersatu Vol. 3 - 2025 resmi tamat";
export const ALERT_DES =
    "Terimakasih atas partisipasinya, sampai jumpa di acara MCBersatu selanjutnya!";
export const ALERT_DATE = new Date("2025-09-14T18:00:00");
//

// SETUP VIDEO BANNER ///////////////////////////////////////////////////////////////////////////////////////////////

export const VIDEO_SWITCH_DATE = FORM_DATE;

export const VIDEO_BANNER =
    new Date() >= VIDEO_SWITCH_DATE
        ? "../videos/mcb.mp4"
        : "https://cdn.discordapp.com/attachments/1400811660540772373/1400980080427270358/teaser-2025.mp4?ex=68a1b9a0&is=68a06820&hm=b28b94ef8830fa0af7bfd992b5307e92ac3a9f708b382c4c33d8983008be1870&"; // ubah file video banner

export const HUTRI_LOGO =
    "https://images.ctfassets.net/yucmpusk2vdh/4UnfB7xo4n5t7qMIWBkjvf/e84a2e98e700f75fda66c07046f88099/hut80ri.png"; // ubah file logo hut ri
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
                time: "08.00 WIB - 23/08",
                title: "Pendaftaran peserta",
                description:
                    "Dibuka pendaftaran peserta hingga tanggal 23 Agustus 2025.",
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
        label: "14 September 2025",
        date: new Date("2025-09-14"),
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
                name: "MKShopMC",
                image: "https://images.ctfassets.net/yucmpusk2vdh/50SnFDoYxjfOdsBzd8qlxL/0595ff6018a50493b7dcdb4c7cb23a9a/mkshopmc.png",
                url: "https://www.instagram.com/mkshopmc_",
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
        ],
    },
    {
        title: "Berkolaborasi Dengan",
        plots: [
            {
                name: "MinecraftID",
                image: "https://images.ctfassets.net/yucmpusk2vdh/32qKPHSFehPbWYs24nw1OY/010c9a53d6d1b41d99c76bc9c3c75198/minecraftid.png",
                url: "https://www.minecraft-id.net/",
            },
            {
                name: "Minecraft Sejati",
                image: "https://images.ctfassets.net/yucmpusk2vdh/2RiAFFxMwbiHrSPDTgbA7j/9d331bc9f7e03c47679cff11bd772cc8/mcsejati.png",
                url: "https://s.id/mcsejatigroups",
            },
            {
                name: "MineInd Community",
                image: "https://images.ctfassets.net/yucmpusk2vdh/1Zd1m4APoONE2FJCs6PGUl/678d4f13a8b4a0fa6dcaf26eb9f906bb/mineind.png",
                url: "https://dsc.gg/mineind",
            },
            {
                name: "Chronoscraft",
                image: "https://images.ctfassets.net/yucmpusk2vdh/7L2RqfoTLyUKKO1DFk9G0g/e915c510112e7de61a33791867424880/chronoscraft.png",
                url: "https://chat.whatsapp.com/HLHWgwpmDAnCnJmIwWIq4a?mode=r_t",
            },
            {
                name: "Sahabat Minecrafter",
                image: "https://images.ctfassets.net/yucmpusk2vdh/UCrmLvIUc7eXQJmq58KRS/216932676f85e30f7967c19fb2925cd0/sahabatmc.png",
                url: "https://sahabatmcid.my.id",
            },
            {
                name: "Motion Minecraft",
                image: "https://images.ctfassets.net/yucmpusk2vdh/1sg63EuyD01DkB0NJ0lkoK/aad0221b6d0bcfcc8321c8a37601ace2/motionmc.png",
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
                image: "https://images.ctfassets.net/yucmpusk2vdh/3bEzfjCISbxaEXMwbwUH3t/fbbdf6710f92b9d638b9a86d1f1e0716/yuemi.png",
                url: "https://dsc.gg/yuemi",
            },
            {
                name: "Raznar",
                image: "https://images.ctfassets.net/yucmpusk2vdh/7c8ZzJpNuUVz2zaLLhkyJB/745b523c09fd61224c6457cde3044941/raznar.png",
                url: "https://raznar.id/",
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
                name: "Warta Minecraft",
                image: "https://images.ctfassets.net/yucmpusk2vdh/7JslVziVS2R4am21B3novG/b116ab542bce477e93f786b99fe5a790/wartamc.png",
                url: "https://www.instagram.com/wartamc",
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
        ],
    },
];
//
