'use client'

import { menus } from "@/configs/menu-nav"
export default function WorKBar() {
    return (
        <nav className="flex">
            {menus.map((item, index) => {
                return <h4 className="ml-5 first:ml-0">{item.title}</h4>
            })}
        </nav>
    )
}
