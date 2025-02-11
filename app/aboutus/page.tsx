import React from 'react'

import { Button } from '@/components/ui/button'
import Link from 'next/link';
import {  User } from 'lucide-react';

import saket from '@/app/images/saket.png'
import anish from '@/app/images/anish.png'
import eshwar from '@/app/images/eshwar.jpg'
import jitesh from '@/app/images/jitesh.png'
import karan from '@/app/images/karan.jpeg'
import rishith from '@/app/images/rishith.jpg'
import sriram from '@/app/images/sriram.png'


export const metadata: Metadata = {
    title: 'Code 4 Cause - About Us',
    description: 'Based in Richmond, Virginia, our initiative is to empower local businesses and organizations by creating a platform for them to advertise their business.',
    
}
export default function Page() {
    return (
        <>
            <div className="flex-col flex min-h-screen">
                <MissionStatement />
                <OurTeam />
            </div>
        </>
    )
}






function MissionStatement() {
    return (
        <main className="flex min-h-screen   mx-5 magicpattern justify-center items-center">
            <section className=" bg-blue-200 mt-20 sm:mt-0  rounded-xl  px-4 py-8  gap-10 max-w-7xl   overflow-visible">
                <div className="font-bold tracking-tighter sm:text-6xl text-5xl md:w-3/4 w-full bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent mb-10 pb-2">
                    <span>Bridging Communities Through Technology and Purpose.</span>
                </div>

                <p className="text-lg text-gray-600 mb-2 font-semibold">
                    Based in Richmond, Virginia, our initiative is to empower local
                    businesses and organizations by creating a platform for them to
                    advertise their business. As a nonprofit organization, we are
                    dedicated to creating professional, custom-built websites at no cost
                    to help small businesses thrive in this digital age. Through this
                    organization, we aim to support our community and assist the growth of
                    these businesses.
                </p>
                <p className="text-lg text-gray-600 mb-10 font-semibold">
                    As a team of high school students, we strive to provide our clients
                    with the best possible service. Our mission is to create a community
                    where every business can leave their digital mark. We understand the
                    challenges that small organizations face in our digital age, and we
                    are here to help.
                </p>

                <div className="flex justify-start gap-2 ">
                    <Button
                        size={'lg'}
                        asChild
                        className="bg-blue-600 hover:bg-blue-700 shadow-lg"
                    >
                        <Link href="/#bam">Book a meeting</Link>
                    </Button>
                    <Button variant={'link'} size={'lg'}>
                        Meet the team
                    </Button>
                </div>
            </section>
        </main>
    );
}


import Image, { StaticImageData } from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"
import { Metadata } from 'next';

interface TeamMember {
    name: string
    role: string
    image?: StaticImageData | string
    bio: string
    github?: string
    linkedin?: string
    twitter?: string
}

