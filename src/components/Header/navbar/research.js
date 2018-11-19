import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";

const researches = [
  {
    href: "http://adase.group/",
    text: "Advanced Data Analytics in Science and Engineering Group"
  },
  {
    href: "https://crei.skoltech.ru/cdise/aeronet-lab/",
    text: "AeroNet Lab"
  },
  {
    href: "http://sites.skoltech.ru/inftheory/",
    text: "Applied Information Theory"
  },
  {
    href: "/research/computational-molecular-science/",
    text: "Computational Molecular Science"
  },
  {
    href: "http://sites.skoltech.ru/compvision/",
    text: "Computer Vision"
  },
  {
    href: "https://crei.skoltech.ru/cdise/phd_positions/iot-lab-positions/",
    text: "IoT Lab"
  },
  {
    href: "https://sites.skoltech.ru/mobilerobotics/",
    text: "Mobile Robotics Lab"
  },
  {
    href: "http://oseledets.github.io/ ",
    text: "Scientific Computing"
  },
  {
    href: "http://strlearn.ru/",
    text: "Structural Learning"
  },
  {
    href: "https://crei.skoltech.ru/cdise/research/deep-quantum-labs/",
    text: "Deep Quantum Lab"
  }
];

class Research extends Component {
  render() {
    return (
      <Dropdown.Menu>
        {researches.map((r, index) => {
          return (
            <Dropdown.Item key={index}>
              <a
                href={r.href}
                target="_blank"
                style={{ color: "black", textDecoration: "none" }}
              >
                {r.text}
              </a>
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    );
  }
}

export default Research;
