import MainNavbar from "@/components/main-navbar";
import Footer from "@/components/site-footer";

export default function BlogsLayout({ children }) {
    return (
        <>
            <MainNavbar variant="dark"/>
            {children}
            <Footer />
        </>
    )
}
