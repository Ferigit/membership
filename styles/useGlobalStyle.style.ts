import { makeStyles } from "@mui/styles";

const useGlobalStyle = makeStyles(
  (theme: any) => ({
    "@global": {
      ".block": { display: "block" },
      ".flex": { display: "flex" },
      ".inline": { display: "inline" },
      ".flex-row": { flexDirection: "row" },
      ".flex-row-reverse": { flexDirection: "row-reverse" },
      ".flex-col": { flexDirection: "column" },
      ".flex-col-reverse": { flexDirection: "column-reverse" },
      ".flex-wrap": { flexWrap: "wrap" },
      ".flex-wrap-reverse": { flexWrap: "wrap-reverse" },
      ".flex-nowrap": { flexWrap: "nowrap" },
      ".flex-1": { flex: "1 1 0%" },
      ".flex-2": { flex: 0.2 },
      ".flex-3": { flex: 0.3 },
      ".flex-5": { flex: 0.5 },
      ".flex-4": { flex: 0.4 },
      ".flex-6": { flex: 0.6 },
      ".flex-auto": { flex: "1 1 auto" },
      ".flex-initial": { flex: "0 1 auto" },
      ".flex-none": { flex: "none" },
      ".flex-grow-0": { flexGrow: 0 },
      ".flex-grow": { flexGrow: 1 },
      ".flex-shrink-0": { flexShrink: 0 },
      ".flex-shrink": { flexShrink: 1 },
      ".items-start": { alignItems: "flex-start" },
      ".items-end": { alignItems: "flex-end" },
      ".items-center": { alignItems: "center" },
      ".items-baseline": { alignItems: "baseline" },
      ".items-stretch": { alignItems: "stretch" },
      ".justify-start": { justifyContent: "flex-start" },
      ".justify-end": { justifyContent: "flex-end" },
      ".justify-center": { justifyContent: "center" },
      ".justify-between": { justifyContent: "space-between" },
      ".justify-around": { justifyContent: "space-around" },
      ".justify-evenly": { justifyContent: "space-evenly" },
      ".justify-items-start": { justifyItems: "start" },
      ".justify-items-end": { justifyItems: "end" },
      ".justify-items-center": { justifyItems: "center" },
      ".justify-items-stretch": { justifyItems: "stretch" },
      ".justify-self-auto": { justifySelf: "auto" },
      ".justify-self-start": { justifySelf: "start" },
      ".justify-self-end": { justifySelf: "end" },
      ".justify-self-center": { justifySelf: "center" },
      ".justify-self-stretch": { justifySelf: "stretch" },
      ".content-center": { alignContent: "center" },
      ".content-start": { alignContent: "flex-start" },
      ".content-end": { alignContent: "flex-end" },
      ".content-between": { alignContent: "space-between" },
      ".content-around": { alignContent: "space-around" },
      ".content-evenly": { alignContent: "space-evenly" },
      ".self-auto": { alignSelf: "auto" },
      ".self-start": { alignSelf: "flex-start" },
      ".self-end": { alignSelf: "flex-end" },
      ".self-center": { alignSelf: "center" },
      ".self-stretch": { alignSelf: "stretch" },
      ".self-baseline": { alignSelf: "baseline" },

      ".text-center": { textAlign: "center" },
      ".text-start": { textAlign: "left" },
      ".text-end": { textAlign: "right" },
      ".text-ellipsis": {
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
      },

      ".m-xs": { margin: theme.spacing(1) },
      ".m-sm": { margin: theme.spacing(2) },
      ".m-md": { margin: theme.spacing(4) },
      ".m-lg": { margin: theme.spacing(8) },
      ".m-xl": { margin: theme.spacing(12) },
      ".my-xs": { marginTop: theme.spacing(1), marginBottom: theme.spacing(1) },
      ".my-sm": { marginTop: theme.spacing(2), marginBottom: theme.spacing(2) },
      ".my-md": { marginTop: theme.spacing(4), marginBottom: theme.spacing(4) },
      ".my-lg": { marginTop: theme.spacing(8), marginBottom: theme.spacing(8) },
      ".my-xl": {
        marginTop: theme.spacing(12),
        marginBottom: theme.spacing(12),
      },
      ".mx-xs": { marginRight: theme.spacing(1), marginLeft: theme.spacing(1) },
      ".mx-sm": { marginRight: theme.spacing(2), marginLeft: theme.spacing(2) },
      ".mx-md": { marginRight: theme.spacing(4), marginLeft: theme.spacing(4) },
      ".mx-lg": { marginRight: theme.spacing(8), marginLeft: theme.spacing(8) },
      ".mx-xl": {
        marginRight: theme.spacing(12),
        marginLeft: theme.spacing(12),
      },
      ".mr-xs": { marginRight: theme.spacing(1) },
      ".mr-sm": { marginRight: theme.spacing(2) },
      ".mr-md": { marginRight: theme.spacing(4) },
      ".mr-lg": { marginRight: theme.spacing(8) },
      ".mr-xl": { marginRight: theme.spacing(12) },
      ".ml-xs": { marginLeft: theme.spacing(1) },
      ".ml-sm": { marginLeft: theme.spacing(2) },
      ".ml-md": { marginLeft: theme.spacing(4) },
      ".ml-lg": { marginLeft: theme.spacing(8) },
      ".ml-xl": { marginLeft: theme.spacing(12) },
      ".mt-xs": { marginTop: theme.spacing(1) },
      ".mt-sm": { marginTop: theme.spacing(2) },
      ".mt-md": { marginTop: theme.spacing(4) },
      ".mt-lg": { marginTop: theme.spacing(8) },
      ".mt-xl": { marginTop: theme.spacing(12) },
      ".mb-xs": { marginBottom: theme.spacing(1) },
      ".mb-sm": { marginBottom: theme.spacing(2) },
      ".mb-md": { marginBottom: theme.spacing(4) },
      ".mb-lg": { marginBottom: theme.spacing(8) },
      ".mb-xl": { marginBottom: theme.spacing(12) },

      ".p-xs": { padding: theme.spacing(1) },
      ".p-sm": { padding: theme.spacing(2) },
      ".p-md": { padding: theme.spacing(4) },
      ".p-lg": { padding: theme.spacing(8) },
      ".p-xl": { padding: theme.spacing(12) },
      ".py-xs": {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
      },
      ".py-sm": {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
      },
      ".py-md": {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
      },
      ".py-lg": {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      },
      ".py-xl": {
        paddingTop: theme.spacing(12),
        paddingBottom: theme.spacing(12),
      },
      ".px-xs": {
        paddingRight: theme.spacing(1),
        paddingLeft: theme.spacing(1),
      },
      ".px-sm": {
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
      },
      ".px-md": {
        paddingRight: theme.spacing(4),
        paddingLeft: theme.spacing(4),
      },
      ".px-lg": {
        paddingRight: theme.spacing(8),
        paddingLeft: theme.spacing(8),
      },
      ".px-xl": {
        paddingRight: theme.spacing(12),
        paddingLeft: theme.spacing(12),
      },
      ".pt-xs": { paddingTop: theme.spacing(1) },
      ".pt-sm": { paddingTop: theme.spacing(2) },
      ".pt-md": { paddingTop: theme.spacing(4) },
      ".pt-lg": { paddingTop: theme.spacing(8) },
      ".pt-xl": { paddingTop: theme.spacing(12) },
      ".p-0": { padding: 0 },
      ".pb-xs": { paddingBottom: theme.spacing(1) },
      ".pb-sm": { paddingBottom: theme.spacing(2) },
      ".pb-md": { paddingBottom: theme.spacing(4) },
      ".pb-lg": { paddingBottom: theme.spacing(8) },
      ".pb-xl": { paddingBottom: theme.spacing(12) },
      ".pr-xs": { paddingRight: theme.spacing(1) },
      ".pr-sm": { paddingRight: theme.spacing(2) },
      ".pr-md": { paddingRight: theme.spacing(4) },
      ".pr-lg": { paddingRight: theme.spacing(8) },
      ".pr-xl": { paddingRight: theme.spacing(12) },
      ".pl-xs": { paddingLeft: theme.spacing(1) },
      ".pl-sm": { paddingLeft: theme.spacing(2) },
      ".pl-md": { paddingLeft: theme.spacing(4) },
      ".pl-lg": { paddingLeft: theme.spacing(8) },
      ".pl-xl": { paddingLeft: theme.spacing(12) },

      ".space-xs > * + *": {
        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(1),
      },
      ".space-sm > * + *": {
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(2),
      },
      ".space-md > * + *": {
        marginLeft: theme.spacing(4),
        marginTop: theme.spacing(4),
      },
      ".space-lg > * + *": {
        marginLeft: theme.spacing(8),
        marginTop: theme.spacing(8),
      },
      ".space-xl > * + *": {
        marginLeft: theme.spacing(12),
        marginTop: theme.spacing(12),
      },
      ".space-x-xs > * + *": { marginLeft: theme.spacing(1) },
      ".space-x-sm > * + *": { marginLeft: theme.spacing(2) },
      ".space-x-md > * + *": { marginLeft: theme.spacing(4) },
      ".space-x-lg > * + *": { marginLeft: theme.spacing(8) },
      ".space-x-xl > * + *": { marginLeft: theme.spacing(12) },
      ".space-y-xs > * + *": { marginTop: theme.spacing(1) },
      ".space-y-sm > * + *": { marginTop: theme.spacing(2) },
      ".space-y-md > * + *": { marginTop: theme.spacing(4) },
      ".space-y-lg > * + *": { marginTop: theme.spacing(8) },
      ".space-y-xl > * + *": { marginTop: theme.spacing(12) },
      ".grid": { display: "grid" },
      ".grid-cols-1": { gridTemplateColumns: "repeat(1, minmax(0, 1fr))" },
      ".grid-cols-2": { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" },
      ".grid-cols-3": { gridTemplateColumns: "repeat(3, minmax(0, 1fr))" },
      ".grid-cols-4": { gridTemplateColumns: "repeat(4, minmax(0, 1fr))" },
      ".grid-rows-1": {
        gridTemplateRows: `repeat(1, minmax(0, ${theme.spacing(26)}))}`,
      },
      ".grid-rows-2": {
        gridTemplateRows: `repeat(2, minmax(0, ${theme.spacing(26)}))}`,
      },
      ".grid-rows-3": {
        gridTemplateRows: `repeat(3, minmax(0, ${theme.spacing(26)}))}`,
      },
      ".grid-rows-4": {
        gridTemplateRows: `repeat(4, minmax(0, ${theme.spacing(26)}))}`,
      },
      ".grid-rows-auto-1": {
        gridTemplateRows: "repeat(1, minmax(0, auto))",
      },
      ".grid-rows-auto-2": {
        gridTemplateRows: "repeat(2, minmax(0, auto))",
      },
      ".grid-rows-auto-3": {
        gridTemplateRows: `repeat(3, minmax(0, auto))`,
      },
      ".grid-rows-auto-4": {
        gridTemplateRows: `repeat(4, minmax(0, auto))`,
      },
      ".gap-1": { gap: theme.spacing(1) },
      ".gap-2": { gap: theme.spacing(2) },
      ".gap-3": { gap: theme.spacing(3) },
      ".gap-4": { gap: theme.spacing(4) },
      ".gap-5": { gap: theme.spacing(5) },
      ".gap-6": { gap: theme.spacing(6) },
      ".gap-7": { gap: theme.spacing(7) },
      ".gap-col-1": { columnGap: theme.spacing(1) },
      ".gap-col-2": { columnGap: theme.spacing(2) },
      ".gap-col-3": { columnGap: theme.spacing(3) },
      ".gap-col-4": { columnGap: theme.spacing(4) },
      ".gap-row-3": { rowGap: theme.spacing(3) },
      ".col-span-1": { gridColumn: "span 1 / span 1" },
      ".col-span-2": { gridColumn: "span 2 / span 2" },
      ".col-span-3": { gridColumn: "span 3 / span 3" },
      ".col-span-4": { gridColumn: "span 4 / span 4" },
      ".row-span-1": { gridRow: "span 1 / span 1" },
      ".row-span-2": { gridRow: "span 2 / span 2" },
      ".row-span-3": { gridRow: "span 3 / span 3" },
      ".row-span-4": { gridRow: "span 4 / span 4" },
      ".row-span-5": { gridRow: "span 5 / span 5" },
      ".row-span-6": { gridRow: "span 6 / span 6" },
      ".center": { alignItems: "center", justifyContent: "center" },
      ".relative": { position: "relative" },
      ".absolute": { position: "absolute" },
      ".border-style-dashed": { borderStyle: "dashed" },
      ".boredr-style-solid": { borderStyle: "solid" },
      ".border-style-none": { borderStyle: "none" },
      ".border-radius-xs": { borderRadius: theme.spacing(1) },
      ".border-radius-sm": { borderRadius: theme.spacing(2) },
      ".border-radius-md": { borderRadius: theme.spacing(3) },
      ".border-radius-lg": { borderRadius: theme.spacing(4) },
      ".border-radius-xl": { borderRadius: theme.spacing(8) },
      ".border-width-xs": { borderWidth: 1 },
      ".border-width-sm": { borderWidth: 2 },
      ".border-width-md": { borderWidth: 3 },
      ".border-width-lg": { borderWidth: 4 },
      ".border-width-xl": { borderWidth: 8 },
      // '.border-color': { borderColor: gray.main },
      ".p0": {
        padding: 0,
      },
      ".w-full": {
        width: "100%",
      },
      ".w-half": {
        width: "50%",
      },
      ".w-320": { width: 320 },
      ".h-full": {
        height: "100vh",
      },
      ".h-100": {
        height: "100%",
      },
      ".h-auto": {
        height: "auto",
      },
      ".display-none": {
        display: "none",
      },
      ".display-block": {
        display: "block",
      },
      ".cursor-pointer": {
        cursor: "pointer",
      },
      ".cursor-noDrop": {
        cursor: "no-drop",
      },
      ".cursor-default": {
        cursor: "default",
      },
      ".overflow-hidden": {
        overflow: "hidden",
      },
      ".scrollY": { overflowY: "auto" },
      ".scrollX": { overflowX: "auto" },
      ".boxShadow": { boxShadow: `0px 2px 4px 0px #00000016` },
      ".threePoint": {
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
      },
      html: {
        // firefox(scrollbar)
        scrollbarColor: `${gray} ${grayIcon[500]}`,
        scrollbarWidth: "thin",
      },

      "*::-webkit-scrollbar": {
        // v8 chromium(scrollbar)
        width: 3,
        height: 3,
      },
      "*::-webkit-scrollbar-track": {
        // v8 chromium(scrollbar)
        background: gray,
        borderRadius: 3,
      },
      "*::-webkit-scrollbar-thumb": {
        // v8 chromium(scrollbar)
        background: grayIcon[500],
        borderRadius: 5,
      },
      ".tether-element": {
        zIndex: 2300,
      },
      ".rc-time-picker-panel": {
        zIndex: "2301 !important",
      },
      ".rc-time-picker-input": {
        fontSize: "1rem",
      },
      ".Toastify": {
        "& .Toastify__toast--error": {
          border: "1px solid #EB5757",
          borderRadius: "50px !important",
          background: "#FAE1E2 !important",
          minHeight: 54,
        },
        "& .Toastify__toast--warning": {
          borderRadius: "50px !important",
          minHeight: 54,
        },
        "& .Toastify__close-button": {
          alignSelf: "unset !important",
        },
      },
      "non-visible": {
        visibility: "hidden !important",
      },
      ".reactour__helper": {
        "& button": {
          display: "none",
        },
        "& div": {
          marginTop: 0,
        },
      },
      "textarea::placeholder": {
        color: "#9c9aa5",
      },
      ".width-action": {
        minWidth: "300px !important",
      },
      ".btnFromMarginTop": {
        marginTop: 50,
      },
    },
  }),
  {
    name: "useGlobalStyle",
  }
);
export default useGlobalStyle;
