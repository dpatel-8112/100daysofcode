import React from "react";
import Style from "./Home.module.css";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

function Day(props) {
  const {
    day: { id, day, date, platform, problems },
  } = props;

  problems.map((value) => console.log(value));
  // const variant = [
  //   "Primary",
  //   "Secondary",
  //   "Success",
  //   "Danger",
  //   "Warning",
  //   "Info",
  //   "Light",
  //   "Dark",
  // ];

  return (
    <Col sm={12} md={6} lg={4} className={Style.Column}>
      <Card border="primary" style={{ width: "20rem" }}>
        <Card.Header
          className={Style.CardHeader}
          style={{
            backgroundColor: "#121212",
          }}
        >
          {day} <span className={Style.ProblemDate}>({date})</span>
        </Card.Header>
        <Card.Body className={Style.CardBody}>
          <Card.Title>{platform}</Card.Title>
          <Card.Text className={Style.Text}>
            <ListGroup>
              {problems.map((problem, index) => {
                return (
                  <ListGroup.Item
                    action
                    data-action={problem.action}
                    variant={problem.variant}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      height: "60px",
                      minHeight: "60px",
                      maxHeight: "60px",
                    }}
                  >
                    <span className={Style.ProblemIndex}>
                      <Badge
                        style={{
                          background: "black",
                          color: "white",
                        }}
                        bg="dark"
                      >
                        {problem.index}
                      </Badge>
                    </span>
                    <span className={Style.ProblemName}>{problem.problem}</span>
                    <span className={Style.ProblemIndex}></span>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Day;
