interface AppShellProps {
    children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
    return (
        <>
            <div className="font-opensans hidden min-h-screen w-full bg-[#F0F0F0] text-white antialiased blur-none selection:bg-[#E74342] selection:text-[#F0F0F0] min-[320px]:block">
                {children}
            </div>
            <div className="font-opensans block min-h-screen w-full content-center justify-center bg-[#F0F0F0] p-10 antialiased blur-none selection:bg-[#E74342] selection:text-[#F0F0F0] min-[320px]:hidden">
                <p className="text-center text-sm text-slate-400">Halaman ini tidak dapat ditampilkan di layar kecil</p>
            </div>
        </>
    );
}
