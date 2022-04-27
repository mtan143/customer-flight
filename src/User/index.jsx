import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import InputField from "../FormControls/InputField";
import SelectField from "../FormControls/SelectField";
import { Container, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import vietjet from "../resource/vietjet.png";
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
User.propTypes = {};

function User(props) {
  const onSubmit = (values) => {
    console.log(values);
  };
  const form = useForm({
    defaultValues: {
      Select: "HCM",
      ho: "",
      ten: "",
      phone: "",
      email: "",
    },
  });
  const select = {
    man: "Ông",
    women: "Bà",
    miss: "Cô",
  };
  return (
    <form  onSubmit={form.handleSubmit(onSubmit)}>
    
      <div style={{margin:"1% 7%"}}>
        <h4>Đặt chỗ của tôi</h4>
        <p style={{ color: "#696969" }}>Điền thông tin và xem lại đặt chỗ</p>
      </div>
      <div>
        <h4 style={{margin:"1% 7%"}}>Thông tin liên hệ</h4>
        <Box pt={4}>
          <Container>
            <Grid container spacing={1}>
              {/* tương đương 1 dòng */}
              <Grid item xs={9}>
                <div>
                  <Paper elevation={3}>
                    <div style={{margin:"0 5%" , padding:"3% 5% 0"}}>
                    <span style={{fontWeight:"bold" ,}}>Thông tin liên hệ (nhận vé/phiếu thanh toán)</span>
                    <span style={{float:"right", fontSize:"20px", color:"blue" , fontWeight:"bold"}}>Lưu</span>
                    </div>
                    <hr ></hr>
                    <div>
                      <div style={{display:"flex" , margin:"0 10%" }}>
                      <div style={{margin:"0 10%"}}>
                        <p style={{fontWeight:"bold"}}>Họ (vd: Nguyen)</p>
                        <InputField name="ho" lable="Nhập họ" form={form} />
                        </div>
                        <div style={{margin:"0 10%"}}>
                        <p style={{fontWeight:"bold"}}> Tên đệm và Tên</p>
                        <InputField name="ten" lable="Nhập tên" form={form} />
                        </div>
                      </div>
                      <div style={{display:"flex" , margin:"0 10%" }}>
                        <div style={{margin:"0 10%"}}>
                        <p style={{fontWeight:"bold"}}> Điện thoại di động</p>
                        <InputField
                          name="phone"
                          lable="Nhập số điện thoại"
                          form={form}
                        />
                        </div>
                        <div style={{margin:"0 10%"}}>
                        <p style={{fontWeight:"bold"}}> Email</p>
                        <InputField
                          name="email"
                          lable="Nhập email"
                          form={form}
                        />
                        </div>
                      </div>
                    </div>
                  </Paper>
                  <h4 style={{margin:"5% 0"}}>Thông tin khách hàng</h4>
                  <Paper elevation={3}>
                    <div style={{margin:"0 5%",padding:"2% 0"}}>
                      <span style={{fontWeight:"bold"}}>Người Lớn 1</span>
                      <span style={{float:"right", fontSize:"20px", color:"blue" ,fontWeight:"bold"}}>Lưu</span>
                    </div>
                    <hr style={{margin:"0"}}></hr>
                    <p style={{color:"orange",fontWeight:"bold", margin:"2% 5%"}}>Tên không dấu (Đệm tên họ, Thi Ngoc Anh Nguyen)</p>
                    <div style={{margin:"0 18%"}}>
                      <p style={{fontWeight:"bold"}}>Danh xưng</p>
                      <SelectField name="Select" data={select} form={form} />
                    </div>
                    <div style={{display:"flex", margin:"0 10%"}}>
                      <div style={{margin:"0 10%"}}>
                      <p style={{fontWeight:"bold"}}>Họ (vd: Nguyen)</p>
                      <InputField name="ho" lable="Nhập họ" form={form} />
                      </div>
                      <div style={{margin:"0 10%"}}>
                      <p style={{fontWeight:"bold"}}> Tên đệm và Tên </p>
                      <InputField name="ten" lable="Nhập tên" form={form} />
                      </div>
                    </div>
                    <hr></hr>
                    <div>
                      <p style={{fontWeight:"bold", margin:"0 5%",  paddingBottom:"15px"}}>Thêm tài khoản Hành khách Thân thiết</p>
                    </div>
                  </Paper>
                  <Link to="/payment" className="nav-link">
                  <button
                    variant="contained"
                    class="btn btn-primary"
                    type="submit"
                    style={{
                      width: "25%",
                      margin: " 3% 0",
                      float: "right",
                    
                    }}
                   
                  >
                    Chọn
                  </button>
                  </Link>
                </div>
              </Grid>
              <Grid item xs={3}>
                <Paper elevation={3}>
                  <div style={{margin:"0 5%"}}>
                    <ConnectingAirportsIcon/>
                    <span>Đà Nẵng ra TP HCM</span>
                    <span style={{float:"right"}}>Chi tiết</span>
                  </div>
                  <hr></hr>
                  <div style={{margin:"0 5%"}}>
                    <span style={{fontWeight:"bold"}}>Chuyến bay đi *Sat, 28 May 2022</span>
                    <div style={{display:"flex"}}>
                      <img src={vietjet} alt="" style={{ width: "30%" }} />
                      <div>
                        <span style={{fontWeight:"bold"}}>VietJet Air</span>
                        <p style={{color:"#696969" ,fontSize:"12px", textAlign:"center"}}>Khuyến mãi</p>
                      </div>
                    </div>
                    <div >
                      <div style={{display:"flex", justifyContent:"space-between"}}>
                      <div>
                        <p style={{margin:"0"}}>23:00</p>
                        <span style={{backgroundColor:"#999", borderRadius:"8px"}}>DAD</span>
                      </div>
                      <div>
                        <p style={{margin:"0"}}>1h25m</p>
                        <hr style={{margin:"0"}}></hr>
                        <span>Bay thẳng</span>
                      </div>
                      <div>
                        <p style={{margin:"0"}}>00:25</p>
                        <span style={{backgroundColor:"#999", borderRadius:"8px"}}>SGN</span>
                      </div>
                      </div>
                      <div>
                        <i className="fas fa-info-circle" style={{color:"#696969"}}>Không hoàn tiền</i>
                      </div>
                      <div>
                        <i className="fas fa-check-circle" style={{ color:"green"}}>
                          Có áp dụng đổi lịch bay
                        </i>
                      </div>
                    </div>
                   
                  </div>
                  <hr></hr>
                  <div style={{margin:"0 5%"}}>
                    <span style={{fontWeight:"bold"}}>Chuyến bay về *Sat, 28 May 2022</span>
                    <div style={{display:"flex"}}>
                      <img src={vietjet} alt="" style={{ width: "30%" }} />
                      <div>
                        <span style={{fontWeight:"bold"}}>VietJet Air</span>
                        <p style={{color:"#696969" ,fontSize:"12px", textAlign:"center"}}>Khuyến mãi</p>
                      </div>
                    </div>
                    <div >
                      <div style={{display:"flex", justifyContent:"space-between"}}>
                      <div>
                        <p style={{margin:"0"}}>20:45</p>
                        <span style={{backgroundColor:"#999", borderRadius:"8px"}}>SGN</span>
                      </div>
                      <div>
                        <p style={{margin:"0"}}>1h25m</p>
                        <hr  ></hr>
                        <span>Bay thẳng</span>
                      </div>
                      <div>
                        <p style={{margin:"0"}}>00:25</p>
                        <span style={{backgroundColor:"#999", borderRadius:"8px"}}>SGN</span>
                      </div>
                      </div>
                      <div>
                        <i className="fas fa-info-circle" style={{color:"green"}}>Có thể hoàn lại tiền</i>
                      </div>
                      <div>
                        <i className="fas fa-check-circle" style={{ color:"green"}}>
                          Có áp dụng đổi lịch bay
                        </i>
                      </div>
                    </div>
                   
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>

      {/* <form onSubmit={form.handleSubmit(onSubmit)}>
        <InputField name="Ho" Lable="mot" form={form} />
        <InputField name="TD" Lable="Dung" form={form} />
        <InputField name="Email" Lable="Email" form={form} />
        <SelectField name="Select" data={o} form={form} />
        <button type="submit"> submit</button>
      </form> */}
    
    </form>
  );
}

export default User;
