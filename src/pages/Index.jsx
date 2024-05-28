import { Box, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box bg="gray.800" color="white" py={4}>
        <Container maxW="container.xl">
          <HStack spacing={8} justify="space-between">
            <Heading size="lg">Financial Times</Heading>
            <HStack spacing={4}>
              <Link href="#" color="white">Home</Link>
              <Link href="#" color="white">Markets</Link>
              <Link href="#" color="white">World</Link>
              <Link href="#" color="white">Opinion</Link>
              <Link href="#" color="white">More</Link>
            </HStack>
          </HStack>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Flex direction={{ base: "column", md: "row" }} mt={8}>
        {/* Latest News Articles */}
        <Box flex="3" p={4}>
          <Heading size="md" mb={4}>Latest News</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <VStack align="start">
              <Image src="https://via.placeholder.com/300" alt="News Image" />
              <Heading size="sm">Article Headline 1</Heading>
              <Text>Short description of the news article. This is a brief summary to entice readers to click and read more.</Text>
            </VStack>
            <VStack align="start">
              <Image src="https://via.placeholder.com/300" alt="News Image" />
              <Heading size="sm">Article Headline 2</Heading>
              <Text>Short description of the news article. This is a brief summary to entice readers to click and read more.</Text>
            </VStack>
            <VStack align="start">
              <Image src="https://via.placeholder.com/300" alt="News Image" />
              <Heading size="sm">Article Headline 3</Heading>
              <Text>Short description of the news article. This is a brief summary to entice readers to click and read more.</Text>
            </VStack>
            <VStack align="start">
              <Image src="https://via.placeholder.com/300" alt="News Image" />
              <Heading size="sm">Article Headline 4</Heading>
              <Text>Short description of the news article. This is a brief summary to entice readers to click and read more.</Text>
            </VStack>
          </SimpleGrid>
        </Box>

        {/* Sidebar with Market Data */}
        <Box flex="1" bg="gray.100" p={4}>
          <Heading size="md" mb={4}>Market Data</Heading>
          <VStack align="start" spacing={4}>
            <Box>
              <Heading size="sm">Stock Prices</Heading>
              <Text>Company A: $100</Text>
              <Text>Company B: $150</Text>
              <Text>Company C: $200</Text>
            </Box>
            <Box>
              <Heading size="sm">Market Indices</Heading>
              <Text>Index A: 5000</Text>
              <Text>Index B: 10000</Text>
              <Text>Index C: 15000</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;