import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { ProblemContext } from "../context/ProblemContext";
import Problems from "../json/Problems.json";
import style from "../style/Problem.module.css";

function Problem() {
  const { active, activeProblemHandler } = React.useContext(ProblemContext);

  const [activeProblem, setActiveProblem] = useState({});
  const [isDataFetched, setIsDataFetched] = useState(false);

  console.log(active);

  useEffect(() => {
    Problems.filter((item) => item.index == active).map(
      (fitem) => {
        setIsDataFetched(true);
        setActiveProblem(fitem);
      }
      // console.log(fitem)
    );
    return () => {};
  }, []);

  console.log(activeProblem);

  return (
    <div>
      <div
        onClick={() => activeProblemHandler("Home")}
        className={style.Header}
      >
        <Button variant="success">⬅Back</Button>
      </div>
      {isDataFetched ? (
        <Card>
          <Card.Header>
            {activeProblem.index} - {activeProblem.title}
          </Card.Header>
          <Card.Body className={`${style.CardBody} text-align: left`}>
            <Card.Title className={`${style.ProblemStatement}`}>
              <span className={style.StatementTitle}>Problem Statement : </span>
              {activeProblem.statements.map((value) => {
                return (
                  <span className={`${style.StatementText}`}>
                    {value.statement}
                  </span>
                );
              })}
            </Card.Title>
            <Card.Title className={`${style.ProblemStatement}`}>
              {activeProblem.examples.map((value) => {
                return (
                  <>
                    <span className={style.ExampleTitle}>
                      Example : {value.id}
                    </span>
                    <span className={`${style.ExampleText}`}>
                      {value.example.map((evalue) => {
                        return (
                          <>
                            <span className={`${style.ExampleInput}`}>
                              Input : <code>{evalue.input}</code>
                            </span>
                            <pre style={{ margin: "0px" }}> </pre>
                            <span className={`${style.ExampleOutput}`}>
                              Output : <code>{evalue.output}</code>
                            </span>
                          </>
                        );
                      })}
                    </span>
                  </>
                );
              })}
            </Card.Title>
            <Card.Title className={`${style.ProblemStatement}`}>
              <span className={style.ExampleTitle}>Constraints :</span>

              {activeProblem.constraints.map((value) => {
                return (
                  <span
                    className={`${style.ExampleText}`}
                    style={{
                      width: "fit-content",
                      padding: "2px 10px",
                      margin: "1px 0px",
                    }}
                  >
                    <li></li>
                    <code>{value.constraint}</code>
                  </span>
                );
              })}
            </Card.Title>

            <Card.Title
              style={{ display: "flex", alignItems: "baseline" }}
              className={`${style.ProblemStatement}`}
            >
              <span className={style.StatementTitle}>Follow up : </span>
              <span
                style={{ padding: "inherit 10px", marginLeft: "5px" }}
                className={`${style.StatementText}`}
              >
                {activeProblem.followup}
              </span>
            </Card.Title>

            <Card.Title
              style={{ display: "flex", alignItems: "baseline" }}
              className={`${style.ProblemStatement}`}
            >
              <span className={style.StatementTitle}>Tags : </span>
              <span
                style={{
                  padding: "2px 10px",
                  backgroundColor: "rgba(238, 238, 238, 0.342)",
                  borderRadius: "10px",
                  border: "1px solid black",
                  marginLeft: "5px",
                }}
                className={`${style.StatementText}`}
              >
                {activeProblem.tags}
              </span>
            </Card.Title>

            <div>
              <Card.Img
                className={style.Image}
                variant="bottom"
                src={require("../images/" + activeProblem.solutionImg).default}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "10px 0px 0px",
              }}
            >
              <Button
                variant="primary"
                onClick={() => activeProblemHandler("Home")}
              >
                Back
              </Button>
              <Button
                onClick={() => window.open(`${activeProblem.url}`)}
                variant="primary"
              >
                LeetCode
              </Button>
            </div>
          </Card.Body>
          <Card.Footer className="text-muted">
            Made with 💖 by{" "}
            <a href="https://amazingdotdp.me/" target="_blank">
              <code style={{ fontSize: "1.5rem" }}>Devarshi</code>
            </a>{" "}
          </Card.Footer>
        </Card>
      ) : (
        "Loading ..."
      )}
    </div>
  );
}

export default Problem;
