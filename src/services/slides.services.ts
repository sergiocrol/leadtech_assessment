import data from "../data/slider.json";

export const getData = async (slide: number) => {
  await new Promise((res) => setTimeout(res, 1500));
  return data.dataImages[slide];
};
