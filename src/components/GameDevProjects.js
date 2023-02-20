import React from "react";
import "./GameDevProjects.css";
import { useEffect, useState } from "react";
import AnimatedLetters from "./Animated";
import merge0 from "../../src/merge0.jpg";
import merge1 from "../../src/merge1.jpg";
import merge2 from "../../src/merge2.jpg";
import merge3 from "../../src/merge3.jpg";
import merge6 from "../../src/merge6.jpg";
import merge5 from "../../src/merge5.jpg";
import merge7 from "../../src/merge7.jpg";
import merge8 from "../../src/merge8.jpg";
import merge9 from "../../src/merge9.jpg";
//  import KeyboardDoubleArrowDownIcon from "../../node_modules/@material-ui/icons/KeyboardArrowDownOutlined";
const GameDevProjects = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <div className="GameDevProjectsCont ">
      <div className="wrapper_GameDevProjects ">
        <div className="heading_GameDevProjects ">
          <h1 style={{ color: "#05e2ff", fontFamily: "-moz-initial" }}>
            <AnimatedLetters
              letterclassName={letterClass}
              strArray={[
                "G",
                "A",
                "M",
                "E",
                " ",
                "D",
                "E",
                "V",
                " ",
                "P",
                "R",
                "O",
                "J",
                "E",
                "C",
                "T",
                "S",
              ]}
              idx={18}
              style={{ fontSize: "5rem" }}
            />
          </h1>
        </div>
        <div className="projects_card">
          <div className="row">
            <div className="game_card col-12 col-sm-4 col-md-4 col-lg-4 d-flex flex-column justify-content-between">
              <div className="card glass" style={{ width: "16rem" }}>
              <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={merge1} className="d-block w-100" alt="..." style={{height:"25rem"}}/>
    </div>
    <div className="carousel-item">
      <img src={merge2} className="d-block w-100" alt="..."style={{height:"25rem"}}/>
    </div>
    <div className="carousel-item">
      <img src={merge0} className="d-block w-100" alt="..."style={{height:"25rem"}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
                {/* <img src={gameimg} className="card-img-top" alt="..."></img> */}
                <div className="card-body">
                   <h5 style={{ color: "#05e2ff", fontFamily: "-moz-initial" }}>
            <AnimatedLetters
              letterclassName={letterClass}
              strArray={[
                "M",
                "E",
                "R",
                "G",
                "E",
                " ",
                "N",
                "U",
                "M",
                "B",
                "E",
                "R",
                "S",
                
              ]}
              idx={13}
              style={{ fontSize: "5rem" }}
            />
          </h5>
                  <p className="card-text">
                  Merging Number is a simple and addictive puzzle game that challenges players to merge numbers on a grid to reach a high score. 
                  </p>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse "
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        The game is played on a 4x4 grid, with each block
                        containing a number that is a power of 2, starting from
                        2. To play the game, the player swipes the blocks in any
                        direction, causing them to slide in that direction until
                        they hit a wall or another block. When two blocks of the
                        same number collide, they merge into a single block that
                        has the sum of their values. For example, if two 2
                        blocks collide, they merge into a single 4 block.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="buttoncont ">
                <a href="https://drive.google.com/file/d/1ufH3_5MwI306pE5gQ-gBNHlAzWJv4SYm/view" className="contact-button download">
                <div>
                    <span className="bg"></span>
                    <span className="base"></span>
                    <span className="text">
                        Download
                    </span>
                </div>
            </a>
                  <button
                    className="accordion-button collapsed readmorebtn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  ></button>
                </div>
              </div>
            </div> 
             {/* <div className="game_card col-6 col-sm-6 col-md-4 col-lg-3 d-flex flex-column justify-content-between">
              <div className="card" style={{ width: "18rem" }}>
                <img src={gameimg} className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">Merge Numbers</h5>
                  <p className="card-text">
                  Merging Number is a simple and addictive puzzle game that challenges players to merge numbers on a grid to reach a high score. 
                  </p>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse "
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        The game is played on a 4x4 grid, with each block
                        containing a number that is a power of 2, starting from
                        2. To play the game, the player swipes the blocks in any
                        direction, causing them to slide in that direction until
                        they hit a wall or another block. When two blocks of the
                        same number collide, they merge into a single block that
                        has the sum of their values. For example, if two 2
                        blocks collide, they merge into a single 4 block.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="buttoncont d-flex ">
                    <button className="btn download">Download</button>
                  <button
                    className="accordion-button collapsed readmorebtn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  ></button>
                </div>
              </div>
            </div>  */}
            
            
            
             <div className="game_card col-12 col-sm-4 col-md-4 col-lg-4 d-flex flex-column justify-content-between">
              <div className="card glass" style={{ width: "16rem" }}>
              <div id="carouselExampleAutoplaying1" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={merge3} className="d-block w-100" alt="..." style={{height:"25rem"}}/>
    </div>
    <div className="carousel-item">
      <img src={merge5} className="d-block w-100" alt="..." style={{height:"25rem"}}/>
    </div>
    <div className="carousel-item">
      <img src={merge6} className="d-block w-100" alt="..." style={{height:"25rem"}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying1" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying1" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
                <div className="card-body">
                <h5 style={{ color: "#05e2ff", fontFamily: "-moz-initial" }}>
            <AnimatedLetters
              letterclassName={letterClass}
              strArray={[
                "C",
                "O",
                "L",
                "O",
                "R",
                " ",
                "H",
                "O",
                "L",
                "E",
                " ",
                "3",
                "D",
                
              ]}
              idx={13}
              style={{ fontSize: "5rem" }}
            />
          </h5>
                  <p className="card-text">
                  Color Hole 3D is an addictive puzzle game that challenges players to navigate a hole through a series of increasingly difficult levels. 
                  </p>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse "
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                       Player have to control the hole and absorbed the objects expect the red objects.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="buttoncont ">
                <a href="https://drive.google.com/file/d/1vFqmjLr3yjeF4NX9wn0_97T4nfQYu7h8/view" className="contact-button download">
                <div>
                    <span className="bg"></span>
                    <span className="base"></span>
                    <span className="text">
                        Download
                    </span>
                </div>
            </a>
                  <button
                    className="accordion-button collapsed readmorebtn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  ></button>
                </div>
              </div>
            </div> 
            
            
             <div className="game_card col-12 col-sm-4 col-md-4 col-lg-4 d-flex flex-column justify-content-between">
              <div className="card glass" style={{ width: "16rem" }}>
              <div id="carouselExampleAutoplaying2" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={merge7} className="d-block w-100" alt="..." style={{height:"25rem"}}/>
    </div>
    <div className="carousel-item">
      <img src={merge8} className="d-block w-100" alt="..." style={{height:"25rem"}}/>
    </div>
    <div className="carousel-item">
      <img src={merge9} className="d-block w-100" alt="..." style={{height:"25rem"}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
                <div className="card-body">
                <h5 style={{ color: "#05e2ff", fontFamily: "-moz-initial" }}>
            <AnimatedLetters
              letterclassName={letterClass}
              strArray={[
                "2",
                "0",
                "4",
                "8",
                
              ]}
              idx={13}
              style={{ fontSize: "5rem" }}
            />
          </h5>
                  <p className="card-text">
                  2048 is a popular puzzle game that challenges players to merge numbered tiles on a grid to reach a tile with the value of 2048 and many more.
                  </p>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse "
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        The game is played on a 4x4 grid, with each block
                        containing a number that is a power of 2, starting from
                        2. To play the game, the player swipes the blocks in any
                        direction, causing them to slide in that direction until
                        they hit a wall or another block. When two blocks of the
                        same number collide, they merge into a single block that
                        has the sum of their values. For example, if two 2
                        blocks collide, they merge into a single 4 block.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="buttoncont">
                <a href="https://drive.google.com/file/d/1uZl8Xl3__oGl3wwh9KKHFjWvfqPTVnO3/view" className="contact-button download">
                <div>
                    <span className="bg"></span>
                    <span className="base"></span>
                    <span className="text">
                        Download
                    </span>
                </div>
            </a>
                  <button
                    className="accordion-button collapsed readmorebtn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  ></button>
                </div>
              </div>
            </div> 
            
            
            
            {/* <div className="game_card col-12 col-sm-4 col-md-4 col-lg-3 d-flex flex-column justify-content-between">
              <div className="card glass" style={{ width: "16rem" }}>
              <div id="carouselExampleAutoplaying3" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={gameimg} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={gameimg} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={gameimg} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying3" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying3" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
                <div className="card-body">
                <h5 style={{ color: "#05e2ff", fontFamily: "-moz-initial" }}>
            <AnimatedLetters
              letterclassName={letterClass}
              strArray={[
                "B",
                "A",
                "L",
                "L",
                " ",
                "B",
                "L",
                "A",
                "S",
                "T",
                
              ]}
              idx={13}
              style={{ fontSize: "5rem" }}
            />
          </h5>
                  <p className="card-text">
                  Ball Blast is an exciting and fast-paced arcade game that challenges players to shoot and destroy as many colored balls as possible.
                  </p>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse "
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                      To play the game, players must use the cannon to shoot colored balls as they appear on the screen. Each ball has a number on it, indicating the number of times it must be shot before it is destroyed. As players destroy balls, they earn points and coins that can be used to upgrade their cannon and purchase power-ups. 
                      </p>
                    </div>
                  </div>
                </div>

                <div className="buttoncont ">
                <a href="/" className="contact-button download">
                <div>
                    <span className="bg"></span>
                    <span className="base"></span>
                    <span className="text">
                        Download
                    </span>
                </div>
            </a>
                  <button
                    className="accordion-button collapsed readmorebtn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  ></button>
                </div>
              </div>
            </div> */}

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDevProjects;
