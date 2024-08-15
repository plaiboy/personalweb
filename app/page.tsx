// Dependencies
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

// Components
import { Button } from '../components/Button';
import { Container, OuterContainer } from '../components/Container';
import HeroCard from '../components/HeroCard';
import {
  DiscordIcon,
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from '../components/SocialIcons';

import logoAAndF from '../public/logos/A&F.svg';
import logoKomo from '../public/logos/komo.svg';
import logoUOB from '../public/logos/university-of-birmingham.svg';
import logoGSA from '../public/logos/gsa.svg';
import logoGSF from '../public/logos/gsf-logo.svg';
import logoUOE from '../public/logos/university-of-exeter.svg';
import logoBuckland from '../public/logos/west-buckland.svg';

// Images
import gallery1 from '../public/home-gallery/vaporwave-background-1.png';
import gallery2 from '../public/home-gallery/vaporwave-background-2.png';
import gallery3 from '../public/home-gallery/vaporwave-background-3.png';
import gallery4 from '../public/home-gallery/vaporwave-background-4.png';
import gallery5 from '../public/home-gallery/vaporwave-background-5.png';
import widePicture from '../public/home-gallery/vaporwave-wide-aspect.jpg';


interface IconProps {
  className?: string;
}

function MailIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-sunglow"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-sunglow"
      />
    </svg>
  );
}

function BriefcaseIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-bright-pink"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-bright-pink"
      />
    </svg>
  );
}

function AcademicCap(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        className="fill-zinc-100 stroke-aquamarine"
        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
      />
    </svg>
  );
}

function ArrowDownIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SocialLink({
  Icon,
  href,
}: {
  Icon: React.JSXElementConstructor<any>;
  href: string;
}) {
  return (
    <Link className="group -m-1 p-1" href={href}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-aquamarine dark:fill-zinc-400" />
    </Link>
  );
}

function GetInContact() {
  return (
    <div className="rounded-2xl border border-sunglow bg-space-cadet bg-topography-sunglow p-6">
      <h2 className="flex rounded-md bg-[#ffffff33] p-2 text-sm font-semibold text-zinc-100 backdrop-blur-[10px]">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Get In Contact</span>
      </h2>
      <p className="mt-2 rounded-md bg-[#ffffff33] p-2 text-sm text-zinc-300 backdrop-blur-[10px]">
        {`If you'd like to contact me, follow the link below and fill out the form
        😁.`}
      </p>
      <p className="mt-2 rounded-md bg-[#ffffff33] p-2 text-sm text-zinc-300 backdrop-blur-[10px]">
        {`Or email me directly: sethmbaka5@gmail.com`}
      </p>
      <Button
        href="/contact"
        variant="primary"
        text="Contact"
        type="button"
        className="mt-6 w-full"
      ></Button>
    </div>
  );
}

function Resume() {
  let resume = [
    {
      company: 'AcuraTech',
      title: 'Software developer',
      logo: logoGSF,
      start: '2023 July',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'QtaTech',
      title: 'Software Engineer Intern',
      logo: logoAAndF,
      start: '2023 january-July',
      end: {
        label: '2023',
        dateTime: '2023',
      },
    },
    {
      company: 'Freelance',
      title: 'Freelancer',
      logo: logoKomo,
      start: '2022',
      end: {
        label: '2022',
        dateTime: '2022',
      },
    },
  ];

  return (
    <div className="rounded-2xl border border-bright-pink bg-space-cadet bg-topography-bright-pink p-6">
      <h2 className="flex rounded-md bg-[#ffffff33] p-2 text-sm font-semibold text-zinc-100 backdrop-blur-[10px]">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li
            key={roleIndex}
            className="flex gap-4 rounded-md bg-[#ffffff33] p-2 backdrop-blur-[10px]"
          >
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-200">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-300">{role.title}</dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400"
                aria-label={`${role.start} until ${role.end.label ?? role.end}`}
              >
                <time dateTime={role.start}>{role.start}</time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button
        href=".Cv/cvtech.docx"
        download="cvtech.docx"
        variant="primary"
        className="group mt-6 w-full"
        text="Download CV"
        icon={ArrowDownIcon({
          className:
            'h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50',
        })}
      ></Button>
    </div>
  );
}

