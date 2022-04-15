import React from "react";
import TinderCard from "react-tinder-card";
import CardFooter from "../PetCard/CardFooter";
import Animals from "../../utils/PetDb/Pet-database";
import PetCard from "../PetCard/PetCard";
import { Box, Container } from "@chakra-ui/react";
import "../../styles/PetCard.css";

function MatchSwipe() {
  const swiped = (direction, nameToDelete) => {
    console.log("swiped on:" + nameToDelete);
  };

  const outOfWindow = (name) => {
    console.log(name + " is gone");
  };

  return (
    <Box>
      <Container className="cardContainer">
        {Animals.map((pet, i) => {
          console.log("character dab", pet.Name);
          return (
            <TinderCard
              className="swipe"
              key={i}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, pet.Name)}
              onCardLeftScreen={() => outOfWindow(pet.Name)}
            >
              <PetCard {...pet} className="card" />
            </TinderCard>
          );
        })}
        <CardFooter />
      </Container>
    </Box>
  );
}

export default MatchSwipe;
