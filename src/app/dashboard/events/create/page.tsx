import BasicInfo from "@/sections/eventspage/create/BasicInfo";
import { AiOutlineCheck } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

export default function page() {
  return (
    <div className="max-h-[calc(100vh-80px)] overflow-y-auto w-full p-8">
      <h1 className="text-3xl font-bold">Create a new event</h1>
      <div className="pt-8 flex gap-8 pb-16">
        <ol className="space-y-4 w-72">
          <li>
            <StepAlert label="Basic Info" index={1} active={true} />
          </li>
          <li>
            <StepAlert label="Event Details" index={2} active={false} />
          </li>
          <li>
            <StepAlert label="Publish" index={3} active={false} />
          </li>
        </ol>
        <div className="p-6 rounded-xl bg-light-noise">
          <BasicInfo />
        </div>
      </div>
    </div>
  );
}

const StepAlert = ({
  active,
  label,
  index,
}: {
  active: boolean;
  label: string;
  index: number;
}) => {
  return active ? (
    <div
      className="w-full p-4 text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400"
      role="alert"
    >
      <div className="flex items-center justify-between">
        <span className="sr-only">{label}</span>
        <h3 className="font-medium">
          {index}. {label}
        </h3>
        <AiOutlineCheck size={20} />
      </div>
    </div>
  ) : (
    <div
      className="w-full p-4 text-blue-700 bg-light-noise border border-blue-300 rounded-lg"
      role="alert"
    >
      <div className="flex items-center justify-between">
        <span className="sr-only">{label}</span>
        <h3 className="font-medium">
          {index}. {label}
        </h3>
        <BsArrowRight size={20} />
      </div>
    </div>
  );
};