function Education() {
  let education = [
    {
      school: 'The Technical University of kenya',
      course: 'Fullstack Web Development at freecode camp Bootcamp',
      grade: '90%',
      logo: logoUOB,
      start: '2022',
      end: '2023',
    },
    {
      school: 'The technical University of Kenya',
      course: 'Bachelors in Civil and construction Engineering',
      grade: 'Second class',
      logo: logoGSA,
      start: '2017',
      end: '2023',
    },
    {
      school: 'Nyambaria Highschool',
      course: 'Highschool diploma',
      grade: '2:1',
      logo: logoUOE,
      start: '2013',
      end: '2016',
    },
    {
      school: 'St.peters Kisii Academy',
      course: 'Maths | English | Science | Social Studies',
      grade: 'A | A | A',
      logo: logoBuckland,
      start: '2004',
      end: '2012',
    },
  ];

  return (
    <div className="rounded-2xl border border-aquamarine bg-space-cadet bg-topography-aquamarine p-6">
      <h2 className="flex rounded-md bg-[#ffffff33] p-2 text-sm font-semibold text-zinc-100 backdrop-blur-[10px]">
        <AcademicCap className="h-6 w-6 flex-none" />
        <span className="ml-3">Education</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {education.map((role, roleIndex) => (
          <li
            key={roleIndex}
            className="flex gap-4 rounded-md bg-[#ffffff33] p-2 shadow-md backdrop-blur-[10px]"
          >
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-col flex-wrap gap-x-2">
              <dt className="sr-only">University</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-100">
                {role.school}
              </dd>
              <dt className="sr-only">Course</dt>
              <dd className="text-xs text-zinc-300">{role.course}</dd>
              <dt className="sr-only">Grade</dt>
              <dd className="text-xs text-zinc-300">{role.grade}</dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="block text-xs text-zinc-400"
                aria-label={`${role.start} until ${role.end}`}
              >
                <time dateTime={role.start}>{role.start}</time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end}>{role.end}</time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Seth Mbaka, a fullstack web developer specializing in React, Next.js and Nodejs applications, based in Nairobi, Kenya.',
};

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="overflow-hidden">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="xl:max-w-wxl w-full max-w-xs lg:shrink-0">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                Software Developer, Designer, Problem Solver{' '}
                <span className="bg-gradient-to-r from-aquamarine to-bright-pink bg-clip-text text-6xl text-transparent sm:text-7xl">
                  Believe...
                </span>
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                {`I’m Seth Mbaka, a fullstack (MERN stack) web developer specializing in
                React, Next.js, Nodejs and Go applications, based in Nairobi, Kenya. 
                I am skilled in building practical tools and has a strong interest in developing, design 
                and implementing different aspects parts of software.With over 2 years of experience I have a strong background 
                in developing dynamic and efficient web applications`}
              </p>
              <div className="mt-6 flex gap-6">
                <SocialLink
                  href="https://x.com/maestro49793323"
                  aria-label="Follow on Twitter"
                  Icon={TwitterIcon}
                />
                <SocialLink
                  href="https://github.com/plaiboy"
                  aria-label="Follow on GitHub"
                  Icon={GitHubIcon}
                />
                <SocialLink
                  href="https://www.linkedin.com/in/seth-mbaka-044b71214/"
                  aria-label="Follow on LinkedIn"
                  Icon={LinkedInIcon}
                />
                <SocialLink
                  href="https://www.discordapp.com/"
                  aria-label="Follow on Discord"
                  Icon={DiscordIcon}
                />
              </div>
            </div>
            <div className="mt-14 flex justify-end gap-8 sm:-mt-60 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <div className="relative">
                  <Image
                    src={gallery1}
                    alt="psychedelic vaporwave artwork of a giant statue staring over an ocean"
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
              <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div className="relative">
                  <Image
                    src={gallery2}
                    alt="vaporwave side profile of a woman looking out at a distorted world"
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                  <Image
                    src={gallery3}
                    alt="A crusty retrofutristic living room that has a window peering out into the psychedelic ocean"
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
              <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <div className="relative">
                  <Image
                    src={gallery4}
                    alt="A piece of ground raised up with a statue of man composed of clay like grey matter"
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                  <Image
                    src={gallery5}
                    alt="A phantasmagoric alien world where the stone appears almost cloudlike"
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="mt-9">
        <HeroCard />
      </Container>
      <OuterContainer className="mt-9">
        <Image
          src={widePicture}
          alt="A psychedelic greek side profile of an androgynous being against an ethereal backdrop"
        />
      </OuterContainer>
      <Container className="mt-12 md:mt-14">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <Education />
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <GetInContact />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
}