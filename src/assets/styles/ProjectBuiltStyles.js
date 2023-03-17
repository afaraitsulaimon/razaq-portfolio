import styled from "styled-components";

export const Container = styled.div`
width: 100%;
`;
export const TopThreeProjectsHolder = styled.div`
width:100%;
min-height: 100vh;
margin-bottom: 50px;

/* background-color: yellowgreen; */
display: flex;
flex-direction: column;
align-items: center;
`;

// first project styling start here
export const FirstProjectHolder = styled.div`
width: 85%;
height: 30%;
/* background-color: orange; */
display: flex;
margin-bottom: 80px;

.project-image{

width: 50%;

}

.project-image img{
    height: 100%;
width: 400px;
}

.projectDetails{
    width: 50%;
    /* background-color: brown; */
    position: relative;

}

.projectDetails .top {
 position: relative;

}


.projectDetails .top span{
    font-family: 'Fira Code';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 17px;
/* identical to box height, or 130% */
color: #00FF75;
position: absolute;
top: 1.5em;
left: 16em;

}





.projectDetails .top p{
    /* font-family: 'Inter'; */
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 31px;
/* identical to box height, or 134% */
color: #FFFFFF;
position: absolute;
top: 2em;
left: 10.4em;
}


.projectDetails .projectDescription{
    height: 122px;
width: 508px;
border-radius: 4px;
padding: 25px;
text-align: right;
background-color: #471254;
position: absolute;
right: 2em;
top:5em;

}

.projectDetails .projectDescription .firstcontent{
    
font-weight: 400;
font-size: 14px;
line-height: 23px;
/* or 146% */

color: #FFFFFF;
}

.projectDetails .projectDescription .secondcontent{
   
    font-family: 'Fira Code';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 0px;
/* identical to box height, or 0% */


color: #00FF75;
}

.projectDetails .toolsUsed {
    position: absolute;
    top: 13em;
}


.projectDetails .toolsUsed ul{
    display: flex;
}

.projectDetails .toolsUsed ul li{
    list-style: none;
    padding: 0.5em;
    font-family: 'Fira Code';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 17px;
/* identical to box height, or 130% */


color: #FFFFFF;
}

.projectDetails .socialUsed{
    /* display: flex;
    align-items: center; */
    width: 40px;
    height: 30px;
    position: absolute;
    top: 14.5em;
    left: 16.7em;
}
`;




// second project styling starts from here
export const SecondProjectHolder = styled.div`
width: 85%;
height: 30%;
/* background-color: orange; */
display: flex;
margin-bottom: 100px;

.project-image{

width: 50%;

}

.project-image img{
    height: 100%;
width: 400px;
}

.projectDetails{
    width: 50%;
    /* background-color: brown; */
    position: relative;

}

.projectDetails .top {
 position: relative;

}


.projectDetails .top span{
    font-family: 'Fira Code';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 17px;
/* identical to box height, or 130% */
color: #00FF75;
position: absolute;
top: 1.5em;
}



.projectDetails .top p{
    /* font-family: 'Inter'; */
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 31px;
/* identical to box height, or 134% */
color: #FFFFFF;
position: absolute;
top: 2em;
}


.projectDetails .projectDescription{
    height: 122px;
width: 470px;
border-radius: 4px;
padding: 25px;
background-color: #471254; 
display: flex;
align-items: center;
 position: absolute;
 right: -0.8em;
 top: 5em;
}

.projectDetails .projectDescription .content{
    
    /* font-family: 'Inter';
font-style: normal; */
font-weight: 400;
font-size: 14px;
line-height: 23px;
/* or 167% */


color: #FFFFFF;
}


.projectDetails .toolsUsed {
    position: absolute;
    top: 13em;
    left: -4.2em;
}


.projectDetails .toolsUsed ul{
    display: flex;
}

.projectDetails .toolsUsed ul li{
    list-style: none;
    padding: 0.5em;
    font-family: 'Fira Code';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 17px;
/* identical to box height, or 130% */


color: #FFFFFF;
}

.projectDetails .socialUsed{
    /* display: flex;
    align-items: center; */
    width: 40px;
    height: 30px;
    position: absolute;
    top: 15em;
    
}
`;

