import { StyleSheet } from "react-native"
import { color, spacing } from "./"

const text = StyleSheet.create({
  NORMAL: {
    color: color.palette.black,
    fontFamily: "Montserrat",
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
    ...text.NORMAL,
    ...text.BOLD,
    fontSize: 20,
    textAlign: "center",
  },
  ProfileCard: {
    justifyContent: "center",
    textAlign: "center",
  },
})

export default styles
