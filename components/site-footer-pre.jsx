import Link from "next/link"
import Logo from "./logo"
import { Button } from "./ui/button"
import { Input } from "@/components/ui/input"


export default function SiteFooter() {
    return (
        <footer className="max-w-7xl mx-auto py-20 relative before:absolute before:top-0 before:left-1/2 before:w-1/3 before:h-[.5px] before:bg-muted before:-translate-x-1/2">
            <div className="grid grid-cols-footer gap-x-14">
                <div>
                    <Logo />
                    <p className="text-base mt-5 ml-2">Assignment Wallah Pvt Ltd<br />
                        1234 Elm Street Apt 567 Springfield,<br />
                        IL 12345 United States </p>
                </div>
                <div>
                    <h6 className="text-black text-lg">Contact Us</h6>
                    <ul className="text-base mt-5 break-all">
                        <li className="mt-3">+91-83880 88212</li>
                        <li className="mt-2"><a href="#">help@assignmentwallah.com</a></li>
                        <li className="mt-2"><a href="#">help.assignmentwallah@gmail.com</a></li>
                    </ul>
                </div>
                <div>
                    <h6 className="text-black text-lg">Company</h6>
                    <ul className="text-base mt-5">
                        <li className="mt-3"><Link href="#">About Us</Link></li>
                        <li className="mt-2"><Link href="#">Contact Us</Link></li>
                        <li className="mt-2"><Link href="#">Experts</Link></li>
                        <li className="mt-2"><Link href="#">Blogs</Link></li>
                        <li className="mt-2"><Link href="#">Testimonials</Link></li>
                    </ul>
                </div>
                <div>
                    <h6 className="text-black text-lg">Quick Links</h6>
                    <ul className="text-base mt-5">
                        <li className="mt-3"><Link href="#">FAQ's</Link></li>
                        <li className="mt-2"><Link href="#">Sample</Link></li>
                    </ul>
                </div>
                <div>
                    <h6 className="text-black text-lg">Subscribe</h6>
                    <p className="text-base mt-5">Subsribe and avail special offers.</p>
                    <div className="flex w-full mt-2 max-w-sm items-center space-x-2">
                        <Input  type="email" placeholder="Email" />
                        <Button type="submit">Subscribe</Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
