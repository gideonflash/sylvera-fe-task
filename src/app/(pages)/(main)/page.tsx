import styles from "./page.module.css";
import { getProjectsTitles } from "../../lib/data/project";

export default async function Home() {
  const projects = await getProjectsTitles();

  return <div className={styles.main}>Projects</div>;
}
