import StarGraphic from "src/components/graphics/StarGraphic";
import HlalGraphic from "src/components/graphics/HlalGraphic";
import WavesGraphic from "src/components/graphics/WavesGraphic";
import PieGraphic from "src/components/graphics/PieGraphic";
import Image from "next/image";
import { IoShareSocialSharp } from "react-icons/io5";
import { GrGrow } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";

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

export default function NetworkSection() {
  return (
    <main className="w-full min-h-screen pt-6 pb-24 md:py-24 bg-blue-noise relative">
      <div className="absolute w-[120px] left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0">
        <div className="rotate-90">
          <WavesGraphic />
        </div>
      </div>
      <div className="space-y-4 md:space-y-6 mt-12 container">
        <div className="w-[90px] flex justify-between mx-auto">
          <StarGraphic className="w-[30px]" fill="#f7d044" />
          <StarGraphic className="w-[40px]" fill="#EC5629" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-center max-w-[600px] mx-auto">
          Networking should come with online visibility
        </h2>
        <p className="max-w-[500px] mx-auto text-xl md:text-2xl text-center">
          We help you grow your online value
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 lg:gap-x-12 gap-y-12 mt-24 mb-24 max-w-[1240px] container mx-auto">
        {ATTENDEES_SERVICES.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            {service.icon}
            <h3 className="text-2xl font-bold !mb-[10px] mt-6">
              {service.title}
            </h3>
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
        <p className="text-3xl md:text-4xl font-bold text-center max-w-[600px]">
          Selling yourself starts by showcasing who you are.
        </p>
        <p className="text-3xl font-bold underline">Kohort.</p>
      </div>
    </main>
  );
}
