import { Container, Text, VStack, SimpleGrid } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

const sampleProducts = [
  {
    name: "Smartphone",
    price: 699,
    description: "Latest model with high-end features",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Laptop",
    price: 999,
    description: "Powerful laptop for professionals",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Headphones",
    price: 199,
    description: "Noise-cancelling over-ear headphones",
    image: "https://via.placeholder.com/150",
  },
];

const Index = () => {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl" py={8}>
        <VStack spacing={4} align="stretch">
          <Text fontSize="3xl" fontWeight="bold" textAlign="center">
            Welcome to ElectroShop
          </Text>
          <Text fontSize="xl" textAlign="center">
            Your one-stop shop for the latest electronics
          </Text>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={8}>
            {sampleProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </>
  );
};

export default Index;