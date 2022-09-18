import React from "react";
import { Link } from "react-router-dom";
import vsCode from "../assets/vs-code.png";

function GetingStartedScreen() {
  return (
    <div className="px-5 pt-3" style={{ flex: 1, minHeight: "100vh" }}>
      <div className="flex">
        <h2 style={{ marginBottom: "0" }}>Getting Started</h2>
        <span className="fa-xl mx-3">📚</span>
      </div>
      <hr className="hr-m" />

      <p className="mb-4 fs-5">
        Welcome to <span className="fw-bold">Isamc!</span>. We’re so glad you
        are here. Let’s get started.
      </p>

      <h2 style={{ marginBottom: "0" }}>Prerequisites</h2>
      <hr className="hr-m" />
      <ul className="mb-4">
        <li>GIT</li>
        <li>
          A <a href="https://github.com/">Github</a> account
        </li>
        <li>
          A{" "}
          <a href="https://azure.microsoft.com/es-es/products/devops/#overview">
            Azure DevOps
          </a>{" "}
          account
        </li>
        <li>A lot of enthusiasms 😁</li>
      </ul>

      <h2 style={{ marginBottom: "0" }}>Editors and IDEs</h2>
      <hr className="hr-m" />
      <h3 className="fs-4">Visual Studio Code</h3>
      <p>
        <img src={vsCode} alt="vsCode" />
      </p>
      <p className="fs-5">
        This is the best code editor in our opinion, it can be used for any
        development but we recommend it for front-end and back-end development:
      </p>
      <ul>
        <li>JavaScript</li>
        <li>Python</li>
        <li>JSON</li>
        <li>SCSS</li>
        <li>HTML</li>
        <li>Markdown</li>
        <li>ETC</li>
      </ul>

      <p className="fs-5">And frameworks:</p>
      <ul>
        <li>React</li>
        <li>Django Rest framework</li>
      </ul>

      <p className="fs-5">Download link: <a href="https://code.visualstudio.com/">https://code.visualstudio.com/</a></p>

      <p className="fw-bold fst-italic fs-5">***Definir las extensiones que se usan tanto en front-end como en back-end***</p>

      <h2 style={{ marginBottom: "0" }}>Next</h2>
      <hr className="hr-m" />
      <ul>
        <li><Link to="/gitflow">Gitflow</Link></li>
      </ul>
    </div>
  );
}

export default GetingStartedScreen;
