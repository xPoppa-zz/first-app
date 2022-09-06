import { Button, Heading, HStack, Text, VStack, Image } from "@chakra-ui/react";

const Info = () => {
  return (
    <VStack bg={"brand.900"} w="317px">
      <Heading color="white" mt="21px" size="25px">
        Romano Lynch
      </Heading>
      <Text color="yellow" fontSize={"13px"}>
        Blockchain Developer
      </Text>
      <Text color={"white"} fontSize="10px">
        import React from 'react' website.nl
      </Text>
      <HStack>
        <Button>
          <Image src="/mailIcon.png" pr="5px" />
          Email
        </Button>
        <Button bg="brand.500" color="white">
          <Image src="/linkedInIcon.png" pr="5px" w="30px" h="30px" />
          Linkedin
        </Button>
      </HStack>
      <VStack w="247px">
        <Heading size="16px" justifySelf={"left"} color="white">
          About
        </Heading>
        <Text w="247px" justifySelf="center" fontSize={"10px"} color="#DCDCDC">
          I am a junior frontend web3 developer with a passion for
          decentralization. I like automating daily tasks and have a perticular
          interest in building things that can make the life of people easier
          and increase autonomy of the individual.
        </Text>
        <Heading size="16px" justifySelf={"left"} color="white">
          Interests
        </Heading>
        <Text
          w="247px"
          justifySelf="center"
          fontSize={"10px"}
          color="#DCDCDC"
          pb="45px"
        >
          I'm Interested in Defi, decentralization in general, using
          decentralization to increase autonomy, Basketball, Fitness,
          Meditation, Teaching and Learning
        </Text>
      </VStack>
    </VStack>
  );
};

export default Info;
