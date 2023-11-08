import { PageUrls } from "@/app/lib/PageUrls";
import Link from "next/link";
import styles from "./list.module.css";

type ListProps = {
  list: string[];
};

export function List(props: ListProps) {
  return (
    <ul>
      {props.list.map((projectTitle) => {
        return (
          <li key={projectTitle} className={styles.linkItem}>
            <Link
              href={PageUrls.project(projectTitle)}
              className={styles.linkItem}
            >
              {projectTitle}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
