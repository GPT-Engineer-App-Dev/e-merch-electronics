import { Box, Image, Badge, Text } from "@chakra-ui/react";

const ProductCard = ({ product }) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
    >
      <Image src={product.image} alt={product.name} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {product.name}
        </Box>

        <Box>
          ${product.price}
          <Box as="span" color="gray.600" fontSize="sm">
            / unit
          </Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          <Text fontSize="sm">{product.description}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;