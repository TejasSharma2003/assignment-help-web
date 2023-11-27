import MainNavbar from "@/components/main-navbar";
import Footer from "@/components/site-footer";
import SiteFooter from "@/components/site-footer-pre";

export default function AboutLayout({ children }) {
    return (
        <main>
            {/* <MainNavbar/> */}
            {children}
            {/* <Footer/> */}
        </main>
    )
}
