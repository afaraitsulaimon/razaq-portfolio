import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #260c2c;
`;
export const IntroContentHolder = styled.div`
  width: 100%;
  height: 50vh;
  /* background-color: yellow; */
  margin-top: 2em;

  .theContent {
    width: 50%;
    height: 100%;
    /* background-color: pink; */
    margin-left: 10em;
  }

  .theContent .greetings {
    font-family: 'Fira Code', monospace;
    font-style: normal;
    font-weight: 300;
    font-size: 23px;
    line-height: 16px;

    color: #00ff75;
  }

  .theContent .ownersName {
    margin-top: -0.7em;
    margin-bottom: -2.3em;
    font-family: 'Inter', sans-serif;
  }

  .theContent .ownersName h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 40px;
    line-height: 88px;
    color: #ffffff;
  }

  .theContent .jobFunctionHolder .jobFunction {
    margin-top: -1em;
    font-family: 'Inter', sans-serif;
  }

  .theContent .jobFunction {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 50px;
    line-height: 72px;
    color: #aa89b2;
  }

  .theContent .jobDescriptionHolder {
    margin-top: 20px;
  }

  .theContent .jobDescriptionHolder .jobDescription {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    /* or 167% */

    color: #ffffff;
  }

  @media (max-width: 912px) and (min-width: 360px) {
    .theContent {
      width: 100%;
      height: 70%;
      /* background-color: pink;  */
      margin-left: 0;
      padding-left: 2em;
    }

    .theContent .greetings {
      font-size: 12px;
    }

    .theContent .ownersName h1 {
      font-weight: 300;
      font-size: 20px;
    }

    .theContent .jobFunction {
      font-size: 25px;
      line-height: 36px;
    }

    .theContent .jobDescriptionHolder {
      margin-top: 10px;
    }

    .theContent .jobDescriptionHolder .jobDescription {
      font-weight: 300;
      font-size: 13px;
    }
  }
`;

export const SocialMediaHolder = styled.div`
  height: 400px;
  width: 113px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  top: 10em;
  @media (max-width: 912px) and (min-width: 360px) {
    display: flex;
    flex-direction: row;
    /* background-color: red; */
    width: 70%;
    height: 30px;
    position: absolute;
    top: 345em;
     left: 4.5em; 
   

    
  }
`;

export const LineSocial = styled.span`
  width: 1px;
  height: 5.6em;
  background-color: #907897;

  @media (max-width: 912px) and (min-width: 360px) {
    display: none;
  }
`;

export const EmailHolder = styled.div`
  height: 400px;
  width: 113px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  top: 10em;
  left: 72.9em;

  .emailAddress p {
    transform: rotate(90deg);
    color: #907897;
    font-family: 'Fira Code', monospace;
  }

  @media (max-width: 912px) and (min-width: 360px) {
    display: none;
  }
`;

export const LineEmail = styled.div`
  width: 1px;
  height: 5.6em;
  background-color: #907897;
`;

export const AboutMeAndImageHolder = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  margin-top: 7em;
  margin-bottom: 5em;
  @media (max-width: 912px) and (min-width: 360px) {
    /* background-color: pink; */
    margin-top: -5em;
  }
`;

export const InnerAboutAndImageHolder = styled.div`
  width: 60%;
  height: 100%;

  .aboutHeader {
    display: flex;
    /* background-color: brown; */
    align-items: center;
  }

  .aboutHeader .numberAndName .aboutNumber {
    font-family: 'Fira Code', monospace;
    font-style: normal;
    font-weight: 500;
    font-size: 23px;
    line-height: 20px;
    color: #00ff75;
  }

  .aboutHeader .numberAndName .about {
    font-family: 'Fira Code', monospace;
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 22px;
    color: #00ff75;
    padding-left: 7px;
  }

  .aboutHeader .aboutLine {
    width: 261px;
    height: 1px;
    background-color: #233554;
    margin-left: 1em;
  }

  .aboutContentImageHolder {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }

  .aboutContentImageHolder .aboutContent {
    width: 450px;
    color: white;
    font-family: 'Inter', sans-serif;
  }

  .aboutContentImageHolder .aboutContent .secondContent span {
    color: #00ff75;
  }

  .aboutContentImageHolder .aboutImage img {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 912px) and (min-width: 360px) {
    width: 100%;

    .aboutHeader {
      display: flex;
      justify-content: center;
    }

    .aboutHeader .numberAndName .aboutNumber {
    
    font-size: 20px;
    
  
  }

  .aboutHeader .numberAndName .about {
 
    font-size: 20px;
   
    padding-left: 3px;
  }

    .aboutContentImageHolder {
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .aboutContentImageHolder .aboutContent {
      width: 100%;
      padding: 2em;
      font-size: 12px;
    }

    .aboutContentImageHolder .aboutImage {
      display: flex;
      justify-self: center;
      align-self: center;
      position: absolute;
      top: 31em;
    }

    .aboutContentImageHolder .aboutImage img {
      width: 300px;
      height: 300px;
    
    }
    .aboutHeader .aboutLine {
    width: 240px;
   
  }

  }
`;

