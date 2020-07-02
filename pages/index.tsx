import Head from "next/head";
import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

function Home() {
  return (
    <div className="home">
      <Head>
        <title>徐杰的个人网站</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
              onClick={() => window.open(`https://blog.jyoketsu.com`, "_blank")}
            >
              博客
            </Button>
            <Button
              onClick={() =>
                window.open(`https://admin.jyoketsu.com`, "_blank")
              }
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
      <style jsx>{`
        .home {
          position: relative;
          text-align: center;
          /* height: 100vh; */
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .box {
          width: 540px;
          color: #fff;
          border-radius: 8px;
          background-color: rgba(0, 0, 0, 0.2);
          padding: 15px;
          z-index: 2;
          backdrop-filter: blur(3px);
        }
        .title {
          font-size: 28px;
        }
        .buttons-wrapper {
          padding: 15px 0;
        }
        .background {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: -1;
        }
        .background > video {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          object-fit: cover;
          height: 100%;
          width: 100%;
        }
        .background > i {
          display: block;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
        }
        .ICP-licensing {
          /* color: #fff; */
          position: absolute;
          bottom: 15px;
        }

        @media screen and (max-width: 768px) {
          .box {
            width: 90%;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
