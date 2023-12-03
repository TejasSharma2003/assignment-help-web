import Dialog from "@/components/dialog";
import FullTestomonial from "@/components/ui/full-testomonial";
import HeroMain from "@/components/ui/hero-main";
import { MapPin, Clock10, Mail } from "lucide-react";

export default function ContactPage() {
    return (
        <>
            <HeroMain className="relative bg-secondary-dark pb-80 sm:pb-60 md:pb-40  mb-[18rem] sm:mb-[13rem] md:mb-[8rem]">
                <div className="relative container text-center z-10">
                    <h1 className="text-3xl md:text-[2.5rem] leading-tight md:leading-[3.4rem] font-poppins-bold sm:text-4xl  text-white">Contact Us</h1>
                    <p className=" mb-3 sm:text-xl/relaxed text-white/70">Share your thoughts to help us improve our services – we value your feedback.</p>
                    <Dialog />
                </div>
                <div className="absolute shadow-light border bg-white w-full left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 py-10 px-5 max-w-5xl rounded-lg ">
                    <div className="grid gap-8 text-left md:text-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        <div className="flex flex-col items-center">
                            <span className=""><MapPin className="stroke-secondary" /></span>
                            <h6 className="text-lg font-semibold mt-3 mb-1">Corporate Address</h6>
                            <p class="text-base text-center mt-3">
                                Assignment Wallah Pvt Ltd<br />
                                1234 Elm Street Apt 567<br />
                                Springfield, IL 12345<br />
                                United States
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className=""><Clock10 className="stroke-secondary" /></span>
                            <h6 className="text-lg font-semibold mt-3 mb-1">Office timings</h6>
                            <p class="text-base text-center mt-3">
                                <strong>Monday to Friday : </strong> 10 am - 8 pm IST<br />
                                <strong>Saturday to Sunday : </strong> 10 am - 5 pm IST
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className=""><Mail className="stroke-secondary" /></span>
                            <h6 className="text-lg font-semibold mt-3 mb-1">Contact Details</h6>
                            <p class="text-base text-center mt-3">
                                <strong>Phone : </strong> +91-83880 88212<br />
                                <strong>Email : </strong> <a href="mailto:help@assignmentwallah.com">help@assignmentwallah.com</a><br />
                                <strong>Email : </strong> <a href="mailto:help.assignmentwallah@gmail.com">help.assignmentwallah@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </HeroMain>
            <FullTestomonial />
        </>
    )
};


