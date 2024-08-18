import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, period, price, description, activity) {
  return { name, period, price, description, activity };
}

const rows = [
  createData(
    "Zajęcia Light",
    "tydzień",
    "39zł",
    "Jest to opcja dla nielubiących długich zobowiązań - " +
      "możesz wykupić u nas pakiet dostępu na tydzień zajęć light i nie martwić się umową.",
    "Yoga, Pilates, Płaski brzuch",
  ),
  createData(
    "Zajęcia Heavy",
    "tydzień",
    "49zł",
    "Jest to opcja dla nielubiących długich zobowiązań - " +
      "możesz wykupić u nas pakiet dostępu na tydzień zajęć heavy i nie martwić się umową",
    "Zumba, Spinning, Full Body Workut ",
  ),
  createData(
    "Karnet basic",
    "miesiąc",
    "59zł",
    "Bądź porannym ptaszkiem, dołącz" +
      " do naszej siłowni i trenuj u nas w godzinach od 7:00 do 16:00!",
    "Możesz dobrać do tego karnetu zajęcia płaskiego brzucha oraz yogi.",
  ),
  createData(
    "Karnet Regular",
    "miesiąc",
    "99zł",
    "Nie miej ograniczeń czasowych, trenuj o " +
      "dowolnej godzinie, aż do 23:00! Korzystaj z naszych zajęć grupowych!",
    "Możesz dobrać do tego karnetu wszystkie zajęcia jakie realizujemy w klubie.",
  ),
  createData(
    "Karnet Pro",
    "miesiąc",
    "199zł",
    "Trenuj samodzielnie lub z naszymi trenerami kiedy tylko potrzebujesz. " +
      "Korzystaj z zajęć grupowych w ciągu całego tygodnia!",
    "Możesz dobrać do tego karnetu wszystkie zajęcia oraz otrzymasz wsparcie naszego trenera podczas trenignów na siłowni.",
  ),
];

export default function Pricing() {
  return (
    <div className="container pricing-container">
      <TableContainer component={Paper}>
        <Table
          className="table-pricing"
          sx={{ minWidth: 650 }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell style={{ textAlign: "center", paddingBottom: "30px" }}>
                Rodzaj Karnetu
              </TableCell>
              <TableCell style={{ textAlign: "center", paddingBottom: "30px" }}>
                Okres
              </TableCell>
              <TableCell style={{ textAlign: "center", paddingBottom: "30px" }}>
                Cena
              </TableCell>
              <TableCell style={{ textAlign: "center", paddingBottom: "30px" }}>
                Opis
              </TableCell>
              <TableCell style={{ textAlign: "center", paddingBottom: "30px" }}>
                Zajęcia
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.period}</TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell
                  align="right"
                  style={{ maxWidth: "280px", textAlign: "justify" }}
                >
                  {row.description}
                </TableCell>
                <TableCell
                  align="right"
                  style={{ maxWidth: "180px", textAlign: "justify" }}
                >
                  {row.activity}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
