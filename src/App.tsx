import React from 'react';
import styled from "@emotion/styled";
import Menu from "./Components/Menu";
import GlobeAndSeasons from "./Components/Globe&Seasons";
import DatePeoplesSettings from "./Components/Date&Peoples_settings";


const Wrapper = styled.div`
width: 1200px;
height: 675px;

`
const Root = styled.div`
height: 100vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background: linear-gradient(149.94deg, #CDF0FF 9.2%, 
rgba(186, 223, 244, 0.98991) 21.69%, 
rgba(56, 102, 169, 0.92) 63.84%, #2E5DA4 83.89%, #2E5DA4 91.59%);
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
            <GlobeAndSeasons/>
            <DatePeoplesSettings/>
        </Body>
      </Wrapper>
    </Root>
  );
}

export default App;
