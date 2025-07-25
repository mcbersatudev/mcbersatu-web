import { AppContent } from '@/components/app-content';
import AppFooter from '@/components/app-footer';
import AppHeader from '@/components/app-header';
import { AppShell } from '@/components/app-shell';
import { Toaster } from '@/components/ui/sonner';
import { usePage } from '@inertiajs/react';
import { PropsWithChildren, useEffect } from 'react';

export default function AppLayoutTemplate({ children }: PropsWithChildren) {
    const page = usePage();

    useEffect(() => {
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
    }, [page.url]);

    return (
        <AppShell>
            <AppHeader />
            <AppContent>{children}</AppContent>
            <Toaster position="top-center" />
            <AppFooter />
        </AppShell>
    );
}
