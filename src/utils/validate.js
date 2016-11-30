const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  }
  return errors;
};

export default validate
