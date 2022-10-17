// import "../styles/globals.css";
// import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../src/store/store";
// import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

// import createEmotionCache from "../src/utility/createEmotionCache";
import lightThemeOptions from "../styles/theme/lightThemeOptions";
// import "../styles/globals.css";
// interface MyAppProps extends AppProps {
//   emotionCache?: EmotionCache;
// }

// const clientSideEmotionCache = createEmotionCache();

// function MyApp({
//   Component,
//   pageProps,
//   emotionCache = clientSideEmotionCache,
// }: MyAppProps) {
//   return (
//     <ThemeProvider theme={lightTheme}>
//       <CssBaseline />
//       <Provider store={store}>
//         <Component {...pageProps} />
//       </Provider>
//     </ThemeProvider>
//   );
// }

// export default MyApp;

import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createCache from "@emotion/cache";

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
  const lightTheme = createTheme(lightThemeOptions);

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
export default MyApp;
