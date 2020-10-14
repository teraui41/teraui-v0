import React from "react";
import theme from "../../lib/theme";
import Card from "../../lib/Card";
import Table from '../../lib/Table';
import TableRow from '../../lib/TableRow';
import TableHead from '../../lib/TableHead';
import TableBody from '../../lib/TableBody';
import TableCell from '../../lib/TableCell';
import TableFoot from '../../lib/TableFoot';
import ThemeProvider from "../../lib/ThemeProvider";

const styles = {
    card: {
        width: '100%',
        maxWidth: '1000px',
        minWidth: '400px'
    }
}

const Provider = (props) => {
    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

const Template = args => {
    return (
        <Provider>
            <Card style={styles.card}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>position</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Jeff</TableCell>
                            <TableCell>55</TableCell>
                            <TableCell>CTO</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Tomas</TableCell>
                            <TableCell>37</TableCell>
                            <TableCell>Engineer</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Edmond</TableCell>
                            <TableCell>30</TableCell>
                            <TableCell>Dog</TableCell>
                        </TableRow>
                    </TableBody>
                    <TableFoot>

                    </TableFoot>
                </Table>
            </Card>
        </Provider>
    );
}

export const Default = Template.bind({});

export default {
    component: Table,
    title: "Components/Table",
};
