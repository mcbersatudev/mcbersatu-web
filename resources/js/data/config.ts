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
    end: "2025-09-07T18:00:00+07:00",
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
export const ALERT_DATE = new Date("2025-09-07T18:00:00");
//

// SETUP VIDEO BANNER ///////////////////////////////////////////////////////////////////////////////////////////////

export const VIDEO_SWITCH_DATE = FORM_DATE;

export const VIDEO_BANNER =
    new Date() >= VIDEO_SWITCH_DATE
        ? "https://cdn.discordapp.com/attachments/1400811660540772373/1400979976001425448/mcb.mp4?ex=68a1b987&is=68a06807&hm=82a401455b76522c26adf738078dd75b8396fa9d9af4107610f6a3f05e5ce484&"
        : "https://cdn.discordapp.com/attachments/1400811660540772373/1400980080427270358/teaser-2025.mp4?ex=68a1b9a0&is=68a06820&hm=b28b94ef8830fa0af7bfd992b5307e92ac3a9f708b382c4c33d8983008be1870&"; // ubah file video banner

export const HUTRI_LOGO =
    "https://cdn.discordapp.com/attachments/1400811580383297546/1400822304983748668/hut80ri.png?ex=68a1cf6f&is=68a07def&hm=902a96d949aecc563018a94631d59786799be578b9a884b5c9a09a48f85ec203"; // ubah file logo hut ri
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
                image: "https://cdn.discordapp.com/attachments/1400811580383297546/1400822676167327775/minecraftid.png?ex=68a1cfc8&is=68a07e48&hm=a51c314e66c7999fc826c5a79d2a1169d137a3dc83cd509fb9fd0a2dc200c159",
                url: "https://www.minecraft-id.net/",
            },
            {
                name: "Minecraft Sejati",
                image: "https://cdn.discordapp.com/attachments/1400811580383297546/1400822733134237828/mcsejati.png?ex=68a1cfd5&is=68a07e55&hm=3ab94b7be323cfda259ae6fa3aa4c72f38274121a5e146beab09a3bf92ea156c",
                url: "https://s.id/mcsejatigroups",
            },
            {
                name: "MineInd Community",
                image: "https://cdn.discordapp.com/attachments/1400811580383297546/1400822808443097148/mineind.png?ex=68a1cfe7&is=68a07e67&hm=39847d2e7ff1e5dbe2124474cedacbeab54e2d2c47f164332986798332372a04",
                url: "https://dsc.gg/mineind",
            },
            {
                name: "Chronoscraft",
                image: "https://cdn.discordapp.com/attachments/1400811580383297546/1400830453425897595/chronoscraft.png?ex=68a1d706&is=68a08586&hm=1695771d7609bb8ea646a31291c8ca73252c0fc71a0d57137e594adc3ccf30c3",
                url: "https://chat.whatsapp.com/HLHWgwpmDAnCnJmIwWIq4a?mode=r_t",
            },
            {
                name: "Sahabat Minecrafter",
                image: "https://cdn.discordapp.com/attachments/1400811580383297546/1400822979448934514/sahabatmc.png?ex=68a1d010&is=68a07e90&hm=9c55a75858105a29d6faa0078465aa4b86fdc33fea1d70bdb2e63073a2963752",
                url: "https://sahabatmcid.my.id",
            },
            {
                name: "Motion Minecraft",
                image: "https://cdn.discordapp.com/attachments/1400811580383297546/1400823049498132570/motionmc.png?ex=68a1d021&is=68a07ea1&hm=54c6abbb5829ebf7004a38959c1ec71b0dd6f4d07852977f0bccc6a9a8c22dc5",
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
                image: "https://cdn.discordapp.com/attachments/1400811580383297546/1400823247104249897/yuemi.png?ex=68a1d050&is=68a07ed0&hm=ed13c28522e6912bbcf47119e3d8c31915e588b0bbf3b15629465a4747042eda",
                url: "https://dsc.gg/yuemi",
            },
            {
                name: "Raznar",
                image: "https://cdn.discordapp.com/attachments/1400811580383297546/1406092531464147035/raznar.png?ex=68a1ddf7&is=68a08c77&hm=2c9f684b0a303deb05363f122b787be2a8198e72015dca2319656af4b019f278",
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
                image: "https://cdn.discordapp.com/attachments/1400811580383297546/1400823324451409970/wartamc.png?ex=68a1d062&is=68a07ee2&hm=e83fd7b7357ad8fc072932f3f7f56941b26a587acd6a3d88f22e1568bd864527",
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
