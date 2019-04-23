import Typography from "typography";
import parnassusTheme from "typography-theme-parnassus";
import colors from "../utils/colors";

parnassusTheme.overrideStyles = ({ rhythm }, options) => ({
  a: {
    color: `${colors.secondaryColor}`,
    textDecoration: "none",
    fontWeight: `bold`
  },
  "a:hover": {
    color: `${colors.primaryColor}`,
    textDecoration: "none"
  },
  "a.active": {
    borderBottom: `4px solid ${colors.primaryColor}`
  }
});

const typography = new Typography(parnassusTheme);

export default typography;
