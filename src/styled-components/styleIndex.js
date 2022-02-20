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
    display: flex;
    flex: 30%;
    background-color: red;
    float: right;
    top: 50px
    justify-content: right;
    margin-right: 10px;
    padding-right: 50px;
    display: inline-block;
    text-align: right;
    color: white;
  }

  

  




#navbar li a:hover {
  /* border-bottom: 1px solid rgb(28, 121, 184); */
  color: rgb(28, 121, 184);
  transition: all 1s ease;
  -webkit-transition: all 1s ease;
}

/* Animated Bottom Line */
#navbar li a:before, #navbar li a:after {
  content: '';
  position: absolute;
  width: 0%;
  height: 1px;
  bottom: -1px;
  background: rgb(13, 26, 38);
}

#navbar li a:before {
  left: 0;
  transition: 0.5s;
}

#navbar li a:after {
  background: rgb(13, 26, 38);
  right: 0;
  /* transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1); */
}

#navbar li a:hover:before {
  background: rgb(13, 26, 38);
  width: 100%;
  transition: width 0.5s cubic-bezier((0.22, 0.61, 0.36, 1));
}

#navbar li a:hover:after {
  background: transparent;
  width: 100%;
  /* transition: 0s; */
}




    

    
`


const Container = styled.div`

  display: flex;
  flex-wrap: wrap;
  font-family: "Playfair Display";
`

const Card = styled.div`
  border : solid;
  width: 150px;
  margin: auto;
  height: 350px;
  padding: 1em;
  h5{
    background-color:#8DA878;
    color: white;
    font-family: "Montserrat", sans-serif;
    font-style: italic;
  }
`



export {Container, Card, Header}