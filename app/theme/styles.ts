import { StyleSheet } from "react-native"
import { color, spacing } from "./"
import { palette } from "./palette"

const text = StyleSheet.create({
  NORMAL: {
    color: color.palette.black,
    fontFamily: "Helvetica-Light",
  },
  BOLD: { fontWeight: "bold" },
})

const styles = StyleSheet.create({
  FULL: { flex: 1 },
  ROOT: {
    backgroundColor: color.palette.black,
  },
  CONTAINER: {
    backgroundColor: color.transparent,
    paddingHorizontal: spacing[4],
  },

  HEADER: {
    paddingTop: spacing[3],
    paddingBottom: spacing[4] + spacing[1],
    paddingHorizontal: 0,
  },
  HEADER_TITLE: {
    ...text.NORMAL,
    ...text.BOLD,
    color: color.palette.white,
    fontSize: 12,
    lineHeight: 15,
    textAlign: "center",
    letterSpacing: 1.5,
  },
  TITLE_WRAPPER: {
    ...text.NORMAL,
    textAlign: "center",
  },
  TITLE: {
    ...text.NORMAL,
    ...text.BOLD,
    fontSize: 28,
    lineHeight: 38,
    textAlign: "center",
  },
  ALMOST: {
    ...text.NORMAL,
    ...text.BOLD,
    fontSize: 26,
    fontStyle: "italic",
  },
  BOWSER: {
    alignSelf: "center",
    marginVertical: spacing[5],
    marginHorizontal: spacing[5],
    maxWidth: "100%",
  },
  CONTENT: {
    ...text.NORMAL,
    color: "#BAB6C8",
    fontSize: 15,
    lineHeight: 22,
    marginBottom: spacing[5],
  },
  CONTINUE: {
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[4],
    backgroundColor: "#5D2555",
  },
  CONTINUE_TEXT: {
    ...text.BOLD,
    color: color.palette.white,
    fontFamily: "Montserrat",
    fontSize: 13,
    letterSpacing: 2,
  },
  FOOTER: { backgroundColor: "#20162D" },
  FOOTER_CONTENT: {
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[4],
  },
  CardTitle: {
    fontFamily: "sans-serif-light",
    fontSize: 17,
    color: "white",
    justifyContent: "center",
    alignSelf: "center",
  },
  CardItem: {
    height: "100%",
    shadowRadius: 20,
    backgroundColor: "black",
  },
  CardContent: {
    textAlign: "center",
    justifyContent: "center",
  },
  CardIcon: {
    fontSize: 35,
    alignSelf: "center",
    justifyContent: "center",
    color: "white",
  },
  TabTitle: {
    fontFamily: "sans-serif-condensed",
    color: color.palette.white,
    fontSize: 25,
    textAlign: "center",
    letterSpacing: 1.5,
  },
})

export default styles
