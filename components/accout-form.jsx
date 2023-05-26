import { Field, FieldArray, Form, Formik } from "formik";
import React from "react";

const AccountForm = () => (
  <Formik
    initialValues={{
      name: "",
      ifscs: [""],
    }}
    onSubmit={(values) => {
      // e.preventDefault();
      console.log(values);
    }}
  >
    {({ values }) => (
      <Form>
        <label className="label" htmlFor="name">
          Name
        </label>
        <br />
        <Field
          className="inputField"
          id="name"
          name="name"
          required
          placeholder="Enter your name"
        />
        <FieldArray name="ifscs">
          {({ insert, remove, push }) => (
            <div>
              <div>
                <label className="label">IFSC Codes</label>
                <br />
                {values.ifscs.length > 0 &&
                  values.ifscs.map((ifsc, index) => (
                    <>
                      <Field
                        className="inputField"
                        id="ifsc"
                        name={`ifscs.${index}`}
                        required
                        placeholder="Enter IFSC Code"
                      />
                      <button className="delete" onClick={() => remove(index)}>
                        X
                      </button>
                      <br />
                    </>
                  ))}
                <button className="add" onClick={() => push("")}>
                  Add IFSC
                </button>
              </div>
            </div>
          )}
        </FieldArray>
        <button type="submit" className="submit">
          Submit
        </button>
      </Form>
    )}
  </Formik>
);

export default AccountForm;
