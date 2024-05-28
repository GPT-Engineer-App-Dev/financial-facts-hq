import { Box, Container, Flex, Heading, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FaHome, FaChartLine, FaGlobe, FaCommentDots } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <HStack spacing={8}>
          <Link href="#" fontSize="xl" fontWeight="bold">Financial Times</Link>
          <HStack spacing={4}>
            <Link href="#"><FaHome /> Home</Link>
            <Link href="#"><FaChartLine /> Markets</Link>
            <Link href="#"><FaGlobe /> World</Link>
            <Link href="#"><FaCommentDots /> Opinion</Link>
          </HStack>
        </HStack>
      </Flex>

      {/* Main Content Area */}
      <Flex direction={{ base: "column", md: "row" }} mt={4}>
        {/* Latest News Articles */}
        <Box flex="3" p={4}>
          <Heading as="h2" size="lg" mb={4}>Latest News</Heading>
          <VStack spacing={4} align="stretch">
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/800x400" alt="News Image" />
              <Box p={4}>
                <Heading as="h3" size="md">News Headline 1</Heading>
                <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/800x400" alt="News Image" />
              <Box p={4}>
                <Heading as="h3" size="md">News Headline 2</Heading>
                <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
              </Box>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar with Market Data */}
        <Box flex="1" p={4} bg="gray.100">
          <Heading as="h2" size="lg" mb={4}>Market Data</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} bg="white" borderRadius="md" boxShadow="md">
              <Heading as="h3" size="md">Stock Prices</Heading>
              <Text mt={2}>AAPL: $150.00</Text>
              <Text>GOOGL: $2800.00</Text>
              <Text>AMZN: $3400.00</Text>
            </Box>
            <Box p={4} bg="white" borderRadius="md" boxShadow="md">
              <Heading as="h3" size="md">Market Indices</Heading>
              <Text mt={2}>S&P 500: 4500.00</Text>
              <Text>Dow Jones: 35000.00</Text>
              <Text>Nasdaq: 15000.00</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;