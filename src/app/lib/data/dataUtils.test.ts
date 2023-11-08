import { getFeedEntries, parseTitleResponse } from "./dataUtils";
import { ProjectMeasurementResponse } from "./types";

describe("dataUtils:parseTitleResponse", () => {
  it("should parse text with new line as delimeter in string", () => {
    const exampleString = "one\ntwo\nthere";

    const result = parseTitleResponse(exampleString);

    expect(result).toStrictEqual(["one", "two", "there"]);
  });

  it("should remove any falsy values", () => {
    const exampleString = "one\ntwo\nthere\n";

    const result = parseTitleResponse(exampleString);

    expect(result).toStrictEqual(["one", "two", "there"]);
  });
});

describe("dataUtils:getFeedEntries", () => {
  it("should convert response payload to feed entries", () => {
    const projectInfo: ProjectMeasurementResponse = {
      num_of_records: 23,
      feeds: [
        {
          device_id: "deviceId",
          gps_lat: 34,
          gps_lon: 45,
          timestamp: "Wed, 08 Nov 2023 22:46:09 GMT",
        },
      ],
    };
    const expetedFeed = [
      {
        deviceId: "deviceId",
        latitude: 34,
        longitude: 45,
        timestamp: new Date("Wed, 08 Nov 2023 22:46:09 GMT"),
      },
    ];

    const result = getFeedEntries(projectInfo);

    expect(result).toStrictEqual(expetedFeed);
  });
});
