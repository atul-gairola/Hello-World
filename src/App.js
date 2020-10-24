import { makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";

import BlurSvg1 from "./components/BlurSvg1";
import Wave1 from "./components/Wave1";
import Wave2 from "./components/Wave2";
import BlurSvg2 from "./components/BlurSvg2";

const useStyles = makeStyles({
  svgBlackBg: {
    width: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: -22,
  },
  heading: {
    color: "#f8f8f8",
    fontSize: "6rem",
    fontWeight: "600",
    position: "absolute",
    top: "25%",
    transform: "translateY(-50%)",
    left: "100px",
  },
  hello: {
    fontSize: "112px",
    lineHeight: "120px",
  },
  world: {
    fontSize: "159px",
  },
  blur: {
    width: "500px",
  },
  shadowText: {
    color: "#0F1014",
    position: "absolute",
    zIndex: -40,
    bottom: "-100px",
    right: "-100px",
    opacity: 0.2,
    fontWeight: "300",
    textAlign: "end",
    fontSize: "314px",
    lineHeight: "280px",
  },
  shadowTextHello: {
    fontSize: "250px",
  },
  circle: {
    position: "absolute",
    top: "-400px",
    right: "310px",
    zIndex: -10,
  },

  creditsContainer: {
    height: "243px",
    width: "243px",
    position: "absolute",
    zIndex: 9900,
    borderRadius: "50%",
    top: "0px",
    right: "310px",
    fontFamily: "Roboto Slab, serif",
    color: "#0F1014",
  },
  creditsWrapper: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  creditsContent: {
    position: "absolute",
    top: "80px",
    left: "30px",
  },
  creditsTitle: {
    fontSize: "1rem",
  },
  name: {
    fontSize: "32px",
    marginTop: "2px",
    color: "inherit",
    textDecoration: "none",
    cursor: "pointer",
  },
});

function App() {
  const classes = useStyles();

  const Credits = () => {
    return (
      <motion.div
        className={classes.creditsContainer}
        initial={{
          display: "none",
        }}
        animate={{
          display: "block",
        }}
        transition={{
          delay: 6,
        }}
      >
        <div className={classes.creditsWrapper}>
          <div className={classes.creditsContent}>
            <p className={classes.creditsTitle}>presented by</p>
            <motion.a
              whileHover={{
                color: "green",
                scale: "1.2",
                originX: 0,
              }}
              className={classes.name}
              href="https://github.com/atul-gairola"
              target="_blank"
            >
              atulgairola
            </motion.a>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="App">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 3.5, duration: 2, type: "tween" }}
        className={classes.heading}
      >
        <h2 className={classes.hello}>
          HELLO
          <br />
          <span className={classes.world}>WORLD</span>
        </h2>
      </motion.div>
      <Credits />
      <svg
        className={classes.svgBlackBg}
        viewBox="0 0 1535 759"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1535.5 0H0V759H109.75H219.5C283.833 646.833 493.4 432.2 817 471C1334.5 493.5 1328.5 260 1535.5 0Z"
          fill="#0F1014"
        />
      </svg>
      <BlurSvg1 />
      <BlurSvg2 />
      <Wave1 />
      <Wave2 />
      <motion.svg
        animate={{
          y: 400,
        }}
        transition={{
          delay: 4,
          type: "spring",
          stiffness: 5,
          when: "beforeChildren",
          staggerChildren: 0.3,
        }}
        className={classes.circle}
        width="243"
        height="209"
        viewBox="0 0 243 209"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="121.5" cy="87.5" r="121.5" fill="#F8F8F8" />
      </motion.svg>
    </div>
  );
}

export default App;
