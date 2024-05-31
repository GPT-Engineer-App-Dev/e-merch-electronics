import { Container, Text, VStack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <Container maxW="container.md" py={8}>
        <VStack spacing={4} align="stretch">
          <Text fontSize="3xl" fontWeight="bold" textAlign="center">
            About Us
          </Text>
          <Text fontSize="xl" textAlign="center">
            Welcome to ElectroShop, your number one source for all things electronics. We're dedicated to giving you the very best of gadgets, with a focus on quality, customer service, and uniqueness.
          </Text>
          <Text fontSize="md" textAlign="center">
            Founded in 2023, ElectroShop has come a long way from its beginnings. When we first started out, our passion for providing the best equipment drove us to do tons of research so that ElectroShop can offer you the world's most advanced gadgets. We now serve customers all over the world and are thrilled that we're able to turn our passion into our own website.
          </Text>
          <Text fontSize="md" textAlign="center">
            We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
          </Text>
        </VStack>
      </Container>
    </>
  );
};

export default AboutUs;