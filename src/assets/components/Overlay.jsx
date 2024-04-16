import React from "react";
import { Scroll, ScrollControls } from "@react-three/drei";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  ChakraProvider,
  Container,
  Grid,
  GridItem,
  Heading,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react";

const Overlay = () => {
  return (
    <Scroll html style={{ width: "100%" }}>
      <ChakraProvider>
        {/* Main title */}
        <Container
          maxW="100%"
          h="100vh"
          //bg="orange"
          style={{
            position: "absolute",
            top: `0vh`,
            left: "0vw",
          }}
        >
          <Heading
            as="h1"
            fontSize="8xl"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate3d(-50%,-50%, 0)",
            }}
          >
            Creative Coding
          </Heading>
        </Container>
        {/* Section A */}
        <Container
          maxW="100%"
          h="100vh"
          style={{
            position: "absolute",
            top: `100vh`,
            left: "0vw",
          }}
        >
          <Grid
            h="100%"
            templateRows="repeat(7, 1fr)"
            templateColumns="repeat(12, 1fr)"
          >
            <GridItem
              colStart={8}
              rowStart={3}
              colSpan={4}
              rowSpan={3}
              padding="50px"
              bg="orange"
            >
              <Stack spacing={5}>
                <Heading as="h1" fontSize="4xl">
                  ¿Qué es creative coding?
                </Heading>
                <Box>
                  <Text fontSize="lg" align="justify">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Porro aperiam doloribus ducimus laborum tempore ratione eum
                    a obcaecati, similique debitis exercitationem incidunt
                    facere tempora eligendi quasi perspiciatis vel illo
                    consequuntur? Nemo voluptate explicabo aspernatur ullam,
                    quos amet blanditiis consequuntur magni cumque, ipsa
                    doloribus modi rerum.
                  </Text>
                </Box>
              </Stack>
            </GridItem>
          </Grid>
        </Container>
        {/* Section B */}
        <Container
          maxW="100%"
          h="100vh"
          style={{
            position: "absolute",
            top: `200vh`,
            left: "0vw",
          }}
        >
          <Grid
            h="100%"
            templateRows="repeat(7, 1fr)"
            templateColumns="repeat(12, 1fr)"
          >
            <GridItem
              colStart={2}
              rowStart={3}
              colSpan={4}
              rowSpan={3}
              padding="50px"
              bg="salmon"
            >
              <Stack spacing={5}>
                <Heading as="h1" fontSize="4xl">
                  ¿Para qué sirve?
                </Heading>
                <Box>
                  <Text fontSize="lg" align="justify">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Porro aperiam doloribus ducimus laborum tempore ratione eum
                    a obcaecati, similique debitis exercitationem incidunt
                    facere tempora eligendi quasi perspiciatis vel illo
                    consequuntur? Nemo voluptate explicabo aspernatur ullam,
                    quos amet blanditiis consequuntur magni cumque, ipsa
                    doloribus modi rerum.
                  </Text>
                </Box>
              </Stack>
            </GridItem>
          </Grid>
        </Container>
        {/* Section C */}
        <Container
          maxW="100%"
          h="100vh"
          style={{
            position: "absolute",
            top: `300vh`,
            left: "0vw",
          }}
        >
          <Grid
            h="100%"
            templateRows="repeat(7, 1fr)"
            templateColumns="repeat(12, 1fr)"
          >
            <GridItem
              colStart={8}
              rowStart={3}
              colSpan={4}
              rowSpan={3}
              padding="50px"
              bg="skyblue"
            >
              <Stack spacing={5}>
                <Heading as="h1" fontSize="4xl">
                  ¿Quiénes lo emplean?
                </Heading>
                <Box>
                  <Text fontSize="lg" align="justify">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Porro aperiam doloribus ducimus laborum tempore ratione eum
                    a obcaecati, similique debitis exercitationem incidunt
                    facere tempora eligendi quasi perspiciatis vel illo
                    consequuntur? Nemo voluptate explicabo aspernatur ullam,
                    quos amet blanditiis consequuntur magni cumque, ipsa
                    doloribus modi rerum.
                  </Text>
                </Box>
              </Stack>
            </GridItem>
          </Grid>
        </Container>
        {/* Section D */}
        <Container
          maxW="100%"
          h="100vh"
          style={{
            position: "absolute",
            top: `400vh`,
            left: "0vw",
          }}
        >
          <Grid
            h="100%"
            templateRows="repeat(7, 1fr)"
            templateColumns="repeat(12, 1fr)"
          >
            <GridItem
              colStart={2}
              rowStart={3}
              colSpan={4}
              rowSpan={3}
              padding="50px"
              bg="aquamarine"
            >
              <Stack spacing={5}>
                <Heading as="h1" fontSize="4xl" noOfLines={1}>
                  ¿Cuáles son sus oportunidades?
                </Heading>
                <Box>
                  <Text fontSize="lg" align="justify">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Porro aperiam doloribus ducimus laborum tempore ratione eum
                    a obcaecati, similique debitis exercitationem incidunt
                    facere tempora eligendi quasi perspiciatis vel illo
                    consequuntur? Nemo voluptate explicabo aspernatur ullam,
                    quos amet blanditiis consequuntur magni cumque, ipsa
                    doloribus modi rerum.
                  </Text>
                </Box>
              </Stack>
            </GridItem>
          </Grid>
        </Container>
        {/* Section E */}
        <Container
          maxW="100%"
          h="100vh"
          style={{
            position: "absolute",
            top: `500vh`,
            left: "0vw",
          }}
        >
          <Grid
            h="100%"
            templateRows="repeat(7, 1fr)"
            templateColumns="repeat(12, 1fr)"
          >
            <GridItem
              colStart={8}
              rowStart={3}
              colSpan={4}
              rowSpan={3}
              padding="50px"
              bg="mediumpurple"
            >
              <Stack spacing={5}>
                <Heading as="h1" fontSize="4xl">
                  ¿Cómo aprenderlo?
                </Heading>
                <Box>
                  <Text fontSize="lg" align="justify">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Porro aperiam doloribus ducimus laborum tempore ratione eum
                    a obcaecati, similique debitis exercitationem incidunt
                    facere tempora eligendi quasi perspiciatis vel illo
                    consequuntur? Nemo voluptate explicabo aspernatur ullam,
                    quos amet blanditiis consequuntur magni cumque, ipsa
                    doloribus modi rerum.
                  </Text>
                </Box>
              </Stack>
            </GridItem>
          </Grid>
        </Container>
        {/* End title */}
        <Container
          maxW="100%"
          h="100vh"
          //bg="orange"
          style={{
            position: "absolute",
            top: `600vh`,
            left: "0vw",
          }}
        >
          <Heading
            as="h1"
            fontSize="8xl"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate3d(-50%,-50%, 0)",
            }}
          >
            Cierre
          </Heading>
        </Container>
      </ChakraProvider>
    </Scroll>
  );
};

export default Overlay;
