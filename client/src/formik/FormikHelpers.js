export default function useFormikHelpers(formik) {
  const handleChangeAndBlur = (control) => {
    const fieldHandler = formik.handleChange(control);

    return (newValue) => {
      formik.setFieldTouched(control);
      fieldHandler(newValue);
    };
  };

  const handleChange = (event, control) => {
    const { value } = event.target;
    formik.setFieldTouched(control);
    formik.setFieldValue(control, value);
  };

  const handleDateChange = (control, value) => {
    formik.setFieldTouched(control);
    formik.setFieldValue(control, value, true);
  };

  function hasError(field) {
    return formik.touched[field] && Boolean(formik.errors[field]);
  }

  function getHelpText(field) {
    return formik.touched[field] ? formik.errors[field] : undefined;
  }

  return { handleChangeAndBlur, hasError, getHelpText, handleChange, handleDateChange };
}
