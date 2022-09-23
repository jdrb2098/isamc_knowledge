import React from 'react'
import django from "../assets/django.svg";
import react from "../assets/react.svg";
import net from "../assets/dotnet.svg";
import aws from "../assets/aws.svg";
import azure from "../assets/microsoft-azure.svg";

function StackScreen() {
  return (
    <div className="px-5 pt-4" style={{ flex: 1, minHeight: "100vh" }}>
      <div className="flex">
        <h2 style={{marginBottom:"0"}}>Stack</h2>
        <span className="mx-3 fa-xl">🗄️</span>
      </div>
      <hr className="hr-m"/>

      <h2><img src={django} alt="Django"/>{" "}Django</h2>
      <p style={{marginBottom:"0"}} className="fs-5">The web framework for perfectionists with deadlines.</p>
      <p style={{color: "#828282"}} className="mb-5">Python,Backend,Frontend,API,REST,Web</p>

      <h2><img src={react} alt="React"/>{" "}React</h2>
      <p style={{marginBottom:"0"}} className="fs-5">A JavaScript library for building user interfaces.</p>
      <p style={{color: "#828282"}} className="mb-5">Javascript,Frontend,SPA,CSS,HTML,Web</p>

      <h2><img src={net} alt=".Net"/>{" "}.Net</h2>
      <p style={{marginBottom:"0"}} className="fs-5">is a Microsoft framework that emphasizes network transparency, regardless of hardware platform, and enables rapid application development.</p>
      <p style={{color: "#828282"}} className="mb-5">C#,Backend,Frontend,API,REST,Web</p>

      <h2><img src={aws} alt="AWS"/>{" "}AWS</h2>
      <p style={{marginBottom:"0"}} className="fs-5">is a collection of cloud computing services</p>
      <p style={{color: "#828282"}} className="mb-5">Cloud, Node.js, Python, Java, Go, C# </p>

      <h2><img src={azure} alt="DevOps"/>{" "}Azure DevOps</h2>
      <p style={{marginBottom:"0"}} className="fs-5">Plan smarter, collaborate better, and ship faster with a modern suite of development services.</p>
      <p style={{color: "#828282"}} className="mb-5">Version control, Reporting, Requirements management, Project management, Automated builds, Testing, Release management</p>
    </div>
  )
}

export default StackScreen