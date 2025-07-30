import styles from "./Catalog.module.css";
import { Formik, Form, Field } from "formik";
import { useId } from "react";

// const initialValues = {
//   Choose a brand:""
//   From: "",
//   To: "",

// };

// const FeedbackForm = () => {
//   const fromFieldId = useId();

//   const handleSubmit = (values, actions) => {
//     console.log(values);
//     actions.resetForm();
//   };

//   return (
//     <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//       <Form className={styles.form}>
//         <Field as="select" name="Choose a brand">
//           <option value="o1">Aston Martin</option>
//           <option value="o2">Audi</option>
//           <option value="o2">BMW</option>
//           <option value="o3">Bentley</option>
//           <option value="o3">Buick</option>
//           <option value="o3">Chevrolet</option>
//           <option value="o3">Chrysler</option>
//           <option value="o3">GMC</option>
//           <option value="o3">HUMMER</option>
//         </Field>
//         <Field as="select" name="Choose a price">
//           <option value="o1">30</option>
//           <option value="o2">40</option>
//           <option value="o2">50</option>
//           <option value="o3">60</option>
//           <option value="o3">70</option>
//           <option value="o3">80</option>
//         </Field>
//         <label htmlFor={fromFieldId}>Сar mileage / km</label>
//         <Field
//           className={styles.filed}
//           type="text"
//           name="From"
//           id={fromFieldId}
//         />
//         <Field
//           className={styles.filed}
//           type="text"
//           name="To"
//           id={fromFieldId}
//         />
//         <button type="submit" className={styles.btn}>
//           Search
//         </button>
//       </Form>
//     </Formik>
//   );
// };

// export default FeedbackForm();
const FeedbackForm = () => {
  const fromFieldId = useId();
  const brendFileId = useId();
  const priceFileId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        from: "From",
        to: "To",
        brand: "Choose a brand",
        price: "Choose a price",
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor={brendFileId}>Car brand</label>
        <br></br>
        <Field as="select" name="brand" id={brendFileId}>
          <option value="Choose a brand">Choose a brand</option>
          <option value="Aston Martin">Aston Martin</option>
          <option value="Audi">Audi</option>
          <option value="BMW">BMW</option>
          <option value="Bentley">Bentley</option>
          <option value="Buick">Buick</option>
          <option value="Chevrolet">Chevrolet</option>
          <option value="Chrysler">Chrysler</option>
          <option value="GMC">GMC</option>
          <option value="HUMMER">HUMMER</option>
        </Field>
        <label htmlFor={priceFileId}>Price/ 1 hour</label> <br></br>
        <Field as="select" name="price">
          <option value="Choose a price">Choose a price</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="60">60</option>
          <option value="70">70</option>
          <option value="80">80</option>
        </Field>
        <label htmlFor={fromFieldId}>Сar mileage / km</label>
        <Field type="text" name="from" id={fromFieldId} />
        <Field type="text" name="to" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default FeedbackForm;
