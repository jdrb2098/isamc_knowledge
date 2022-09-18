import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="my-4">
      <hr className="hr-m" />
      <Container>
        <h2 className="fs-4 mb-4">Isamc Knowledge Base</h2>
        <div className="d-flex justify-content-between flex-md-col">
          <ul style={{ listStyle: "none" }}>
            <li style={{ color: "#828282" }}>Isamc Knowledge Base</li>
            <li>
              <a href="mailto:monica.ospina@isamc.com.co">
                monica.ospina@isamc.com.co
              </a>
            </li>
          </ul>
          <div>
            <i class="fa-brands fa-github me-2" />
            <a href="https://github.com/">Isamc</a>
          </div>
          <span>Useful Knowledge Base for Isamc Developers</span>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
