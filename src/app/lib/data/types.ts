export type ProjectMeasurementResponse = {
  num_of_records: number;
  feeds: {
    device_id: string;
    gps_lat: number;
    gps_lon: number;
    timestamp: string;
  }[];
};

export type FeedEntry = {
  deviceId: string;
  latitude: number;
  longitude: number;
  timestamp: Date;
};

export type ProjectInfo = {
  totalFeeds: number;
  feed: FeedEntry[];
};
