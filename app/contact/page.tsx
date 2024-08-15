import { Metadata } from "next";

import ContactForm from '../../components/ContactForm';
import { Container } from '../../components/Container';
import Earth from '../../components/canvas/Earth';

export const metadata: Metadata = {
    title: 'Contact',
    description: `Hey there! get in touch I am always one call away. I like learning new cool stuff`

};

export default function Contact() {
    return (
        <>
        <Container className='mt-16 sm:mt-32'>
            <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    Get In Touch
                    <span className="bg-gradient to-r from-aquamarine to bright-pink bg-clip-text text-6xl text-transparent sm:text-8xl">
                        Contact
                    </span> { ''}
                    with me If you Like it 😂
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                {`I'm always open to new job opportunities or collaborating on some
            awesome new projects. Just fill out the form and I'll get back to
            you 💪.`}
                </p>
            </div>
        </Container>
        <Container className='mt-8 sm:mt-16'>
            <div className="flex flex-col gap-10 overflow-hidden xl:flex-row-reverse xl:items-center">
                <Earth />
                <ContactForm />
            </div>
        </Container>
        </>
    )
}