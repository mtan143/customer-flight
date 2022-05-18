import { Container, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
                    <div style={{display:"flex", marginTop:"20px" , alignItems:"center"}}>
               <i> <p style={{fontSize:"41px"}}> Không tìm thấy chuyến bay phù hợp !!!!</p> </i>
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
