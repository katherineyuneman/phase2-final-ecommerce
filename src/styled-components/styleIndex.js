import styled from 'styled-components'

const Header = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,500&family=Playfair+Display:ital,wght@1,800&display=swap');
  background: #8DA878;
  color: rgb(13, 26, 38);
  position: fixed;
  top: 0;
  height: 62px;
  line-height: 20px;
  width: 100vw;
  /* z-index: 10; */

  h1 {
  display: flex;
  flex: 70%;
  color: white;
  float: left;
  margin-left: 28px;
  font-size: 2em;
  height: 15px;
  letter-spacing: 1px;
  /* text-transform: uppercase; */
  font-family: "Playfair Display";
  font-style: italic
  }

  nav{
    background-color:#8DA878;
    display: block;
    float: right;
    font-size: 15px;
    /* flex: 30%; */
    top: 50px;
    justify-content: right;
    padding: 20px;
    display: inline-block;
    text-align: right;
    color: white;
    height: auto,
  }
  li{
  color: white;
  display: inline-block;
  padding: 0px 10px;
  /* border-radius: 20px; */
  }
  li:hover {
  background-color: #768E64;
  height:100%;
  }
    
`


const Container = styled.div`

  display: flex;
  flex-wrap: wrap;
  font-family: "Playfair Display";
`

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
  /* transition: 0.3s; */
  padding: 2px 16px;
  border-radius: 5px;
  margin:1em;
  width:150px;
  justify-content: center;
  h5{
    padding: 2px 10px;
    margin:1em;
    background-color:#8DA878;
    color: white;
    font-family: "Montserrat", sans-serif;
    font-style: italic;
  };
  img{
    width:100%;
    filter: saturate(100%);
    
  };
  img:hover{
    filter: saturate(200%);
  };
  h3{
    height: 30px;
  };
  .stock{
    background-color:#CB4C4E;
    color:white
  };
  h4{
    height: 20px;
  };
  
  button{
    display:block;
    width: 100%;
    background-color:white;
    color:#8DA878;
    border: 2px solid #8DA878;
    border-radius: 5px;
    font-style: bolder;
  }
  button:hover{
    background-color:#8DA878;
    color:white;
    border: 2px solid white;
  };
  button:active{
    background-color:#8DA878;
    color:white;
    border: 2px solid white;
    box-shadow: 5px 3px 3px gray;
    font-style: bold;
  };
  `


const ProductFeatureContainer = styled.div`
  height: 62px;
  line-height: 20px;
  width: 100vw;
  display: block;
  font-family: "Playfair Display";
  justify-content: center;
  margin-right:0;
  padding: 10px;
  background-color:red;
`
const CartCardStyle = styled.div`
column-count: 4;
/* display: inline-block; */
font-size: 14px;
flex-direction:row;
border: solid black;
  font-family: "Montserrat";
  justify-content: left;
  margin: 10em;
  margin-bottom: .2em;
  margin-top:.2em;
  width:75%;
  height: 75px;
  overflow: hidden;
  
`
const LeftPiece = styled.div`
  position: left;
  img{
    /* padding-left: 5em; */
    width:75px
  }
`
const MiddleDescription = styled.div`
  justify-content:center;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  padding-left: 0em;
  padding-top: 1em;
  width:150%;
  top:0;
`

const Quantity = styled.div`
  justify-content:center;
  width: 75%;
  height: auto;
  padding-top:1em;
  margin-left: 6em;
  button{
    display:block;
    width: 100%;
    background-color:white;
    color:#8DA878;
    border: 2px solid #8DA878;
    border-radius: 5px;
    font-style: bolder;
  }
  button:hover{
    background-color:#8DA878;
    color:white;
    border: 2px solid white;
  };
  button:active{
    background-color:#8DA878;
    color:white;
    border: 2px solid white;
    box-shadow: 5px 3px 3px gray;
    font-style: bold;
  };
`
const TotalCost = styled.div`
  padding-top:2em;
  width:50%;
  padding-left: 4em;
  justify-content:right;
  height: auto;
`



export {Container, Card, Header, ProductFeatureContainer, CartCardStyle, LeftPiece, MiddleDescription, Quantity,TotalCost}