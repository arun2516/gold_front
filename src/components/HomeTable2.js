import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";




function HomeTable2(props){
    const {s} = props;
    return(
        <Paper sx={{ width: '80%', overflow: 'hidden', marginLeft:"10%" , border:"2px solid black"}}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table  aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">
                                Gram
                            </TableCell>
                            <TableCell align="center">
                                22K Gold Price
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow  hover>
                            <TableCell align="center">1 Gram</TableCell>
                            <TableCell align="center">{s/10}</TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell align="center">8 Grams</TableCell>
                            <TableCell align="center">{(s/10)*8}</TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell align="center">10 Grams</TableCell>
                            <TableCell align="center">{s}</TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell align="center">100 Grams</TableCell>
                            <TableCell align="center">{s*10}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}

export default HomeTable2;