import { Button } from '@/components/ui/button';
import {
    ALERT_DATE as ALERT_DATE_CONST,
    ALERT_DES,
    ALERT_MSG,
    CALENDAR_EVENT,
    CALENDAR_MSG,
    CalendarEvent,
    FORM_DATE,
    FORM_MSG,
    FORM_URL,
    YT_DATE,
    YT_MSG,
    YT_URL,
} from '@/data/config';
import { ComponentProps } from 'react';
import { toast } from 'sonner';
import { DrawerContent } from './ui/drawer';

type CtaBtnProps = ComponentProps<typeof Button> & {
    mode: 'button' | 'drawer';
    children?: React.ReactNode;
};

function formatDate(dt: string): string {
    return (
        new Date(dt)
            .toISOString()
            .replace(/[-:.\\dZ]/g, '')
            .slice(0, 15) + 'Z'
    );
}

function createGoogleCalendarUrl(event: CalendarEvent): string {
    const dates = `${formatDate(event.start)}/${formatDate(event.end)}`;
    const params = new URLSearchParams({
        action: 'TEMPLATE',
        text: event.name,
        dates,
        details: event.description,
        location: event.location,
    });
    return `https://www.google.com/calendar/render?${params.toString()}`;
}

const audioClick = () => {
    const audio = new Audio('/sounds/mcbutton.mp3');
    audio.play();
};

// Array of Schedule
const scheduleList: {
    date: Date;
    action: () => void;
    text: string;
    msg: string;
}[] = [
    {
        date: FORM_DATE,
        action: () => {
            audioClick();
            window.open(FORM_URL, '_blank');
        },
        text: 'Daftar Sekarang',
        msg: FORM_MSG,
    },
    {
        date: YT_DATE,
        action: () => {
            audioClick();
            window.open(YT_URL, '_blank');
        },
        text: 'Sedang Berlangsung',
        msg: YT_MSG,
    },
    {
        date: ALERT_DATE_CONST,
        action: () => {
            audioClick();
            toast(ALERT_MSG, {
                description: ALERT_DES,
            });
        },
        text: 'Acara Selesai',
        msg: '',
    },
];

// Main Component
export function CtaBtn({ mode, children, ...props }: CtaBtnProps) {
    const addCalendar = () => {
        audioClick();
        const url = createGoogleCalendarUrl(CALENDAR_EVENT);
        window.open(url, '_blank');
    };

    const now = new Date();

    let onClick = addCalendar;
    let buttonText = 'Tandai Kalender';
    let message = CALENDAR_MSG;

    for (const schedule of scheduleList) {
        if (now >= schedule.date) {
            onClick = schedule.action;
            buttonText = schedule.text;
            message = schedule.msg;
        }
    }

    return (
        <>
            {mode === 'button' && (
                <Button onClick={onClick} {...props}>
                    {children || buttonText}
                </Button>
            )}

            {mode === 'drawer' && (
                <DrawerContent className="flex h-auto justify-center gap-5 px-3 py-5 md:max-2xl:hidden">
                    {message && <p className="text-sm">{message}</p>}
                    <Button onClick={onClick} {...props}>
                        {children || buttonText}
                    </Button>
                </DrawerContent>
            )}
        </>
    );
}
