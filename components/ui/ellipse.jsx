export default function Ellipse({ className = '' }) {
    return <svg width="189"
        height="162"
        viewBox="0 0 189 162"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <ellipse
            cx="16"
            cy="-16.5"
            rx="173"
            ry="178.5"
            transform="rotate(180 16 -16.5)"
            fill="url(#paint0_linear)"
        />
        <defs>
            <linearGradient
                id="paint0_linear"
                x1="-157"
                y1="-107.754"
                x2="98.5011"
                y2="-106.425"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="white" stop-opacity="0.07" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
        </defs>
    </svg>

}
