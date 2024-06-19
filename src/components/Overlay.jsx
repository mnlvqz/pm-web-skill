import {
  Box,
  Center,
  ChakraProvider,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
  VStack,
  Wrap,
  extendTheme,
} from "@chakra-ui/react";
import React from "react";
import "@fontsource/dm-mono";
import ImageSlider from "./ImageSlider";

const theme = extendTheme({
  colors: {
    ultra_violet: {
      DEFAULT: "#4c5270",
      100: "#0f1016",
      200: "#1f212d",
      300: "#2e3143",
      400: "#3d425a",
      500: "#4c5270",
      600: "#666e97",
      700: "#8c92b1",
      800: "#b3b7cb",
      900: "#d9dbe5",
    },
    brilliant_rose: {
      DEFAULT: "#f652a0",
      100: "#3e0320",
      200: "#7c073f",
      300: "#ba0a5f",
      400: "#f3137f",
      500: "#f652a0",
      600: "#f873b3",
      700: "#f996c6",
      800: "#fbb9d9",
      900: "#fddcec",
    },
    seasalt: {
      DEFAULT: "#f6f6f6",
      100: "#313131",
      200: "#626262",
      300: "#939393",
      400: "#c4c4c4",
      500: "#f6f6f6",
      600: "#f7f7f7",
      700: "#f9f9f9",
      800: "#fbfbfb",
      900: "#fdfdfd",
    },
    verdigris: {
      DEFAULT: "#3aafb9",
      100: "#0c2325",
      200: "#18464a",
      300: "#236970",
      400: "#2f8c95",
      500: "#3aafb9",
      600: "#5ec3cc",
      700: "#86d2d9",
      800: "#aee1e6",
      900: "#d7f0f2",
    },
    celeste: {
      DEFAULT: "#bcece0",
      100: "#134236",
      200: "#25846c",
      300: "#38c6a3",
      400: "#79d9c1",
      500: "#bcece0",
      600: "#c9f0e6",
      700: "#d6f4ec",
      800: "#e4f7f3",
      900: "#f1fbf9",
    },
  },
  fonts: {
    heading: `'DM Mono', monospace`,
    body: `'DM Mono', monospace`,
  },
  components: {
    Heading: {
      baseStyle: {
        color: "brilliant_rose.500",
      },
    },
    Text: {
      baseStyle: {
        fontWeight: "ultra_violet.500",
        color: "purple.700",
      },
    },
  },
});

