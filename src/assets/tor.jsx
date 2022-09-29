
function TorBrowser(props) {
    return (
        <svg
            width="512px"
            height="512px"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            {...props}
        >
            <defs>
                <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="a">
                    <stop stopColor="#420C5D" offset="0%" />
                    <stop stopColor="#951AD1" offset="100%" />
                </linearGradient>
                <path
                    d="M25 29c127.578 0 231 102.975 231 230S152.578 489 25 489V29z"
                    id="c"
                />
                <filter
                    x="-18.2%"
                    y="-7.4%"
                    width="129.4%"
                    height="114.8%"
                    filterUnits="objectBoundingBox"
                    id="b"
                >
                    <feOffset dx={-8} in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur
                        stdDeviation={10}
                        in="shadowOffsetOuter1"
                        result="shadowBlurOuter1"
                    />
                    <feColorMatrix
                        values="0 0 0 0 0.250980392 0 0 0 0 0.250980392 0 0 0 0 0.250980392 0 0 0 0.2 0"
                        in="shadowBlurOuter1"
                    />
                </filter>
            </defs>
            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                <circle fill="#F2E4FF" fillRule="nonzero" cx={256} cy={256} r={246} />
                <path
                    d="M256.525 465.44v-31.033c98.301-.284 177.896-80.042 177.896-178.414 0-98.365-79.595-178.123-177.896-178.407V46.553c115.44.291 208.922 93.937 208.922 209.44 0 115.51-93.483 209.163-208.922 209.447zm0-108.62c55.445-.29 100.324-45.304 100.324-100.827 0-55.516-44.879-100.53-100.324-100.82v-31.026c72.59.283 131.357 59.192 131.357 131.846 0 72.661-58.767 131.57-131.357 131.853V356.82zm0-155.101c29.742.284 53.778 24.461 53.778 54.274 0 29.82-24.036 53.997-53.778 54.281V201.72zM0 255.993C0 397.384 114.609 512 256 512c141.384 0 256-114.616 256-256.007C512 114.609 397.384 0 256 0 114.609 0 0 114.609 0 255.993z"
                    fill="url(#a)"
                />
                <g transform="matrix(-1 0 0 1 281 0)">
                    <use fill="#000" filter="url(#b)" xlinkHref="#c" />
                    <use fill="url(#a)" xlinkHref="#c" />
                </g>
            </g>
        </svg>
    )
}

export default TorBrowser
