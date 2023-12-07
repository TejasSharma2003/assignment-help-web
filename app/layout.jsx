import '@/styles/globals.css'
import localFont from 'next/font/local'

import { cn } from '@/lib/utils'
import Providers from './providers';
import Announcement from '@/components/ui/announcement';
import SocialLink from '@/components/ui/social-link';

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
        <html lang="en" suppressHydrationWarning={true} >
            <body className={cn(
                "min-h-screen bg-background antialiased font-poppins-regular",
                poppinsLight.variable,
                poppinsMedium.variable,
                poppinsRegular.variable,
                poppinsBold.variable,
                poppinsSemiBold.variable
            )}>
                <div class="flex items-end justify-end fixed bottom-12 right-3 z-[1000]">
                    <div class="flex items-center justify-center w-14 h-14 bg-secondary rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                        <svg className="fill-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 32"><path d="M28 32s-4.714-1.855-8.527-3.34H3.437C1.54 28.66 0 27.026 0 25.013V3.644C0 1.633 1.54 0 3.437 0h21.125c1.898 0 3.437 1.632 3.437 3.645v18.404H28V32zm-4.139-11.982a.88.88 0 00-1.292-.105c-.03.026-3.015 2.681-8.57 2.681-5.486 0-8.517-2.636-8.571-2.684a.88.88 0 00-1.29.107 1.01 1.01 0 00-.219.708.992.992 0 00.318.664c.142.128 3.537 3.15 9.762 3.15 6.226 0 9.621-3.022 9.763-3.15a.992.992 0 00.317-.664 1.01 1.01 0 00-.218-.707z"></path></svg>
                    </div>
                </div>
                <SocialLink/>
                <Announcement />
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    )
}
