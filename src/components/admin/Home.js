import React, {useEffect, useState} from 'react';
import Footer from './Footer';

export default function Home({inComing, stats, setSeeMore, setSelected}) {

const openMore = (data) => {
    setSeeMore(data);
    setSelected("moredetails");
}
  return (
    <div className="w-full px-6 py-6 mx-auto">
    <div className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
            <div className="flex-auto p-4">
            <div className="flex flex-row -mx-3">
                <div className="flex-none w-2/3 max-w-full px-3">
                <div>
                    <p className="mb-0 font-sans font-semibold leading-normal text-sm">
                    Total Revenue
                    </p>
                    <h5 className="mb-0 font-bold">
                    $53,000
                    <span className="leading-normal text-sm font-weight-bolder text-lime-500">
                        +55%
                    </span>
                    </h5>
                </div>
                </div>
                <div className="px-3 text-right basis-1/3">
                <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                    <i className="ni leading-none ni-money-coins text-lg relative top-3.5 text-white" />
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
            <div className="flex-auto p-4">
            <div className="flex flex-row -mx-3">
                <div className="flex-none w-2/3 max-w-full px-3">
                <div>
                    <p className="mb-0 font-sans font-semibold leading-normal text-sm">
                    Total Projects
                    </p>
                    <h5 className="mb-0 font-bold">
                    {stats?.totalProjects}
                    <span className="leading-normal text-sm font-weight-bolder text-lime-500">
                        +3%
                    </span>
                    </h5>
                </div>
                </div>
                <div className="px-3 text-right basis-1/3">
                <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                    <i className="ni leading-none ni-world text-lg relative top-3.5 text-white" />
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
            <div className="flex-auto p-4">
            <div className="flex flex-row -mx-3">
                <div className="flex-none w-2/3 max-w-full px-3">
                <div>
                    <p className="mb-0 font-sans font-semibold leading-normal text-sm">
                     Visitors
                    </p>
                    <h5 className="mb-0 font-bold">
                    +{stats?.visitors}
                    <span className="leading-normal text-red-600 text-sm font-weight-bolder">
                        -2%
                    </span>
                    </h5>
                </div>
                </div>
                <div className="px-3 text-right basis-1/3">
                <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                    <i className="ni leading-none ni-paper-diploma text-lg relative top-3.5 text-white" />
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        
        <div className="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4">
        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
            <div className="flex-auto p-4">
            <div className="flex flex-row -mx-3">
                <div className="flex-none w-2/3 max-w-full px-3">
                <div>
                    <p className="mb-0 font-sans font-semibold leading-normal text-sm">
                    Projects click
                    </p>
                    <h5 className="mb-0 font-bold">
                    +{stats?.projectClicks}
                    <span className="leading-normal text-sm font-weight-bolder text-lime-500">
                        +5%
                    </span>
                    </h5>
                </div>
                </div>
                <div className="px-3 text-right basis-1/3">
                <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                    <i className="ni leading-none ni-cart text-lg relative top-3.5 text-white" />
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    {/*
    <div className="flex flex-wrap mt-6 -mx-3">
        <div className="w-full px-3 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none">
        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
            <div className="flex-auto p-4">
            <div className="flex flex-wrap -mx-3">
                <div className="max-w-full px-3 lg:w-1/2 lg:flex-none">
                <div className="flex flex-col h-full">
                    <p className="pt-2 mb-1 font-semibold">Built by developers</p>
                    <h5 className="font-bold">Soft UI Dashboard</h5>
                    <p className="mb-12">
                    From colors, cards, typography to complex elements, you will
                    find the full documentation.
                    </p>
                    <a
                    className="mt-auto mb-0 font-semibold leading-normal text-sm group text-slate-500"
                    href="/javascri"
                    >
                    Read More
                    <i
                        className="fas fa-arrow-right ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200"
                        aria-hidden="true"
                    />
                    </a>
                </div>
                </div>
                <div className="max-w-full px-3 mt-12 ml-auto text-center lg:mt-0 lg:w-5/12 lg:flex-none">
                <div className="h-full bg-gradient-to-tl from-purple-700 to-pink-500 rounded-xl">
                    <img
                    src="../assets/img/shapes/waves-white.svg"
                    className="absolute top-0 hidden w-1/2 h-full lg:block"
                    alt="waves"
                    />
                    <div className="relative flex items-center justify-center h-full">
                    <img
                        className="relative z-20 w-full pt-6"
                        src="../assets/img/illustrations/rocket-white.png"
                        alt="rocket"
                    />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className="w-full max-w-full px-3 lg:w-5/12 lg:flex-none">
        <div className="border-black/12.5 shadow-soft-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border p-4">
            <div
            className="relative h-full overflow-hidden bg-cover rounded-xl"
            style={{ backgroundImage: 'url("../assets/img/ivancik.jpg")' }}
            >
            <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-80" />
            <div className="relative z-10 flex flex-col flex-auto h-full p-4">
                <h5 className="pt-2 mb-6 font-bold text-white">
                Work with the rockets
                </h5>
                <p className="text-white">
                Wealth creation is an evolutionarily recent positive-sum game. It
                is all about who take the opportunity first.
                </p>
                <a
                className="mt-auto mb-0 font-semibold leading-normal text-white group text-sm"
                href="javascript:;"
                >
                Read More
                <i
                    className="fas fa-arrow-right ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200"
                    aria-hidden="true"
                />
                </a>
            </div>
            </div>
        </div>
        </div>
    </div>
    */}

    <div className="flex flex-wrap mt-6 -mx-3">
        <div className="w-full max-w-full px-3 mt-0 mb-6 lg:mb-0 lg:w-5/12 lg:flex-none">
        <div className="border-black/12.5 shadow-soft-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
            <div className="flex-auto p-4">
            <div className="py-4 pr-1 mb-4 bg-gradient-to-tl from-gray-900 to-slate-800 rounded-xl">
                <div>
                <canvas
                    id="chart-bars"
                    height={340}
                    width={735}
                    style={{
                    display: "block",
                    boxSizing: "border-box",
                    height: 170,
                    width: "367.5px"
                    }}
                />
                </div>
            </div>
            <h6 className="mt-6 mb-0 ml-2">Active Users</h6>
            <p className="ml-2 leading-normal text-sm">
                (<span className="font-bold">+23%</span>) than last week
            </p>
            <div className="w-full px-6 mx-auto max-w-screen-2xl rounded-xl">
                <div className="flex flex-wrap mt-0 -mx-3">
                <div className="flex-none w-1/4 max-w-full py-4 pl-0 pr-3 mt-0">
                    <div className="flex mb-2">
                    <div className="flex items-center justify-center w-5 h-5 mr-2 text-center bg-center rounded fill-current shadow-soft-2xl bg-gradient-to-tl from-purple-700 to-pink-500 text-neutral-900">
                        <svg
                        width="10px"
                        height="10px"
                        viewBox="0 0 40 44"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                        <title>document</title>
                        <g
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                        >
                            <g
                            transform="translate(-1870.000000, -591.000000)"
                            fill="#FFFFFF"
                            fillRule="nonzero"
                            >
                            <g transform="translate(1716.000000, 291.000000)">
                                <g transform="translate(154.000000, 300.000000)">
                                <path
                                    className="color-background"
                                    d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
                                    opacity="0.603585379"
                                />
                                <path
                                    className="color-background"
                                    d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
                                />
                                </g>
                            </g>
                            </g>
                        </g>
                        </svg>
                    </div>
                    <p className="mt-1 mb-0 font-semibold leading-tight text-xs">
                        Users
                    </p>
                    </div>
                    <h4 className="font-bold">36K</h4>
                    <div className="text-xs h-0.75 flex w-3/4 overflow-visible rounded-lg bg-gray-200">
                    <div
                        className="duration-600 ease-soft -mt-0.38 -ml-px flex h-1.5 w-3/5 flex-col justify-center overflow-hidden whitespace-nowrap rounded-lg bg-slate-700 text-center text-white transition-all"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    />
                    </div>
                </div>
                <div className="flex-none w-1/4 max-w-full py-4 pl-0 pr-3 mt-0">
                    <div className="flex mb-2">
                    <div className="flex items-center justify-center w-5 h-5 mr-2 text-center bg-center rounded fill-current shadow-soft-2xl bg-gradient-to-tl from-blue-600 to-cyan-400 text-neutral-900">
                        <svg
                        width="10px"
                        height="10px"
                        viewBox="0 0 40 40"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                        <title>spaceship</title>
                        <g
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                        >
                            <g
                            transform="translate(-1720.000000, -592.000000)"
                            fill="#FFFFFF"
                            fillRule="nonzero"
                            >
                            <g transform="translate(1716.000000, 291.000000)">
                                <g transform="translate(4.000000, 301.000000)">
                                <path
                                    className="color-background"
                                    d="M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z"
                                />
                                <path
                                    className="color-background"
                                    d="M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z"
                                />
                                <path
                                    className="color-background"
                                    d="M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z"
                                    opacity="0.598539807"
                                />
                                <path
                                    className="color-background"
                                    d="M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z"
                                    opacity="0.598539807"
                                />
                                </g>
                            </g>
                            </g>
                        </g>
                        </svg>
                    </div>
                    <p className="mt-1 mb-0 font-semibold leading-tight text-xs">
                        Clicks
                    </p>
                    </div>
                    <h4 className="font-bold">2m</h4>
                    <div className="text-xs h-0.75 flex w-3/4 overflow-visible rounded-lg bg-gray-200">
                    <div
                        className="duration-600 ease-soft -mt-0.38 w-9/10 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap rounded-lg bg-slate-700 text-center text-white transition-all"
                        role="progressbar"
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    />
                    </div>
                </div>
                <div className="flex-none w-1/4 max-w-full py-4 pl-0 pr-3 mt-0">
                    <div className="flex mb-2">
                    <div className="flex items-center justify-center w-5 h-5 mr-2 text-center bg-center rounded fill-current shadow-soft-2xl bg-gradient-to-tl from-red-500 to-yellow-400 text-neutral-900">
                        <svg
                        width="10px"
                        height="10px"
                        viewBox="0 0 43 36"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                        <title>credit-card</title>
                        <g
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                        >
                            <g
                            transform="translate(-2169.000000, -745.000000)"
                            fill="#FFFFFF"
                            fillRule="nonzero"
                            >
                            <g transform="translate(1716.000000, 291.000000)">
                                <g transform="translate(453.000000, 454.000000)">
                                <path
                                    className="color-background"
                                    d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                    opacity="0.593633743"
                                />
                                <path
                                    className="color-background"
                                    d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                />
                                </g>
                            </g>
                            </g>
                        </g>
                        </svg>
                    </div>
                    <p className="mt-1 mb-0 font-semibold leading-tight text-xs">
                        Sales
                    </p>
                    </div>
                    <h4 className="font-bold">435$</h4>
                    <div className="text-xs h-0.75 flex w-3/4 overflow-visible rounded-lg bg-gray-200">
                    <div
                        className="duration-600 ease-soft -mt-0.38 w-3/10 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap rounded-lg bg-slate-700 text-center text-white transition-all"
                        role="progressbar"
                        aria-valuenow={30}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    />
                    </div>
                </div>
                <div className="flex-none w-1/4 max-w-full py-4 pl-0 pr-3 mt-0">
                    <div className="flex mb-2">
                    <div className="flex items-center justify-center w-5 h-5 mr-2 text-center bg-center rounded fill-current shadow-soft-2xl bg-gradient-to-tl from-red-600 to-rose-400 text-neutral-900">
                        <svg
                        width="10px"
                        height="10px"
                        viewBox="0 0 40 40"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                        <title>settings</title>
                        <g
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                        >
                            <g
                            transform="translate(-2020.000000, -442.000000)"
                            fill="#FFFFFF"
                            fillRule="nonzero"
                            >
                            <g transform="translate(1716.000000, 291.000000)">
                                <g transform="translate(304.000000, 151.000000)">
                                <polygon
                                    className="color-background"
                                    opacity="0.596981957"
                                    points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"
                                />
                                <path
                                    className="color-background"
                                    d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z"
                                    opacity="0.596981957"
                                />
                                <path
                                    className="color-background"
                                    d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"
                                />
                                </g>
                            </g>
                            </g>
                        </g>
                        </svg>
                    </div>
                    <p className="mt-1 mb-0 font-semibold leading-tight text-xs">
                        Items
                    </p>
                    </div>
                    <h4 className="font-bold">43</h4>
                    <div className="text-xs h-0.75 flex w-3/4 overflow-visible rounded-lg bg-gray-200">
                    <div
                        className="duration-600 ease-soft -mt-0.38 -ml-px flex h-1.5 w-1/2 flex-col justify-center overflow-hidden whitespace-nowrap rounded-lg bg-slate-700 text-center text-white transition-all"
                        role="progressbar"
                        aria-valuenow={50}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
              
        <div className="w-full max-w-full px-3 mt-0 lg:w-7/12 lg:flex-none">
        <div className="border-black/12.5 shadow-soft-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
            <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
            <h6>Sales overview</h6>
            <p className="leading-normal text-sm">
                <i className="fa fa-arrow-up text-lime-500" aria-hidden="true" />
                <span className="font-semibold">4% more</span> in 2021
            </p>
            </div>

            <div className="flex-auto p-4">
            <div>
                <canvas
                id="chart-line"
                height={600}
                width={1078}
                style={{
                    display: "block",
                    boxSizing: "border-box",
                    height: 300,
                    width: 539
                }}
                />
            </div>
            </div>
            
        </div>
        </div>
    </div>
    
    <div className="flex flex-wrap my-6 -mx-3">
        <div className="w-full px-3 mt-0 mb-6 md:mb-0  md:flex-none  lg:flex-none">
          {inComing?.length === 0 ?
               
               <div>Empty</div>

               :

        <div className="border-black/12.5 shadow-soft-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border mb-5">

            <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
 
            <div className="flex flex-wrap mt-0 -mx-3">
                <div className="flex-none w-7/12 max-w-full px-3 mt-0 lg:w-1/2 lg:flex-none">
                <h6>Incoming Projects</h6>
                <p className="mb-0 leading-normal text-sm flex items-center">
                   <span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="m173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69L432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>                   
                   </span>
                    <span className="ml-1 font-semibold">30 done</span>
                    this month
                </p>
                </div>
                <div className="flex-none w-5/12 max-w-full px-3 my-auto text-right lg:w-1/2 lg:flex-none">
                <div className="relative pr-6 lg:float-right">
                    <a
                    dropdown-trigger=""
                    className="cursor-pointer"
                    aria-expanded="false"
                    >
                    <i
                        className="fa fa-ellipsis-v text-slate-400"
                        aria-hidden="true"
                    />
                    </a>
                    <p className="hidden transform-dropdown-show" />
                    <ul
                    dropdown-menu=""
                    className="z-100 text-sm transform-dropdown shadow-soft-3xl duration-250 before:duration-350 before:font-awesome before:ease-soft min-w-44 -ml-34 before:text-5.5 pointer-events-none absolute top-0 m-0 mt-2 list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all before:absolute before:top-0 before:right-7 before:left-auto before:z-40 before:text-white before:transition-all before:content-['\f0d8']"
                    >
                    <li className="relative">
                        <a
                        className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300"
                        href="javascript:;"
                        >
                        Action
                        </a>
                    </li>
                    <li className="relative">
                        <a
                        className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300"
                        href="javascript:;"
                        >
                        Another action
                        </a>
                    </li>
                    <li className="relative">
                        <a
                        className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300"
                        href="javascript:;"
                        >
                        Something else here
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>

            </div>
            <div className="flex-auto p-6 px-0 pb-2">
            <div className="overflow-x-auto">

                <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                <thead className="border-b border-gray-200">
                    <tr>
                    <th className="px-6 py-3 font-bold tracking-normal text-left uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">
                        Name
                    </th>
                    <th className="px-6 py-3 pl-2 font-bold tracking-normal text-left uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">
                        Votes
                    </th>
                    <th className="px-6 py-3 font-bold tracking-normal text-center uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">
                        MarketCap
                    </th>
                    {/*
                    <th className="px-6 py-3 font-bold tracking-normal text-center uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">
                        Subscription
                    </th>
                    */}
                    </tr>
                </thead>
                <tbody>
                {
                  inComing.map((data, index) => (
                    <tr>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                            <div className="flex px-2 py-1">
                            <div>
                                <img
                                src="../assets/img/small-logos/logo-xd.svg"
                                className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl"
                                alt="xd"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h6 className="mb-0 leading-normal text-sm">
                                {data.tokenName}
                                </h6>
                            </div>
                            </div>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                            <div className="mt-2 avatar-group font-semibold leading-tight text-xs">
                                {data.votes}
                            </div>
                        </td>
                        <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap">
                            <span className="font-semibold leading-tight text-xs">
                            {" "}
                            ${data.mc}{" "}
                            </span>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                            <div className="w-3/4 mx-auto">
                            <div>
                                <div>
                                <span className="font-semibold leading-tight text-xs bg-[#00ff00] px-[5px] py-[5px] rounded cursor-pointer" onClick={() => openMore(data)}>
                                more
                                </span>
                                </div>
                            </div>

                            </div>
                        </td>
                    </tr>
                  ))
                }
                    
                </tbody>
                </table>
            </div>
            </div>
        </div>
               
             }

        </div>
        <div className="w-full max-w-full px-3 md:w-1/2 md:flex-none lg:w-1/3 lg:flex-none">
        <div className="border-black/12.5 shadow-soft-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
            <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
            <h6>Subscription overview</h6>
            <p className="leading-normal text-sm">
                <i className="fa fa-arrow-up text-lime-500" aria-hidden="true" />
                <span className="font-bold">Total Subscribers</span> {stats?.subscribers.length}
            </p>
            </div>
            <div className="flex-auto p-4">
            <div className="before:border-r-solid relative before:absolute before:top-0 before:left-4 before:h-full before:border-r-2 before:border-r-slate-100 before:content-[''] before:lg:-ml-px">
                <div className="relative mb-4 mt-0 after:clear-both after:table after:content-['']">
                <span className="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                    <i className="relative z-10 text-transparent ni leading-none ni-bell-55 leading-pro bg-gradient-to-tl from-green-600 to-lime-400 bg-clip-text fill-transparent" />
                </span>
                {stats?.subscribers.map((data, index) => (

                    <div className="ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto" key={index}>
                        <h6 className="mb-0 font-semibold leading-normal text-sm text-slate-700 flex">
                        <div>
                            <img src="../assets/img/small-logos/logo-xd.svg" class="inline-flex items-center justify-center mr-2 text-white transition-all duration-200 ease-soft-in-out text-sm h-5 w-9 rounded-xl" alt="xd" />
                        </div>
                            <div className="">{data.tokenName}</div>
                        </h6>
                        <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">
                          22 DEC 7:20 PM
                        </p>
                    </div>

                ))
                }
                </div>


            </div>
            </div>
        </div>
        </div>
    </div>
    <Footer />
    </div>

  )
}
