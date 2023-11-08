import { getProjectByTitle } from "@/app/lib/data/project";
import { Feed } from "@/app/ui/Feed/Feed";
import styles from "./page.module.css";

export default async function Page({ params }: { params: { title: string } }) {
  const projectInfo = await getProjectByTitle(params.title);
  const hasFeedMeasurement = projectInfo.feed.length;

  if (!hasFeedMeasurement) {
    return (
      <p>
        No feeds for project called{" "}
        <span className={styles.inlineText}>{params.title}</span>
      </p>
    );
  }

  return (
    <div>
      <h3 className={styles.readings}>
        <span className={styles.inlineText}>Showing</span>{" "}
        {projectInfo.feed.length}
        <span className={styles.inlineText}> readings out of </span>
        {projectInfo.totalFeeds}
      </h3>

      <Feed feed={projectInfo.feed} />
    </div>
  );
}
