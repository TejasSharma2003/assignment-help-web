'use client'
import { useState } from "react"
import Marquee from "react-fast-marquee"
export default function Announcement() {
    const [showBanner, setShowBanner] = useState(true);
    return (
        showBanner &&
        <div className="inset-x-0 bottom-0 z-50">
            <div className="relative flex items-center justify-between gap-4 bg-secondary-700 py-2   text-white">
                <Marquee>
                    <p className="text-lg font-medium">
                        Get upto 60% discount on your first Assignment!!!
                    </p>
                </Marquee>

                <button
                    aria-label="Close"
                    onClick={() => setShowBanner(false)}
                    className="shrink-0 rounded-lg bg-black/10 p-1 transition hover:bg-black/20 mr-3"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </div>

    )
}
