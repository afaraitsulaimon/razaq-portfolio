import React, { useState } from "react";
import {
  Container,
  TopThreeProjectsHolder,
  OtherNotableProjectHolder,
  FirstProjectHolder,
  SecondProjectHolder,
  ThirdProjectHolder,
  
} from "../assets/styles/ProjectBuiltStyles";

import Project1Image from "../assets/images/project1.webp";
import Project2Image from "../assets/images/project2.webp";
import Project3Image from "../assets/images/project3.webp";
import { FiGithub, FiFolder} from "react-icons/fi";
import { BsBoxArrowUpRight } from "react-icons/bs";
import {listOfOtherProjects} from "../component/OtherProjectData"

const ProjectBuilt = () => {

  //state for showing all the projects
  const [showAll, setShowAll] = useState(false);

  // function to show more or show less
  const handleShowAll = () => {
    setShowAll(!showAll);
  };


  return (
    <Container>
      <TopThreeProjectsHolder>
        <FirstProjectHolder>
    
         <div className="project-image">
            <img src={Project1Image} alt="project1" />
          </div>

          <div className="projectDetails">

            <div className="top">
              <span>Featured Project</span>
              <p>Lcyon Theme</p>
            </div>

            <div className="projectDescription">
              <p className="firstcontent">
                A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                iTerm, and more. Available on{" "}
                <span style={{ color: "#00FF75" }}>Visual Studio</span> and{" "}
                <span style={{ color: "#00FF75" }}>Marketplace</span>
              </p>
              <p className="secondcontent">
                Package Control, Atom Package Manager, npm, Visual Studio
                Marketplace
              </p>
            </div>

            <div className="toolsUsed">
              <ul>
                <li>VS Code</li>
                <li>Sublime Text</li>
                <li>Atom</li>
                <li>iTerm2</li>
                <li>Hyper</li>
              </ul>
            </div>

            <div className="socialUsed">
              <span>
                <FiGithub size="13px" color="#ffffff" />
              </span>
              <span>
                <BsBoxArrowUpRight
                  size="13px"
                  color="#ffffff"
                  style={{ marginLeft: "10px" }}
                />
              </span>
        
            </div>

          </div> 
        </FirstProjectHolder>

        {/* second project starts here */}
        <SecondProjectHolder>

        
          <div className="projectDetails">
            <div className="top">
              <span>Featured Project</span>
              <p>Hotspotify Profile</p>
            </div>

            <div className="projectDescription">
              <p className="content">
                a website application for displaying user statistics. View your
                favorite musicians, top songs, recently played songs, and
                specific audio details for each track. Make and create fresh
                playlists of tunes that are suggested based on your current
                playlists and more.
              </p>
            </div>

            <div className="toolsUsed">
              <ul>
                <li>React</li>
                <li>Styled Components</li>
                <li>Express</li>
                <li>Spotify API</li>
                <li>Heroku</li>
              </ul>
            </div>

            <div className="socialUsed">
              <span>
                <FiGithub size="13px" color="#ffffff" />
              </span>
              <span>
                <BsBoxArrowUpRight
                  size="13px"
                  color="#ffffff"
                  style={{ marginLeft: "10px" }}
                />
              </span>
            </div>
          </div>

          <div className="project-image">
            <img src={Project2Image} alt="project2" />
          </div>
       
         </SecondProjectHolder>
        {/* second project ends here */}

        {/* third project start from here */}
         <ThirdProjectHolder>
          <div className="project-image">
            <img src={Project3Image} alt="project1" />
          </div>

          <div className="projectDetails">
            <div className="top">
              <span>Featured Project</span>
              <p>Build a Potify Connected App</p>
            </div>

            <div className="projectDescription">
              <p className="firstcontent">
                I created the course I wish I could have taken after having
                trouble comprehending the Potify OAUTH procedure.
              </p>
              <p className="secondcontent">
                This course covers everything from outlining the fundamentals of
                REST APIs to implementing Potify's OAUTH flow and obtaining API
                data in a React app, in contrast to tutorials that just cover a
                few ideas and leave you with half-baked GitHub repositories.
                You'll have an app online by the conclusion of the course that
                you can add to your portfolio.
              </p>
            </div>

            <div className="toolsUsed">
              <ul>
                <li>React</li>
                <li>Express</li>
                <li>Spotify API</li>
                <li>Styled Components</li>
              </ul>
            </div>

            <div className="learnMoreButton">
              <button>Learn More</button>
            </div>
          </div>
        </ThirdProjectHolder>
        {/* third project ends here */}
       </TopThreeProjectsHolder> 

     <OtherNotableProjectHolder>

        <div className="header">
            <span className="otherProjects">Other Notable Projects</span>
            <span className="explore">explore the archives</span>
        </div>

        <div className="otherProjectDisplayHolder">
            {!showAll ? 
            listOfOtherProjects.slice(0, 6).map((listOfOtherProject) => (
              <div key={listOfOtherProject.id} className='card'>
              
                  <div className="topIcons">
                      <div className="folderIcon">
                      <FiFolder size="30px" color="#00FF75"/>
                      </div>
                      <div className="rightIcons">
                          {listOfOtherProject.projectSocials.map((icon, index) => (
                              <div className="icon" key={index}>{icon}</div>
                          ))}
                      </div>
                  </div>
                  <div className="title">
                      <span>{listOfOtherProject.projectheader}</span>
                  </div>
                  <div className="details">
                          <p>{listOfOtherProject.projectContent}</p>
                  </div>

                  <div className="theToolsUsed">
                      {listOfOtherProject.projectTools.map((tool, index) => (
                          <span key={index}>{tool}</span>
                      ))}
                  </div>

              </div>
          )) : 
          listOfOtherProjects.slice(0, listOfOtherProjects.length).map((listOfOtherProject) => (
            <div key={listOfOtherProject.id} className='card'>
            
                <div className="topIcons">
                    <div className="folderIcon">
                    <FiFolder size="30px" color="#00FF75"/>
                    </div>
                    <div className="rightIcons">
                        {listOfOtherProject.projectSocials.map((icon, index) => (
                            <div className="icon" key={index}>{icon}</div>
                        ))}
                    </div>
                </div>
                <div className="title">
                    <span>{listOfOtherProject.projectheader}</span>
                </div>
                <div className="details">
                        <p>{listOfOtherProject.projectContent}</p>
                </div>

                <div className="theToolsUsed">
                    {listOfOtherProject.projectTools.map((tool, index) => (
                        <span key={index}>{tool}</span>
                    ))}
                </div>

            </div>
        ))
            }

        </div>

        <div className="showMoreAndLessBut">
            <button onClick={handleShowAll}>{showAll ? 'Show Less' : 'Show More'}</button>
        </div>
      </OtherNotableProjectHolder> 

    </Container>
  );
};

export default ProjectBuilt;
