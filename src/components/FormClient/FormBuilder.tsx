import FormContent from './FormContent';
import { useEffect, useState } from 'react';
import FormDataService from '../../services/form.service';
import './FormContent.scss';
import React from 'react';

import { Link } from 'react-router-dom';

const FormBuilder = (props: any) => {
  const [formContent, setFormContent] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (props.formContent != null) {
      setFormContent(props.formContent);
      if (props.formContent.hasOwnProperty('values')) {
        let keys = Object.keys(props.formContent.values);
        let _formData = { ...formData };
        keys.forEach((key: any) => {
          // @ts-ignore
          _formData[key] = props.formContent.values[key].values;
        });
        setFormData(_formData);
      }
    } else {
      setFormContent(require('../../data/text_field.json'));
    }
  }, []);

  const onDataChanged = (key: string, value: any) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };
  const sendData = () => {
    if (props.onSave != null) {
      props.onSave(formData);
    }
  };

  if (formContent == null) {
    return <p>Loading form...</p>;
  } else {
    return (
      <form>
        <FormContent onDataChanged={onDataChanged} formContent={formContent} />
        <Link
          to={`/sended`}
          className="form__button"
          onClick={e => {
            e.preventDefault();
            sendData();
          }}
        >
          Wyślij
        </Link>
      </form>
    );
  }
};
//@ts-ignore
export default FormBuilder;
