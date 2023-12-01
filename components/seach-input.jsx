import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { Input } from "./ui/input";

export default function SeachInput({ className }) {
    return <form className={cn(className, "flex items-center")}>
        <label for="voice-search" className="sr-only">Search</label>
        <div className="flex flex-col sm:flex-row">
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 me-2" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <Input type="text" placeholder="Get what you are looking for" className="border-none text-lg pl-10 bg-black/20 text-white" />
            </div>
            <Button className={cn(buttonVariants({ variant: 'secondary', size: 'lg ' }), 'self-center mt-4 sm:mt-0 ml-3 text-lg text-white px-10')}>
                Seach
            </Button>
        </div>
    </form>
}
