import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

const Mobiletech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h3 className={`${styles.sectionHeadText} ${window.innerWidth > 762 ? "" : "mt-10"}`}>Languages and Technologies.</h3>
      </motion.div>
      <div className='mt-20 flex flex-nowrap gap-7 overflow-x-auto' style={{ width: "100%" }}>
        {technologies.map((technology) => (
          <img src={technology.icon} style={{ height: "100px", width: "100px" }} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Mobiletech, "");