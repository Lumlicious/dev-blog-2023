import Image from "next/image";
import Link from "next/link";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaHamburger, FaTimes } from "react-icons/fa";

export default function Navigation() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [navShow, setNavShow] = useState(false)

    useEffect(() => {
        setMounted(true);
    }, [])

    const test = () => {
        console.log('clicked!')
    }

    const renderThemeChanger = () => {
        if (!mounted) return null;

        const currentTheme = theme === "system" ? systemTheme : theme;

        if (currentTheme === "dark") {
            return (
                <div className="cursor-pointer text-3xl text-primary dark:text-white" role="button" onClick={() => setTheme('light')}>

                    <BsFillSunFill />
                </div>
            )
        }

        else {
            return (
                <div className="cursor-pointer text-3xl text-primary dark:text-white" role="button" onClick={() => setTheme('dark')} >

                    <BsFillMoonStarsFill />
                </div>
            )
        }
    };

    return (
        <>
            <div className="container mx-auto">
                <div className="flex items-center justify-between py-6 lg:py-10">
                    <Link href="/" className="flex items-center">
                        {/* <div className="mr-2">
                            <Image src="/img/logo.svg" alt="logo" width='30' height='30' />
                        </div> */}
                        <p className="hidden font-body text-2xl font-bold text-primary dark:text-white lg:block">
                            Chad Lumley
                        </p>
                    </Link>
                    <div className="flex items-center lg:hidden">

                        <i className="bx mr-8 cursor-pointer text-3xl text-primary dark:text-white"></i>

                        <FaHamburger className="text-4xl cursor-pointer fill-current text-primary dark:text-white" onClick={() => setNavShow(true)} />
                    </div>
                    <div className="hidden lg:block">
                        <ul className="flex items-center">

                            <li className="group relative mr-6 mb-1">
                                <div
                                    className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow">
                                </div>
                                <Link href="/"
                                    className="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary">Intro</Link>
                            </li>

                            <li className="group relative mr-6 mb-1">
                                <div
                                    className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow">
                                </div>
                                <Link href="/blog"
                                    className="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary">Blog</Link>
                            </li>

                            <li className="group relative mr-6 mb-1">
                                <div
                                    className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow">
                                </div>
                                <Link href="/uses"
                                    className="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary">Uses</Link>
                            </li>

                            <li className="group relative mr-6 mb-1">
                                <div
                                    className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow">
                                </div>
                                <Link href="/resume"
                                    className="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary">Resume</Link>
                            </li>

                            <li>
                                {renderThemeChanger()}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div
                className={`pointer-events-none fixed inset-0 z-50 flex bg-black bg-opacity-80 opacity-0 transition-opacity lg:hidden ${navShow ? 'opacity-100 pointer-events-auto' : ''}`}>
                <div className="ml-auto w-2/3 bg-green p-4 md:w-1/3">
                    <FaTimes className="text-4xl absolute top-0 right-0 mt-4 mr-4 cursor-pointer fill-current text-primary dark:text-white" onClick={() => setNavShow(false)} />

                    {/* <i className="bx bx-x absolute top-0 right-0 mt-4 mr-4 text-4xl text-white" ></i> */}
                    <ul className="mt-8 flex flex-col">

                        <li className="">
                            <Link href="/" className="mb-3 block px-2 font-body text-lg font-medium text-white" onClick={() => setNavShow(false)}>Intro</Link>
                        </li>

                        <li className="">
                            <Link href="/blog" className="mb-3 block px-2 font-body text-lg font-medium text-white" onClick={() => setNavShow(false)}>Blog</Link>
                        </li>

                        <li className="">
                            <Link href="/uses" className="mb-3 block px-2 font-body text-lg font-medium text-white" onClick={() => setNavShow(false)}>Uses</Link>
                        </li>

                        <li className="">
                            <Link href="/resume" className="mb-3 block px-2 font-body text-lg font-medium text-white" onClick={() => setNavShow(false)}>Resume</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}