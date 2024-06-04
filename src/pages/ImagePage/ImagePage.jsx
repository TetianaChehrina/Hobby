import { Formik, Form, Field } from "formik";
import { useEffect, useState, useRef } from "react";
import { fetchImages } from "../../helpers/Api";
import Grid from "../../components/Grid/Grid";
import GridItem from "../../components/GridItem/GridItem";
import { useLocation, Link } from "react-router-dom";

const ImagePage = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLink = useRef(location.state ?? "/");

  useEffect(() => {
    if (!query) return;
    const getImages = async () => {
      try {
        const { images } = await fetchImages(query);
        setImages(images);
      } catch (error) {
        setError(error.message);
      }
    };
    getImages();
  }, [query]);
  const handleSubmit = (values, action) => {
    setQuery(values.text);
    action.resetForm();
  };
  return (
    <div>
      {error && <p>{error}</p>}
      <Link to={backLink.current}>Go back</Link>
      <Formik initialValues={{ text: "" }} onSubmit={handleSubmit}>
        <Form>
          <Field name="text" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      {images.length > 0 && (
        <Grid>
          {images.map((image) => (
            <GridItem key={image.position}>
              <img
                src={image.original.link}
                alt={image.source.name}
                width={320}
                height={440}
              />
            </GridItem>
          ))}
        </Grid>
      )}
    </div>
  );
};
export default ImagePage;