const teamMembers: TeamMember[] = [
    {
        name: "Anish Aruru ",
        role: "Co-Founder, Lead Manager, Co-Chief Technology Director",
        image: anish,
        bio: "Hello, I am Anish Aruru, and I am a junior at the Maggie L. Walker Governor's School. I love learning new things and fueling my curiosity. My dream fields are coding and engineering. In my free time I love playing pickleball and the guitar. I hope to be able to make an impact on my community through Code4Cause and I am excited for the future!",
        github: "https://github.com",
        linkedin: "https://linkedin.com/",
        twitter: "https://twitter.com/",
    },
    {
        name: "Saket Sambaraju",
        role: "Co Founder, Project Manager, Co-Chief Technology Director",
        image: saket,
        bio: "My name is Saket Sambaraju and I am a junior at Maggie L. Walker Governor's School. I am deeply interested in Computer Science and a variety of coding languages. In my free time, I love to play table tennis and learn new concepts. I am excited about the impact that we can bring in our community with Code4Cause! ",
        github: "https://github.com/",
        linkedin: "https://linkedin.com/in/",
    },
    {
        name: "Eshwar Bejugam",
        role: "Co-Founder, Director of Operations and Logistics",
        image: eshwar,
        bio: "Hi, I am Eshwar Bejugam and I am a junior at J.R. Tucker High School in the International Baccalaureate program. I love math and computer science and I aspire to pursue data science in the future. In my free time, I enjoy playing chess and pickleball. I’m excited to use my love for technology to help the community!",
        github: "https://github.com/",
        linkedin: "https://linkedin.com/in/",
    },
    {
        name: "Sriram Darsi",
        role: "Co Founder, Director of External Communications",
        image: sriram,
        bio: "Hi! My name is Sriram Darsi and I am a junior at Henrico High School. In my free time, I love to listen to music, play basketball, and watch sports. I am looking forward to implementing various softwares in different socioeconomic areas in my community.",
        github: "https://github.com/",
        linkedin: "https://linkedin.com/in/",
    },
    {
        name: "Jitesh Chevuru",
        role: "Co Founder, Director of Marketing",
        image: jitesh,
        bio: "My name is Jithesh Chevuru and I am the current director of marketing. I am a junior at Henrico High School and I love to play tennis and volleyball. In my free time I like to talk to my friends and learn new things. I hope to spread Code4Cause’s mission across the nation.",
        github: "https://github.com/",
        linkedin: "https://linkedin.com/in/",
    },
    {
        name: "Karan Nair",
        role: "Lead Designer, Coder",
        image: karan,
        bio: "My name is Karan Nair and I am a junior at Maggie L. Walker Governor's School. In my free time I like to workout, play soccer, and cad. In the future I want to pursue engineering with a minor in computer science. Im experienced in python, html, and css, and hope to help lead Code4Cause to a bright future!",
        github: "https://github.com/",
        linkedin: "https://linkedin.com/in/",
    },
    {
        name: "Rishith Gandham",
        role: "Intern, Code Developer",
        image: rishith,
        bio: "Hello, I am Rishith Gandham, and I am a junior at Deep Run High School. I am passionate about computer science and I love to code. I am excited to use my skills to help the community and make a difference. In my free time, I enjoy playing basketball and the piano.",
        linkedin: "https://linkedin.com/in/",
        twitter: "https://twitter.com/",
    },
    
    



]

 function OurTeam() {
    return (
        <section id="mtt" className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Meet the passionate individuals behind Code 4 Cause. Our diverse team brings together expertise in technology,
                    social impact, and project management to drive positive change through innovative solutions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member) => (
                        <Card key={member.name} className="overflow-hidden">
                            <CardContent className="p-0">

                                {member.image ? (

                                    <Image
                                        src={member.image || "/placeholder.svg"}
                                        alt={member.name}
                                        width={400}
                                        height={400}
                                        className=" h-96 object-cover"
                                    />
                                ) :
                                    (
                                        <div className="bg-gray-100 h-44 p-4 flex items-center justify-center">
                                            <User size={48} />
                                        </div>
                                    )}
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg">{member.name}</h3>
                                    <p className="text-sm text-gray-500 mb-2">{member.role}</p>
                                    <p className="text-sm mb-4">{member.bio}</p>
                                    <div className="flex space-x-2">
                                        {member.github && (
                                            <a
                                                href={member.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-600 hover:text-primary"
                                            >
                                                <Github size={20} />
                                                <span className="sr-only">GitHub</span>
                                            </a>
                                        )}
                                        {member.linkedin && (
                                            <a
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-600 hover:text-primary"
                                            >
                                                <Linkedin size={20} />
                                                <span className="sr-only">LinkedIn</span>
                                            </a>
                                        )}
                                        {member.twitter && (
                                            <a
                                                href={member.twitter}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-600 hover:text-primary"
                                            >
                                                <Twitter size={20} />
                                                <span className="sr-only">Twitter</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

