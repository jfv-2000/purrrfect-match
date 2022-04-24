import React from "react";
import { Flex, Text, Image, VStack, Container, Button } from "@chakra-ui/react";
import FillerImage from "../utils/Filler/filler-1.png";
export default function Home() {
  return (
    <Flex align="center" justify="center">
      <VStack>
        <Container maxWidth="6xl" mt="70px">
          <Text fontSize="6xl" fontWeight="bold" align="center">
            Find your Purrrfect Match today.
          </Text>
          <Text fontSize="2xl" align="center">
            Match with your best friend, according to your needs and theirs!
          </Text>
        </Container>

        <Container maxWidth="5xl">
          <Image src={FillerImage} />
        </Container>

        <Button size="md" colorScheme="teal">
          Start here
        </Button>
      </VStack>
    </Flex>
  );
}
