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
        ? "/videos/mcb.mp4"
        : "/videos/teaser-2025.mp4"; // ubah file video banner

export const HUTRI_LOGO =
    "https://cdn.discordapp.com/attachments/1400811580383297546/1400822304983748668/hut80ri.png?ex=688e08ef&is=688cb76f&hm=57440615ae1daf7f5ea18baa985217f6c2592dfc286cb03bd64f1bf38e03543b&"; // ubah file logo hut ri
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
                image: "https://cdn.discordapp.com/attachments/1400811580383297546/1400822676167327775/minecraftid.png?ex=688e0948&is=688cb7c8&hm=b3bff40f056ea2bcfcb27c92d0c5d3fd3a9755b3c993cd3a7b7d5babaf1ba27b&",
                url: "https://www.minecraft-id.net/",
            },
            {
                name: "Minecraft Sejati",
                image: "https://cdn.discordapp.com/attachments/1400811580383297546/1400822733134237828/mcsejati.png?ex=688e0955&is=688cb7d5&hm=36534420bd9fc73eb3a42c7acd0b1b1ffd66c3559f5e180ed5337758fc02e524&",
                url: "https://s.id/mcsejatigroups",
            },
            {
                name: "MineInd Community",
                image: "https://cdn.discordapp.com/attachments/1400811580383297546/1400822808443097148/mineind.png?ex=688e0967&is=688cb7e7&hm=b42ea816e2baf709c3e9189a66a3baad10aad9d065cb2bacfa06d6d0a46c3a63&",
                url: "https://dsc.gg/mineind",
            },
            {
                name: "Chronoscraft",
                image: "https://cdn.discordapp.com/attachments/1400811580383297546/1400822918530990231/chronoscraft.png?ex=688e0981&is=688cb801&hm=66d0eb65e29489571a78f6ac2ba4fbc4b9f00cda4da6ec845981e23c38dcbfb4&",
                url: "https://chat.whatsapp.com/HLHWgwpmDAnCnJmIwWIq4a?mode=r_t",
            },
            {
                name: "Sahabat Minecrafter",
                image: "https://cdn.discordapp.com/attachments/1400811580383297546/1400822979448934514/sahabatmc.png?ex=688e0990&is=688cb810&hm=ffd5b9716518198844244a3fa9044efac6813a0494b24b082c3a20998f25d046&",
                url: "https://sahabatmcid.my.id",
            },
            {
                name: "Motion Minecraft",
                image: "https://cdn.discordapp.com/attachments/1400811580383297546/1400823049498132570/motionmc.png?ex=688e09a1&is=688cb821&hm=bf1e679d951abc9899916e52ee3d0f6868c992fea7c9be5b7ce76208751be392&",
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
                image: "https://cdn.discordapp.com/attachments/1400811580383297546/1400823247104249897/yuemi.png?ex=688e09d0&is=688cb850&hm=90da5b9898d2a51849f5fd221a8d90e019dca7db35a6876bb92cff06e7065340&",
                url: "https://dsc.gg/yuemi",
            },
            // {
            //     name: "",
            //     image: "",
            //     url: "",
            // },
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
                image: "https://cdn.discordapp.com/attachments/1400811580383297546/1400823324451409970/wartamc.png?ex=688e09e2&is=688cb862&hm=2f929a1a1e13f8395014f2dffb6e3c15aa633780934ec09af97395c05bb81ee6&",
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
