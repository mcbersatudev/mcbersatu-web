import { type ReactNode } from 'react';
import AppLayoutTemplate from './app/layout';

interface AppLayoutProps {
    children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    return <AppLayoutTemplate>{children}</AppLayoutTemplate>;
}
