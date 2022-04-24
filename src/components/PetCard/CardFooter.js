import React from "react";
import "../../styles/CardFooter.css";
import CheckIcon from "@material-ui/icons/Check";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import StarIcon from "@material-ui/icons/Star";
import { Container } from "@chakra-ui/react";

function CardFooter() {
  return (
    <Container
      className="cardFooter"
      position="absolute"
      mt="520px"
      justifyContent="space-evenly"
      w="100%"
    >
      <IconButton>
        <ClearIcon style={{ fontSize: 40 }} className="cardFooter__clearIcon" />
      </IconButton>

      <IconButton>
        <StarIcon style={{ fontSize: 40 }} className="cardFooter__starIcon" />
      </IconButton>

      <IconButton>
        <CheckIcon style={{ fontSize: 40 }} className="cardFooter__checkIcon" />
      </IconButton>
    </Container>
  );
}

export default CardFooter;
