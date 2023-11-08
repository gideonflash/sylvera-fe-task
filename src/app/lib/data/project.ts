import { ProjectMeasurementResponse } from "./types";

const BASE_API_URL = "https://pm25.lass-net.org/API-1.0.0";

export const getProjectsTitles = async (): Promise<string[]> => {
  const data = await fetch(`${BASE_API_URL}/project/all/`);

  if (!data.ok) {
    throw new Error("Failed to fetching data");
  }

  const projectTitlesAsArray = (await data.text()).split(/\r?\n/);

  return projectTitlesAsArray;
};

export const getProjectByTitle = async (
  title: string
): Promise<ProjectMeasurementResponse> => {
  const data = await fetch(`${BASE_API_URL}/project/${title}/latest/`);

  if (!data.ok) {
    throw new Error("Failed to fetching data");
  }

  return data.json();
};
