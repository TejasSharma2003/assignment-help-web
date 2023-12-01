import MainNavbar from "@/components/main-navbar";
import Footer from "@/components/site-footer";

export default function BlogsLayout({ children }) {
    return (
        <>
            <MainNavbar />
            {children}
            <Footer />
        </>
    )
}
