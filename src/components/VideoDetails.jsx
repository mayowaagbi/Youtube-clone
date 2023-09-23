import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { fetchFromAPI } from "../utils/FetchFromApi";
import Videos from "./Videos";
import "./Generel.css";

function VideoDetails() {
  const [videoDetails, setVideoDetails] = useState(null);
  const [videoList, setVideoList] = useState(null); // Renamed Videos to videoList
  const { id } = useParams(); // Call useParams as a function to get the id parameter

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetails(data.items[0])
    );
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideoList(data.items) // Updated Videos to videoList
    );
  }, [id]);

  if (!videoDetails?.snippet) return "Loading..."; // Use a loading indicator here

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetails;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ sx: "column", md: "row" }}>
        <Box sx={{ top: "86px", outline: "2px solid limegreen" }}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
          />
          <Typography
            sx={{ color: "#fff" }}
            variant="h5"
            fontWeight="bold"
            p={2}
          >
            {title}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ color: "#3FFF" }}
          >
            <Link to={`/channel${channelId}`}>
              <Typography
                variant={{ sm: "subtitle1", md: "h6" }} // Removed color prop
              >
                {channelTitle}
                <CheckCircle
                  sx={{
                    fontSize: "12px",
                    color: "grey",
                    ml: "5px",
                  }}
                />
              </Typography>
            </Link>
            <Stack direction="row" gap="20px" alignItems="center">
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                {parseInt(viewCount).toLocaleString()} views
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                {parseInt(likeCount).toLocaleString()} Likes
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videoList} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
}

export default VideoDetails;
