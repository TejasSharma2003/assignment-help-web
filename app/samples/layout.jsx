import MainNavbar from "@/components/main-navbar";
import SiteFooter from "@/components/site-footer";

export default function SamplesLayout({ children }) {
    return (
        <>
            <MainNavbar variant="dark"/>
            <main className="overflow-hidden">
                {children}
                <SiteFooter />
            </main>
        </>
    )
}

