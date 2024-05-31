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
  {
    name: "Smartwatch",
    price: 299,
    description: "Stylish smartwatch with health tracking",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Tablet",
    price: 499,
    description: "High-resolution display tablet",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Camera",
    price: 799,
    description: "Professional-grade camera",
    image: "https://via.placeholder.com/150",
  },
];

const Products = () => {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl" py={8}>
        <VStack spacing={4} align="stretch">
          <Text fontSize="3xl" fontWeight="bold" textAlign="center">
            Our Products
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

export default Products;