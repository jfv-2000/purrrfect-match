import React from "react";
import {
  Box,
  Flex,
  Text,
  Stack,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import { AiFillHome } from "react-icons/ai";
import { MdPets } from "react-icons/md";
import Logo from "./Logo";

export default function NavBar() {
  return (
    <Box>
      <Flex
        color={useColorModeValue("black", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderStyle={"solid"}
        bg="#5B9EA6"
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("white")}
            href="/"
          >
            <Logo ml="25px" />
          </Link>

          <Flex ml={10} alignContent="right">
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("white");
  const linkHoverColor = useColorModeValue("gray.800");
  const popoverContentBgColor = useColorModeValue("white");

  return (
    <Stack direction={"row"} spacing="6" my="auto">
      <Box
        _hover={{
          textDecoration: "underline",
        }}
      >
        <Popover trigger={"hover"} placement={"bottom-start"}>
          <PopoverTrigger>
            <Link
              p={2}
              href={"/"}
              fontSize={"md"}
              fontWeight={1000}
              color={linkColor}
              mr="10px"
              _hover={{
                textDecoration: "none",
                color: linkHoverColor,
              }}
            >
              <Icon as={AiFillHome} boxSize="5" mr="5px" />
              Home
            </Link>
          </PopoverTrigger>
        </Popover>
        <Popover trigger={"hover"} placement={"bottom-start"}>
          <PopoverTrigger>
            <Link
              p={2}
              href={"/match"}
              fontSize={"md"}
              mr="10px"
              fontWeight={1000}
              color={linkColor}
              _hover={{
                textDecoration: "none",
                color: linkHoverColor,
              }}
            >
              <Icon as={MdPets} boxSize="5" mr="5px" />
              Find Pet
            </Link>
          </PopoverTrigger>

          <PopoverContent
            border={0}
            boxShadow={"xl"}
            bg={popoverContentBgColor}
            p={4}
            rounded={"xl"}
            minW={"sm"}
          >
            <Stack>
              <DesktopSubNav
                label="Matchmaking"
                href="/match"
                subLabel="Match with other pets in an interactive way"
              />
              <DesktopSubNav
                label="View list"
                href="/grid"
                subLabel="View a list of pets and search for the right one"
              />
            </Stack>
          </PopoverContent>
        </Popover>
        <Popover trigger={"hover"} placement={"bottom-start"}>
          <PopoverTrigger>
            <Link
              p={2}
              href={"#"}
              fontSize={"md"}
              mr="10px"
              fontWeight={1000}
              color={linkColor}
              _hover={{
                textDecoration: "none",
                color: linkHoverColor,
              }}
            >
              <Icon as={SettingsIcon} boxSize="5" mr="5px" />
              Settings
            </Link>
          </PopoverTrigger>

          <PopoverContent
            border={0}
            boxShadow={"xl"}
            bg={popoverContentBgColor}
            p={4}
            rounded={"xl"}
            minW={"sm"}
          >
            <Stack>
              <DesktopSubNav
                label="Preferences"
                href="#"
                subLabel="Modify your ideal pet preferences to find the right one"
              />
              <DesktopSubNav
                label="Account Settings"
                href="#"
                subLabel="View and change settings related to your account"
              />
            </Stack>
          </PopoverContent>
        </Popover>
      </Box>
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("blue.50", "blue.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "blue.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        ></Flex>
      </Stack>
    </Link>
  );
};
