import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import InputField from "../FormControls/InputField";
import SelectField from "../FormControls/SelectField";
import { Container, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import vietjet from "../resource/vietjet.png";

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
    <div>
      <div>
        <h4>Đặt chỗ của tôi</h4>
        <p style={{ color: "#696969" }}>Điền thông tin và xem lại đặt chỗ</p>
      </div>
      <div>
        <h4>Thông tin liên hệ</h4>
        <Box pt={4}>
          <Container>
            <Grid container spacing={1}>
              {/* tương đương 1 dòng */}
              <Grid item xs={9}>
                <div>
                  <Paper elevation={3}>
                    <span>Thông tin liên hệ (nhận vé/phiếu thanh toán)</span>
                    <span>Lưu</span>
                    <hr></hr>
                    <div>
                      <div>
                        <label>Họ (vd: Nguyen)</label>
                        <InputField name="ho" lable="Nhập họ" form={form} />
                        <label> Tên đệm và Tên (Vd: Thi Ngoc Anh)</label>
                        <InputField name="ten" lable="Nhập tên" form={form} />
                      </div>
                      <div>
                        <label> Điện thoại di động</label>
                        <InputField
                          name="phone"
                          lable="Nhập số điện thoại"
                          form={form}
                        />
                        <label> Email</label>
                        <InputField
                          name="email"
                          lable="Nhập email"
                          form={form}
                        />
                      </div>
                    </div>
                  </Paper>
                  <h4>Thông tin khách hàng</h4>
                  <Paper elevation={3}>
                    <div>
                      <span>Người Lớn 1</span>
                      <span>Lưu</span>
                    </div>
                    <hr></hr>
                    <p>Tên không dấu (Đệm tên họ, Thi Ngoc Anh Nguyen</p>
                    <div>
                      <p>Danh xưng</p>
                      <SelectField name="Select" data={select} form={form} />
                    </div>
                    <div>
                      <label>Họ (vd: Nguyen)</label>
                      <InputField name="ho" lable="Nhập họ" form={form} />
                      <label> Tên đệm và Tên (Vd: Thi Ngoc Anh)</label>
                      <InputField name="ten" lable="Nhập tên" form={form} />
                    </div>
                    <hr></hr>
                    <div>
                      <p>Thêm tài khoản Hành khách Thân thiết</p>
                    </div>
                  </Paper>
                  <button
                    variant="contained"
                    class="btn btn-primary"
                    type="button"
                    style={{
                      width: "25%",
                      margin: "0",
                      float: "right",
                      //   backgroundColor: "rgb(255, 94, 31)",
                    }}
                  >
                    Chọn
                  </button>
                </div>
              </Grid>
              <Grid item xs={3}>
                <Paper elevation={3}>
                  <div>
                    <span>Đà Nẵng ra TP HCM</span>
                    <span>Chi tiết</span>
                  </div>
                  <hr></hr>
                  <div>
                    <span>Chuyến bay đi *Sat, 28 May 2022</span>
                    <div>
                      <img src={vietjet} alt="" style={{ width: "30%" }} />
                      <div>
                        <span>VietJet Air</span>
                        <span>Khuyến mãi</span>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p>23:00</p>
                        <span>DAD</span>
                      </div>
                      <div>
                        <p>1h25m</p>
                        <hr></hr>
                        <span>Bay thẳng</span>
                      </div>
                      <div>
                        <p>00:25</p>
                        <span>SGN</span>
                      </div>
                      <div>
                        <i className="fas fa-info-circle">Không hoàn tiền</i>
                      </div>
                      <div>
                        <i className="fas fa-check-circle">
                          Có áp dụng đổi lịch bay
                        </i>
                      </div>
                    </div>
                    <hr></hr>
                  </div>
                  <div>
                    <span>Đà Nẵng ra TP HCM</span>
                    <span>Chi tiết</span>
                  </div>
                  <hr></hr>
                  <div>
                    <span>Chuyến bay đi *Sat, 28 May 2022</span>
                    <div>
                      <img src={vietjet} alt="" style={{ width: "30%" }} />
                      <div>
                        <span>VietJet Air</span>
                        <span>Khuyến mãi</span>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p>23:00</p>
                        <span>DAD</span>
                      </div>
                      <div>
                        <p>1h25m</p>
                        <hr></hr>
                        <span>Bay thẳng</span>
                      </div>
                      <div>
                        <p>00:25</p>
                        <span>SGN</span>
                      </div>
                      <div>
                        <i className="fas fa-info-circle">Không hoàn tiền</i>
                      </div>
                      <div>
                        <i className="fas fa-check-circle">
                          Có áp dụng đổi lịch bay
                        </i>
                      </div>
                    </div>
                    <hr></hr>
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
    </div>
  );
}

export default User;
