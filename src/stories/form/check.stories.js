import React, { Fragment, useState } from "react";
import theme from "../../lib/theme";
import FormControl from "../../lib/FormControl";
import ThemeProvider from "../../lib/ThemeProvider";
import CheckGroup from "../../lib/CheckGroup";

const RadioItems = [
  {
    label: "Radio 1",
    value: 1,
  },
  {
    label: "Radio 2",
    value: 2,
  },
  {
    label: "Radio 3",
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
          <CheckGroup {...args} values={values} onChange={onChange} />
        </FormControl>
      </Fragment>
    </Provider>
  );
};

export const Default = TemplateForm.bind({});
Default.args = {
  name: "username",
  items: RadioItems,
};

export const LabelRadio = TemplateForm.bind({});
LabelRadio.args = {
  name: "labelItems",
  items: RadioItems,
  label: "label",
  required: true,
};

// 你的頁面標題
export default {
  component: CheckGroup,
  title: "Form/Check",
};
