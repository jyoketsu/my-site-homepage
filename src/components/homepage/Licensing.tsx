import React from "react";
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import { useTypedSelector } from "../../redux/reducer/RootState";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ICPLicensing: {
      marginTop: "25px",
      padding: "25px 0",
      width: "100%",
      color: "#FFF",
      backgroundColor: theme.palette.primary.main,
    },
    beian: {
      margin: "0 5px",
    },
    link: {
      display: "inline-block",
      textDecoration: "none",
      height: "20px",
      lineHeight: "20px",
      color: "#FFF",
    },
    linkText: {
      float: "left",
      height: "20px",
      lineHeight: "20px",
      margin: "0px 0px 0px 5px",
    },
  })
);

export default function Licensing() {
  const classes = useStyles();
  const theme = useTheme();
  const themeType = useTypedSelector((state) => state.common.themeType);
  return (
    <div
      className={classes.ICPLicensing}
      style={{
        backgroundColor:
          themeType === "dark"
            ? theme.palette.background.paper
            : theme.palette.primary.main,
      }}
    >
      <div style={{ textAlign: "center" }}>
        <span>©2020 Jyoketsu All Rights Reserved</span>
        <span
          className={classes.beian}
          onClick={() => window.open("http://www.beian.miit.gov.cn", "_blank")}
        >
          苏ICP备20038833号
        </span>
      </div>
      <div style={{ width: "300px", margin: "0 auto", padding: "8px 0" }}>
        <a
          className={classes.link}
          target="_blank"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32041202001749"
        >
          <img src="/icon/备案图标.png" style={{ float: "left" }} />
          <p className={classes.linkText}>苏公网安备 32041202001749号</p>
        </a>
      </div>
    </div>
  );
}
