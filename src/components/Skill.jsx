import React from "react";
import { Grid } from "@mui/material";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiFirebase,
  SiAmazonaws,
  SiGooglecloud,
  SiExpress,
} from "react-icons/si";
// import { motion } from "framer-motion";

const IconsData = [
  DiJavascript1,
  DiJava,
  SiAmazonaws,
  SiGooglecloud,
  SiTailwindcss,
  DiNodejs,
  DiReact,
  DiPython,
  DiMongodb,
  DiGit,
  SiFirebase,
  SiExpress,
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
          className="p-4 mx-auto md:px-24"
        >
          {IconsData.map((IconComponent, index) => (
            <Grid item xs={4} md={2} className="tech-icons" key={index}>
              {/* <motion.div
                initial="hidden"
                animate={isHovered ? "visible" : "hidden"}
                variants={leftToRightAnimation}
                transition={{ duration: 0.5 }}
              > */}
              <IconComponent />
              {/* </motion.div> */}
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Skill;
