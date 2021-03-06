import React, {PropTypes} from 'react';

const propTypes = {
  input: PropTypes.object,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object
}

const RenderField = ({input, placeholder, label, type, meta: {touched, error}}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={placeholder} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

RenderField.propTypes = propTypes;

export default RenderField;
