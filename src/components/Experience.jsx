import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <div name="experience" className="w-full md:h-screen text-gray-300 ">
      <div className="max-w-[1000px] mx-auto p-4 mt-12 flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Experience
          </p>
          <p className="py-6 text-xl">Always looking to collaborate</p>
          <Box py={8} className="mx-12 md:mx-auto">
            <Grid container justifyContent="center" spacing={8}>
              <Grid item xs={12} md={6}>
                <div className="p-10 h-full w-full bg-rose-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 exp-card">
                  <Box display="flex" alignItems="center">
                    <FaBriefcase size={25} className="hidden sm:visible mr-2" />
                    <Typography variant="h4" color="ButtonShadow">
                      Contributor
                    </Typography>
                  </Box>
                  <Typography variant="subtitle1" color="palegreen">
                    Hacktoberfest - October 2022
                  </Typography>
                  <br />
                  <Typography variant="body1">
                    Contributed to basic web projects on HTML, CSS and
                    JavaScript. Also worked on improving documentations and
                    Readme files of some projects.
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className="p-12 h-full w-full bg-rose-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 exp-card">
                  <Box display="flex" alignItems="center">
                    <FaBriefcase size={25} className="hidden sm:visible mr-2" />
                    <Typography variant="h4" color="ButtonShadow">
                      Contributor
                    </Typography>
                  </Box>
                  <Typography variant="subtitle1" color="palegreen">
                    Social Winter of Code - December 2022
                  </Typography>
                  <br />
                  <Typography variant="body1">
                    Contributed to frontend projects which used mostly React
                    Js,Tailwind, Material UI and Redux.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Experience;
