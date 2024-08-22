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
    "Karnet krótkoterminowy - " +
      "możesz wykupić u nas pakiet dostępu na tydzień zajęć light i nie martwić się umową.",
    "Yoga i Pilates",
  ),
  createData(
    "Zajęcia Heavy",
    "tydzień",
    "49zł",
    "Karnet krótkoterminowy - " +
      "możesz wykupić u nas pakiet dostępu na tydzień zajęć heavy i nie martwić się umową",
    "Zumba, Spinning, Full Body Workut ",
  ),
  createData(
    "Karnet basic",
    "miesiąc",
    "59zł",
    "Bądź porannym ptaszkiem, dołącz" +
      " do naszej siłowni i trenuj u nas w godzinach od 7:00 do 16:00!",
    "Zajęcia Płaskiego Brzucha oraz Yogi.",
  ),
  createData(
    "Karnet Regular",
    "miesiąc",
    "99zł",
    "Nie miej ograniczeń czasowych, trenuj o " +
      "dowolnej godzinie, aż do 23:00! Korzystaj z naszych zajęć grupowych!",
    "Uwzględnione są wszystkie zajęcia.",
  ),
  createData(
    "Karnet Pro",
    "miesiąc",
    "199zł",
    "Trenuj samodzielnie lub z naszymi trenerami kiedy tylko potrzebujesz. " +
      "Korzystaj z zajęć w ciągu całego tygodnia!",
    "Wszystkie zajęcia oraz wsparcie trenera podczas Twoich treningów.",
  ),
];

export default function Pricing() {
  return (
    <div className="container pricing-container">
      <TableContainer component={Paper} className="table-pricing">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="table-cell-title">
                Rodzaj Karnetu
              </TableCell>
              <TableCell className="table-cell-title">
                Okres
              </TableCell>
              <TableCell className="table-cell-title">
                Cena
              </TableCell>
              <TableCell className="table-cell-title">
                Opis
              </TableCell>
              <TableCell className="table-cell-title">
                Zajęcia
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" className="pricing-content">
                  {row.name}
                </TableCell>
                <TableCell className="pricing-price pricing-content">{row.period}</TableCell>
                <TableCell className="pricing-content">{row.price}</TableCell>
                <TableCell
                  className="pricing-desc pricing-content"
                >
                  {row.description}
                </TableCell>
                <TableCell
                  className="pricing-activity pricing-content"
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
