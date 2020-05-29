import React from 'react';
import styled from "@emotion/styled";
import Menu from "./Components/Menu";
import Globe_and_seasons from "./Components/Globe&Seasons";
import Date_peoples_settings from "./Components/Date&Peoples_settings";


const Wrapper = styled.div`
width: 1200px;
height: 675px;
background: linear-gradient(149.94deg, #CDF0FF 9.2%, 
rgba(186, 223, 244, 0.98991) 21.69%, 
rgba(56, 102, 169, 0.92) 63.84%, #2E5DA4 83.89%, #2E5DA4 91.59%);
`
const Root = styled.div`
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
`
const Body = styled.div`
display: flex;
`
function App() {
  return (
    <Root>
      <Wrapper>
        <Menu/>
        <Body>
            <Globe_and_seasons/>
            <Date_peoples_settings/>
        </Body>
      </Wrapper>
    </Root>
  );
}

export default App;
