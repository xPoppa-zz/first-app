import { Container, HStack, Image } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Container
      as="footer"
      role="contentinfo"
      bg="brand.600"
      h="70px"
      borderBottomRadius="16px"
    >
      <HStack justify={"center"} spacing="25px" pt="15px">
        <Image src="/Twitter Icon.png" />
        <Image src="/Instagram Icon.png" />
        <Image src="/GitHub Icon.png" />
      </HStack>
    </Container>
  );
};

export default Footer;
