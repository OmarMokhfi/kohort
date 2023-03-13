import Link from "next/link";
import { AiFillLock, AiOutlinePlus } from "react-icons/ai";
import Group from "./Group";

export default function GroupsPage({
  searchParams,
  data,
}: {
  searchParams: { action: string };
  data: any;
}) {
  return (
    <div className="container py-12">
      <div className="w-fit mx-auto space-y-12 text-center">
        <h1 className="text-3xl font-bold">Select Group</h1>
        <div className="space-y-4">
          {data.map((group: any) => (
            <Link
              href={
                searchParams["action"] == "create-event"
                  ? `/dashboard/events/create`
                  : `/dashboard/groups/home`
              }
              key={group.id}
            >
              <Group name={group.name} slug={group.slug} />
            </Link>
          ))}
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-full h-px my-8 bg-gray-700 border-0" />
            <span className="px-3 font-medium text-gray-900">or</span>
            <hr className="w-full h-px my-8 bg-gray-700 border-0" />
          </div>
          <div>
            <div className="flex items-center p-6 justify-between bg-gray-200 group rounded-xl cursor-not-allowed">
              <div className="w-[80px] h-[80px] rounded flex justify-center items-center bg-black">
                <span className="text-2xl text-white group-hover:hidden">
                  <AiOutlinePlus size={24} />
                </span>
                <span className="text-2xl text-white hidden group-hover:block">
                  <AiFillLock size={24} />
                </span>
              </div>
              <p className="text-xl px-16 group-hover:hidden">
                Create a new Group
              </p>
              <p className="text-xl px-16 hidden group-hover:block">
                Feature is unavailable
              </p>
              <div className="w-[40px] h-[40px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
