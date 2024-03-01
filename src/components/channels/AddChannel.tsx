import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import backend_Url from "../../api/api";

const AddChannel = () => {
  const navigate = useNavigate();

  // Define Yup validation schema
  const validationSchema = Yup.object().shape({
    channelId: Yup.string()
      .required("Channel ID is required")
      .min(4, "Channel ID must be at least 4 characters")
      .max(16, "Channel ID must be at most 16 characters"),
    channelName: Yup.string()
      .required("Channel name is required")
      .min(4, "Channel name must be at least 4 characters")
      .max(16, "Channel name must be at most 16 characters"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    commission: Yup.number()
      .required("Commission is required")
      .min(0, "Commission must be at least 0%")
      .max(100, "Commission must be at most 100%"),
  });

  // Initial form values
  const initialValues = {
    channelId: "",
    channelName: "",
    email: "",
    commission: "",
  };

  // Handle form submission
  const onSubmit = async (values: any, { setSubmitting }: any) => {
    try {
      // Make API call to add values to the backend
      const response = await axios.post(`${backend_Url}/api/admin/addChannel`, values);

      // Log the API response (you can handle this based on your backend response)
      console.log("API Response:", response.data);
      navigate('/channels');

      // You can perform further actions here, such as showing a success message, redirecting, etc.

    } catch (error) {
      // Log and handle errors
      console.error("API Error:", error);
    } finally {
      // Reset submitting state
      setSubmitting(false);
    }
  };

 

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Add Channel</h1>
      {/* Formik component to handle form state */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            {/* Channel ID field */}
            <div className="mb-4">
              <label
                htmlFor="channelId"
                className="block text-sm font-medium text-gray-700"
              >
                Channel ID
              </label>
              <Field
                type="text"
                id="channelId"
                name="channelId"
                className={`mt-1 p-2 block w-1/2 border border-gray-300 rounded-md ${
                  errors.channelId && touched.channelId ? "border-red-500" : ""
                }`}
              />
              <ErrorMessage
                name="channelId"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Channel Name field */}
            <div className="mb-4">
              <label
                htmlFor="channelName"
                className="block text-sm font-medium text-gray-700"
              >
                Channel Name
              </label>
              <Field
                type="text"
                id="channelName"
                name="channelName"
                className={`mt-1 p-2 block w-1/2 border border-gray-300 rounded-md ${
                  errors.channelName && touched.channelName
                    ? "border-red-500"
                    : ""
                }`}
              />
              <ErrorMessage
                name="channelName"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Email field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className={`mt-1 p-2 block w-1/2 border border-gray-300 rounded-md ${
                  errors.email && touched.email ? "border-red-500" : ""
                }`}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Commission field */}
            <div className="mb-4">
              <label
                htmlFor="commission"
                className="block text-sm font-medium text-gray-700"
              >
                Commission
              </label>
              <Field
                type="text"
                id="commission"
                name="commission"
                className={`mt-1 p-2 block w-1/2 border border-gray-300 rounded-md ${
                  errors.commission && touched.commission
                    ? "border-red-500"
                    : ""
                }`}
              />
              <ErrorMessage
                name="commission"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
            <button
              onClick={() => navigate("/channels")}
              className=" ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddChannel;
