import { useEffect, useState } from "react";
import { fetchNews } from "../../helpers/Api";
import GridItem from "../../components/GridItem/GridItem";
import Grid from "../../components/Grid/Grid";
import { Form, Formik, Field } from "formik";

const NewsPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!searchQuery) return;
    const getNews = async () => {
      const { organic_results } = await fetchNews(searchQuery);
      setPosts(organic_results);
    };
    getNews();
  }, [searchQuery]);

  const handleSubmit = (values, action) => {
    setSearchQuery(values.text);
    action.resetForm();
  };
  return (
    <div>
      <Formik initialValues={{ text: "" }} onSubmit={handleSubmit}>
        <Form>
          <Field name="text" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      {posts.length > 0 && (
        <Grid>
          {posts.map((post) => (
            <GridItem key={post.position}>
              <img src={post.thumbnail} alt={post.title} />
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                More information
              </a>
              <title>{post.title}</title>
              <p>{post.snippet}</p>
            </GridItem>
          ))}
        </Grid>
      )}
    </div>
  );
};
export default NewsPage;
