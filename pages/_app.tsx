import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import App from "next/app";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import { wrapper } from "../src/redux/store";
import { useTypedSelector } from "../src/redux/reducer/RootState";
import { appWithTranslation } from "../i18n";

function MyApp({ Component, pageProps }) {
  const themeType = useTypedSelector((state) => state.common.themeType);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const theme = createMuiTheme({
    palette: {
      primary: {
        light: "#C73E3A",
        main: "#E83015",
        dark: "#CB4042",
      },
      type: themeType,
    },
  });

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </MuiThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default wrapper.withRedux(appWithTranslation(MyApp));
// export default wrapper.withRedux(MyApp);
