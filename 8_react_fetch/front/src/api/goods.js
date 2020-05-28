import { fetchData } from "./fetchData";

export function getData(query) {
  const queryString = query.name ? `?name=${query.name}`: "";
  return fetchData(`/goods${queryString}`);
}
