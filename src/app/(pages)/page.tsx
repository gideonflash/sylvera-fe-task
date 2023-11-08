import Link from "next/link";
import styles from "./page.module.css";
import { getProjectsTitles } from "../lib/data/project";
import { PageUrls } from "../lib/PageUrls";

export default async function Home() {
  const projects = await getProjectsTitles();
  const hasProjects = projects.length;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {hasProjects ? (
          <ul>
            {projects.map((projectTitle) => {
              return (
                <li key={projectTitle}>
                  <Link href={PageUrls.project(projectTitle)}>
                    {projectTitle}
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>no projects availble</p>
        )}
      </div>
    </div>
  );
}
