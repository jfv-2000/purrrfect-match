import React from "react";
import PetCard from "./PetCard";
import {
  Box,
  ModalContent,
  Modal,
  ModalOverlay,
  useDisclosure,
  Button,
  Text,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import "../../styles/PetCard.css";

export default function PetCardModal(pet) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Button size="sm" mb="5px" ml="185px" onClick={onOpen}>
        <Text>Additional Information</Text>
        <InfoIcon w={5} h={5} ml="5px" />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="blackAlpha.700"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent maxW="1000px" maxH="500px">
          <PetCard {...pet} />
        </ModalContent>
      </Modal>
    </Box>
  );
}
