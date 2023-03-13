import { getGroups } from "@/api/groups";
import GroupsPage from "@/sections/groupsPage";

async function getData() {
  const res = await getGroups();
  return res;
}

export default async function Page({
  searchParams,
}: {
  searchParams: { action: string };
}) {
  const data: any = await getData();
  return <GroupsPage data={data} searchParams={searchParams} />;
}
