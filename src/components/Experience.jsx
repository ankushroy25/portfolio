import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const Experience = () => {
  return (
    <div name="experience" className="w-full text-gray-300 ">
      <div className="max-w-[1000px] mx-auto p-4 mt-16 flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Experience
          </p>
          <p className="py-6 text-xl">Always looking to collaborate</p>
          <Box pb={8} className="mx-12 md:mx-auto">
            <Grid container justifyContent="center" spacing={4}>
              <Grid item xs={12}>
                <div className="p-4 h-full w-full bg-rose-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 exp-card">
                  <Typography variant="body1" fontWeight="bold">
                    Ex-Core team member as the Front-end Associate at Google
                    Developer Students’ Club HITK.
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="p-4 h-full w-full bg-rose-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 exp-card">
                  <Typography variant="body1" fontWeight="bold">
                    Guided 130 students with Google Cloud as the campus
                    facilitator of Cloud Study Jams program under GDSC-HIT
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="p-4 h-full w-full bg-rose-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 exp-card">
                  <Typography variant="body1" fontWeight="bold">
                    Finalist at Smart India Hackathon 2023.
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="p-4 h-full w-full bg-rose-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 exp-card">
                  <Typography variant="body1" fontWeight="bold">
                    Contributed to open source projects in programs like
                    Hacktoberfest and Social Winter of Code.{" "}
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
