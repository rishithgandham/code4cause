import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ArrowRight,
  Building2,
  Code,
  Database,
  Globe,
  Handshake,
  Server,
  Search,
  Gift,
  Palette,
  Smartphone,
  WrenchIcon,
  Heart,
  Clock,
  Users,
} from 'lucide-react';
import Marquee from 'react-fast-marquee';
import BookAMeeting from '@/components/function/bookameeting';

const iconSize = 20;

const reasons = [
  {
    title: 'Expand your reach',
    description:
      'A website allows you to connect with a broader audience beyond your local community. It opens the door to new customers, supporters, and partners from all over the world.',
    icon: Globe,
  },
  {
    title: 'Boost Credibility',
    description:
      'A well-designed website establishes trust and credibility. It shows that your organization is professional, reliable, and committed to serving its audience.',
    icon: Handshake,
  },
  {
    title: 'Enhance Accessibility',
    description:
      'With a website, your information is available 24/7. This makes it easier for potential clients or supporters to learn about your mission, services, and contact you anytime.',
    icon: Globe,
  },
  {
    title: 'Showcase Your Work',
    description:
      'Your website is the perfect place to highlight your achievements, share success stories, and display your portfolio. It’s a dynamic platform where you can communicate your impact effectively.',
    icon: Server,
  },
  {
    title: 'Cost-Effective Marketing',
    description:
      'Compared to traditional advertising, a website is a cost-effective way to promote your organization. With SEO and content marketing, you can attract and retain visitors without breaking the bank.',
    icon: Database,
  },
  {
    title: 'Control Your Narrative',
    description:
      'Your website gives you complete control over your messaging and branding. It’s a space where you can share your story, mission, and values in your own words.',
    icon: Database,
  },
];
export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <MissionStatement />
      <WhyAWebsite />
      <WhyFromUs />
      <BookAMeeting />
    </div>
  );
}


