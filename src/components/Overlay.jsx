import {
  ChakraProvider,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  extendTheme,
} from "@chakra-ui/react";
import React from "react";
import "@fontsource/dm-mono";

const theme = extendTheme({
  fonts: {
    heading: `'DM Mono', monospace`,
    body: `'DM Mono', monospace`,
  },
  components: {
    Heading: {
      baseStyle: {
        color: "purple.400",
      },
    },
    Text: {
      baseStyle: {
        fontWeight: "light",
        color: "purple.300",
      },
    },
  },
});

const Overlay = () => {
  return (
    <ChakraProvider theme={theme}>
      <VStack spacing={0}>
        {/* Application */}
        <Container maxW="100%" h="100vh">
          <Flex height="100%" alignItems="center" justifyContent="center">
            <Heading fontSize={{ base: "4xl", lg: "7xl" }}>
              Código Creativo
            </Heading>
          </Flex>
        </Container>
        {/* Main Title */}
        <Container maxW="100%" h="100vh">
          <SimpleGrid
            height="100%"
            alignItems="center"
            minChildWidth="300px"
            padding={{ base: "5", lg: "20" }}
          >
            <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
              ¿Qué es código creativo?
            </Heading>
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              El código creativo es un proceso experimental que posibilita la
              convergencia técnica de expresión a través de la programación por
              computadora. La intersección de estos campos posibilita el
              desarrollo y la creación de propuestas desde enfoques que van de
              lo paramétrico, lo generativo y/o lo procedural, entre otros,
              permitiendo expandir los vínculos entre el arte, el diseño y la
              tecnología. A diferencia de la programación tradicional el codigo
              creativo no persigue la optimización o la funcionalidad de las
              instrucciones codificadas. En cambio, su principal objetivo radica
              en el proceso de exploración y su posible expresividad.
            </Text>
          </SimpleGrid>
        </Container>
        {/* Application */}
        <Container maxW="100%" h="100vh" bg="orange">
          TEST
        </Container>
        {/* Tools */}
        <Container maxW="100%" h="100vh" bg="maroon">
          TEST
        </Container>
        {/* Examples */}
        <Container maxW="100%" h="100vh" bg="purple">
          TEST
        </Container>
        {/* Oportunities */}
        <Container maxW="100%" h="100vh" bg="gray">
          TEST
        </Container>
        {/* Retribution */}
        <Container maxW="100%" h="100vh" bg="green">
          TEST
        </Container>
        {/* Education */}
        <Container maxW="100%" h="100vh" bg="pink">
          TEST
        </Container>
        {/* End */}
        <Container maxW="100%" h="100vh" bg="brown">
          TEST
        </Container>
        {/* Sources */}
        <Container maxW="100%" h="100vh" bg="black">
          TEST
        </Container>
      </VStack>
    </ChakraProvider>
  );
};

export default Overlay;
