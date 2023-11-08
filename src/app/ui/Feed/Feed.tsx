import { FeedEntry } from "@/app/lib/data/types";
import styles from "./feed.module.css";

interface FeedProps {
  feed: FeedEntry[];
}

export function Feed(props: FeedProps) {
  return (
    <ul>
      {props.feed.map((entry) => {
        return (
          <li key={entry.deviceId} className={styles.feedItem}>
            <p className={styles.feedItemId}>{entry.deviceId}</p>
            <div className={styles.feedItemLocation}>
              <p>Lat: {entry.latitude}</p>
              <p>Lon: {entry.longitude}</p>
            </div>
            <p className={styles.FeedTimeStamp}>
              Recorded on {entry.timestamp.toUTCString()}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
