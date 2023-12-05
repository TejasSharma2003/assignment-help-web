'use client'
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import DatePicker from '@/components/date-picker'
import { Button, buttonVariants } from "./ui/button"

export default function AssignmentForm({ className }) {
    return (
        <>
            <div className={cn("grid md:grid-cols-2  grid-cols-1 md:gap-x-5 gap-y-5"), className}>
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
        </>
    )
}
