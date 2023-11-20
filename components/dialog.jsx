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
    return <ShadDialog className="bg-red-200">
        <DialogTrigger>
                <Button className={cn(buttonVariants({ variant: "primary", size: "lg" },), 'text-lg font-medium  ')}>
                    Get Assistance
                </Button>
        </DialogTrigger>
        <DialogContent className="rounded-lg max-w-2xl">
            <DialogHeader>
                <DialogTitle className="text-[1.4rem] font-poppins-light  text-popover-foreground mb-10">It's time you sought help from the experts at <br />Assignment Wallah.</DialogTitle>
                <DialogDescription>
                    <div>
                        <div className="flex ">
                            <Input type="email" placeholder="Email" className="text-lg" />
                            <Input type="text" placeholder="Subject" className="text-lg ml-5" />
                        </div>
                        <div className="flex mt-6">
                            <Input type="text" placeholder="Technology" className="text-lg mr-5" />
                            <DatePicker />
                        </div>
                        <div className="flex mt-6">
                            <div className="mr-5">
                                <Textarea placeholder="Instructions" className="text-lg mr-5" />
                            </div>
                            <div className="flex-1 border border-muted rounded-lg p-2">
                                <Label htmlFor="file"> Upload your Assignment</Label>
                                <Input id="file" type="file" className="border-none mt-2" />
                            </div>
                        </div>
                        <div className="flex items-center mb-5 space-x-2 mt-10">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                I accept Assignment Wallah's terms and conditions. I agree to receive offers and updates.
                            </label>
                        </div>
                        <Button className={cn(buttonVariants({ variant: 'primary', size: "lg" }), 'text-lg')}>
                            Get Assistance
                        </Button>
                    </div>
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </ShadDialog>
}
