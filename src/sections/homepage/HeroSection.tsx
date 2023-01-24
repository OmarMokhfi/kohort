import HlalGraphic from "@/components/graphics/HlalGraphic";
import LongChipGraphic from "@/components/graphics/LongChipGraphic";
import StarGraphic from "@/components/graphics/StarGraphic";
import Image from "next/image";

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

export default function HeroSection() {
  return (
    <main>
      <div className="relative">
        <div className="w-[250px] absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="relative">
            <div className="absolute h-full w-full translate-y-1/2 -scale-x-100">
              <StarGraphic className="w-[30px]" />
            </div>
            <div className="-translate-x-[60px] rotate-[200deg]">
              <HlalGraphic />
            </div>
          </div>
        </div>
        <div className="w-[250px] absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="translate-x-[70px] rotate-[220deg]">
            <LongChipGraphic />
          </div>
        </div>
        <div className="space-y-8 container pt-[50px] md:pt-[100px]">
          <h1 className="text-4xl md:text-5xl xl:text-7xl font-bold text-center">
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
          <button className="bg-black rounded py-5 px-16 text-white text-xl font-bold hover:opacity-80">
            Explore Events
          </button>
          <p>Pep up your self development ❤️</p>
        </div>
      </div>
      <div className="relative pt-[150px]">
        <div className="absolute left-[50px] md:left-[350px] rotate-12 text-md md:text-xl z-10 font-bold -translate-y-1/2 w-[100px] md:w-[150px] rounded-full h-[100px] md:h-[150px] bg-black text-yellow flex flex-col justify-center items-center">
          <p>Latest</p>
          <p>Events</p>
        </div>
        <div className="flex gap-x-8 overflow-x-hidden">
          {EVENTS.map((element, index) => (
            <div
              key={index}
              className="min-w-full md:min-w-[560px] h-[280px] relative"
            >
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
  );
}
