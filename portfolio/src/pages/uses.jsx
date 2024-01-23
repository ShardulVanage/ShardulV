import React from "react";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { SimpleLayout } from "@/components/SimpleLayout";
import Head from 'next/head'

function ToolsSection({ children, title, ...props }) {
  return (
    <Section title={title} {...props}>
      <ul role='list' className='space-y-8'>
        {children}
      </ul>
    </Section>
  );
}

function Tool({ title, href, children }) {
  return (
    <Card as='li'>
      <Card.Title as='h3' href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

export default function Uses() {
  return (
  <>
    <Head>
        <title>Uses - Shardul Vanage</title>
        <meta
          name="description"
          content="software I use, gadgets I love, and other things I recommend."
        />
      </Head>
    <SimpleLayout
      title='Software I use, gadgets I love, and other things I recommend.'
      intro='I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking Im being productive when Im really just procrastinating. Here’s a big list of all of my favorite stuff.'
    >
      
      <div className='space-y-20'>
        <ToolsSection title='Workstation'>
          <Tool title=' MacBook Air, M1, 8 GB RAM (2020) / Mac Mini M1'>
            I was using an Low-config PC prior to this and the
            difference is night and day. Ive never heard the fans turn on a
            single time, even under the incredibly heavy loads I put it through
            with our various launch simulations.
          </Tool>
          <Tool title='Custom build PC (i5|11f-Gen,RTX-2060S,16GB RAM )'>
            While coding, build, and conquer in one fell swoop! Beyond stellar gaming,
             a custom PC fuels your coding sprints. Melt away mental fatigue with exhilarating gameplay, 
             then return to code with a sharper focus and problem-solving edge honed by strategic challenges.
             Its the ultimate refresh and productivity booster, all in one machine.
          </Tool>
          
        </ToolsSection>
        <ToolsSection title='Development tools'>
          <Tool title='Microsoft Visual Studio Code'>
            I dont care if its missing all of the fancy IDE features everyone
            else relies on, Sublime Text is still the best text editor ever
            made.
          </Tool>
          
          <Tool title='GitHub'>
            GitHub is where over 83 million developers shape the future of
            software, together. Contributed to the open source community,
            managing my Git repositories.
          </Tool>
          <Tool title='REMIX - Ethereum IDE'>
            REMIX throws open the doors with an effortless entry. No more fiddling with installs, just hop in your browser and start crafting smart contracts right away
             The intuitive interface and rich documentation guide you every step of the way.
          </Tool>
        </ToolsSection>
        <ToolsSection title='Productivity'>
          <Tool title='Notion'>
            Notion is a minimal project management and note-taking software
            platform. Writing, planing &amp; getting organized in one place.
          </Tool>
          <Tool title='Todoist'>
            An award-winning app used by millions of people to stay organized
            and get more done. Helps me to organize tasks, lists and reminders
            and also syncs seamlessly across all my devices.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout></>
  );
}