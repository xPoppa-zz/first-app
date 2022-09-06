import { Flex, Image, VStack } from "@chakra-ui/react";
import Footer from "./Footer";
import Info from "./Info";

const HeroContainer = () => {
  return (
    <Flex bg="#23252C" w="550px" h="868px" justify="center">
      <VStack w="317" h="780px" mt="44px" spacing={"0"}>
        <Image
          src="/RomanoKlein.jpg"
          w="317px"
          h="317px"
          borderTopRadius={"16px"}
        />
        <Info />
        <Footer />
      </VStack>
    </Flex>
  );
};

export default HeroContainer;
