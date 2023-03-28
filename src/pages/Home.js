import React, { useState } from "react";
import Navbar from "../component/Navbar";
import {
  Container,
  IntroContentHolder,
  SocialMediaHolder,
  EmailHolder,
  LineSocial,
  LineEmail,
  AboutMeAndImageHolder,
  InnerAboutAndImageHolder,
  TechnologyListHolder,
  WorkExpHolder,
  InnerWorkExpHolder,
  ExperienceContentHolder,
  ProjectBuiltHolder,
  InnerProjectBuiltHolder,FooterContentHolder
} from "../assets/styles/HomeStyles";
import Slider from "../component/Slider";

import { FiGithub, FiTwitter } from "react-icons/fi";
import { FaInstagram, FaCodepen } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import {BiRightArrow} from 'react-icons/bi'
import UserImage from '../assets/images/user-image.jpg';
import {workExpDetails} from '../component/WorkExperienceData'
import ProjectBuilt from "../component/ProjectBuilt";

import 'animate.css';

// import Project1 from '../assets/images/project1.webp'

const Home = () => {

const [activeButton, setActiveButton] = useState(workExpDetails[0]);

// const [activeContent, setActiveContent] = useState();


  return (
    <Container>
      <div>
        <Navbar />
      </div>

      {/* responsive menu slider starts from here */}
      <div>
        <Slider />
      </div>
      {/* responsive menu slider ends here */}

      {/* content of the home start */}

        <IntroContentHolder>
        <div className="theContent">
          <div className="animate__animated animate__animated animate__fadeInDown">
            <span className="greetings">Hello, my name is</span>
          </div>
          <div className="ownersName">
            <h1 className="animate__animated animate__fadeInLeft">Sanusi Razaq</h1>
          </div>
          <div className="jobFunctionHolder animate__animated animate__fadeInRight" >
            <span className="jobFunction ">I build web applications.</span>
          </div>
          <div className="jobDescriptionHolder">
            <p className="jobDescription animate__animated animate__fadeInDown">
              I work as a software developer with a focus on creating amazing
             
              digital experiences. At{" "}
              <span style={{ color: "#00FF75" }}>Upstate Hub</span>, I'm
              concentrating on creating
         
              products that are human-centered and accessible.
            </p>
          </div>
        </div>
      </IntroContentHolder> 

      <SocialMediaHolder>
        <div className="innerSocialHolder">

        
        <div>
          <FiGithub color="#907897" />
        </div>

        <div>
          <FaInstagram color="#907897" />
        </div>

        <div>
          <FiTwitter color="#907897" />
        </div>

        <div>
          <SlSocialLinkedin color="#907897" />
        </div>

        <div>
          <FaCodepen color="#907897" />
        </div>

        <LineSocial></LineSocial>
        </div>
      </SocialMediaHolder> 

      <EmailHolder>
        <div className="emailAddress">
          <p>Adedunni155@gmail.com</p>
        </div>
        <LineEmail></LineEmail>
      </EmailHolder> 

       <AboutMeAndImageHolder id="abt">
        <InnerAboutAndImageHolder>
          <div className="aboutHeader">
            <div className="numberAndName">
              <span className="aboutNumber">01. </span>
              <span className="about">About Me</span>
            </div>
            <span className="aboutLine"></span>
          </div>

          <div className="aboutContentImageHolder animate__animated animate__zoomInDown">
            <div className="aboutContent">
            <p>
              Hello! My name is Sanusi and I enjoy creating things that live on
              the internet. When I decided to attempt customizing unique Tumblr
              themes back in 2012, I first became interested in web development.
              As it turns out, creating a unique reblog button taught me a lot
              about HTML & CSS.
            </p>
            <p className="secondContent">
              Fast-forward to today, and I’ve had the privilege of working at an
              advertising agency, <span> a start-up</span>, <span>a huge corporation</span>, <span>and</span> a
              <span> student-led design studio</span>. My main focus these days is building
              accessible, inclusive products and digital experiences at 
              <span> Upstatement</span> for a variety of clients. I also recently launched a
              course that covers everything you need to build a web app with the
              Spotify API using Node & React.
            </p>
            </div>
            
            <div className="aboutImage">
                <img src={UserImage} alt="about-img" />
            </div>
          </div>
        </InnerAboutAndImageHolder>
      </AboutMeAndImageHolder> 
 
      <TechnologyListHolder>

          <div className="listHolder">
                    <span>Here are a few technologies I’ve been working with recently:</span>

      <div className="programmingList">
              <div className="leftList">
                <div><BiRightArrow size='8px' color='#00FF75' /><span> JavaScript (ES6+)</span></div>
                <div><BiRightArrow size='8px' color='#00FF75'/> <span> React</span></div>
                <div><BiRightArrow size='8px' color='#00FF75'/> <span> Node.js</span></div>
              </div>

              <div className="rightList">
                <div><BiRightArrow size='8px' color='#00FF75'/> <span> TypeScript</span></div>
                <div><BiRightArrow size='8px' color='#00FF75'/> <span> Eleventy</span></div>
                <div><BiRightArrow size='8px' color='#00FF75'/> <span> WordPress</span></div>
              </div>
                    </div>

          </div>
        
      </TechnologyListHolder> 

   <WorkExpHolder id="exp">
        <InnerWorkExpHolder>
        <div className="workExpHeader">
            <div className="numberAndName">
              <span className="workExpNumber">02. </span>
              <span className="experience">Work Experience</span>
            </div>
            <span className="workExpLine"></span>
          </div>

          <ExperienceContentHolder>
            <div className="expListButtons">
              {workExpDetails.map((workExpDetail) => (

                  <button key={workExpDetail.id} onClick={() => setActiveButton(workExpDetail)} className={activeButton === workExpDetail && 'active'}>{workExpDetail.org}</button>

              ) )}
            </div>
            <div className="expListContents">
              <div className="post">
                <span className="position">{activeButton.position}</span>
              <span className="orgName">@{activeButton.org}</span>
              </div>
              <div className="year"><span>{activeButton.year}</span></div>
              <div>{activeButton.jobFunctions.map((jobFunction) => (
                <div className="description"><BiRightArrow size='8px' color='#00FF75'/> <span> {jobFunction}</span></div>
              ))}</div>
               
            </div>
          </ExperienceContentHolder>
        </InnerWorkExpHolder>

      </WorkExpHolder>  

    <ProjectBuiltHolder id="work">
        <InnerProjectBuiltHolder>
        <div className="projectBuiltHeader">
            <div className="numberAndName">
              <span className="projectBuiltNumber">03. </span>
              <span className="project">Things I’ve built</span>
            </div>
            <span className="projectBuiltLine"></span>
          </div>


          <div style={{ width:'100%'}}>
      <ProjectBuilt/> 

          </div>
        </InnerProjectBuiltHolder>
      


      </ProjectBuiltHolder>   

{/* footer content starts here */}



   <FooterContentHolder>
       <div className="comesNext">
          <span>What Comes Next?</span>
        </div> 
      <div className="inTouch">
          <span>Get In Touch</span>
        </div> 
        <div className="message">
          <p>
            My mailbox is always open, even though 
            I'm not seeking for any new possibilities right now.
             I will do my best to get back to you whether you
             have a question or are just looking to say hello!
             </p>
        </div> 
      <div className="sayHello" id="contact">
      <button onClick={() => window.location = 'mailto:Adedunni155@gmail.com'}> Send Mail</button>
        </div> 

      </FooterContentHolder> 
      {/* footer content end here */}
      {/* content of the home start */}
    </Container>
  );
};

export default Home;
