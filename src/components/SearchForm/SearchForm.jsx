import { Formik, Form, Field } from "formik";

const SearchForm = ({ onSearch }) => {
  const handleSubmit = (values, action) => {
    onSearch(values.text);
    action.resetForm();
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const form = e.target;
  //     const { text } = form.elements;
  //     onSearch(text.value);
  //     form.reset();
  //   };
  return (
    <Formik initialValues={{ text: "" }} onSubmit={handleSubmit}>
      <Form>
        <Field name="text" />
        <button type="submit">Search</button>
      </Form>
    </Formik>

    // <form onSubmit={handleSubmit}>
    //   <label htmlFor="text">
    //     <input name="text" />
    //   </label>
    //   <button type="submit">Search</button>
    // </form>
  );
};
export default SearchForm;
