import React from "react";
import { Grid } from "@mui/material"; // Import Grid from Material-UI
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

function Skill() {
  return (
    <div className="w-full text-gray-300">
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
          className="mx-auto px-24"
        >
          <Grid item xs={4} md={2} className="tech-icons">
            <DiJavascript1 />
          </Grid>
          <Grid item xs={4} md={2} className="tech-icons">
            <DiJava />
          </Grid>
          <Grid item xs={4} md={2} className="tech-icons">
            <SiAmazonaws />
          </Grid>
          <Grid item xs={4} md={2} className="tech-icons">
            <SiGooglecloud />
          </Grid>
          <Grid item xs={4} md={2} className="tech-icons">
            <SiTailwindcss />
          </Grid>

          <Grid item xs={4} md={2} className="tech-icons">
            <DiNodejs />
          </Grid>
          <Grid item xs={4} md={2} className="tech-icons">
            <DiReact />
          </Grid>
          <Grid item xs={4} md={2} className="tech-icons">
            <DiPython />
          </Grid>

          <Grid item xs={4} md={2} className="tech-icons">
            <DiMongodb />
          </Grid>
          <Grid item xs={4} md={2} className="tech-icons">
            <DiGit />
          </Grid>
          <Grid item xs={4} md={2} className="tech-icons">
            <SiFirebase />
          </Grid>
          <Grid item xs={4} md={2} className="tech-icons">
            <SiExpress />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Skill;
