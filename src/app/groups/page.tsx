import { getGroups } from "@/api/groups";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";

async function getData() {
  const res = await getGroups();
  return res;
}

export default async function Page() {
  const data: any = await getData();
  return (
    <div className="container py-12">
      <div className="w-fit mx-auto space-y-12 text-center">
        <h1 className="text-3xl font-bold">Select Group</h1>
        <div className="space-y-4">
          {data.map((group: any) => (
            <Link href={`/groups/${group.slug}`} key={group.id}>
              <Group name={group.name} />
            </Link>
          ))}
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-full h-px my-8 bg-gray-700 border-0" />
            <span className="px-3 font-medium text-gray-900">or</span>
            <hr className="w-full h-px my-8 bg-gray-700 border-0" />
          </div>
          <div>
            <Link href={`/groups/create`}>
              <div className="flex items-center p-6 justify-between bg-gray-200 group rounded-xl cursor-pointer">
                <div className="w-[80px] h-[80px] rounded flex justify-center items-center bg-black">
                  <span className="text-2xl text-white group-hover:scale-[1.5] transition-transform duration-300">
                    <AiOutlinePlus size={24} />
                  </span>
                </div>
                <p className="text-xl px-16">Create a new Group</p>
                <div className="w-[40px] h-[40px]"></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group({ name }: { name: string }) {
  return (
    <div className="flex items-center p-6 justify-between bg-gray-200 group rounded-xl cursor-pointer">
      <div className="w-[80px] h-[80px] rounded flex justify-center items-center bg-black">
        <span className="text-2xl text-white">
          {name.split(" ").length > 1
            ? name.split(" ")[0][0] + name.split(" ")[1][0]
            : name.split(" ")[0][0]}
        </span>
      </div>
      <p className="text-xl px-16">{name}</p>
      <div className="w-[40px] h-[40px]">
        <div className="bg-black p-2 rounded text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <BsArrowRightShort size={24} />
        </div>
      </div>
    </div>
  );
}
