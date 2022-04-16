import React, { useState } from "react";
import { Button } from "@chakra-ui/react";

export default function TraitTag(props) {
  const [btnVariant, setBtnVariant] = useState("outline");

  return (
    <Button
      borderRadius={12}
      colorScheme="teal"
      size="sm"
      variant={btnVariant}
      onClick={() => {
        btnVariant === "solid"
          ? setBtnVariant("outline")
          : setBtnVariant("solid");
      }}
    >
      {props.trait}
    </Button>
  );
}
