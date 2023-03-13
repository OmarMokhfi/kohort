"use client";
import { RootState } from "@/store";
import { setGroup } from "@/store/slices/groupSlice";
import { BsArrowRightShort } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

interface GroupProps {
  name: string;
  slug: string;
}

export default function Group({ name, slug }: GroupProps) {
  const group = useSelector((state: RootState) => state.group.selected);
  const dispatch = useDispatch();

  const selectGroup = () => {
    dispatch(setGroup(slug));
  };

  return (
    <div
      className="flex items-center p-6 justify-between bg-gray-200 group rounded-xl cursor-pointer min-w-[500px]"
      onClick={selectGroup}
    >
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
