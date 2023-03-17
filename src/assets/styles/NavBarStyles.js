import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;

`;

export const NavBarHolder = styled.div`
    width: 100%;
    height: 107px;
    /* background: white; */
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LogoHolder = styled.div`
   margin-left: 30px;

   img{
     border-radius: 50%;
   }
`;

export const MenuHolder = styled.div`
margin-right: 30px;
width: 50%;

ul{
    /* background-color: orange; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}

ul .menuItem{
    /* background-color: purple; */
    
font-family: 'Fira Code';
font-style: normal;
font-weight: 450;
font-size: 15px;
line-height: 16px;
/* identical to box height, or 120% */
cursor: pointer;

}


ul .menuItem .theItem{
    padding-left: 7px;
    color: white;
}

ul .menuItem:hover .theItem{

color: #00FF75;

}

ul .menuItem .theNumber{
    padding-left: 7px;
    color: #00FF75;

}




ul li{
    list-style: none;
}

ul li button{
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
@media (max-width: 912px) and (min-width: 360px) {
        display: none;

    
    }
`;


export const MenuIconHolder = styled.div`
    display: none;
    margin-right: 20px;

    @media (max-width: 912px) and (min-width: 360px) {
        display: inline;

    
    }
`;