export const TechnologyListHolder = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;

 

  .listHolder {
    min-width: 40%;
    height: 100%;
  }

 

  .listHolder span {
    font-size: 16px;
    color: #00ff75;
    font-family: 'Fira Code', monospace;
  }

  .listHolder .programmingList {
    display: flex;
  }

  .listHolder .programmingList .leftList {
    padding: 1.2em 0 1.2em 0;
  }

  .listHolder .programmingList .leftList span {
    font-family: 'Fira Code', monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 12px;
    color: white;
    padding-left: 0.2em;
    letter-spacing: 0.1em;
  }

  .listHolder .programmingList .rightList {
    padding: 1.2em 0 1.2em 0;
    margin-left: 25px;
  }

  .listHolder .programmingList .rightList span {
    font-family: 'Fira Code', monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 12px;
    color: white;
    padding-left: 0.2em;
    letter-spacing: 0.1em;
  }


  @media (max-width: 912px) and (min-width: 360px) {
    height: 20vh;
    margin-top: -5em;
    .listHolder {
    margin-top: -4em;
  }

  .listHolder span {
    font-size: 10px;
    
  }

  .listHolder .programmingList .leftList span {
    
    font-size: 13px;
    
  }

  .listHolder .programmingList .rightList span{
    font-size: 13px;

  }
  }
`;

export const WorkExpHolder = styled.div`
  width: 100%;
  min-height: 327px;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 50px;


`;


export const InnerWorkExpHolder = styled.div`
  width: 700px;
  height: 100%;
  /* background-color: yellow; */


  .workExpHeader {
    display: flex;
    align-items: center;
  }

  .workExpHeader .numberAndName {
    font-family: 'Fira Code', monospace;
    font-style: normal;
    font-size: 30px;
    line-height: 22px;
    font-weight: 700;

  }


  .workExpHeader .numberAndName .workExpNumber {
    color: white;
   
  }

  .workExpHeader .numberAndName .experience {
    color: #00ff75;
 
  }
  .workExpHeader .workExpLine {
    width: 261px;
    height: 1px;
    background-color: #233554;
    margin-left: 1em;
  }

  @media (max-width: 912px) and (min-width: 360px) {
  width: 100%;
  height: 100%;
  /* background-color: blue; */
  margin-top: 21em;

  .workExpHeader {
    display: flex;
    justify-content: space-around;
   
  }

  .workExpHeader .numberAndName {
    font-weight: 500;
   font-size: 16px;
 
 }

 .workExpHeader .workExpLine {
    width: 200px;
    height: 1px;
    margin-left: 0;
    /* background-color: #233554;
    margin-left: 0.3em; */
  }

  .workExpHeader .numberAndName .workExpNumber {
    color: white;
    font-size: 17px;
  }

  .workExpHeader .numberAndName .experience {
    color: #00ff75;
    font-size: 17px;
  }
}
`;

export const ExperienceContentHolder = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: blue; */
  margin-top: 40px;
  display: flex;

 
  .expListButtons {
    width: 30%;
    height: 70vh;
    display: flex;
    flex-direction: column;
  }


  .expListButtons button {
    padding: 0.8em 1.5em 0.8em 1.5em;
    border: none;
    border-left: 2px solid #233554;
    background-color: transparent;
    color: #ffffff;
    font-family: 'Fira Code', monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
  }

  .expListButtons button:hover {
    background-color: rgb(168, 178, 209, 0.3);
    color: #00ff75;
  }
  .expListButtons .active {
    border-left: 3px solid #00ff75;
    transition: 1s ease-out;
    background-color: rgb(168, 178, 209, 0.3);
    color: #00ff75;
  }


  .expListContents {
    margin-left: 2em;
    font-family: 'Inter', sans-serif;
  }

  .expListContents .post .position {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 29px;
    /* identical to box height, or 159% */

    color: #ccd6f6;
  }

  .expListContents .post .orgName {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 29px;
    /* identical to box height, or 159% */
    color: #00ff75;
  }

  .expListContents .year span {
    font-family: "Fira Code";
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 16px;
    /* or 130% */
    color: #a8b2d1;
  }

  .expListContents .year {
    margin-bottom: 1em;
    margin-top: -0.7em;
  }

  .expListContents .description {
    padding-bottom: 1.5em;
  }

  .expListContents .description span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 200;
    font-size: 15px;
    line-height: 23px;
    /* or 130% */
    color: #ffffff;
  }

    /* responsive styling */
    @media (max-width: 912px) and (min-width: 360px) {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    .expListButtons {
  width: 100%;
    display: flex;
    flex-direction: row;
    height: 5vh;
    overflow: scroll;
    margin-bottom: 10px;
      /* to remove the scrollbar line for IE, Edge and firefox */

    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  /* to remove the scrollbar line for chrome safari and opera */
  .expListButtons::-webkit-scrollbar {
    display: none;
  }

  .expListButtons button {
    border-left:none;
    border-bottom:none;
    padding: 1em 1.7em 1em 1.7em;
    font-size: 1em;
  }


  .expListButtons .active {
    border-bottom: 3px solid #00ff75;
    transition: 1s ease-out;
    background-color: rgb(168, 178, 209, 0.3);
    border-left: none;
    
  }
  }
`;

