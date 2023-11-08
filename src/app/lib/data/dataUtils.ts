import { ProjectMeasurementResponse, FeedEntry } from "./types";

export const parseTitleResponse = (text: string): string[] => {
  return text.split(/\r?\n/).filter(Boolean);
};
export const getFeedEntries = (
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
