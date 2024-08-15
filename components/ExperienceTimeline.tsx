'use client';

// Dependencies
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import Image from 'next/image';

// Logos
import logoGSF from '../public/logos/gsf-logo.svg';
import logoKomo from '../public/logos/komo.svg';
import logoAandF from '../public/logos/A&F.svg';
import logoUOB from '../public/logos/university-of-birmingham.svg';

// Stylesheets
import 'react-vertical-timeline-component/style.min.css';

// Pattern
import topographyAquamarine from '../public/patterns/topography-aquamarine.svg';

const experiences = [
  {
    title: ' Freelancer',
    company_name: 'Different clients',
    icon: logoKomo,
    iconBg: '#20271f',
    date: 'Sep 2022- jan-2023',
    points: [
      'Started as a part time freelancer, doing basic web apps and collaborating with other senior developers to build some amazing stuff'
      
    ],
  },
  {
    title: 'software developer 👨‍💼',
    company_name: 'AcuraTech',
    icon: logoAandF,
    iconBg: '#ffffff',
    date: 'July 2023 - Present',
    points: [
      'Built the company website from the ground up using reactjs and nodejs.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create quality interfaces for e-commerce apps for Thai clients.',
      'Primary job is designing, developing and maintaining the company website.',
      'Help to integrate and develop other technical products such as point of sale system for retail stores  for our customers.',
    ],
  },
  {
    title: '🧑‍💻 Fullstack deveoper  🐛',
    company_name: 'freecodecamp bootcamp',
    icon: logoUOB,
    iconBg: '#605270',
    date: 'July 2022 - Dec 2022',
    points: [
      'Became proficient in a vast array of web technologies and tools such as HTML, CSS, JavaScript, Tailwind, React, MySQL, MongoDB and much more.',
      'Lead all 3 group projects, helping to deliver aesthetic, performant applications that I am still tinkering with today.',
      'Was always willing to help out after hours with anyone that was struggling on the course.',
      'Further developed my love and passion for web dev 💖.',
    ],
  },
  {
    title: '👨‍💻 Software Engineer Intern 💽',
    company_name: 'QtaTech',
    icon: logoGSF,
    iconBg: '#ED1C24',
    date: 'Jan 2023 - July 2023',
    points: [
      'Working on the company applications, helping to deliver new features and maintain the current codebase.',
      'Moving fast with a team of 10+ developers, helping to deliver aesthetic, performant applications that that are used by thousands of customers and peers.',
      'Collaborating in an agile environment.',
    ],
  },
];

interface ExperienceTypes {
  title: string;
  company_name: string;
  icon: any;
  iconBg: string;
  date: string;
  points: string[];
}

function ExperienceCard({ experience }: { experience: ExperienceTypes }) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#FB6A82',
        color: '#fff',
        backgroundImage: `url(${topographyAquamarine.src})`,
      }}
      contentArrowStyle={{ borderRight: '7px solid #fb6a82' }}
      date={experience.date}
      dateClassName="rounded-md bg-[#ffffff33] p-2 backdrop-blur-[10px] text-zinc-100 lg:text-zinc-800 dark:text-zinc-100 text-bold opacity-100"
      iconStyle={{ background: experience.iconBg, borderColor: '#00FFAB' }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div className="mb-2 rounded-md bg-[#ffffff33] p-2 backdrop-blur-[10px]">
        <div className="py-5">
          <h3 className="text-xl font-semibold leading-6 text-zinc-100">
            {experience.title}
          </h3>
          <p
            className="mt-1 max-w-2xl text-sm font-thin text-zinc-100"
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </div>

        <div className="border-t border-aquamarine px-4 py-5 sm:p-0">
          <ul className="mt-5 ml-5 list-disc space-y-2">
            {experience.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className="text-white-100 pl-1 text-[14px] tracking-wider"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </VerticalTimelineElement>
  );
}

export default function ExperienceTimeline() {
  return (
    <VerticalTimeline lineColor="#00FFAB">
      {experiences.map((experience, index) => (
        <ExperienceCard key={`experience-${index}`} experience={experience} />
      ))}
    </VerticalTimeline>
  );
}