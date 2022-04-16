import React from "react";
import { Flex, Text, Image, VStack, Container, Button } from "@chakra-ui/react";
import FillerImage from "../utils/Filler/filler-1.png";
export default function Home() {
  return (
    <Flex align="center" justify="center">
      <VStack>
        <Container maxWidth="4xl" mt="40px">
          <Text fontSize="4xl" fontWeight="bold" align="center">
            Find your Purrrfect Match today.
          </Text>
        </Container>

        <Container maxWidth="3xl">
          <Image src={FillerImage} />
        </Container>

        <Button size="md" colorScheme="teal">
          Start here
        </Button>
      </VStack>
    </Flex>
  );
}
