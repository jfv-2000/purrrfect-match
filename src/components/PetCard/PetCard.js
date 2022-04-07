import React from "react";
import {
  Box,
  Flex,
  Text,
  Container,
  Image,
  Grid,
  GridItem,
  SimpleGrid,
} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

export default function PetCard() {
  var settings = {
    dots: true,
  };
  return (
    <Flex p="50px">
      <Box bg="#A9D4D9" w="50%" h="500px" ml="auto" mr="auto" borderRadius={8}>
        <SimpleGrid columns={2} spacing={2}>
          <Container ml="20px" w="400px" h="500px">
            <Slider {...settings}>
              <Image
                borderRadius="8px"
                src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
                boxSize="475px"
              />
              <Image
                borderRadius="8px"
                src="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg"
                boxSize="475px"
              />
            </Slider>
          </Container>
          <Text fontSize="4xl">bonjour</Text>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
