import StarGraphic from "src/components/graphics/StarGraphic";
import HlalGraphic from "src/components/graphics/HlalGraphic";
import WavesGraphic from "src/components/graphics/WavesGraphic";
import PieGraphic from "src/components/graphics/PieGraphic";
import LongChipGraphic from "src/components/graphics/LongChipGraphic";
import Image from "next/image";
import LottieAnimation from "src/components/LottieAnimation";
import { IoShareSocialSharp } from "react-icons/io5";
import { GrGrow } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";

const EVENTS = [
  "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F424829639%2F296336023637%2F1%2Foriginal.20230114-221503?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C85%2C940%2C470&s=1c2a3892aa8152dbaecdc2d0174ff475",
  "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F418060909%2F473350209537%2F1%2Foriginal.20230104-185129?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C51%2C1640%2C820&s=c5caad2a785324d9576dfce90d80a695",
  "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F420637499%2F415073568757%2F1%2Foriginal.20230109-100125?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2600%2C1300&s=d5ead369f5a3a7b81a472d5f312768fa",
  "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F399253999%2F49314143408%2F1%2Foriginal.20221124-094249?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C9%2C1280%2C640&s=a54fdd1bb01b4d1d77c9a247105caa91",
  "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F353297689%2F510083662279%2F1%2Foriginal.jpg?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=4353397cc7399fc663a1c870e0dad435",
];

const TAGS = [
  "#Branding",
  "#UX/UI Design",
  "#Graphic Design",
  "#Development",
  "#Data Science",
];

const SERVICES = [
  {
    title: "Unlimited events",
    subtitle: "Add as many events to your board as you'd like.",
    image: 0,
  },
  {
    title: "1 Click share",
    subtitle: "Share your event on Eventbrite, Facebook, and Instagram.",
    image: 1,
  },
  {
    title: "Manage attendees",
    subtitle: "Generate tickets, and manage check-ins. QR based or Manual.",
    image: 2,
  },
  {
    title: "Automatic feedback",
    subtitle:
      "Setup feedback forms, and trigger an automatic collection when announcing the end of the event.",
    image: 3,
  },
];

const ATTENDEES_SERVICES = [
  {
    title: "Social Share",
    subtitle: "Share your journey on Linekdin, Facebook, and Instagram.",
    icon: <IoShareSocialSharp size={48} />,
  },
  {
    title: "Portfolio",
    subtitle:
      "Share your self development journey, your new skills and your portfolio.",
    icon: <CgProfile size={48} />,
  },
  {
    title: "Roadmap",
    subtitle: "Follow our roadmap to increase your online growth, and value",
    icon: <GrGrow size={48} />,
  },
];

