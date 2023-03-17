import styled from 'styled-components'


export const ResponsiveSlideHolder = styled.div`

        .offcanvas-body ul{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-evenly;
                background-color: green;
                height: 100%;
        }

        .offcanvas-body ul li{
            list-style: none;
            
        }

        .offcanvas-body ul li button{
            padding: 1em 2em;
   border: 1px solid #00FF75;
border-radius: 4px;
box-sizing: border-box;
background-color: transparent;

font-family: 'Fira Code';
font-style: normal;
font-weight: 450;
font-size: 14px;
line-height: 13px;
/* identical to box height, or 93% */

display: flex;
align-items: center;

color: #00FF75;
            
        }


        .offcanvas-body ul .menuItem{
            display: flex;
            flex-direction: column;
            text-align: center;
            font-family: 'Fira Code';
font-weight: 450;
font-size: 1.5em;
/* identical to box height, or 120% */
cursor: pointer;
        }


        .offcanvas-body ul .menuItem .theNumber{
            color: #00FF75;

        }
  
`;