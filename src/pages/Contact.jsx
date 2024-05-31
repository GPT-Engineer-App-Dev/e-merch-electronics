import { Container, Text, VStack, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Container maxW="container.md" py={8}>
        <VStack spacing={4} align="stretch">
          <Text fontSize="3xl" fontWeight="bold" textAlign="center">
            Contact Us
          </Text>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="message">
            <FormLabel>Message</FormLabel>
            <Textarea />
          </FormControl>
          <Button colorScheme="teal" size="lg" mt={4}>
            Send Message
          </Button>
        </VStack>
      </Container>
    </>
  );
};

export default Contact;