import { getProjectByTitle } from "@/app/lib/data/project";

export default async function Page({ params }: { params: { title: string } }) {
  const projectInfo = await getProjectByTitle(params.title);
  const hasFeedMeasurement = projectInfo.feed.length;

  if (!hasFeedMeasurement) {
    return <p>No feeds for {params.title}</p>;
  }

  return (
    <div>
      <h2>{params.title}</h2>
      <h3>{projectInfo.totalFeeds}</h3>
      <div>
        <ul>
          {projectInfo.feed.map((entry) => {
            return (
              <li key={entry.deviceId}>
                <p>Id: {entry.deviceId}</p>
                <p>Lat: {entry.latitude}</p>
                <p>Lon: {entry.longitude}</p>
                <p>Recorded on:{entry.timestamp.toUTCString()}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
