import "./reset.css";
import "./App.css";
import styled from "styled-components";
import SideChannelList from "../src/compoenets/side-channel-list/SideChannelList";
import Message from "../src/compoenets/message/Message";
import SideMemberList from "../src/compoenets/side-member-list/SideMemberList";
import ProfileBar from "../src/compoenets/profile-bar/ProfileBar";
import SideDiscordList from "./compoenets/side-discord-list/SideDiscordList";

// styled-components 사용법
// const 변수이름 = styled.태그종류 `안에 작성` < 백틱
const MainDiv = styled.div`
  position: relative;
  background-color: var(--main-bg-color);
  height: 100vh;
  z-index: 5;
`;

const MainContent = styled.div`
  display: grid;
  position: relative;
  left: 4vw;
  top: 4vh;
  width: 96vw;
  height: 96vh;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-top-left-radius: 10px;
  box-sizing: border-box;
  grid-template-columns: 0.6fr 4fr 0.8fr;
  overflow-x: hidden;
`;

function App() {
  return (
    <>
      <MainDiv>
        <SideDiscordList />
        <MainContent className="MaiNContent">
          <SideChannelList />
          <Message />
          <SideMemberList />
        </MainContent>
        <ProfileBar />
      </MainDiv>
    </>
  );
}

export default App;