export default function Home() {
  return (
    <>
      <main className="w-full min-h-screen bg-orange-noise text-center bg-primary pb-24">
        <section className="py-8 w-full flex justify-between container">
          <a className="font-bold text-2xl">Kohort.</a>
          <div className="space-x-8 text-lg font-bold">
            <a>About Us</a>
            <a href="#for-organizers">For organizers</a>
            <a className="text-orange">Create an event</a>
            <a>Log In</a>
            <a>Sign Up</a>
          </div>
        </section>

        <div className="relative">
          <div className="w-[250px] absolute left-0 top-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute h-full w-full translate-y-1/2 -scale-x-100">
                <StarGraphic className="w-[30px]" />
              </div>
              <div className="-translate-x-[60px] rotate-[200deg]">
                <HlalGraphic />
              </div>
            </div>
          </div>
          <div className="w-[250px] absolute right-0 top-1/2 -translate-y-1/2">
            <div className="translate-x-[70px] rotate-[220deg]">
              <LongChipGraphic />
            </div>
          </div>
          <div className="space-y-8">
            <h1 className="text-7xl font-bold text-center mt-[100px]">
              <span>Meet people who have</span>
              <br />
              your same interests
            </h1>
            <div className="flex flex-wrap justify-center gap-3 max-w-[450px] mx-auto">
              {TAGS.map((tag, index) => (
                <div
                  key={index}
                  className="px-4 py-2 border border-solid border-gray-300 rounded bg-white cursor-pointer hover:bg-yellow hover:border-transparent transition-colors"
                >
                  {tag}
                </div>
              ))}
            </div>
            <button className="bg-black rounded py-5 px-16 text-white text-xl font-bold hover:translate-y-2">
              Explore Events
            </button>
            <p>Pep up your self development ❤️</p>
          </div>
        </div>
        <div className="relative pt-[150px]">
          <div className="absolute left-[350px] rotate-12 text-xl z-10 font-bold -translate-y-1/2 w-[150px] rounded-full h-[150px] bg-black text-yellow flex flex-col justify-center items-center">
            <p>Latest</p>
            <p>Events</p>
          </div>
          <div className="flex gap-x-8 overflow-x-hidden">
            {EVENTS.map((element, index) => (
              <div key={index} className="min-w-[560px] h-[280px] relative">
                <Image
                  src={element}
                  fill
                  alt="Event Image cover"
                  style={{ objectFit: "cover", objectPosition: "left" }}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <section className="h-[120px] bg-black">
        <div className="flex justify-between items-center container text-white h-full text-2xl">
          <a>Ingeniums</a>
          <a>Micro-Club</a>
          <a>Ironhack</a>
          <a>Alphabit</a>
          <a>Algeria 2.0</a>
          <a>Code Labs Academy</a>
        </div>
      </section>
      <main className="w-full min-h-screen py-24 bg-blue-noise relative">
        <div className="absolute w-[120px] left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0">
          <div className="rotate-90">
            <WavesGraphic />
          </div>
        </div>
        <div className="space-y-6 mt-12">
          <div className="w-[90px] flex justify-between mx-auto">
            <StarGraphic className="w-[30px]" fill="#f7d044" />
            <StarGraphic className="w-[40px]" fill="#EC5629" />
          </div>
          <h2 className="text-5xl font-bold text-center max-w-[600px] mx-auto">
            Networking should come with online visibility
          </h2>
          <p className="max-w-[500px] mx-auto text-2xl text-center">
            We help you grow your online value
          </p>
        </div>
        <div className="grid grid-cols-3 gap-x-12 gap-y-24 mt-24 mb-24 max-w-[1240px] mx-auto">
          {ATTENDEES_SERVICES.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              {service.icon}
              <h3 className="text-2xl font-bold !mb-[10px] mt-6">{service.title}</h3>
              <p className="max-w-[320px] text-center !my-0 text-lg">
                {service.subtitle}
              </p>
            </div>
          ))}
        </div>
        <div className="p-16 bg-primary max-w-[1240px] mx-auto flex flex-col justify-center items-center mt-16 space-y-8 relative mb-12">
          <div className="absolute w-[120px] left-0 -translate-x-1/2">
            <HlalGraphic />
          </div>
          <div className="absolute w-[120px] right-0 translate-x-1/2 top-5">
            <PieGraphic className="w-[100px]" fill="#f7d044" />
          </div>
          <div className="absolute w-[120px] right-0 translate-x-[180px] top-4">
            <StarGraphic className="w-[30px]" />
          </div>
          <Image
            src="https://assets.website-files.com/5837424ae11409586f837994/6119d7a83723f6d0114590ab_quotation.svg"
            width={35}
            height={35}
            alt="quote"
          />
          <p className="text-4xl font-bold text-center max-w-[600px]">
            Selling yourself starts by showcasing who you are.
          </p>
          <p className="text-3xl font-bold underline">Kohort.</p>
        </div>
      </main>
      <main
        className="w-full min-h-screen py-24 bg-light-noise"
        id="for-organizers"
      >
        <div className="space-y-6 text-center mt-12">
          <h2 className="text-5xl font-bold text-center">
            Benefits For Organizers
          </h2>
          <p className="max-w-[500px] mx-auto text-2xl text-center">
            you&apos;ll never need to go anywhere else
          </p>
          <button className="bg-black rounded py-5 px-12 text-white text-xl font-bold hover:translate-y-2">
            Start for Free
          </button>
        </div>
        <div className="grid grid-cols-2 gap-x-12 gap-y-24 mt-24 mb-24 max-w-[980px] mx-auto">
          {SERVICES.map((service, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <div className="w-[150px] h-[150px]">
                <LottieAnimation size={150} dataIndex={service.image} />
              </div>
              <h3 className="text-2xl font-bold !mb-[10px]">{service.title}</h3>
              <p className="max-w-[320px] text-center !my-0 text-lg">
                {service.subtitle}
              </p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
