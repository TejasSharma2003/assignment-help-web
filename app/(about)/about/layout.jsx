import MainNavbar from "@/components/main-navbar";

export default function AboutLayout({ children }) {
    return (
        <main>
            <MainNavbar />
            {children}
        </main>
    )
}
