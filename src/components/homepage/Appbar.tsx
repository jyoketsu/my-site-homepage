import React from "react";
import { useDispatch } from "react-redux";
import { switchThemeType } from "../../redux/actions";
import { useTypedSelector } from "../../redux/reducer/RootState";
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import TranslateIcon from "@material-ui/icons/Translate";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { i18n, withTranslation } from "../../../i18n";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    langButton: {
      color: "#FFF",
    },
  })
);

function MyAppBar({ t }) {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const themeType = useTypedSelector((state) => state.common.themeType);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClickLang = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: any) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar
        position="static"
        style={{
          backgroundColor:
            themeType === "dark"
              ? theme.palette.background.paper
              : theme.palette.primary.main,
        }}
      >
        <Toolbar>
          <Typography variant="h6">News</Typography>
          <div className={classes.grow} />
          <Tooltip title={t("changeLang")}>
            <Button
              className={classes.langButton}
              startIcon={<TranslateIcon style={{ fontSize: "1.5rem" }} />}
              endIcon={<ExpandMoreIcon />}
              onClick={handleClickLang}
            >
              简体中文
            </Button>
          </Tooltip>
          <Tooltip title={t("toggleTheme")}>
            <IconButton
              color="inherit"
              onClick={() => dispatch(switchThemeType())}
            >
              {themeType === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Menu
        id="lang-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => i18n.changeLanguage("zhHans")}>
          简体中文
        </MenuItem>
        <MenuItem onClick={() => i18n.changeLanguage("zhHant")}>
          繁體中文
        </MenuItem>
        <MenuItem onClick={() => i18n.changeLanguage("ja")}>日本語</MenuItem>
        <MenuItem onClick={() => i18n.changeLanguage("en")}>English</MenuItem>
      </Menu>
    </div>
  );
}

export default withTranslation("common")(MyAppBar);
