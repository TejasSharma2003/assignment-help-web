import '@/styles/globals.css'
import localFont from 'next/font/local'

import { cn } from '@/lib/utils'

export const poppinsLight = localFont({
    src: '../assets/fonts/Poppins-Light.ttf',
    variable: '--poppins-light'
})

export const poppinsMedium = localFont({
    src: '../assets/fonts/Poppins-Medium.ttf',
    variable: '--poppins-medium'
})

export const poppinsRegular = localFont({
    src: '../assets/fonts/Poppins-Regular.ttf',
    variable: '--poppins-regular'
})

export const poppinsBold = localFont({
    src: '../assets/fonts/Poppins-Bold.ttf',
    variable: '--poppins-bold'
})

export const poppinsSemiBold = localFont({
    src: '../assets/fonts/Poppins-SemiBold.ttf',
    variable: '--poppins-semibold'
})

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning >
            <body className={cn(
                "min-h-screen bg-background antialiased font-poppins-regular",
                poppinsLight.variable,
                poppinsMedium.variable,
                poppinsRegular.variable,
                poppinsBold.variable,
                poppinsSemiBold.variable
            )}>
                {children}
            </body>
        </html>
    )
}
