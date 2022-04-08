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
  Tag,
  HStack,
  Wrap,
  WrapItem,
  Checkbox,
  Icon,
  Progress,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { IoIosCloseCircle } from "react-icons/io";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

export default function PetCard() {
  var settings = {
    dots: true,
  };
  return (
    <Flex>
      <Box
        bg="#A9D4D9"
        w="1000px"
        h="500px"
        ml="auto"
        mr="auto"
        pt="20px"
        pr="20px"
        borderRadius={8}
      >
        <SimpleGrid columns={2} spacing={2}>
          <Container ml="20px" w="400px" h="500px" position="relative">
            <Slider {...settings}>
              <Image
                borderRadius="8px"
                src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
                boxSize="450px"
              />
              <Image
                borderRadius="8px"
                src="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg"
                boxSize="450px"
              />
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
                    <Icon as={BsGenderMale} boxSize={6} color="blue.600" />{" "}
                    Harry, 5
                  </Text>
                </WrapItem>
                <WrapItem>
                  <Text fontSize="xl">Large Husky-x Dog, 69 km away</Text>
                </WrapItem>
              </Wrap>
            </Container>
          </Container>
          <Container w="470px">
            <Text fontSize="2xl" as="u">
              About Me
            </Text>
            <Text fontSize="xl" mb="10px">
              Woof woof woof owfowofwo fwof wof owfo wfowfowofwofwo owow ow
              owowo dig dig dig dig
            </Text>
            <Text fontSize="2xl" as="u">
              Traits
            </Text>
            <Wrap spacing="12px" mb="10px">
              <WrapItem>
                <Tag borderRadius={12} size="lg">
                  Loyal
                </Tag>
              </WrapItem>
              <WrapItem>
                <Tag borderRadius={12} size="lg">
                  Energetic
                </Tag>
              </WrapItem>
              <WrapItem>
                <Tag borderRadius={12} size="lg">
                  Ligma
                </Tag>
              </WrapItem>
            </Wrap>
            <Text fontSize="2xl" as="u">
              Characteristics
            </Text>
            <Wrap spacing="12px" mb="10px">
              <WrapItem mr="20px">
                <Text fontSize="lg">
                  <CheckCircleIcon boxSize={5} color="green.500" /> Dog Friendly
                </Text>
              </WrapItem>
              <WrapItem>
                <Text fontSize="lg">
                  <Icon as={IoIosCloseCircle} boxSize={7} color="red.500" />{" "}
                  Children 12+
                </Text>
              </WrapItem>
              <WrapItem>
                <Text fontSize="lg">
                  <Icon as={IoIosCloseCircle} boxSize={7} color="red.500" /> Cat
                  friendly
                </Text>
              </WrapItem>
            </Wrap>
            <Text fontSize="2xl" as="u">
              Upkeep
            </Text>
            <Text fontSize="md">
              Energy level
              <Progress
                value={20}
                size="md"
                borderRadius={8}
                colorScheme="pink"
              />
            </Text>
            <Text fontSize="md">
              Fatness
              <Progress
                value={60}
                size="md"
                borderRadius={8}
                colorScheme="pink"
              />
            </Text>
          </Container>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
