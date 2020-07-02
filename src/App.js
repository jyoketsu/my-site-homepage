import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

function App() {
  return (
    <div className="App">
      <div className="background">
        {/* <video playsInline autoPlay muted loop poster="polina.jpg" id="bgvid">
          <source src="/video/night.mp4" type="video/mp4" />
        </video> */}
        <i
          style={{
            // backgroundImage: `url("https://cdn-icare.qingtime.cn/6AA6F652.jpg")`,
            backgroundImage: `url("https://cdn-icare.qingtime.cn/E44DED4B.jpg")`,
          }}
        ></i>
      </div>
      <div className="box">
        <div className="title">徐杰的个人网站</div>
        <div className="sub-title">Jyoketsu's Personal Website</div>
        <div className="buttons-wrapper">
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
          >
            <Button
              onClick={() => window.open(`http://blog.jyoketsu.com`, "_blank")}
            >
              博客
            </Button>
            <Button
              onClick={() => window.open(`http://admin.jyoketsu.com`, "_blank")}
            >
              管理后台
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <div className="ICP-licensing">
        ©2020 Jyoketsu All Rights Reserved{" "}
        <span
          onClick={() => window.open("http://www.beian.miit.gov.cn", "_blank")}
        >
          苏ICP备20038833号
        </span>
      </div>
    </div>
  );
}

export default App;
