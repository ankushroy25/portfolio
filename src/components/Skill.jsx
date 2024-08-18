import React from "react";
import { Grid } from "@mui/material";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiFirebase,
  SiAmazonaws,
  SiGooglecloud,
  SiExpress,
  SiNextdotjs,
  SiGraphql,
  SiTypescript,
  SiCplusplus,
  SiDocker,
  SiKubernetes,
  SiGo,
} from "react-icons/si";
import { motion } from "framer-motion";

const IconsData = [
  DiJavascript1,
  SiTypescript,
  DiJava,
  DiPython,
  SiCplusplus,
  SiGo,
  SiAmazonaws,
  SiGooglecloud,
  DiNodejs,
  SiExpress,
  DiMongodb,
  DiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiDocker,
  SiKubernetes,
  SiFirebase,

  SiGraphql,
];

function Skill() {
  // const [isHovered, setIsHovered] = React.useState(false);

  // const leftToRightAnimation = {
  //   hidden: { x: -100 }, // Start position, hidden to the left
  //   visible: { x: 0 }, // Final position, visible on the screen
  // };
  // const rightToLeftAnimation = {
  //   hidden: { x: 200 }, // Start position, hidden to the left
  //   visible: { x: 0 }, // Final position, visible on the screen
  // };

  return (
    <div
      className="w-full text-gray-300"
      // onMouseEnter={() => setIsHovered(true)}
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="py-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Skills
          </p>
        </div>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={8}
          className="p-4 mx-auto"
        >
          {IconsData.map((IconComponent, index) => (
            <Grid item xs={4} md={2} className="tech-icons" key={index}>
              {/* <motion.div
                initial="hidden"
                animate={isHovered ? "visible" : "hidden"}
                variants={leftToRightAnimation}
                transition={{ duration: 0.5 }}
              > */}
              <motion.div
                initial={{ opacity: 0.75 }}
                whileHover={{ scale: 1.2, opacity: 1 }}
              >
                <IconComponent className="h-10 w-10 sm:h-16 sm:w-16" />
              </motion.div>
              {/* </motion.div> */}
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Skill;
