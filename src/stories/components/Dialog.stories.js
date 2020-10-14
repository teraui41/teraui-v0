
import React, { Fragment, useState } from "react";
import theme from "../../lib/theme";
import Dialog from "../../lib/Dialog";
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
                <Dialog
                  open={open}
                  title='提示信息'
                  onCancel={() => setOpen(false)}
                  onConfirm={() => setOpen(false)}>
                    顯示信息彈窗的內容..
                </Dialog>
                <Button onClick={() => setOpen(true)}>Open Dialog</Button>
            </Fragment>
        </Provider>
    );
}

export const Default = Template.bind({});

export default {
    component: Dialog,
    title: "Components/Dialog",
};
