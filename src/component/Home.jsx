import React from "react";
import Day from "./Day";
import Style from "./Home.module.css";
import { Container, Row } from "react-bootstrap";
import Days from "./Days.json";

function Home() {
  return (
    <>
      <Container style={{ textAlign: "-webkit-center" }}>
        <h1 className={Style.Heading}>
          100 Days Of Code - <span className={Style.HeadingYear}>2021</span>
        </h1>
        <Row>
          {Days.map((day, index) => {
            console.log(day);
            console.log(index);
            return <Day key={index} day={day} />;
          })}
        </Row>
      </Container>
    </>
  );
}

export default Home;
