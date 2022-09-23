import React from "react";
import { Link } from "react-router-dom";
import vsCode from "../assets/vs-code.png";
import vsComunity from "../assets/visualEstudioComunity.gif";
import { Table } from "react-bootstrap";

function GetingStartedScreen() {
  const headings = ["Name", "Description", "Mandatory"];
  const Extention = [
    ["GitLens", "Helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs", "No"],
    ["Color Highlight", "Highlight web colors in your editor", "No"],
    ["ES7 + React", "Extentions for React, React-Native and Redux in JavaScript/TypeScript with ES7 + syntax. Custumizable. Built-in integration with prittier", "yes if u work with React"],
    ["Prittier", "Code Formater", "yes"],
    ["Auto Barrel","Provides commands to create or update a TypeScript or JavaScript barrel file in a folder and to automatically manage the contents of the barrel","No"],
    ["autoDocstring", "Generates python docstrings automaticall", "no"],
    ["Django", "Beautiful syntax and scoped snippets for perfectionists with deadlines", "yes"],
    ["Jinja", "Jinja template language support for Visual Studio Code", "no"],
    ["Material Icon Theme", "Material Design Icons for Visual Studio Code", "no"],
    ["Python", "IntelliSense (Pylance), Linting, Debugging (multi-threaded, remote), Jupyter Notebooks, code formatting, refactoring, unit tests, and more.", "yes"],
    ["Pylence", "A performant, feature-rich language server for Python in VS Code", "yes"],
    ["Python Enviroment Manager", "View and manage python enviroments & packages", "yes"],

  ];

  return (
    <div className="px-5 pt-4" style={{ flex: 1, minHeight: "100vh" }}>
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
        <img style={{ maxWidth: "100%" }} src={vsCode} alt="vsCode" />
      </p>
      <p className="fs-5">
        This is the best code editor in our opinion, it can be used for any
        development but we recommend it for front-end and back-end development:
      </p>
      <ul>
        <li>JavaScript</li>
        <li>Python</li>
        <li>JSON</li>
        <li>GeoJson</li>
        <li>SCSS</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Markdown</li>
        <li>ETC</li>
        <li>.NET</li>
        <li>SASS</li>
      </ul>

      <p className="fs-5">And frameworks:</p>
      <ul>
        <li>React</li>
        <li>Django Rest framework</li>
        <li>Entity Core 6</li>
      </ul>

      <p className="fs-5">
        Download link:{" "}
        <a href="https://code.visualstudio.com/">
          https://code.visualstudio.com/
        </a>
      </p>

      <Table responsive  bordered hover>
        <thead>
          <tr>
          {Array.from({ length: 3 }).map((_, index) => 
              { if(index===1)
                  return <th style={{width:"50%"}} key={index}>{headings[index]}</th>
                return <th style={{width:"25%"}} key={index}>{headings[index]}</th>
              }
            )}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Array.from({ length: 3 }).map((_, index) => (
              <td key={index}>{Extention[0][index]}</td>
            ))}
          </tr>
          <tr>
            {Array.from({ length: 3 }).map((_, index) => (
              <td key={index}>{Extention[1][index]}</td>
            ))}
          </tr>
          <tr>
            {Array.from({ length: 3 }).map((_, index) => (
              <td key={index}>{Extention[2][index]}</td>
            ))}
          </tr>
          <tr>
            {Array.from({ length: 3 }).map((_, index) => (
              <td key={index}>{Extention[3][index]}</td>
            ))}
          </tr>
          <tr>
            {Array.from({ length: 3 }).map((_, index) => (
              <td key={index}>{Extention[4][index]}</td>
            ))}
          </tr>
          <tr>
            {Array.from({ length: 3 }).map((_, index) => (
              <td key={index}>{Extention[5][index]}</td>
            ))}
          </tr>
          <tr>
            {Array.from({ length: 3 }).map((_, index) => (
              <td key={index}>{Extention[6][index]}</td>
            ))}
          </tr>
          <tr>
            {Array.from({ length: 3 }).map((_, index) => (
              <td key={index}>{Extention[7][index]}</td>
            ))}
          </tr>
          <tr>
            {Array.from({ length: 3 }).map((_, index) => (
              <td key={index}>{Extention[8][index]}</td>
            ))}
          </tr>
          <tr>
            {Array.from({ length: 3 }).map((_, index) => (
              <td key={index}>{Extention[9][index]}</td>
            ))}
          </tr>
          <tr>
            {Array.from({ length: 3 }).map((_, index) => (
              <td key={index}>{Extention[10][index]}</td>
            ))}
          </tr>
          <tr>
            {Array.from({ length: 3 }).map((_, index) => (
              <td key={index}>{Extention[11][index]}</td>
            ))}
          </tr>
        </tbody>
      </Table>
      <hr />
      <h3 className="fs-4">Visual Studio Community</h3>
      <p>
        <img style={{ maxWidth: "100%" }} src={vsComunity} alt="vsCode" />
      </p>
      <p className="fs-5">
        A free, comprehensive extensible IDE for building modern apps for
        Windows, Android, and iOS, as well as web apps and cloud services. Any
        individual developer can use Visual Studio Community to create their own
        free or paid apps.
      </p>
      <p className="fs-5">
        Download link:{" "}
        <a href="https://visualstudio.microsoft.com/es/thank-you-downloading-visual-studio/?sku=Community&channel=Release&version=VS2022&source=VSLandingPage&passive=false&cid=2030">
          https://visualstudio.microsoft.com//
        </a>
      </p>

      <h2 style={{ marginBottom: "0" }}>Next</h2>
      <hr className="hr-m" />
      <ul>
        <li>
          <Link to="/gitflow">Gitflow</Link>
        </li>
      </ul>
    </div>
  );
}

export default GetingStartedScreen;
