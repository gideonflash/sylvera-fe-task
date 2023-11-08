import Link from "next/link";
import { getProjectsTitles } from "../lib/data/project";
import { PageUrls } from "../lib/PageUrls";

export default async function Home() {
  const projects = await getProjectsTitles();
  const hasProjects = projects.length;

  if (!hasProjects) {
    return <p>no projects availble</p>;
  }

  return (
    <div>
      <ul>
        {projects.map((projectTitle) => {
          return (
            <li key={projectTitle}>
              <Link href={PageUrls.project(projectTitle)}>{projectTitle}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
