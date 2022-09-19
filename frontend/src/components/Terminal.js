import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

function Terminal() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)
  const [padding, setPadding] = useState("mx-5")
  useEffect(() => {
    if(innerWidth < 700){
      setPadding("mx-3")
    }
    else{
      setPadding("mx-5")   
    }
  
  }, [innerWidth])
  
  return (
    <div className={padding}>
      <div>
        <div className="flex px-3 terminal__header" style={{ gap: "0.5rem" }}>
          <div
            className="circle"
            style={{ backgroundColor: "var(--bs-danger)" }}
          ></div>
          <div
            className="circle"
            style={{ backgroundColor: "var(--bs-orange)" }}
          ></div>
          <div
            className="circle"
            style={{ backgroundColor: "var(--bs-success)" }}
          ></div>
        </div>
        <Container className="Terminal__code__body pt-3">
          <div className="m-3">
            <h5 style={{ color: "var(--bs-gray-600" }}>
              <b># Bad:</b>
            </h5>
            <h5 style={{ color: "var(--bs-gray-600" }}>
              # Returns the factorial of a number
            </h5>
            <h5>
              <span style={{ color: "var(--bs-purple)" }}>
                <b>def</b>
              </span>{" "}
              function(a):
            </h5>
            <div className={padding}>
              <h5>
                res{" "}
                <span style={{ color: "var(--bs-black)" }}>
                  <b>=</b>
                </span>{" "}
                <span style={{ color: "var(--bs-blue)" }}>1</span>
              </h5>
              <h5>
                <span style={{ color: "var(--bs-purple)" }}>
                  <b>for </b>
                </span>
                val{" "}
                <span style={{ color: "var(--bs-purple)" }}>
                  <b>in</b>
                </span>{" "}
                <span style={{ color: "var(--bs-blue)" }}>range</span>(
                <span style={{ color: "var(--bs-blue)" }}>1 </span>, a +{" "}
                <span style={{ color: "var(--bs-blue)" }}>1 </span>):
              </h5>
              <h5 className={padding}>
                {" "}
                res{" "}
                <span style={{ color: "var(--bs-black)" }}>
                  <b>=</b>
                </span>{" "}
                res * val
              </h5>
              <h5 className="pb-3">
                <span style={{ color: "var(--bs-purple)" }}>
                  <b>return</b>
                </span>{" "}
                res
              </h5>
              
            </div>
            <h5 style={{color:"var(--bs-gray-600"}}>
              <b># Good:</b>
            </h5>
            <h5>
              <span style={{ color: "var(--bs-purple)" }}>
                <b>def</b>
              </span>{" "}
              factorial ( number ):
            </h5>
            <h5 className={`${padding} pb-3`}> <span style={{ color: "var(--bs-purple)" }}><b>return</b></span> <span style={{ color: "var(--bs-blue)" }}>reduce </span>(<span style={{ color: "var(--bs-black)" }}>
                  <b> lambda</b>
                </span> n, current_product: n * current_product, <span style={{ color: "var(--bs-blue)" }}>range </span>(<span style={{ color: "var(--bs-blue)" }}>1 </span>, number + <span style={{ color: "var(--bs-blue)" }}>1 </span>))</h5>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Terminal;
