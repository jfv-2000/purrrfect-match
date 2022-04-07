import React from "react";
import Image from "../../utils/Depressed-dog-logo.png";
import { Box } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box {...props}>
      <img src={Image} width="60px" height="60px" alt="logo" />
    </Box>
  );
}
