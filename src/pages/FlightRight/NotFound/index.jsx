import { Container, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import notfound from "../../../resource/notfound.png";
import { Link } from "react-router-dom";

NotFound.propTypes = {};

function NotFound(props) {
  return (
    <div>
      <Box pt={4}>
        <Container>
          <Grid container spacing={1}>
            {/* tương đương 1 dòng */}

            <Grid item xs={12}>
              <Paper elevation={0}>
                <div style={{ textAlign: "center" }}>
                  <img src={notfound} alt="" />
                  <div style={{ marginTop: "20px" }}>
                    <i>
                      {" "}
                      <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                        {" "}
                        Không tìm thấy chuyến bay phù hợp !!!!
                      </p>{" "}
                    </i>
                  </div>{" "}
                  <span>
                    Vui lòng kiểm tra lại đường liên kết hoặc chọn các chuyến
                    bay tuyệt vời khác trên Traveloka.
                  </span>
                  <br></br>{" "}
                  <Link to="/">
                    <button
                      variant="contained"
                      class="btn btn-primary"
                      type="button"
                      style={{
                        width: "20%",
                        margin: "30px 0",
                        borderRadius: "9px",
                      }}
                    >
                      Đổi tìm kiếm
                    </button>
                  </Link>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default NotFound;
