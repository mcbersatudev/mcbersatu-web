import { useEffect, useRef, useState } from 'react';
import { Separator } from './ui/separator';

interface CountdownProps {
    targetDate: Date;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export function Countdown({ targetDate }: CountdownProps) {
    const calculateTimeLeft = (): TimeLeft => {
        const difference = +targetDate - +new Date();
        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
    const rafId = useRef<number | null>(null);

    // loop update via requestAnimationFrame
    useEffect(() => {
        const update = () => {
            const newTime = calculateTimeLeft();
            setTimeLeft(newTime);

            if (newTime.days === 0 && newTime.hours === 0 && newTime.minutes === 0 && newTime.seconds === 0) {
                showNotification();
                return; // stop looping
            }

            rafId.current = requestAnimationFrame(update);
        };

        rafId.current = requestAnimationFrame(update);

        return () => {
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, [targetDate, calculateTimeLeft]);

    // minta izin notifikasi sekali saja
    useEffect(() => {
        if (Notification.permission !== 'granted') {
            Notification.requestPermission();
        }
    }, []);

    const showNotification = () => {
        if (Notification.permission === 'granted') {
            new Notification('Sudah waktunya Minecrafter Bersatu 2025 dimulai!', {
                body: 'Hai Minecrafter! Yuk, saatnya memeriahkan momen kemerdekaan',
                icon: '/logo.svg',
            });
        }
    };

    return (
        <div className="mx-auto mt-5 mb-2 w-full sm:max-2xl:my-0 sm:max-2xl:-mt-10 md:max-2xl:w-[90%] xl:max-2xl:mx-0">
            <p className="font-lato ml-[10%] text-sm font-normal text-[#101010] sm:max-2xl:ml-0">Memulai dalam...</p>

            <div className="align-center mx-4 my-4 flex shrink items-center justify-center gap-x-[3%] space-x-0 text-[#101010] sm:max-2xl:justify-start">
                <div className="flex flex-col items-center justify-center">
                    <p className="font-droidsans uk-countdown-days mb-1 text-5xl">{timeLeft.days}</p>
                    <p className="font-lato uk-countdown-label my-0 text-sm font-normal">Hari</p>
                </div>

                <Separator orientation="vertical" />

                <div className="flex flex-col items-center justify-center">
                    <p className="font-droidsans uk-countdown-hours mb-1 text-5xl">{timeLeft.hours}</p>
                    <p className="font-lato uk-countdown-label my-0 text-sm font-normal">Jam</p>
                </div>

                <Separator orientation="vertical" />

                <div className="flex flex-col items-center justify-center">
                    <p className="font-droidsans uk-countdown-minutes mb-1 text-5xl">{timeLeft.minutes}</p>
                    <p className="font-lato uk-countdown-label my-0 text-sm font-normal">Menit</p>
                </div>

                <Separator orientation="vertical" />

                <div className="flex flex-col items-center justify-center">
                    <p className="font-droidsans uk-countdown-seconds mb-1 text-5xl">{timeLeft.seconds}</p>
                    <p className="font-lato uk-countdown-label my-0 text-sm font-normal">Detik</p>
                </div>
            </div>
        </div>
    );
}
