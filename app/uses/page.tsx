import { Metadata } from 'next';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { Card, CardTitle } from '../../components/Card';
import { Section } from '../../components/Section';
import { SimpleLayout } from '../../components/SimpleLayout';

interface ToolsSectionTypes extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
  title: string;
}

function ToolsSection({ children, ...props }: ToolsSectionTypes) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  );
}

interface ToolTypes {
  logo?: any;
  title: string;
  children: ReactNode;
}

function Tool({ logo, title, children }: ToolTypes) {
  if (logo) {
    return (
      <Card as="li">
        <CardTitle as="h3">
          {logo}
          {` ${title}`}
        </CardTitle>
        <Card.Description>{children}</Card.Description>
      </Card>
    );
  } else {
    return (
      <Card as="li">
        <CardTitle as="h3">{title}</CardTitle>
        <Card.Description>{children}</Card.Description>
      </Card>
    );
  }
}

function HighLightedWord() {
  return (
    <span className="bg-gradient-to-r from-aquamarine to-bright-pink bg-clip-text text-6xl text-transparent sm:text-8xl">
      Uses:
    </span>
  );
}

export const metadata: Metadata = {
  title: 'Uses',
  description: 'The software, tools, gadgets and paraphernalia that get me going.',
};

export default function Uses() {
  return (
    <>
      <SimpleLayout
        HighlightedWord={HighLightedWord()}
        title=" The software, tools, gadgets and paraphernalia that get me going 🤗"
        intro="What do you use you might ask? Glad you're interested! Here’s a big list of all of the good techno wizardry I love to use."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool
              title={`📺 BenQ 32" 4K Designer Monitor, 3840x2160 4K UHD 60Hz refresh rate`}
            >
              {`I got this behemoth monitor in 2022. The range of colors on it are
              fantastic and it's super HiDPI. Absolutely love using it, for
              design or building out UI.`}
            </Tool>
            <Tool title="⌨️ HyperX Alloy Core RGB - Gaming Keyboard (UK Layout)">
              {`Sticking in the fashion of a true unicorn lover I have an RGB
              keyboard as well. It's big and bulky but I always prefer that to
              smaller keyboards.`}
            </Tool>
            <Tool title="🖱️ Corsair M65 RGB ELITE Tunable FPS Gaming Mouse Black">
              {`I don't have as much time for games as I used to, plus I'm not
              really an FPS guy as so this never came in handy. But it's got a
              nice weight to it and a great feeling the hand. Good for raiding
              in MMOs though 🧙‍♂️.`}
            </Tool>
            <Tool title="💺 MARKUS Office chair, Vissle dark grey">
              {`If you're on a budget and don't want to splash out too much this
              is a great choice 👏. Super comfortable for the price. It's
              certainly helped with my crummy posture 🙆‍♂️.`}
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool
              logo={<i className="devicon-vscode-plain colored"></i>}
              title="Visual Studio Code"
            >
              {`Atom was the code editor I first cut my teeth on, when I was
              learning Python. Now it's visual studio code. I have the VIM
              extension installed, as I'm debating swapping out either NeoVim or
              Vim. Vim motions definitely improve productivity a tonne.`}
            </Tool>
            <Tool title="💽 Windows Terminal">
              {`Powershell was the bane of my life for so long. I've got PopOS
              installed on a second SSD as I was using it to learn linux. So I
              became comfortable using bash commands. Thankfully windows shipped
              their new terminal and it's great. I can run whatever kind of
              shell I'd like and customize it to my hearts desire.`}
            </Tool>
            <Tool title="📬 PostMan">Love it, great for building APIs</Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool
              logo={<i className="devicon-figma-plain colored"></i>}
              title="Figma"
            >
              {`I started learning how to use figma over two years ago. I was
              always struggling to make my designs look sleek and sophisticated.
              But thanks to figma, It's helped me rapidly design sites that look
              most bodacious 🤟.`}
            </Tool>
            <Tool
              logo={<i className="devicon-illustrator-plain colored"></i>}
              title="Adobe Suite"
            >
              {`Use it whenever I need to edit logos or pictures. I mean most
              people use Adobe so it's not too special 🤣. Get the most use out
              of Illustrator and PhotoShop.`}
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  );
}