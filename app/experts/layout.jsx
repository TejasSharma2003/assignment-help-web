import MainNavbar from "@/components/main-navbar";
import SiteFooter from "@/components/site-footer";

export default function ExpertsLayout({ children }) {
    return (
        <>
            <MainNavbar />
            <main>
                {children}
                <SiteFooter />
            </main>
        </>
    )
}
