import React from "react";
import { makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";

const useStyles = makeStyles({
  wave: {
    position: "absolute",
    zIndex: -24,
    top: "0px",
  },
});

export default function Wave1() {
  const classes = useStyles();

  return (
    <motion.svg
      initial={{
        y: "-100vh",
      }}
      animate={{
        rotate: 5,
        y: 0,
      }}
      transition={{ delay: 1, type: "spring", stiffness: 12 }}
      className={classes.wave}
      width="1704"
      height="935"
      viewBox="0 0 1704 835"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.145887 828.958L58.4522 827.949C122.561 692.105 334.529 430.621 669.528 471.432C1085.15 485.242 1171.17 319.103 1286.61 96.1219C1302.54 65.3483 1319.03 33.4921 1337.03 0.876905L1703.19 21.2299C1644.62 86.9077 1598.7 151.722 1555.92 212.117C1406.83 422.555 1295.74 579.349 819.982 532.119C438.73 464.797 176.032 705.377 92.3392 834.082L0.145887 828.958Z"
        fill="#E0E0E0"
      />
    </motion.svg>
  );
}
