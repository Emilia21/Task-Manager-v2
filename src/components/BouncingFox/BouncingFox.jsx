import React from "react";
import { fox } from "../../images/";
import { motion } from "framer-motion";
import styles from "./styles.css";

const bounceTransition = {
  y: {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeOut",
  },
  backgroundColor: {
    duration: 0,
    yoyo: Infinity,
    ease: "easeOut",
    repeatDelay: 0.8,
  },
};

function BouncingFox() {
  return (
    <motion.img
      src={fox.default}
      alt="fox"
      className="fox"
      transition={bounceTransition}
      animate={{
        y: ["20%", "-10%"],
      }}
    />
  );
}

export default BouncingFox;
