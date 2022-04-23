import React from "react";
import { Box, Text, Container, Image, SimpleGrid, Wrap, WrapItem, Icon, Button } from '@chakra-ui/react'
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import Slider from "react-slick";
import Animals from "../utils/PetDb/Pet-database";

export default function PetGrid(Pet) {
    var settings = {
        dots: true,
      };
    return (
        <>
        <SimpleGrid columns={[1, 2, 3, 4]} spacing="40px" padding="10px" minChildWidth="440px">
        {Animals.map((DogExample) => {
          return (
            <Box bg='#A9D4D9' height='490px' width="440px" borderRadius="20px" padding="11px 0px">
            <Container ml="20px" w="400px" h="500px" position="relative">
            <Slider {...settings}>
              {DogExample.Pictures.map((link, i) => {
                return (
                  <Image
                    borderRadius="20px"
                    height="450px"
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
            </Box>
            );
          })}
        </SimpleGrid>
        <Container width="139px" padding="10px">
          <Button colorScheme='teal' size='md' borderRadius="10px" position="center">
            Load more v
          </Button>
        </Container>
        </>
    );
}