import { Provider } from "react-redux";
import { store } from "../src/store/store";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { useEffect } from "react";
import lightThemeOptions from "../styles/theme/lightThemeOptions";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createCache from "@emotion/cache";
import useGlobalStyle from "../styles/useGlobalStyle.style";

import "../styles/globals.css";
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  emotionCache?: any;
};
const clientSideEmotionCache = createCache({ key: "css", prepend: true });

const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppPropsWithLayout) => {
  // useGlobalStyle();
  const lightTheme = createTheme(lightThemeOptions);
  useEffect(() => {
    const jssStyles: any = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
};
MyApp.getInitialProps = async ({ Component, ctx }: any) => ({
  pageProps: {
    ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
    pathname: ctx.pathname,
  },
});

export default MyApp;
