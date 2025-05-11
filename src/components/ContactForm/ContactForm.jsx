import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import "yup-phone-lite";
import { nanoid } from "nanoid";

const OrderSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too short").max(50).required("Required"),
  number: Yup.string()
    .phone("UA", "Please enter a valid phone number")
    .required("Required"),
});

const ContactForm = ({ onSubmit }) => {
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    onSubmit(values);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={OrderSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.inputItem}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={css.field}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.inputItem}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            className={css.field}
            type="number"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
