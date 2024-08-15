import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import clsx from 'clsx';

import {Container} from '../../components/Container';
import { DiscordIcon,
    GitHubIcon,
    LinkedInIcon,
    TwitterIcon,
} from '../../components/SocialIcons';
import portraitImage from '../../public/Headshot_2020.jpg';
import avatarImage from '../../public/GrimFunk-psychadelic.png';
import { ReactNode } from "react";

interface SocialLinkTypes {
    className?: string;
    href: string;
    children: ReactNode;
    Icon: React.JSXElementConstructor<any>
}

const  SocialLink = ({ className, href, children, Icon}: SocialLinkTypes) => {
    return ( <li className={clsx(className, 'flex')}>
        <Link 
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-aquamarine dark:text-zinc-200 "
        >
            <Icon className='h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500'/>
            <span className="ml-4">{children}</span>
        </Link>
    </li>
    );
}

function MailIcon(props: any) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden='true' {...props}>
            <path 
            fillRule="evenodd"
             d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
             />
        </svg>
    )
}

export const metadata: Metadata = {
    title: 'About',
    description: 'I My name Is Seth Mbaka from Nairobi Kenya. An adent software developer.'
};

const About=() => {
    return (
        <>
        <Container className='mt-16 sm:mt-32'>
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12 " >
                <div className="lg:pl-20">
                    <div className="max-w-xs lg:max-w-none">
                        <Image  
                        src={portraitImage}
                        alt="Portrait photo of Seth Mbaka"
                        sizes="(min-width: 1024px) 32rem, 20rem"
                        className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                        />
                    </div>
                </div>

                <div className="lg:order-first lg:row-span-2">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        Names{''}
                        <span className="bg-gradient-to-r from-aquamarine to-bright-pink bg-pink bg-clip-text text-6xl text-transparent sm:text-8xl">
                            Seth Mbaka
                        </span>
                        from Nairobi Kenya. An adent software developer
                    </h1>
                    <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                        <p>
                        {`Story of my life. I went to The Technical University of Kenya 
                initially to study for a degree in Civil Engineering & came out as a programmer more than
                an Engineer. .`}
              </p>
              <p>
                {`My programming journey earnestly began in 2020, partially due to the pandemic, with my first
                attempt at learning Nodejs. I gave up after a few months due to
                the exams and assigments and lack of free time...`}
              </p>
              <p>
                {`In 2022 I realized i needed to explore my passion for tech, so I swapped languages to
                HTML, CSS & Javascript so that I could build web applications &
                fuel my learning with the dream of becoming a web developer.`}
              </p>
              <p>
                {`Alte 2022 came around and I was still no closer to becoming a web
                developer. Since then I have been manouvring the journey as a self-taught developer
                though it has not been easy.`}
              </p>
              <p>
                {`In 2023 I got a intership as a full stack developer working on reactjs and drupal  applications . 
                Ever since I have been upskilling and seeking opportunities that can bring the best out of me.`}
              </p>
                        
                    </div>
                </div>
                <div className="lg:pl-20">
                    <ul role="list" className="border-t border-aquamarine pt-8">
                        <SocialLink 
                        href="https://x.com/maestro49793323s"
                        Icon={TwitterIcon}>
                            @maestro49793323
                        </SocialLink>
                        <SocialLink
                href="https://github.com/plaiboy"
                Icon={GitHubIcon}
                className="mt-4"
              >
                @plaiboy
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/seth-mbaka-044b71214/"
                Icon={LinkedInIcon}
                className="mt-4"
              >
                @seth-mbaka-044b71214
              </SocialLink>
              <SocialLink
                href="https://www.discordapp.com"
                Icon={DiscordIcon}
                className="mt-4"
              >
                @sethmbaka
              </SocialLink>
              <SocialLink
                href="mailto:sethmbaka5@gmail.com"
                Icon={MailIcon}
                className="mt-8 border-t border-aquamarine pt-8"
              >
                sethmbaka5@gmail.com
              </SocialLink>
                    </ul>
                    <div className="mt-8 border-aquamarine pt-8">
                        <div className="max-w-xs lg:max-w-none">
                            <Image
                            src={avatarImage}
                            alt='Stylized vaporwave portrait of a skull floating above an island' 
                            sizes="(min-width: 1024px) 32rem, 20rem"
                            className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"/>

                        </div>
                    </div>
                </div>
            </div>
        </Container>
        </>
    );
}

export default About;