import React, { Fragment, useState } from "react";
import theme from "../../lib/theme";
import Select from "../../lib/Select";
import FormControl from "../../lib/FormControl";
import ThemeProvider from "../../lib/ThemeProvider";

const SelectItems = [
  {
    label: "Item 1",
    value: 1,
  },
  {
    label: "Item 2",
    value: 2,
  },
  {
    label: "Item 3",
    value: 3,
  },
];

const handleOnChange = (values, setValue) => ({ target: { value } }) => {
  const newValues = values.includes(value)
    ? values.filter((selectedValue) => selectedValue !== value)
    : [value, ...values];

    setValue(newValues);
};

const Provider = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

const TemplateForm = (args) => {
  const [values, setValues] = useState([]);

  const onChange = handleOnChange(values, setValues);

  return (
    <Provider>
      <Fragment>
        <FormControl>
          <Select {...args} values={values} onChange={onChange} />
        </FormControl>
        <FormControl>
          <Select {...args} name='disabledTest' values={values} onChange={onChange} disabled/>
        </FormControl>
      </Fragment>
    </Provider>
  );
};


const Template = (args) => {
  const [values, setValues] = useState([]);

  const onChange = handleOnChange(values, setValues);

  return (
    <Provider>
      <Fragment>
        <FormControl>
          <Select {...args} values={values} onChange={onChange} />
        </FormControl>
      </Fragment>
    </Provider>
  );
};

export const Default = TemplateForm.bind({});
Default.args = {
  name: "username",
  items: SelectItems,
};

export const LabelSelect = Template.bind({});
LabelSelect.args = {
  name: "labelItems",
  items: SelectItems,
  label: "label",
  required: true,
};

// 你的頁面標題
export default {
  component: Select,
  title: "Form/Select",
};
