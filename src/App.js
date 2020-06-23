import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

function App() {
  return (
    <div className="App">
      <div className="background">
        <video playsInline autoPlay muted loop poster="polina.jpg" id="bgvid">
          <source src="/video/night.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="box">
        <div className="title">徐傑的個人網站</div>
        <div className="sub-title">Jyoketsu's Personal Website</div>
        <div className="buttons-wrapper">
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
          >
            <Button>博客</Button>
            <Button>管理後台</Button>
          </ButtonGroup>
        </div>
      </div>
      <div className="ICP-licensing">
        ©2020 Jyoketsu All Rights Reserved
        苏ICP备xxx号
      </div>
    </div>
  );
}

export default App;
