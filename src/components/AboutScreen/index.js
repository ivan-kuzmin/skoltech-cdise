import React, { Component } from "react";
import { Helmet } from "react-helmet";

export default class AboutScreen extends Component {
  render() {
    return (
      <div style={{ lineHeight: "2" }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Skoltech CDISE </title>
        </Helmet>
        <h3 style={{ paddingBottom: "20px" }}>Welcome to CDISE!</h3>
        <p>
          Skoltech Center for Computational and Data-Intensive Science and
          Engineering (CDISE) aims at the conduction of cross-cutting
          interdisciplinary research driven by modern applications in the fields
          of computational and data sciences. CDISE has accumulated several
          research groups with the expertise unique in Russia and competitive at
          the world level in their prospective areas. Currently, there are 17
          professors, more than 50 researchers, and 60 Ph.D. students. CDISE
          powers the largest educational program at Skoltech – the IT program
          with two tracks:{" "}
          <a href="https://www.skoltech.ru/en/education/msc-programs/ist//">
            Computational Science and Engineering
          </a>{" "}
          and{" "}
          <a href="https://www.skoltech.ru/en/education/msc-programs/ds/">
            Data Science
          </a>{" "}
          . The research areas include but are not limited to:
        </p>
        <ul>
          <li>Machine learning and Deep Learning</li>
          <li>Data Management and Data Mining</li>
          <li>Next generation multiscale modeling</li>
          <li>Fast solvers for large scale / high-dimensional problems</li>
          <li>Efficient material design and quantum chemistry computations</li>
        </ul>
        <p>
          The Center is actively involved in collaboration with other Skoltech
          CREIs to provide expertise on data-intensive computational tasks.
        </p>
        <h5
          style={{
            textDecoration: "underline",
            margin: "30px 0 20px",
            fontWeight: "bold"
          }}
        >
          Vacancies
        </h5>
        <p>
          Currently we invite applications for the following faculty positions:
        </p>
        <ul>
          <li>
            <a href="https://join.skoltech.ru/vacancy-faculty/associate-professor-in-computer-vision/">
              Associate Professor in Computer Vision
            </a>
          </li>
          <li>
            <a href="https://join.skoltech.ru/vacancy-faculty/assistant-professor-in-data-driven-simulations/">
              Associate Professor in Advanced Computing
            </a>
          </li>
          <li>
            <a href="https://join.skoltech.ru/vacancy-faculty/assistant-professor-in-reinforcement-learning/">
              Assistant Professor in Reinforcement Learning
            </a>
          </li>
          <li>
            <a href="https://join.skoltech.ru/vacancy-faculty/assistant-professor-in-data-driven-simulations-2/">
              Assistant Professor in Data-Driven Simulations
            </a>
          </li>
          <li>
            <a href="https://join.skoltech.ru/vacancy-faculty/assistant-professor-in-inverse-problems-and-their-applications/">
              Assistant Professor in Inverse Problems and their applications
            </a>
          </li>
        </ul>
        <p>
          We also have a number of other vacancies in the fields of Mathematics,
          Statistics, and Machine learning. For more details, please refer to
          the{" "}
          <a
            href="https://crei.skoltech.ru/cdise/vacancies/"
            style={{ fontStyle: "italic" }}
          >
            Vacancies
          </a>{" "}
          page.
        </p>
        <h5
          style={{
            textDecoration: "underline",
            margin: "30px 0 20px",
            fontWeight: "bold"
          }}
        >
          Research group
        </h5>
        <ul>
          <li>
            <a href="http://adase.group/">
              Advanced Data Analytics in Science and Engineering
            </a>{" "}
            , Prof. Evgeny Burnaev
          </li>
          <li>
            <a href="http://crei.skoltech.ru/cdise/aeronet-lab/">AeroNet Lab</a>
          </li>
          <li>
            <a href="http://sites.skoltech.ru/inftheory/">
              Applied Information Theory Group
            </a>
          </li>
          <li>
            Computational Imaging,{" "}
            <a href="http://faculty.skoltech.ru/people/stamatioslefkimmiatis">
              Prof. Stamatios Lefkimmiatis
            </a>
          </li>
          <li>
            <a href="http://faculty.skoltech.ru/people/stamatioslefkimmiatis">
              Computational Molecular Science
            </a>
            , Prof. Maxim Fedorov
          </li>
          <li>
            <a href="http://sites.skoltech.ru/compvision/">Computer Vision</a>,
            Prof. Victor Lempitsky
          </li>

          <li>
            <a href="http://crei.skoltech.ru/cdise/phd_positions/iot-lab-positions/">
              Internet Of Things Lab
            </a>
            , Prof. Dmitry Lakontsev
          </li>
          <li>
            <a href="https://deeptensor.github.io/index.html">
              Laboratory “Tensor networks and deep learning for application in
              data mining”
            </a>
            , Prof. Andrzej Cichocki
          </li>
          <li>
            <a href="https://sites.skoltech.ru/mobilerobotics/">
              Mobile Robotics Lab
            </a>
            ,{" "}
            <a href="http://faculty.skoltech.ru/people/gonzaloferrer">
              Prof. Gonzalo Ferrer
            </a>
          </li>
          <li>
            <a href="http://oseledets.github.io/">Scientific Computing</a>,
            Prof. Ivan Oseledets
          </li>
          <li>
            <a href="http://strlearn.ru/">Structural Learning Group</a>, Prof.
            Vladimir Spokoiny
          </li>
        </ul>
        <p style={{ padding: "20px 0" }}>
          You can find out more about{" "}
          <a href="http://crei.skoltech.ru/cdise/research/">research groups.</a>
        </p>
      </div>
    );
  }
}
