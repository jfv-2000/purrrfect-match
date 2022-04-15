import React from "react";
import ImageLogo from "../../utils/Logo/logo.png";
import { Box, Image } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Image src={ImageLogo} boxSize="38px" alt="logo" />
    </Box>
  );
}
