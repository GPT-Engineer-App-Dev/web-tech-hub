import { Box, Button, Container, Flex, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { FaCode, FaSearch, FaComments } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.50">
      <Container maxW="container.lg" py={20}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
          <Stack spacing={6}>
            <Heading as="h1" size="2xl">
              Hire Top Software Developers
            </Heading>
            <Text fontSize="xl" color="gray.500">
              Particles connects companies with talented developers specializing in modern web technologies. Search profiles, view experience, and contact developers directly.
            </Text>
            <Button as="a" href="/developers" colorScheme="blue" size="lg" fontWeight="bold" px={8}>
              View Developer Listings
            </Button>
          </Stack>
          <Image src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMGNvZGluZ3xlbnwwfHx8fDE3MTMwNTAyMzF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Developer coding" rounded="lg" shadow="lg" />
        </SimpleGrid>
      </Container>

      <Container maxW="container.lg" py={20}>
        <Stack spacing={16} alignItems="center">
          <Heading as="h2" size="xl" textAlign="center">
            How Particles Works
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} maxW="2xl" mx="auto">
            <Box>
              <Flex color="blue.500" justifyContent="center" mb={3}>
                <FaCode size="3em" />
              </Flex>
              <Heading as="h3" size="lg" mb={3} textAlign="center">
                Top Web Developers
              </Heading>
              <Text fontSize="lg" textAlign="center">
                Access rigorously vetted developers specializing in the latest web technologies and frameworks.
              </Text>
            </Box>

            <Box>
              <Flex color="blue.500" justifyContent="center" mb={3}>
                <FaSearch size="3em" />
              </Flex>
              <Heading as="h3" size="lg" mb={3} textAlign="center">
                Search & Filter
              </Heading>
              <Text fontSize="lg" textAlign="center">
                Easily search developer profiles and filter by skills, experience, location and more.
              </Text>
            </Box>

            <Box>
              <Flex color="blue.500" justifyContent="center" mb={3}>
                <FaComments size="3em" />
              </Flex>
              <Heading as="h3" size="lg" mb={3} textAlign="center">
                Direct Messaging
              </Heading>
              <Text fontSize="lg" textAlign="center">
                Contact developers directly through our built-in messaging system to discuss opportunities.
              </Text>
            </Box>
          </SimpleGrid>

          <Button as="a" href="/developers" colorScheme="blue" size="lg" fontWeight="bold" px={8}>
            View Developer Listings
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Index;