export const ThirdProjectHolder = styled.div`
width: 85%;
height: 30%;
/* background-color: orange; */
display: flex;

.project-image{

width: 50%;

}

.project-image img{
    height: 100%;
width: 400px;
}

.projectDetails{
    width: 50%;
    /* background-color: brown; */
    position: relative;

}

.projectDetails .top {
 position: relative;

}


.projectDetails .top span{
    font-family: 'Fira Code';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 17px;
/* identical to box height, or 130% */
color: #00FF75;
position: absolute;
bottom: 1.5em;
left: 18.7em;

}





.projectDetails .top p{
    /* font-family: 'Inter'; */
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 31px;
/* identical to box height, or 134% */
color: #FFFFFF;
position: absolute;
top: -1.3em;
left: 5em;

}


.projectDetails .projectDescription{
    min-height: 122px;
width: 508px;
border-radius: 4px;
padding: 25px;
text-align: right;
background-color: #471254;
position: absolute;
right: 2em;
top:1.5em;

}

.projectDetails .projectDescription .firstcontent{
    
font-weight: 400;
font-size: 14px;
line-height: 20px;
/* or 146% */

color: #FFFFFF;
}

.projectDetails .projectDescription .secondcontent{
   
    /* font-family: 'Inter'; */
font-weight: 400;
font-size: 14px;
line-height: 20px;
/* or 156% */



color: #FFFFFF;
}

.projectDetails .toolsUsed {
    position: absolute;
    top: 16em;
}


.projectDetails .toolsUsed ul{
    display: flex;
}

.projectDetails .toolsUsed ul li{
    list-style: none;
    padding: 0.5em;
    font-family: 'Fira Code';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 17px;
/* identical to box height, or 130% */


color: #FFFFFF;
}


.projectDetails .learnMoreButton{

    position: absolute;
    top: 18.7em;
    left: 13em;

}

.projectDetails .learnMoreButton button{
    font-family: 'Fira Code';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 13px;
/* identical to box height, or 100% */
padding: 0.8em 1.5em;
border-radius: 5px;
color: #00FF75;
background-color: transparent;
border:2px solid #00FF75;
}
`;
export const OtherNotableProjectHolder = styled.div`
width: 100%;
/* background-color: brown; */
display: flex;
flex-direction: column;
align-items: center;
margin-top: 10em;

.header{
    text-align: center;
    display: flex;
    flex-direction:column;
    justify-content: center;
    margin-bottom: 20px;
}

.header .otherProjects{
    /* font-family: 'Inter'; */
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 35px;


color: #FFFFFF;
}

.header .explore{

    font-family: 'Fira Code';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
/* identical to box height, or 130% */

color: #00FF75;
}

.otherProjectDisplayHolder{
    width: 80%;
    min-height: 50vh;
    /* background-color: yellow; */
    margin-right: 3em;
    display: grid;
    grid-template-columns: minmax(200px, 1fr) 1fr 1fr;
    column-gap: 1em;
    row-gap: 1em;
    
}

.otherProjectDisplayHolder .card{
    height: 300px;
    background: #471254;
box-shadow: 0px 10px 30px -15px rgba(2, 12, 27, 0.7);
border-radius: 10px;
}


.otherProjectDisplayHolder .card .topIcons {
    display: flex;
    justify-content: space-between;
}

.otherProjectDisplayHolder .card .topIcons .folderIcon{
    margin-top: 1em;
    margin-left: 1em;
}

.otherProjectDisplayHolder .card .topIcons .rightIcons{
    display: flex;
    margin-top: 1em;
    margin-right: 1em;
    
  
}

.topIcons .rightIcons .icon{
    color: #FFFFFF;
    padding-left: 0.5em;
}

.otherProjectDisplayHolder .card .title span{
    /* font-family: 'Inter'; */
/* font-style: normal; */
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* or 134% */
color: #CCD6F6;
}

.otherProjectDisplayHolder .card .title {
    margin-left: 1em;
    margin-top: 1em;
}

.otherProjectDisplayHolder .card .details p {
    padding-left: 1em;
    /* font-family: 'Inter'; */
font-style: normal;
font-size: 13px;
line-height: 22px;
/* or 130% */

color: #FFFFFF
}

.otherProjectDisplayHolder .card .theToolsUsed{
    /* background-color: #00FF75; */
    /* margin-top: auto;
    margin-bottom: auto; */
    margin-top:auto;
    margin-bottom: 1em;

    

}
.otherProjectDisplayHolder .card .theToolsUsed span{
    /* font-family: 'Fira Code'; */
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 21px;
/* identical to box height, or 175% */
padding: 1em;
color: #8892B0;
}

.showMoreAndLessBut{
    margin-top: 5em;
    margin-bottom: 8em;
}
.showMoreAndLessBut button{
    font-family: 'Fira Code';
font-style: normal;
font-weight: 400; 
font-size: 13px;
line-height: 13px;
/* identical to box height, or 100% */
color: #00FF75;
padding: 1em 2em;
border-radius: 5px;
border: 1px solid #00FF75;
background: transparent;
}

`;
