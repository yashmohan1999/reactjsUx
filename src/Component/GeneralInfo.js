import {
  Button,
  CssBaseline,
  Grid,
  makeStyles,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { AddTwoTone } from "@material-ui/icons";

import React from "react";

const useStyle = makeStyles((theme) => ({
  container: {
    textAlign: "left",
  },
  headActive: {
    fontFamily: "rubik",
    fontWeight: "bold",
    color: "blue",
    textAlign: "center",
    fontSize: "15px",
  },
  headInActive: {
    fontFamily: "rubik",
    fontWeight: "300",
    textAlign: "left",
    fontSize: "15px",
  },
  headInActiveLast: {
    fontFamily: "rubik",
    fontWeight: "300",
    textAlign: "left",
    paddingRight: "20px",
    fontSize: "15px",
  },
  tableContainer: {
    fontFamily: "Rubik",
    textAlign: "left",
    padding: "10px",
    backgroundColor: "#cff0ff",
  },
  tableDataContainer: {
    width: "10px",
    textAlign: "left",
    paddingTop: "5px",
    backgroundColor: "#ededed",
  },
  buttonStyle: {
    backgroundColor: "#238ff2 !important",
    color: "#fff !important",
  },
  alignButton: {
    textAlign: "left !important",
    marginTop: "10px",
    marginLeft: "30px",
  },
}));
const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(0.5),
  marginLeft: theme.spacing(1),
  textAlign: "left",
  backgroundColor: "#cff0ff",
  fontWeight: "bold",
  paddingLeft: "10px",
  fontSize: "12px",
  width: "20rem",
  borderRadius: "0px",
  color: "#464949",
}));
const ItemData = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(0.5),
  marginLeft: theme.spacing(1),
  textAlign: "left",
  backgroundColor: "#ededed",
  fontWeight: "400",
  paddingLeft: "10px",
  color: "#464949",
  fontSize: "12px",
  width: "20rem",
  borderRadius: "0px",
}));
function createData(SurgeryType, Date, AnsthesiaType, Surgical, details) {
  return { SurgeryType, Date, AnsthesiaType, Surgical, details };
}
const rows = [
  createData(
    "Shoulder Reconstruction",
    "January 2008",
    'General "Breathing Tube',
    "No",
    "No"
  ),
];
export default function GeneralInfo() {
  const classes = useStyle();
  return (
    <>
      <CssBaseline>
        <Grid container className={classes.container}>
          <Grid item xs={2} className={classes.headActive}>
            <Button color="primary">List of Prior Surgery</Button>
          </Grid>
          <Grid item xs={2} className={classes.headInActive}>
            <Button>List of Medical Diagnosis</Button>
          </Grid>
          <Grid item xs={2} className={classes.headInActive}>
            <Button>List of Medication</Button>
          </Grid>
          <Grid item xs={2} className={classes.headInActive}>
            <Button>Airway Evaluation</Button>
          </Grid>
          <Grid item xs={4} className={classes.headInActiveLast}>
            <Button>Anesthesia clearance and Recommandation</Button>
          </Grid>
        </Grid>
        <div style={{ marginLeft: "20px" }}>
          <Item>First time surgery</Item>
          <ItemData>No</ItemData>
        </div>
        <div style={{ margin: "20px" }}>
          <Item>Family history of Surgical Complication?</Item>
          <ItemData>Yes</ItemData>
        </div>
        <div style={{ margin: "20px" }}>
          <Item>If Yes,Please provide more details</Item>
          <ItemData>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            gravida mi vel mauris tempor viverra. Nulla facilisi. Nam tincidunt
            finibus placerat. Vestibulum ullamcorper tortor in scelerisque
            pellentesque.
          </ItemData>
        </div>
        <div style={{ marginLeft: "30px" }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableContainer}>
                    SurgeryType
                  </TableCell>
                  <TableCell className={classes.tableContainer}>Date</TableCell>
                  <TableCell className={classes.tableContainer}>
                    Anesthesia type
                  </TableCell>
                  <TableCell className={classes.tableContainer}>
                    Surgical Complication
                  </TableCell>
                  <TableCell className={classes.tableContainer}>
                    Anesthesia Complication(nausea vomiting, difficult
                    intubation)
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.SurgeryType}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      size="medium"
                      className={classes.tableDataContainer}
                    >
                      {row.SurgeryType}
                    </TableCell>
                    <TableCell className={classes.tableDataContainer}>
                      {row.Date}
                    </TableCell>
                    <TableCell className={classes.tableDataContainer}>
                      {row.AnsthesiaType}
                    </TableCell>
                    <TableCell className={classes.tableDataContainer}>
                      {row.Surgical}
                    </TableCell>
                    <TableCell className={classes.tableDataContainer}>
                      {row.details}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className={classes.alignButton}>
          <Button
            variant="contained"
            className={classes.buttonStyle}
            startIcon={<AddTwoTone />}
          >
            add Surgery
          </Button>
        </div>
      </CssBaseline>
    </>
  );
}
