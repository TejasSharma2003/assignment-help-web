import MainNavbar from "@/components/main-navbar";
import SiteFooter from "@/components/site-footer";

export default function MarketingLayout({ children }) {
    return (
        <div>
            {children}
            <SiteFooter/>
        </div>
    )
}
