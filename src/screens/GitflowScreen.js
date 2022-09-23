import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gitflow from "../assets/gitflow.svg";

function GitflowScreen() {
  const [videoHeight, setVideoHeight] = useState("400px");

  useEffect(() => {
    if (window.innerWidth > 1024) {
      setVideoHeight("500px");
    } else {
      if (window.innerWidth < 500) setVideoHeight("300px");
      else {
        setVideoHeight("400px");
      }
    }
  }, []);

  return (
    <div className="px-5 pt-4" style={{ flex: 1, minHeight: "100vh" }}>
      <div className="flex">
        <h2 className="mx-3" style={{ marginBottom: "0" }}>
          Gitflow
        </h2>
        <span className="fa-xl mx-3">🗂️</span>
      </div>
      <hr className="hr-m" />
      <div>
        Gitflow is our preferred way of collaborating and managing code
        versions.
        <p>
          <img style={{ width: "100%" }} src={gitflow} alt="gitflow" />
        </p>
        Our branching model is based on Gitflow, the variation is present in the
        release and hotfix branches because of the requirement of supporting two
        versions of the system, here are the details of the branches:
        <h3 className="py-2">Git</h3>
        Gitflow is the workflow, but Git is the tool, in case you don’t have
        experience with Git, here is an useful video that explains the basics:
        <iframe
          className="pt-3"
          title="git"
          width="100%"
          height={videoHeight}
          style={{ marginBottom: "20px" }}
          src="https://www.youtube.com/embed/hwP7WQkmECE"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen=""
        ></iframe>
        <h3>
          {" "}
          The <b>Main</b> branch
        </h3>
        <p>
          The HEAD of the{" "}
          <code class="language-plaintext highlighter-rouge">master</code>{" "}
          branch should always reflect a production-ready state, the latest
          commit of this branch reflects the current state of the production
          environment.
        </p>
        <h2 id="the-develop-branch">
          The <strong>Develop</strong> branch
        </h2>
        <p>
          The <code class="language-plaintext highlighter-rouge">develop</code>{" "}
          branch is the main branch with the latest delivered development
          changes, all the other support branches branch off from{" "}
          <code class="language-plaintext highlighter-rouge">develop</code> and
          merged back to{" "}
          <code class="language-plaintext highlighter-rouge">develop</code>{" "}
          through <em>pull requests</em>.
        </p>
        <h2 id="supporting-branches">Supporting branches</h2>
        <h3 id="feature-branches">
          <strong>Feature</strong> branches
        </h3>
        <p>Must branch off from:</p>
        <ul>
          <li>
            <code class="language-plaintext highlighter-rouge">develop</code>
          </li>
        </ul>
        <p>Must merge back into:</p>
        <ul>
          <li>
            <code class="language-plaintext highlighter-rouge">develop</code>
          </li>
        </ul>
        <p>Naming convention:</p>
        <ul>
          <li>
            <code class="language-plaintext highlighter-rouge">feature/*</code>{" "}
            or anything except{" "}
            <code class="language-plaintext highlighter-rouge">master</code>,{" "}
            <code class="language-plaintext highlighter-rouge">develop</code>,{" "}
            <code class="language-plaintext highlighter-rouge">release</code>,{" "}
            <code class="language-plaintext highlighter-rouge">hotfix</code>,{" "}
            <code class="language-plaintext highlighter-rouge">fix</code>.
          </li>
        </ul>
        <p>
          Feature branches are used to develop new features, configurations, or
          even refactors, the name of these branches may be for instance
          config/my-config refactor/my-refactor, or just feature/my-config.
        </p>
        <h3 id="release-branches">
          <strong>Release</strong> branches
        </h3>
        <p>May branch off from:</p>
        <ul>
          <li>
            <code class="language-plaintext highlighter-rouge">master</code> or{" "}
            <code class="language-plaintext highlighter-rouge">develop</code>.
          </li>
        </ul>
        <p>Must merge back into:</p>
        <ul>
          <li>
            <code class="language-plaintext highlighter-rouge">master</code>{" "}
            and/or{" "}
            <code class="language-plaintext highlighter-rouge">develop</code>{" "}
            depending of the release.
          </li>
        </ul>
        <p>Naming convention:</p>
        <ul>
          <li>
            <code class="language-plaintext highlighter-rouge">release/*</code>
          </li>
        </ul>
        <p>
          It contains the state of the major releases, example{" "}
          <code class="language-plaintext highlighter-rouge">release/v1.0</code>
          , and{" "}
          <code class="language-plaintext highlighter-rouge">release/v2.0</code>
          .
        </p>
        <h3 id="fix-branches">
          <strong>Fix</strong> branches
        </h3>
        <p>May branch off from:</p>
        <ul>
          <li>
            <code class="language-plaintext highlighter-rouge">master</code> or{" "}
            <code class="language-plaintext highlighter-rouge">develop</code>.
          </li>
        </ul>
        <p>Must merge back into:</p>
        <ul>
          <li>
            If branched off from{" "}
            <code class="language-plaintext highlighter-rouge">master</code>{" "}
            should be merged back to{" "}
            <code class="language-plaintext highlighter-rouge">master</code> and{" "}
            <code class="language-plaintext highlighter-rouge">develop</code>.
          </li>
          <li>
            If merge from{" "}
            <code class="language-plaintext highlighter-rouge">develop</code>{" "}
            should be merged back to{" "}
            <code class="language-plaintext highlighter-rouge">develop</code>.
          </li>
        </ul>
        <p>Naming convention:</p>
        <p>Naming convention:</p>
        <p>
          The <code class="language-plaintext highlighter-rouge">fix</code>{" "}
          branches are used for solving bugs, doing small improvements, or
          solving small configuration issues, they are branched off from{" "}
          <code class="language-plaintext highlighter-rouge">develop</code>, and
          the <code class="language-plaintext highlighter-rouge">hotfix</code>{" "}
          branches are used to solve bugs or issues that should be fixed
          immediately in production, then those branches usually branch off from{" "}
          <code class="language-plaintext highlighter-rouge">master</code>.
        </p>
        <p>
          The <code class="language-plaintext highlighter-rouge">fix</code>{" "}
          branches are used for solving bugs, doing small improvements, or
          solving small configuration issues, they are branched off from{" "}
          <code class="language-plaintext highlighter-rouge">develop</code>, and
          the <code class="language-plaintext highlighter-rouge">hotfix</code>{" "}
          branches are used to solve bugs or issues that should be fixed
          immediately in production, then those branches usually branch off from{" "}
          <code class="language-plaintext highlighter-rouge">master</code>.
        </p>
        <div>
        <ul>
          <li>
            <a href="https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow">
              <p style={{width: "100%",wordWrap: "break-word"}}>https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow</p>
            </a>
          </li>
        </ul>
        </div>
        <h3 id="next">Next</h3>
        <hr />
        <ul>
          <li>
            <Link to="/stack/">Stack</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default GitflowScreen;
