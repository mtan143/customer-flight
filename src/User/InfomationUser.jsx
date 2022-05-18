// import { yupResolver } from "@hookform/resolvers/yup";
// import { Paper } from "@mui/material";
// import React from 'react';
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import InputField from "../FormControls/InputField";
// import SelectField from "../FormControls/SelectField";

// InfomationUser.propTypes = {
    
// };

// function InfomationUser(props) {

//     const schema = yup.object({
      
//         ho1: yup.string().required("Please enter your FirstName"),
//         ten1: yup.string().required("Please enter your LastName"),
//         ngaysinh: yup.string().required("Please enter your Date"),
//         quoctich: yup.string().required("Please enter your QuocTich"),
//         // select:yup.string().ensure().required('Please enter your QuocTich'),
    
//         //   age: yup.number().positive().integer().required(),
//         // }).required();
//       });
//       const onSubmit = (values) => {
//         console.log('SUCCESS!! :-)\n\n' + JSON.stringify(values, null, 4)); 
//       }
//       const form = useForm({
//         defaultValues: {
//           Select: "",
//           ngaysinh: "",
//           quoctich: "",
//           ho1: "",
//           ten1: "",
//         },
//         resolver: yupResolver(schema),
//       });
//       const select = {
//         man: "Ông",
//         women: "Bà",
//         miss: "Cô",
//         // resolver: yupResolver(schema),
//       };
//     return (
//         // <div>
//         //     <div>
//         //             <Paper elevation={3}>
//         //             <div style={{ margin: "0 5%", padding: "2% 0" }}>
//         //               <span style={{ fontWeight: "bold" }}>Người Lớn {props.id + 1}</span>
//         //               <button
//         //                 style={{
//         //                   color: "blue",
//         //                   border: "none",
//         //                   backgroundColor: "transparent",
//         //                   float: "right",
//         //                 }}
//         //               >
//         //                 Lưu
//         //               </button>
//         //             </div>
//         //             <hr style={{ margin: "0" }}></hr>
//         //             <p
//         //               style={{
//         //                 color: "orange",
//         //                 fontWeight: "bold",
//         //                 margin: "2% 5%",
//         //               }}
//         //             >
//         //               Tên không dấu (Đệm tên họ, Thi Ngoc Anh Nguyen)
//         //             </p>
//         //             <div style={{ margin: "0 18%" }}>
//         //               <p style={{ fontWeight: "bold" }}>Danh xưng</p>
//         //               <SelectField name="Select" data={select} form={form} />
//         //             </div>
//         //             <div
//         //               style={{
//         //                 display: "flex",
//         //                 margin: "5% 10%",
//         //                 paddingBottom: "5%",
//         //               }}
//         //             >
//         //               <div style={{ margin: "0 10%" }}>
                      
//         //                 <InputField name="ho1" lable="Họ" form={form} />
//         //               </div>
//         //               <div style={{ margin: "0 10%" }}>
                     
//         //                 <InputField
//         //                   name="ten1"
//         //                   lable="Tên đệm và Tên"
//         //                   form={form}
//         //                 />
//         //               </div>
//         //             </div>
//         //             <div
//         //               style={{
//         //                 display: "flex",
//         //                 margin: "0 10%",
//         //                 paddingBottom: "5%",
//         //               }}
//         //             >
//         //               <div style={{ margin: "0 10%" }}>
                       
//         //                 <InputField
//         //                   name="ngaysinh"
//         //                   lable="Ngày sinh"
//         //                   form={form}
//         //                 />
//         //               </div>
//         //               <div style={{ margin: "0 10%" }}>
                     
//         //                 <InputField
//         //                   name="quoctich"
//         //                   lable="Quốc tịch"
//         //                   form={form}
//         //                 />
//         //               </div>
//         //             </div>
//         //             <hr></hr>
//         //             <div>
//         //               <p
//         //                 style={{
//         //                   fontWeight: "bold",
//         //                   margin: "0 5%",
//         //                   paddingBottom: "15px",
//         //                 }}
//         //               >
//         //                 Thêm tài khoản Hành khách Thân thiết
//         //               </p>
//         //             </div>
//         //           </Paper>
                
//         //         </div>
//         // </div>
//         <form onSubmit={form.handleSubmit(props.onSubmit)}>
//             <div>
//                     <Paper elevation={3}>
//                     <div style={{ margin: "0 5%", padding: "2% 0" }}>
//                       <span style={{ fontWeight: "bold" }}>Người Lớn {props.id + 1}</span>
//                       <button
//                         style={{
//                           color: "blue",
//                           border: "none",
//                           backgroundColor: "transparent",
//                           float: "right",
//                         }}
//                       >
//                         Lưu
//                       </button>
//                     </div>
//                     <hr style={{ margin: "0" }}></hr>
//                     <p
//                       style={{
//                         color: "orange",
//                         fontWeight: "bold",
//                         margin: "2% 5%",
//                       }}
//                     >
//                       Tên không dấu (Đệm tên họ, Thi Ngoc Anh Nguyen)
//                     </p>
//                     <div style={{ margin: "0 18%" }}>
//                       <p style={{ fontWeight: "bold" }}>Danh xưng</p>
//                       <SelectField name="Select" data={select} form={form} />
//                     </div>
//                     <div
//                       style={{
//                         display: "flex",
//                         margin: "5% 10%",
//                         paddingBottom: "5%",
//                       }}
//                     >
//                       <div style={{ margin: "0 10%" }}>
                      
//                         <InputField name="ho1" lable="Họ" form={form} />
//                       </div>
//                       <div style={{ margin: "0 10%" }}>
                     
//                         <InputField
//                           name="ten1"
//                           lable="Tên đệm và Tên"
//                           form={form}
//                         />
//                       </div>
//                     </div>
//                     <div
//                       style={{
//                         display: "flex",
//                         margin: "0 10%",
//                         paddingBottom: "5%",
//                       }}
//                     >
//                       <div style={{ margin: "0 10%" }}>
                       
//                         <InputField
//                           name="ngaysinh"
//                           lable="Ngày sinh"
//                           form={form}
//                         />
//                       </div>
//                       <div style={{ margin: "0 10%" }}>
                     
//                         <InputField
//                           name="quoctich"
//                           lable="Quốc tịch"
//                           form={form}
//                         />
//                       </div>
//                     </div>
//                     <hr></hr>
//                     <div>
//                       <p
//                         style={{
//                           fontWeight: "bold",
//                           margin: "0 5%",
//                           paddingBottom: "15px",
//                         }}
//                       >
//                         Thêm tài khoản Hành khách Thân thiết
//                       </p>
//                     </div>
//                   </Paper>
                
//                 </div>
//         </form>
//     );
// }

// export default InfomationUser;