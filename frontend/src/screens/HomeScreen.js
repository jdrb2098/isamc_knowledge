import React from "react";
import { Container } from "react-bootstrap";
import Terminal from "../components/Terminal";

function HomeScreen() {
  return (
    <div>
      <div className="flex">
        <i className="fa-solid fa-laptop fa-xl mr-3"></i>
        <h2 className="mx-3" style={{ marginBottom: "0" }}>
          introduction
        </h2>
      </div>
      <hr className="hr-m" />

      <Container className="">
        <div className="flex mx-5">
          <i className="fa-solid fa- fa-link mr-3"></i>
          <h2 className="mx-3" style={{ marginBottom: "0" }}>
            Links
          </h2>
        </div>
        <hr className="hr-m mx-5" />

        <div className="mx-5">
          <div>
            <div className="flex">
              <i class="fa-brands fa-github fa-xl"></i>
              <h3 className="mx-3" style={{ marginBottom: "0" }}>
                Github:
              </h3>
            </div>
            <a href="asd">giasd</a>
          </div>
          <div>
            <div className="flex">
              <i class="fa-brands fa-facebook fa-xl"></i>
              <h3 className="mx-3" style={{ marginBottom: "0" }}>
                Facebook:
              </h3>
            </div>
            <a href="asd">giasd</a>
          </div>
          <div>
            <div className="flex">
              <i class="fa-brands fa-instagram fa-xl"></i>
              <h3 className="mx-3" style={{ marginBottom: "0" }}>
                Instagram:
              </h3>
            </div>
            <a href="asd">giasd</a>
          </div>
        </div>

        <div className="flex mx-5 mt-5">
          <i className="fa-solid fa-code mr-3"></i>
          <h2 className="mx-3" style={{ marginBottom: "0" }}>
            Principles
          </h2>
        </div>

        <hr className="hr-m mx-5 " />
        <div className="mx-5">
          <h3>1. Don't Repeat Yourself</h3>
          <p>
            Don’t repeat yourself (
            <code className="language-plaintext highlighter-rouge">DRY</code>)
            is a principle of software development aimed at reducing repetition
            of software patterns, replacing it with abstractions or using data
            normalization to avoid redundancy.
          </p>
          <p>
            As a general rule, if you find yourself copying and pasting code, or
            repeating it in a similar manner, don’t do that. Either create a{" "}
            <code className="language-plaintext highlighter-rouge">
              Function
            </code>
            , a{" "}
            <code className="language-plaintext highlighter-rouge">Class</code>,
            a{" "}
            <code className="language-plaintext highlighter-rouge">Module</code>
            , or some kind of{" "}
            <code className="language-plaintext highlighter-rouge">
              Abstraction
            </code>
            .
          </p>
          <h3>2. keep it simple. Stupid!</h3>
          <p>
            <code class="language-plaintext highlighter-rouge">KISS</code>, an
            acronym for “keep it simple, stupid”, is a design principle noted by
            the U.S. Navy in 1960. The KISS principle states that most systems
            work best if they are kept simple rather than made complicated;
            therefore, simplicity should be a key goal in design, and
            unnecessary complexity should be avoided.
          </p>
          <p>
            We always recommend you to look for the most simple and succinct way
            of doing something, rather than doing something complex or writing
            tons of lines of code that can be summarized in just a small number
            of lines.
          </p>
          <p>
            This principle should not conflict with the first one, sometimes a
            feature would only be used once, therefore an abstraction won’t be
            needed, and sometimes the feature would be used multiple times, then
            the first principle applies in that case.
          </p>
          <h3> Quality over quantity.</h3>
          <p>
            We don’t care if you write a lot of lines of code, that’s not an
            indicator of hard work, we rather prefer a{" "}
            <code class="language-plaintext highlighter-rouge">
              quality code
            </code>{" "}
            that resolves the problems while being concise.
          </p>
          <h4>Example:</h4>
        </div>
        
        <Terminal/>
      </Container>
    </div>
  );
}

export default HomeScreen;
