import React from "react";
import { Image, SimpleGrid, Box, Text, Container, Button, Link  } from '@chakra-ui/react'
import Pets from "../utils/PetDb/pet-grid-db";

export default function PetGrid(Pet) {
    return (
        <SimpleGrid columns={[1, null, 2, null, 3]} spacing="40px" padding="20px">
            {Pets.map((i) => {
                return (

                        <Box bg='#A9D4D9' height='200px' width="400px" borderRadius="8px" padding="11px 0px">
                            <Container position="absolute">
                            <Image
                                borderRadius="8px"
                                boxSize="175px"
                                src={i.image}
                            />
                            </Container>
                            <Container padding="0px 0px 0px 200px" >
                                <Text bg="rgba(235, 240, 242, 0.7)" fontSize="3xl" fontWeight="bold">{i.name}</Text>
                            </Container>
                            <Container padding="80px 0px 0px 235px" >
                                <Link href="/" style={{ textDecoration: 'none' }}>
                                    <Button colorScheme='teal' size='lg'>
                                      View Pet
                                    </Button>
                                </Link>
                            </Container>
                        </Box>
                );
            })}
        </SimpleGrid>
    );
}