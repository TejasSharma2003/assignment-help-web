import MainNavbar from "@/components/main-navbar"
import Footer from "@/components/site-footer"
export default function ContactLayout({ children }) {
    return (
        <>
            <MainNavbar variant="dark"/>
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}
