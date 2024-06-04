import { fetchVideo } from "../../helpers/Api";
import SearchForm from "../../components/SearchForm/SearchForm";
import { useEffect, useState } from "react";
import Grid from "../../components/Grid/Grid";
import GridItem from "../../components/GridItem/GridItem";

const VideoPage = () => {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;
    const getVideo = async () => {
      try {
        const { videos } = await fetchVideo(query);
        console.log(videos);
        setVideos(videos);
      } catch (error) {
        setError(error.message);
      }
    };
    getVideo();
  }, [query]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <header>
      {error && <p>{error}</p>}
      <SearchForm onSearch={handleSearch} />
      {videos.length > 0 && (
        <Grid>
          {videos.map((video) => (
            <GridItem key={video.position}>
              <iframe
                className="video"
                title="Youtube player"
                sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
                src={`https://youtube.com/embed/${
                  video.link.split("v=")[1]
                }?autoplay=0`}
              ></iframe>
            </GridItem>
          ))}
        </Grid>
      )}
    </header>
  );
};
export default VideoPage;
