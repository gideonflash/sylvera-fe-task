import { getProjectsTitles } from "../lib/data/project";
import { List } from "@/app/ui/Projects/List";

export default async function Home() {
  const projects = await getProjectsTitles();
  const hasProjects = projects.length;

  if (!hasProjects) {
    return <p>no projects availble</p>;
  }

  return (
    <>
      <List list={projects} />
    </>
  );
}
