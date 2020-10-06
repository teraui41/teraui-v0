
import React, { Fragment, useState } from "react";
import theme from "../../lib/theme";
import Alert from "../../lib/Alert";
import Button from "../../lib/Button";
import ThemeProvider from "../../lib/ThemeProvider";

const Provider = (props) => {
    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

const Template = args => {

    const [open, setOpen] = useState(false);

    return (
        <Provider>
            <Fragment>
                <Alert
                  open={open}
                  type='info'
                  onCancel={() => setOpen(false)}
                  onConfirm={() => setOpen(false)}>
                    顯示信息彈窗的內容..
                </Alert>
                <Button onClick={() => setOpen(true)}>Open Alert</Button>
            </Fragment>
        </Provider>
    );
}

export const Default = Template.bind({});

export default {
    component: Alert,
    title: "Components/Alert",
};
