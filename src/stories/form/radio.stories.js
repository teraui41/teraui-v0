import React, { Fragment, useState } from "react";
import theme from "../../lib/theme";
import FormControl from "../../lib/FormControl";
import ThemeProvider from "../../lib/ThemeProvider";
import RadioGroup from '../../lib/Radio';

const RadioItems = [
  {
    label: 'Radio 1',
    value: 1
  },
  {
    label: 'Radio 2',
    value: 2
  },
  {
    label: 'Radio 3',
    value: 3
  }
]

const handleOnChange = (setValue) => ({ target: { value }}) => {
  setValue(parseInt(value, 10));
}

const Provider = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

const TemplateForm = (args) => {

  const [value, setValue] = useState(1);

  const onChange = handleOnChange(setValue);

  return (
    <Provider>
      <Fragment>
        <FormControl>
            <RadioGroup {...args} value={value} onChange={onChange}/>
        </FormControl>
      </Fragment>
    </Provider>
  );
};

export const Default = TemplateForm.bind({});
Default.args = {
  name: 'username',
  items: RadioItems
}

export const LabelRadio = TemplateForm.bind({});
LabelRadio.args = {
  name: 'labelItems',
  items: RadioItems,
  label: 'label',
  required: true,
}

// 你的頁面標題
export default {
  component: RadioGroup,
  title: "Form/Radio",
};
