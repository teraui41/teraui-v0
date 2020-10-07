import React, { Fragment } from "react";
import theme from "../../lib/theme";
import Input from "../../lib/Input";
import FormControl from "../../lib/FormControl";
import ThemeProvider from "../../lib/ThemeProvider";

const Provider = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

const Template = (args) => {
  return (
    <Provider>
      <Fragment>
        <Input {...args} />
      </Fragment>
    </Provider>
  );
};

const TemplateForm = (args) => {
  return (
    <Provider>
      <Fragment>
        <FormControl>
            <Input type='text' label="username" placeholder='username' />
        </FormControl>
        <FormControl>
          <Input type='text' label="account" placeholder='account' />
        </FormControl>
      </Fragment>
    </Provider>
  );
};

export const TextInput = TemplateForm.bind({});
TextInput.args = {
  type: 'text',
  label: 'UserName',
  placeholder: 'Please input username'
}

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  type: 'password',
  label: 'Password',
  placeholder: 'Please input password'
}

export const DateInput = Template.bind({});
DateInput.args = {
  type: 'datetime-local',
  label: 'DateTime',
  
}

// 你的頁面標題
export default {
  component: Input,
  title: "Components/Input",
};
