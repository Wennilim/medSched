import { FacebookIcon, GitHubIcon, InstagramIcon, TwitterIcon } from "@/icons/footerIcon";
import {  SocialLink, TLink } from "@/types/footer";
import { Link } from "react-router-dom";

export const Footer = () => {

    const links: TLink[] = [
        { name: 'About', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'History', href: '#' },
        { name: 'Services', href: '#' },
        { name: 'Projects', href: '#' },
        { name: 'Blog', href: '#' },
    ];

    const socialLinks: SocialLink[] = [
        {
            name: 'Facebook',
            href: '#',
            icon: <FacebookIcon />,
        },
        {
            name: 'Instagram',
            href: '#',
            icon: <InstagramIcon />,
        },
        {
            name: 'Twitter',
            href: '#',
            icon: <TwitterIcon />,
        },
        {
            name: 'GitHub',
            href: '#',
            icon: <GitHubIcon />,
        },
    ];
    return (
        <footer className="bg-gray-100">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex justify-center gap-3">
                    <img src='/logo.svg' alt='logo' className='w-10 h-10' />
                    <h2 className='font-bold text-4xl hidden 2xs:block'><span className='text-logo'>Med</span>Sched</h2>
                </div>

                <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum
                    itaque neque.
                </p>

                <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link className="text-gray-700 transition hover:text-gray-700/75" to="#"> {link.name} </Link>
                        </li>
                    ))}

                </ul>

                <ul className="mt-12 flex justify-center gap-6 md:gap-8">
                    {socialLinks.map((social) => (
                        <li key={social.name}>
                            <Link
                                to={social.href}
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-700 transition hover:text-gray-700/75"
                            >
                                <span className="sr-only">{social.name}</span>
                                {social.icon}
                            </Link>
                        </li>
                    ))}

                </ul>
            </div>
        </footer>
    )
}
