import { FeedEntry, ProjectInfo, ProjectMeasurementResponse } from "./types";

const BASE_API_URL = "https://pm25.lass-net.org/API-1.0.0";

export const getProjectsTitles = async (): Promise<string[]> => {
  const data = await fetch(`${BASE_API_URL}/project/all/`);

  if (!data.ok) {
    throw new Error("Failed to fetching data");
  }

  const projectTitlesAsArray = (await data.text()).split(/\r?\n/);

  return projectTitlesAsArray;
};

const getFeedEntries = (
  projectInfo: ProjectMeasurementResponse,
  limit = 10
): FeedEntry[] => {
  return projectInfo.feeds
    .map((entry) => {
      return {
        deviceId: entry.device_id,
        latitude: entry.gps_lat,
        longitude: entry.gps_lon,
        timestamp: new Date(entry.timestamp),
      };
    })
    .slice(0, limit);
};

export const getProjectByTitle = async (
  title: string
): Promise<ProjectInfo> => {
  const data = await fetch(`${BASE_API_URL}/project/${title}/latest/`);

  if (!data.ok) {
    throw new Error("Failed to fetching data");
  }

  const response: ProjectMeasurementResponse = await data.json();
  const feed: FeedEntry[] = getFeedEntries(response);

  return {
    totalFeeds: response.num_of_records,
    feed,
  };
};
