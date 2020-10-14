
import React, { Fragment, useState } from "react";
import theme from "../../lib/theme";
import Button from "../../lib/Button";
import Message from "../../lib/Message";
import ThemeProvider from "../../lib/ThemeProvider";

const Provider = (props) => {
    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

const Template = args => {

    const [open, setOpen] = useState(false);

    return (
        <Provider>
            <Fragment>
                <Message
                  open={open}
                  content='提示信息'
                  onClose={() => setOpen(false)}>
                    顯示信息彈窗的內容..
                </Message>
                <Button onClick={() => setOpen(true)}>Show Message</Button>
            </Fragment>
        </Provider>
    );
}

export const Default = Template.bind({});

export default {
    component: Message,
    title: "Feedback/Message",
};
