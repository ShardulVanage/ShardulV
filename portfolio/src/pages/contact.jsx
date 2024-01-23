

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}
function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Contact - Shardul Vanage</title>
        <meta
          name="Contact"
          content="I'm always happy to answer your questions"
        />
      </Head>
      <SimpleLayout
        title="Curious? Say Hello!"
        intro="I'm always happy to answer your questions."
      >
       <section class="body-font relative text-gray-400 ">

  <div class="container  mx-auto px-5 py-2">
    
    <div class="mb-12 flex w-full flex-col text-center">

      <p class="mx-auto text-base leading-relaxed lg:w-2/3 text-zinc-500 dark:text-zinc-400">Feel free to reach out to us! Whether you have a question,
        feedback, or a collaboration proposal, we'd love to hear from you.
      </p>
    </div>

        <form  action="https://getform.io/f/00c5b30f-a66a-4208-8e66-ec4f8d4f49d2"
            method="POST" class=" ">
    <div class="mx-auto md:w-2/3 lg:w-1/2">
      <div class="-m-2 flex flex-wrap">

        {/* <!-- form --> */}
        <div class="w-1/2 p-2">
          <div class="relative">
            <input type="text" id="name" name="name" class="peer w-full rounded border border-black bg-white  py-1 px-3 text-base leading-8 text-gray-900 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-white focus:bg-gray-100 focus:ring-2 " placeholder="Name" />
           <label for="name" class="text-zinc-900 dark:text-zinc-100 absolute left-3 -top-6 bg-transparent text-sm leading-7  transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown: peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-teal-400">Name</label>
          </div>
        </div>
        <div class="w-1/2 p-2">
          <div class="relative">
            <input type="email" id="email" name="email"  class="peer w-full rounded border border-black bg-white  py-1 px-3 text-base leading-8 text-gray-900 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-white focus:bg-gray-100 focus:ring-2 " placeholder="Email" />
            <label for="email" class="text-zinc-900 dark:text-zinc-100 absolute left-3 -top-6 bg-transparent text-sm leading-7  transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown: peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-teal-400">Email</label>
          </div>
        </div>
        <div class="mt-4 w-full p-2">
          <div class="relative">
            <textarea id="message" name="message"  class="peer w-full rounded border border-black bg-white  py-1 px-3 text-base leading-8 text-gray-900 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-white focus:bg-gray-100 focus:ring-2 " placeholder="Message"></textarea>
            <label for="message"  class="text-zinc-900 dark:text-zinc-100 absolute left-3 -top-6 bg-transparent text-sm leading-7  transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown: peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-teal-400">Message</label>
          </div>
        </div>
        <div class="w-full p-2">
          <button class="mx-auto flex rounded border-0 bg-teal-500 py-2 px-8 text-lg text-white hover:bg-teal-600 focus:outline-none">Submit</button>
        </div>


        {/* <!-- footer --> */}
             <div className="flex flex-col justify-center items-center w-full ">
            <ul className=''  role="list">
            <div className='flex  justify-center items-center'>
              
              <SocialLink href="https://www.instagram.com/shardul.vanage/" icon={InstagramIcon} className="mt-4">
             
              </SocialLink>
              <SocialLink href="https://github.com/ShardulVanage" icon={GitHubIcon} className="mt-4">
              
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/shardul-vanage-294823200/" icon={LinkedInIcon} className="mt-4">
              
              </SocialLink>
              
            </div>
              <SocialLink
                href="mailto:vsharadul@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                vsharadul@gmail.com
              </SocialLink>
            </ul>
          </div>

      </div>
    </div>
</form>
  </div>
  
</section>
      </SimpleLayout>
    </>
  )
}
