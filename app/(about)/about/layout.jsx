import MainNavbar from "@/components/main-navbar";
import SiteFooter from "@/components/site-footer";

export default function AboutLayout({ children }) {
    return (
        <main>
            <MainNavbar/>
            {children}
            <SiteFooter/>
        </main>
    )
}