export const ProjectBuiltHolder = styled.div`
  min-width: 100%;
  min-height: 50vh;
  /* background-color: lemonchiffon; */
  display: flex;
  justify-content: center;
`;

export const InnerProjectBuiltHolder = styled.div`
  width: 80%;
  height: 100%;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;

 

  .projectBuiltHeader {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }

  .projectBuiltHeader .numberAndName {
    font-family: 'Fira Code', monospace;
    font-style: normal;
    font-size: 30px;
    line-height: 20px;
    font-weight: 600;
  }


 

  .projectBuiltHeader .numberAndName .projectBuiltNumber {
    color: white;
  }

  .projectBuiltHeader .numberAndName .project {
    color: #00ff75;
  }
  .projectBuiltHeader .projectBuiltLine {
    width: 261px;
    height: 1px;
    background-color: #233554;
    margin-left: 1em;
  }

      /* responsive styling */


  @media (max-width: 912px) and (min-width: 360px) {
    width: 100%;
    /* background-color: brown; */

    .projectBuiltHeader {
      width: 100%;
     display: flex;
    justify-content: space-around; 
    margin-bottom: 10px;
  }


    .projectBuiltHeader .numberAndName {
   
    font-size: 15px;
    font-weight: 500;

    
  }
  .projectBuiltHeader .projectBuiltLine {
  width: 240px;
      /* height: 1px;
    background-color: #233554; */
    
  }
  }
`;

export const FooterContentHolder = styled.div`
  width: 100%;
  /* background-color: green yellowgreen; */
  display: flex;
  flex-direction: column;
  align-items: center;

  .comesNext {
    margin-bottom: 10px;
  }

  .comesNext span {
    font-family: 'Fira Code', monospace;
font-style: normal; 
    font-weight: 600;
    font-size: 17px;
    line-height: 14px;
    /* identical to box height, or 64% */

    color: #00ff75;
  }

  .inTouch span {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 66px;
    /* identical to box height, or 132% */
    color: #ffffff;
  }

  .message {
    width: 375px;
    height: 104px;
    /* background-color: green; */
    text-align: center;
    margin-top: -13px;
  }

  .message p {
    font-family: 'Inter', sans-serif;
font-style: normal; 
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    /* or 130% */

    color: #8892b0;
  }

  .sayHello {
    margin-bottom: 10em;
  }
  .sayHello button {
    font-family: 'Fira Code', monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    /* identical to box height, or 100% */

    color: #00ff75;
    padding: 1em 2em;
    border-radius: 5px;
    border: 1px solid #00ff75;
    background: transparent;
  }
  @media (max-width: 912px) and (min-width: 360px) {

    .message {
    width: 100%;
    
  }
  }
`;
