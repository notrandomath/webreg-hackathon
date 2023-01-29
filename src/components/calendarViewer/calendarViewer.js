import "./calendarViewer.scss";
import {
  Table,
  TableBody,
  TableCell,
  Box,
  TableHead,
  TableRow,
} from "@mui/material";

function createBox(arr, time, day) {
  return arr != null &&
    arr.find((obj) => {
      return obj.start === time && obj.days.find((element) => element === day);
    }) ? (
    <Box className="fullBox" />
  ) : (
    <Box className="emptyBox" />
  );
}

export default function CalendarViewer({ listOfClasses }) {
  return (
    <div className="calendarViewer">
      <Table sx={{ minWidth: 650 }} size="small">
        <TableHead className="head">
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Monday</TableCell>
            <TableCell>Tuesday</TableCell>
            <TableCell>Wednesday</TableCell>
            <TableCell>Thursday</TableCell>
            <TableCell>Friday</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="body">
          {[...Array(14)].map((x, i) => {
            return (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{`${i + 7}:00`}</TableCell>
                <TableCell>
                  {createBox(listOfClasses, i + 7, "Monday")}
                </TableCell>
                <TableCell>
                  {createBox(listOfClasses, i + 7, "Tuesday")}
                </TableCell>
                <TableCell>
                  {createBox(listOfClasses, i + 7, "Wednesday")}
                </TableCell>
                <TableCell>
                  {createBox(listOfClasses, i + 7, "Thursday")}
                </TableCell>
                <TableCell>
                  {createBox(listOfClasses, i + 7, "Friday")}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
