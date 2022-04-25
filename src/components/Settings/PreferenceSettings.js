import React, { useState } from "react";
import {
  Flex,
  Box,
  Text,
  Container,
  Tabs,
  Tab,
  TabPanel,
  TabList,
  TabPanels,
  Select,
  Button,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Slider } from "@material-ui/core";
import TraitTag from "./TraitTag";

export default function PreferenceSettings(props) {
  const [age, setAge] = useState([0, 20]);
  const handleAge = (event, newAge) => {
    setAge(newAge);
  };

  return (
    <Flex>
      <Box
        bg="#A9D4D9"
        w="1000px"
        h="500px"
        my="60px"
        mx="auto"
        pt="20px"
        pr="20px"
        borderRadius={8}
      >
        <Container bg="#EBF0F2" w="240px" ml="0" mt="10px">
          <Text fontSize="3xl" fontWeight="700">
            {" "}
            My Preferences
          </Text>
        </Container>
        <Container mt="20px" ml="70px">
          <Tabs variant="enclosed" w="800px" size="lg">
            <TabList>
              <Tab fontWeight="600">Animal Type</Tab>
              <Tab fontWeight="600">Animal Traits</Tab>
            </TabList>
            <TabPanels>
              <TabPanel bg="#EBF0F2" borderRadius={8} mt="5px">
                <Text fontSize="lg" fontWeight="600" as="u">
                  Select the type of animal which fits your preferences
                </Text>
                <Text mt="10px" fontSize="lg">
                  Race:
                </Text>
                <Select
                  w="200px"
                  placeholder="Select animal race"
                  borderColor="black"
                >
                  <option value="option1">Dogs</option>
                  <option value="option2">Cats</option>
                </Select>
                <Text mt="10px" fontSize="lg">
                  Gender:
                </Text>
                <Select
                  w="200px"
                  placeholder="Select gender"
                  borderColor="black"
                >
                  <option value="option1">Male</option>
                  <option value="option2">Female</option>
                </Select>
                <Text mt="10px" fontSize="lg">
                  Age Range:
                </Text>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  step={1}
                  min={0}
                  value={age}
                  onChange={handleAge}
                  marks={true}
                  max={20}
                  valueLabelDisplay="auto"
                />
              </TabPanel>
              <TabPanel>
                <Text mt="10px" fontSize="lg" fontWeight="600" ml="20px" as="u">
                  Select your favorite traits for your match:
                </Text>
                <Container
                  borderRadius={8}
                  w="500px"
                  h="206px"
                  mt="25px"
                  pt="10px"
                  ml="20px"
                  bg="#EBF0F2"
                >
                  <Wrap spacing="12px" mb="10px">
                    <WrapItem mr="20px">
                      <TraitTag trait="Active" />
                    </WrapItem>
                    <WrapItem>
                      <TraitTag trait="Loyal" />
                    </WrapItem>
                    <WrapItem>
                      <TraitTag trait="Energetic" />
                    </WrapItem>
                    <WrapItem>
                      <TraitTag trait="Loving" />
                    </WrapItem>
                    <WrapItem>
                      <TraitTag trait="Sleepy" />
                    </WrapItem>
                    <WrapItem>
                      <TraitTag trait="Smart" />
                    </WrapItem>
                    <WrapItem>
                      <TraitTag trait="Brave" />
                    </WrapItem>
                    <WrapItem>
                      <TraitTag trait="Friendly" />
                    </WrapItem>
                    <WrapItem>
                      <TraitTag trait="Reserved" />
                    </WrapItem>
                    <WrapItem>
                      <TraitTag trait="Affectionate" />
                    </WrapItem>
                    <WrapItem>
                      <TraitTag trait="Quiet" />
                    </WrapItem>
                    <WrapItem>
                      <TraitTag trait="Loud" />
                    </WrapItem>
                    <WrapItem>
                      <TraitTag trait="Dependent" />
                    </WrapItem>
                    <WrapItem>
                      <TraitTag trait="Cat Friendly" />
                    </WrapItem>
                    <WrapItem>
                      <TraitTag trait="Dog Friendly" />
                    </WrapItem>
                    <WrapItem>
                      <TraitTag trait="Gentle" />
                    </WrapItem>
                    <WrapItem>
                      <TraitTag trait="Protective" />
                    </WrapItem>
                    <WrapItem>
                      <TraitTag trait="Easy going" />
                    </WrapItem>
                    <WrapItem>
                      <TraitTag trait="Excited" />
                    </WrapItem>
                  </Wrap>
                </Container>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Container ml="650px" mt="10px">
            <Button colorScheme="teal" variant="outline" mr="20px">
              Cancel
            </Button>
            <Button
              colorScheme="teal"
              variant="solid"
              _click={{
                bg: "black",
                borderColor: "#000000",
              }}
            >
              Save
            </Button>
          </Container>
        </Container>
      </Box>
    </Flex>
  );
}
