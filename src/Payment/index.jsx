import React from "react";
import PropTypes from "prop-types";
import { Container, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import PaymentLeft from "./PaymentLeft";
import PaymentRight from "./PaymentRight";

Payment.propTypes = {};

function Payment(props) {
  return (
    <div>
      <Box pt={4}>
        <Container>
          <h4>Thanh Toán</h4>
          <Grid container spacing={1}>
            {/* tương đương 1 dòng */}

            <Grid item xs={8}>
              <Paper elevation={3}>
                <PaymentLeft />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper elevation={3}>
                <PaymentRight />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default Payment;
