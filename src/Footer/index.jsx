  import '@fortawesome/fontawesome-free/css/all.min.css';
  import 'bootstrap-css-only/css/bootstrap.min.css';
  import { MDBCol, MDBContainer, MDBFooter, MDBRow } from "mdbreact";
  import 'mdbreact/dist/css/mdb.css';
  import React from 'react';



  Footer.propTypes = {
      
  };



  function Footer(props) {
    
      return (
      
          <MDBFooter color="blue" className="font-small pt-4 mt-4" style={{fontFamily: "system-ui",}} >
          <MDBContainer fluid className="text-center text-md-left" >
            <MDBRow>
              <MDBCol md="6">
                <h5 className="title">Chủ đề về chuyến bay</h5>
                <p>
                Cathay Pacific – Life Well Travelled: Hành trình về cuộc sống hoàn hảo
                </p>
              </MDBCol>
              <MDBCol md="6">
                <h5 className="title">Liên hệ</h5>
                <ul>
                  <li className="list-unstyled">
                    <a href="#!">About Us</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Privacy Police</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Find Flight</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Contact</a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
            </MDBContainer>
          </div>
        </MDBFooter>
      );
  }

  export default Footer;