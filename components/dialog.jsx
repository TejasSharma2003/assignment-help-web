import { cn } from "@/lib/utils"
import { buttonVariants } from "./ui/button"
import { Button } from "./ui/button"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import DatePicker from '@/components/date-picker'

import {
    Dialog as ShadDialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function Dialog() {
    return <ShadDialog className="">
        <DialogTrigger asChild>
            <Button className={cn(buttonVariants({ variant: "primary", size: "lg" },), 'text-lg font-medium w-full sm:w-auto ')}>
                Get Assistance
            </Button>
        </DialogTrigger>
        <DialogContent className="rounded-lg max-w-2xl">
            <DialogHeader>
                <DialogTitle className="text-[1.5rem] tracking-normal mt-5 font-poppins-light text-center text-popover-foreground mb-10">It's time you sought help from the experts at <br />Assignment Wallah.</DialogTitle>
                <DialogDescription>
                    <div className="grid md:grid-cols-2  grid-cols-1 md:gap-x-5 gap-y-5 ">
                        <Input type="email" placeholder="Email" className="text-lg" />
                        <Input type="text" placeholder="Subject" className="text-lg" />
                        <Input type="text" placeholder="Technology" className="text-lg" />
                        <DatePicker />
                        <div className="">
                            <Textarea placeholder="Instructions" className="text-lg" />
                        </div>
                        <div className="flex-1 border border-muted rounded-lg p-2 text-center">
                            <Label htmlFor="file"> Upload your Assignment</Label>
                            <Input id="file" type="file" className="border-none mt-2" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center my-5">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-base ml-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                I accept Assignment Wallah's terms and conditions. I agree to receive offers and updates.
                            </label>
                        </div>
                        <Button className={cn(buttonVariants({ variant: 'primary', size: "lg" }), 'text-lg w-full md:w-auto')}>
                            Get Assistance
                        </Button>
                    </div>
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </ShadDialog>
}
