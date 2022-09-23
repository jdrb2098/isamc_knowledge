import { Col, Container, Row } from "react-bootstrap";
import Logo from "../assets/LogoISAMC.jfif";
const Footer = () => {
  return (
    <footer className="py-5" style={{backgroundColor:""}}>
      <hr/>
      <Container>
        <h3 className="pb-3" style={{textAlign: "center"}}> ISAMC Knowledge Base</h3>
        
        <Row style={{alignItems:"center"}}>
          <Col xs='12' md="4" style={{alignSelf:"center"}}>
            <Container className="flex justify-content-center">
            <p ><span>ISAMC Knowledge Base </span> <br/>administrador@isamc.com.co</p>
            
            </Container>
            
          </Col>
          <Col xs='12' md="4" style={{alignSelf:"center", textAlign:"center"}}>
            <img src={Logo} alt="logo" style={{maxWidth:"50%", maxHeight:"100%"}} />
          </Col>
          <Col xs='12' md="4">
            <div className="flex justify-content-center">
            Useful Knowledge Base for ISAMC Developers
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
