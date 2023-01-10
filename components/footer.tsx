import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col items-center justify-between border-t border-grey-lighter py-10 sm:flex-row sm:py-12">
                <div className="mr-auto flex flex-col items-center sm:flex-row">
                    <a href="/" className="mr-auto sm:mr-6">
                        <img src="/assets/img/logo.svg" alt="logo" />
                    </a>
                    <p className="pt-5 font-body font-light text-primary dark:text-white sm:pt-0">
                        {`${`© ${new Date().getFullYear()}`} Chad Lumley`}
                    </p>
                </div>
                <div className="mr-auto flex items-center pt-5 sm:mr-0 sm:pt-0">

                    <a href="https://github.com/Lumlicious/" target="_blank">
                        <FaGithub className="text-6xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors" />
                    </a>

                    <a href="https://www.linkedin.com/in/chad-lumley-a4748124/" target="_blank">
                        <FaLinkedin className="text-6xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors" />
                    </a>

                </div>
            </div>
        </div>
    )
}