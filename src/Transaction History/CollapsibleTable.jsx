import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import axios from "axios";
// import empty from "../resource/empty.png";
const numberFormat = (value) =>
  new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "VND",
  }).format(value);

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function formatDate(string) {
  var options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(string).toLocaleDateString([], options);
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  const handleCancelTicket = () => {
    axios
      .get(
        `https://flight-mana.herokuapp.com/api/customers/tickets/departure/${row.ticket.ticketId}`
      )
      .then((res) => {
        const dis = Date.parse(res.data.data) - Date.now() > 259200000;
        // row.departure = res.data.data;
        if (dis) {
          axios({
            url: `https://flight-mana.herokuapp.com/api/customers/tickets/cancel/${row.ticket.ticketId}`,
            method: "get",
            headers: {
              token: localStorage.getItem("token"),
              "Content-Type": "application/json",
            },
          }).then((res) => {
            if (res.data.status === "FAILED") {
              window.alert("Cancel Ticket Error! Try Again!");
            } else {
              window.alert(res.data.data);
              setInterval(() => {
                window.location.reload();
              }, 500);
            }
          });
        } else {
          window.alert("Kh??ng ????? ??i???u ki???n ????? h???y");
        }
      });
  };

  const statusHistory = (status) => {
    switch (status) {
      case "Da_Dat": {
        return "???? ?????t";
      }
      case "Tao": {
        return "T???o";
      }
      case "Da_Dung": {
        return "???? D??ng";
      }
      default:
        return "???? H???y";
    }
  };
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.ticket.ticketCode}
        </TableCell>
        <TableCell align="left">
          {row.ticket.firstName} {row.ticket.lastName}
        </TableCell>
        <TableCell align="left">{row.ticket.email}</TableCell>
        <TableCell align="left">{row.ticket.phoneNumber}</TableCell>
        <TableCell align="left">{row.ticket.createdDate}</TableCell>
        <TableCell align="left">{formatDate(row.departure)}</TableCell>
        <TableCell align="left">
          {numberFormat(row.ticket.totalPrice)}
        </TableCell>
        <TableCell align="left">
          {statusHistory(row.ticket.ticketStatus)}
        </TableCell>
        <TableCell align="left">
          {" "}
          {row.ticket.ticketStatus === "Da_Dat" ? (
            <button
              variant="contained"
              class="btn"
              type="submit"
              style={{
                width: "100%",
                height: "33px",
                fontSize: "15px",
                backgroundColor: "#FF6F00",
                color: "white",
              }}
              onClick={handleCancelTicket}
            >
              H???y v??
            </button>
          ) : (
            <span></span>
          )}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{
            paddingBottom: 0,
            paddingTop: 0,
            color: "#FF6F00",
            backgroundColor: "#E8EAF6",
          }}
          colSpan={12}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Chi ti???t kh??ch h??ng
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Danh X??ng</TableCell>
                    <TableCell>H??? T??n</TableCell>
                    <TableCell>Ng??y Sinh</TableCell>
                    <TableCell>Qu???c t???ch</TableCell>
                    <TableCell>M?? chuy???n bay</TableCell>
                    <TableCell>H??ng bay</TableCell>
                    <TableCell>T??n chuy???n bay</TableCell>
                    <TableCell>Th???i gian kh???i h??nh</TableCell>
                    <TableCell>Th???i gian ?????n</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.passengers !== undefined ? (
                    row.passengers.map((historyRow) => (
                      <TableRow key={historyRow.date}>
                        <TableCell
                          style={{ textAlign: "left" }}
                          component="th"
                          scope="row"
                        >
                          {historyRow.appellation}
                        </TableCell>
                        <TableCell style={{ textAlign: "left" }}>
                          {historyRow.first_name} {historyRow.last_name}
                        </TableCell>
                        <TableCell style={{ textAlign: "left" }}>
                          {historyRow.date_of_birth}
                        </TableCell>
                        <TableCell style={{ textAlign: "left" }}>
                          {historyRow.nationality}
                        </TableCell>
                        <TableCell style={{ textAlign: "left" }}>
                          {historyRow.flight_code}
                        </TableCell>
                        <TableCell style={{ textAlign: "left" }}>
                          {historyRow.airline_name}
                        </TableCell>
                        <TableCell style={{ textAlign: "left" }}>
                          {historyRow.flight_name}
                        </TableCell>
                        <TableCell style={{ textAlign: "left" }}>
                          {historyRow.time_departure}
                        </TableCell>
                        <TableCell style={{ textAlign: "left" }}>
                          {historyRow.time_arrival}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <span></span>
                  )}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://flight-mana.herokuapp.com/api/customers/tickets/transaction?userId=${localStorage.getItem(
          "CUSTOMER_ID"
        )}`
      )
      .then((res) => {
        setHistory(res.data.data);
        console.log("ticket n??");
        console.log(res.data.data);
      });
  }, []);
  // useEffect(() => {
  //   history.forEach(row => {
  //     axios
  //     .get(
  //       `https://flight-mana.herokuapp.com/api/customers/tickets/departure/${row.ticketId}`
  //     )
  //     .then((res) => {
  //       console.log('ngay khoi hanh');
  //       console.log(res.data.data);
  //       row.departure = res.data.data;
  //     })
  //     .catch((err) => console.log(err));
  //   })
  // }, [history])
  if (history.length > 0) {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow style={{ backgroundColor: "#1BA0E2" }}>
              <TableCell />
              <TableCell style={{ color: "white" }}>M?? V??</TableCell>
              <TableCell style={{ color: "white" }}>H??? T??n</TableCell>
              <TableCell style={{ color: "white" }}>Email</TableCell>
              <TableCell style={{ color: "white" }}>S??? ??i???n Tho???i</TableCell>
              <TableCell style={{ color: "white" }}>Ng??y ?????t V??</TableCell>
              <TableCell style={{ color: "white" }}>Ng??y Bay</TableCell>
              <TableCell style={{ color: "white" }}>Gi??</TableCell>
              <TableCell style={{ color: "white" }}>Tr???ng Th??i</TableCell>
              <TableCell style={{ color: "white" }}>Ghi Ch??</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {history.map((row, index) => {
              // axios({
              //   url: "http://flight-mana.herokuapp.com/api/customers/passengers/tickets",
              //   method: "get",
              //   headers: {
              //     ticketCode: row.ticketCode,
              //     "Content-Type": "application/json",
              //   },
              // })
              //   .then((res) => {
              //     // row.passengers = res.data.data;
              //     row['passengers'] = res.data.data;
              //   })
              //   .catch((err) => console.log(err));
              // axios
              //   .get(
              //     `https://flight-mana.herokuapp.com/api/customers/tickets/departure/${row.ticketId}`
              //   )
              //   .then((res) => {
              //     // row.departure = res.data.data;
              //     row['departure'] = res.data.data;
              //   })
              //   .catch((err) => console.log(err));

              return <Row key={index} row={row} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  } else {
    return (
      <div className="text-center" style={{marginTop: "50px"}}>
        <img
          style={{ width: "20%" }}
          src="https://ik.imagekit.io/tvlk/image/imageResource/2020/07/10/1594367281441-5ec1b573d106b7aec243b19efa02ac56.svg?tr=h-96,q-75,w-96"
          alt=""
        />
        <div style={{ marginTop: "20px" }}>
          <i>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              Kh??ng c?? giao d???ch n??o ???????c l??u !!!!
            </p>
          </i>
        </div>
        <span>
          B???n kh??ng c?? giao d???ch ??ang ti???n h??nh n??o t??? phi??n giao d???ch tr?????c.
          Nh???ng giao d???ch ch??a ho??n th??nh s??? ???????c l??u t???i ????y.
        </span>
      </div>
    );
  }
}
