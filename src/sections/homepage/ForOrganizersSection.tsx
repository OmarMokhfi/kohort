import LottieAnimation from "src/components/LottieAnimation";

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
    subtitle: "Setup feedback forms, and trigger an automatic collection.",
    image: 3,
  },
];

export default function ForOrganizersSection() {
  return (
    <main
      className="w-full pt-24 pb-8 md:py-24 bg-light-noise"
      id="for-organizers"
    >
      <div className="space-y-4 md:space-y-6 text-center mt-12 container">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Benefits For Organizers
        </h2>
        <p className="max-w-[500px] mx-auto text-2xl text-center">
          you&apos;ll never need to go anywhere else
        </p>
        <button className="bg-black rounded py-5 px-12 text-white text-xl font-bold hover:opacity-80">
          Start for Free
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-12 mt-24 mb-24 max-w-[980px] mx-auto container">
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
  );
}
