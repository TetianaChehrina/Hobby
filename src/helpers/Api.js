import axios from "axios";
const url = "https://www.searchapi.io/api/v1/search";

export async function fetchVideo(query) {
  const response = await axios.get(url, {
    params: {
      engine: "google_videos",
      q: query,
      api_key: "a9QJTD9VsJ1SXHX7PfA7qe8p",
    },
  });
  return response.data;
}

export async function fetchImages(query) {
  const { data } = await axios.get(
    `${url}?api_key=a9QJTD9VsJ1SXHX7PfA7qe8p&engine=google_images&q=${query}`
  );
  return data;
}

export async function fetchNews(query) {
  const { data } = await axios.get(
    `${url}?api_key=a9QJTD9VsJ1SXHX7PfA7qe8p&engine=google_news&q=${query}`
  );
  return data;
}