function WhyAWebsite() {
  return (
    <main className="flex-grow flex bg-gradient-to-br from-blue-200  to-blue-100 items-center justify-center hero py-20 ">
      <section className="relative  rounded-xl  px-8 py-8  gap-10 max-w-7xl   overflow-visible">
        <div className="font-bold  w-full  text-start mb-10 pb-2 px-5">
          <p className="sm:text-6xl text-5xl tracking-tighter mb-2 ">
            Why a website? And why from us?
          </p>
          <p className="text-secondary-foreground text-lg font-bold">
            In today’s digital age, having a strong online presence is no
            longer optional—it’s essential. Here’s why building a website can
            make a world of difference for your small organization, and why
            you should choose us.
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-4 items-center">
              <div className="bg-blue-400 p-2 rounded-full">
                <reason.icon size={iconSize} />
              </div>
              <div>
                <h3 className="text-lg font-bold">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

function WhyFromUs() {
  return (
    <main className="flex-grow flex  items-center magicpattern justify-center hero py-10 ">
      <section className="relative  rounded-xl  px-8 py-8  gap-10 max-w-7xl   overflow-visible">
        <div className="font-bold  w-full  text-end mb-10 pb-2 px-5">
          <p className="sm:text-6xl text-5xl tracking-tighter mb-2 ">
            And why from us?
          </p>
          <p className="text-secondary-foreground text-lg font-bold">
            Choosing the right partner for your website is crucial. Our team
            offers unparalleled expertise, dedication, and a mission-driven
            approach to ensure your online presence stands out. Discover why
            our tailored solutions and community-focused services make us the
            perfect choice for your digital journey.
          </p>
        </div>
        <FeatureCards />
      </section>
    </main>
  )
}






function Hero() {
  return (
    <main className="flex-grow flex   items-center justify-center min-h-screen hero bg-gradient-to-b from-blue-100 from-20% to-white">
      <section className="relative py-40 px-8  gap-10 max-w-7xl  grid lg:grid-cols-2 grid-cols-1  overflow-visible">


        <Handshake
          size={50}
          className="absolute md:block hidden top-10 left-[50%] text-blue-400  transform rotate-12"
        />
        <Code
          size={30}
          className="absolute top-20 right-10 md:block hidden  text-blue-400  transform -rotate-12"
        />
        <Database className="absolute top-20  left-10 md:block hidden text-blue-400 transform rotate-12" />
        <Globe className="absolute md:bottom-14 bottom-20 right-10 md:block hidden text-blue-400  transform rotate-12" />
        <Server
          size={30}
          className="absolute md:bottom-14 bottom-20 left-10 text-blue-400 md:block hidden transform -rotate-12"
        />
        <Building2
          size={50}
          className="absolute md:bottom-10 bottom-14 right-[50%] text-blue-400 md:block hidden transform -rotate-12"
        />
        <MainLanding />
        <div className="col-span-1 flex h-full ">
          <Marquee
            direction="right"
            loop={0}
            gradient={false}
            speed={40}
            autoFill
          >
            <Card className="mx-3 rounded-none">
              <div className="w-[500px] h-[300px] bg-secondary border-b-2 flex justify-center items-center ">
                <p className="italic">Placeholder</p>
                {/* <Image
                src={'https://picsum.photos/200/300'}
                alt="Code 4 Cause Team"
                width={300}
                height={200}
                
              /> */}
              </div>

              <CardFooter className="py-2 px-2 flex justify-between">
                <p className="text-sm font-semibold italic tracking-tight">
                  App Name 1
                </p>
                <p className="text-sm font-semibold italic tracking-tight">
                  Organization
                </p>
              </CardFooter>
            </Card>
            {/* <Card className='h-full'>
                <Image
                  src={c4cteam}
                  alt="Code 4 Cause Team"
                  
                  className='w-40 h-40 rounded-full'
                />
              <CardFooter>
                <p className="text-xl font-bold">App Name 1</p>
              </CardFooter>
            </Card> */}
          </Marquee>
        </div>
      </section>
    </main>
  );
}

function MissionStatement() {
  return (
    <main className="flex-grow flex items-center justify-center px-5 hero py-20 bg-gradient-to-b">
      <section className="relative bg-blue-200 rounded-xl  px-4 py-8  gap-10 max-w-7xl   overflow-visible">
        <div className="font-bold tracking-tighter sm:text-6xl text-5xl w-full sm:w-3/4 bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent mb-10 pb-2">
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
            className="bg-blue-600 hover:bg-blue-700 shadow-lg"
          >
            Contact Us
          </Button>
          <Button variant={'link'} size={'lg'}>
            Meet the team
          </Button>
        </div>
      </section>
    </main>
  );
}

function FeatureCards() {
  const features = [
    {
      title: 'Expert SEO Optimization',
      description:
        'Our websites are designed with search engine optimization (SEO) in mind, helping your organization rank higher in search results and attract more visitors.',
      icon: Search,
    },
    {
      title: 'Dedicated Developers',
      description:
        'Our team of passionate high school students is committed to providing personalized service, ensuring every website is crafted with care and attention to detail.',
      icon: Code,
    },
    {
      title: '100% Free Service',
      description:
        'As a nonprofit organization, we offer our services completely free of charge, making professional websites accessible to all small organizations, regardless of budget.',
      icon: Gift,
    },
    {
      title: 'Custom-Tailored Designs',
      description:
        "We understand that every organization is unique. That's why we create custom designs that reflect your brand and meet your specific needs.",
      icon: Palette,
    },
    {
      title: 'Responsive and User-Friendly',
      description:
        'All our websites are fully responsive, ensuring a seamless experience on desktops, tablets, and smartphones, so your audience can access your site anytime, anywhere.',
      icon: Smartphone,
    },
    {
      title: 'Ongoing Support and Maintenance',
      description:
        "We don't just build your website and leave; we offer ongoing support and maintenance to ensure your site stays up-to-date and running smoothly.",
      icon: WrenchIcon,
    },
    {
      title: 'Mission-Driven Approach',
      description:
        'We are driven by a mission to empower small organizations and help them succeed in the digital world. Your success is our success.',
      icon: Heart,
    },
    {
      title: 'Quick Turnaround Time',
      description:
        'We understand the importance of getting online fast. Our streamlined process ensures that your website is up and running in no time.',
      icon: Clock,
    },
    {
      title: 'Community-Focused',
      description:
        "By choosing us, you're supporting a community-driven initiative aimed at making a positive impact on small organizations like yours.",
      icon: Users,
    },
  ];

  return (
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <Card
          key={index}
          className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div className="mb-4 h-32 flex justify-center items-center bg-secondary">
            <div className=" rounded-full  bg-primary/10 p-2 text-primary shadow-xl">
              <feature.icon className="w-6 h-6" />
            </div>
          </div>
          <CardContent className="">
            <CardHeader className="p-0 space-y-2">
              <CardTitle className="text-xl font-semibold text-center">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <p className="text-muted-foreground text-center mt-2">
              {feature.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function MainLanding() {
  return (
    <div className="col-span-1 border-0 md:border-r-2  ">
      <div className=" py-8">
        <div className="font-bold tracking-tighter sm:text-6xl text-5xl bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent pb-2">
          <span>Bridging the digital divide, one line of code at a time </span>
        </div>
      </div>

      <p className="text-xl text-gray-600 mb-10   font-semibold">
        Code 4 Cause is a dedicated non-profit organization creating impactful
        websites for smaller organizations, bridging the digital divide one line
        of code at a time.
      </p>

      <div className="flex justify-start gap-2 ">
        <Button
          size={'lg'}
          className="bg-blue-600 hover:bg-blue-700 shadow-lg "
        >
          Contact Us
        </Button>
        <Button
          variant={'outline'}
          size={'lg'}
          className=" shadow-lg hover:bg-secondary"
        >
          Learn More{' '}
          <span>
            <ArrowRight />
          </span>
        </Button>
      </div>
    </div>
  );
}
