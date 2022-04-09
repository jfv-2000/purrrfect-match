import React from "react";
import {
  Box,
  Flex,
  Text,
  Container,
  Image,
  SimpleGrid,
  Tag,
  Wrap,
  WrapItem,
  Icon,
  Progress,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { IoIosCloseCircle } from "react-icons/io";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DogExample from "../../utils/PetDb/Pet-database";

import TinderCard from "react-tinder-card";



export default function PetCard(Pet) {
  var settings = {
    dots: true,
  };

  const swiped = (direction, nameToDelete) => {
    console.log("swiped on:" + nameToDelete);
  }
  
  
  const outOfWindow = (name) => {
    console.log(name + "is gone");
  }

  return (
    <Flex>
      <Box
        bg="#A9D4D9"
        w="1000px"
        h="500px"
        my="60px"
        ml="auto"
        mr="auto"
        pt="20px"
        pr="20px"
        borderRadius={8}
      >
        <SimpleGrid columns={2} spacing={2}>
          <Container ml="20px" w="400px" h="500px" position="relative">
            <Slider {...settings}>
              {DogExample.Pictures.map((link, i) => {
                return (
                  <Image
                    borderRadius="8px"
                    boxSize="450px"
                    src={link}
                    key={{ i }}
                  />
                );
              })}
            </Slider>
            <Container
              w="60%"
              bottom="70px"
              right="15px"
              borderRadius={3}
              position="absolute"
              zIndex={1}
              bg="rgba(235, 240, 242, 0.7)"
            >
              <Wrap spacing="1px">
                <WrapItem>
                  {" "}
                  <Text fontSize="3xl" fontWeight="bold">
                    {DogExample.Gender === "Male" ? (
                      <Icon as={BsGenderMale} boxSize={6} color="blue.600" />
                    ) : (
                      <Icon as={BsGenderFemale} boxSize={6} color="red.600" />
                    )}
                    {DogExample.Name}, {DogExample.Age} y.o.
                  </Text>
                </WrapItem>
                <WrapItem>
                  <Text fontSize="xl">
                    {DogExample.Type}, {DogExample.Distance} km away
                  </Text>
                </WrapItem>
              </Wrap>
            </Container>
          </Container>
          <Container w="470px">
            <Text fontSize="2xl" as="u">
              About Me
            </Text>
            <Text fontSize="xl" mb="10px">
              {DogExample.About}
            </Text>
            <Text fontSize="2xl" as="u">
              Traits
            </Text>
            <Wrap spacing="12px" mb="10px">
              {DogExample.Traits.map((trait, i) => {
                return (
                  <WrapItem>
                    <Tag borderRadius={12} size="lg" key={i}>
                      {trait}
                    </Tag>
                  </WrapItem>
                );
              })}
            </Wrap>
            <Text fontSize="2xl" as="u">
              Characteristics
            </Text>
            <Wrap spacing="12px" mb="10px">
              {DogExample.PositiveCharacteristics.map((pos_char, i) => {
                return (
                  <WrapItem mr="20px">
                    <Text fontSize="lg" key={i}>
                      <CheckCircleIcon boxSize={5} color="green.500" />{" "}
                      {pos_char}
                    </Text>
                  </WrapItem>
                );
              })}
              {DogExample.NegativeCharacteristics.map((neg_char, i) => {
                return (
                  <WrapItem mr="20px">
                    <Text fontSize="lg">
                      <Icon as={IoIosCloseCircle} boxSize={7} color="red.500" />{" "}
                      {neg_char}
                    </Text>
                  </WrapItem>
                );
              })}
            </Wrap>
            <Text fontSize="2xl" as="u">
              Upkeep
            </Text>
            {DogExample.Upkeep.map((item, i) => {
              return (
                <Box>
                  <Text fontSize="md">{item.Type}</Text>
                  <Progress
                    value={item.Level}
                    size="md"
                    borderRadius={8}
                    colorScheme="pink"
                  />
                </Box>
              );
            })}
          </Container>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
