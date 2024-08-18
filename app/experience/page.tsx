import { Metadata } from "next";

import { Container } from '../../components/Container';
import ExperienceTimeline from "../../components/ExperienceTimeline";
import TechSection from '../../components/techSection/TechSection';
import { url } from "inspector";

export const metadata: Metadata = {
    title: 'Experience',
    description: 'my experince as a web developer and tech professional',
    openGraph: {
         title: 'Experience | Sethmbaka',
         description: 'my experince as a web developer and a tech professional',
         url: 'https://sethmbaka.com/experience',
         siteName: 'Sethmbaka',
         images: [
            {
           url: 'https://scontent.fnbo9-1.fna.fbcdn.net/v/t1.6435-1/107506207_1204503533216165_7793364888178133706_n.jpg?stp=dst-jpg_p200x200&_nc_cat=110&ccb=1-7&_nc_sid=e4545e&_nc_eui2=AeHHAJEIg1x39pbA6ADw9uSw49ZO-IUKMH7j1k74hQowfqQ_w0h2Vekv21rLt36CqMADVsDM5KOZzFYj8AsEjrJ3&_nc_ohc=juIKycorXAsQ7kNvgGaJX7-&_nc_pt=5&_nc_ht=scontent.fnbo9-1.fna&oh=00_AYCMHIvO3kB7lG86Pi4-m7lL2J9mQmXNJwHQQZusSHwoHA&oe=66E3D7D1',
           width: 1920,
           height: 1080,
           alt: 'Seth Mbaka homepage showing titile, description and social media handles'
            },
         ],
         locale: 'un-us',
         type: 'website'
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    twitter: {
    title:    'Experience  | sethmbaka',
    card: 'summary_large_image',
    description: 'Sethmbaka, a fullstack nextjsx, react and nodejs developer',
    siteId: '1488897330451562507',
    creator: '@sethmbaka',
    creatorId: '1488897330451562507',
    images: [
      {
        url: '',
        alt: `Seth's homepage showing the title, a short description, social links and a grid of pictures`,
      },
    ], 
    }
};

export default function Experience() {
    return (
        <>
        <Container className='mt-16 sm:mt-32'>
            <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    {`All The Cool stuff I've `}
                    <span className="bg-gradient-to-r from-aquamarine to bright-pink bg-clip-text text-6xl text-transparent sm:text-8xl"> 
                        Eexperienced
                    </span> { '' }
                    Along The way
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text">
                {`A few more snippets about my education and how much I've picked up
            along the way .`}
                </p>
            </div>

        </Container>
        <Container 
        className='mt-20 flex flex-col'>
            <ExperienceTimeline />
        </Container>
        <Container className='mt-16'>
            <TechSection />
        </Container>
        </>
    )
}