const Overlay = () => {
  return (
    <ChakraProvider theme={theme}>
      <VStack spacing={0}>
        {/* Main Title  */}
        <Container maxW="100%" h="100vh">
          <Flex height="100%" alignItems="center" justifyContent="center">
            <Heading fontSize={{ base: "6xl", lg: "8xl" }}>
              Código Creativo
            </Heading>
          </Flex>
        </Container>
        {/* Intro */}
        <Container maxW="100%" h="100vh">
          <SimpleGrid
            height="100%"
            alignItems="center"
            minChildWidth="300px"
            padding={{ base: "5", lg: "20" }}
            gap={10}
          >
            <Heading
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              textAlign="left"
              color="brilliant_rose.500"
            >
              ¿Qué es el código creativo?
            </Heading>
            <Text
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              textAlign="justify"
            >
              El código creativo es un proceso experimental que establece la
              convergencia de técnicas de expresión con la programación por
              computadora. La intersección de estos campos posibilita el
              desarrollo y la creación de propuestas desde enfoques que van de
              lo paramétrico, lo generativo y/o lo procedural, entre otros,
              permitiendo expandir los vínculos entre el arte, el diseño y la
              tecnología. A diferencia de la programación tradicional el codigo
              creativo no persigue la optimización o la funcionalidad de las
              instrucciones codificadas. En cambio, su principal objetivo radica
              en el proceso de exploración y su posible expresividad.
              <br />
              <br />A pesar de popularizarse el termino a inicios del siglo XXI
              es importante destacar que sus orígenes se remontan a inicios de
              la década de los 50s. La evolución y el desarrollo
              tecnológico-computacional de la segunda mitad del siglo XX logró
              expandir el campo de expresividad dentro de la programación.
            </Text>
          </SimpleGrid>
        </Container>
        {/* Posibilities */}
        <Container maxW="100%" h="100vh">
          <SimpleGrid
            height="100%"
            alignItems="center"
            minChildWidth="300px"
            padding={{ base: "5", lg: "20" }}
            gap={10}
          >
            <Heading
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              textAlign="left"
            >
              ¿Cuales son sus posibilidades?
            </Heading>
            <Stack gap={5}>
              <Flex flexDirection="row" alignSelf="center" py={10} gap={5}>
                <Tooltip label={<Heading>TEST</Heading>} placement="bottom">
                  <Image
                    src="https://bit.ly/dan-abramov"
                    alt="Dan Abramov"
                    boxSize="150px"
                  />
                </Tooltip>
                <ImageSlider></ImageSlider>
              </Flex>
              <Text
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                textAlign="justify"
              >
                El código creativo abre un vasto campo de posibilidades al
                fusionar arte y tecnología permitiendo a los artistas y los
                diseñadores explorar nuevas formas de expresión visual y sonora
                mediante algoritmos y programación. Este enfoque experimental
                facilita la creación de obras generativas, donde cada ejecución
                del código puede llegar a producir resultados únicos y
                sorprendentes.
              </Text>
            </Stack>
          </SimpleGrid>
        </Container>
        {/* Tools */}
        <Container maxW="100%" h="100vh">
          <SimpleGrid
            height="100%"
            alignItems="center"
            minChildWidth="300px"
            padding={{ base: "5", lg: "20" }}
            gap={10}
          >
            <Heading
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              textAlign="left"
            >
              ¿Qué herramientas se utilizan?
            </Heading>
            <Stack gap={5}>
              <Flex flexDirection="row" alignSelf="center" py={10} gap={5}>
                <Image
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                  boxSize="150px"
                />
                <Image
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                  boxSize="150px"
                />
                <Image
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                  boxSize="150px"
                />
                <Image
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                  boxSize="150px"
                />
              </Flex>
              <Text
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                textAlign="justify"
              >
                El código creativo abre un vasto campo de posibilidades al
                fusionar arte y tecnología permitiendo a los artistas y los
                diseñadores explorar nuevas formas de expresión visual y sonora
                mediante algoritmos y programación. Este enfoque experimental
                facilita la creación de obras generativas, donde cada ejecución
                del código puede llegar a producir resultados únicos y
                sorprendentes.
              </Text>
            </Stack>
          </SimpleGrid>
        </Container>
        {/* Learn */}
        <Container maxW="100%" h="100vh">
          <SimpleGrid
            height="100%"
            alignItems="center"
            minChildWidth="300px"
            padding={{ base: "5", lg: "20" }}
            gap={10}
          >
            <Heading
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              textAlign="left"
              color="brilliant_rose.500"
            >
              ¿Dónde aprenderlo?
            </Heading>
            <Text
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              textAlign="justify"
            >
              El código creativo es un proceso experimental que establece la
              convergencia de técnicas de expresión con la programación por
              computadora. La intersección de estos campos posibilita el
              desarrollo y la creación de propuestas desde enfoques que van de
              lo paramétrico, lo generativo y/o lo procedural, entre otros,
              permitiendo expandir los vínculos entre el arte, el diseño y la
              tecnología. A diferencia de la programación tradicional el codigo
              creativo no persigue la optimización o la funcionalidad de las
              instrucciones codificadas. En cambio, su principal objetivo radica
              en el proceso de exploración y su posible expresividad.
              <br />
              <br />A pesar de popularizarse el termino a inicios del siglo XXI
              es importante destacar que sus orígenes se remontan a inicios de
              la década de los 50s. La evolución y el desarrollo
              tecnológico-computacional de la segunda mitad del siglo XX logró
              expandir el campo de expresividad dentro de la programación.
            </Text>
          </SimpleGrid>
        </Container>
        {/* Oportunities */}
        <Container maxW="100%" h="100vh">
          <SimpleGrid
            height="100%"
            alignItems="center"
            minChildWidth="300px"
            padding={{ base: "5", lg: "20" }}
            gap={10}
          >
            <Heading
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              textAlign="left"
              color="brilliant_rose.500"
            >
              ¿Cuál es su campo laboral?
            </Heading>
            <Text
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              textAlign="justify"
            >
              El código creativo es un proceso experimental que establece la
              convergencia de técnicas de expresión con la programación por
              computadora. La intersección de estos campos posibilita el
              desarrollo y la creación de propuestas desde enfoques que van de
              lo paramétrico, lo generativo y/o lo procedural, entre otros,
              permitiendo expandir los vínculos entre el arte, el diseño y la
              tecnología. A diferencia de la programación tradicional el codigo
              creativo no persigue la optimización o la funcionalidad de las
              instrucciones codificadas. En cambio, su principal objetivo radica
              en el proceso de exploración y su posible expresividad.
              <br />
              <br />A pesar de popularizarse el termino a inicios del siglo XXI
              es importante destacar que sus orígenes se remontan a inicios de
              la década de los 50s. La evolución y el desarrollo
              tecnológico-computacional de la segunda mitad del siglo XX logró
              expandir el campo de expresividad dentro de la programación.
            </Text>
          </SimpleGrid>
        </Container>
        {/* End */}
        <Container maxW="100%" h="100vh">
          <Flex height="100%" alignItems="center" justifyContent="center">
            <Heading fontSize={{ base: "6xl", lg: "8xl" }}>Cierre</Heading>
          </Flex>
        </Container>
        {/* Sources */}
      </VStack>
    </ChakraProvider>
  );
};

export default Overlay;
