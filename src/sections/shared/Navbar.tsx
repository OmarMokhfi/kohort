import { BsInfoLg } from "react-icons/bs";

export default function Navbar() {
  return (
    <section
      className="md:py-8 w-full flex justify-between container fixed md:static bottom-4"
      style={{ zIndex: 999 }}
    >
      <a className="font-bold text-2xl hidden md:block">Kohort.</a>
      <div className="md:space-x-8 text-md md:text-lg py-4 md:py-0 font-bold flex items-center justify-around md:justify-end w-full rounded-xl bg-black text-white md:bg-transparent md:text-black">
        <a className="hidden md:block">About Us</a>
        <a className="text-orange">Create an event</a>
        <a href="#for-organizers" className="hidden md:block">
          For organizers
        </a>
        <a>Sign Up</a>
        <a>Log In</a>
      </div>
    </section>
  );
}
