import React from "react";
import {
  Heading,
  Container,
  Box,
  Flex,
  Image,
  useColorModeValue,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { Section } from "../../components/Section/Section";

import { AboutWrapper } from "./About.styles";

export const About = () => {
  return (
    <AboutWrapper backgroundColor={useColorModeValue("#f5f5f5", "#202023")}>
      <Container
        maxW="container.lg"
        pt={10}
        pb={10}
        as="section"
        bg={useColorModeValue("#f5f5f5", "#202023")}
      >
        <Section delay={0.5} displayInViewport={true}>
          <Box>
            <Heading as="h3" variant="section-title">
              About
            </Heading>
            <p>
              My name is Damien, I'm a software engineer originally from Cork,
              Ireland. I've been working professionally for over 8 years and my
              main focus is around frontend development.
            </p>
            <br />
            <p>
              I love to build scalable solutions and I'm always looking to
              improve my existing knowledge
            </p>
          </Box>
          <Box mt={14}>
            <Heading as="h4" variant="section-title">
              Work
            </Heading>
            <Flex mt={6}>
              <Box mr={6}>
                <Image
                  src="../img/247meeting-logo.jpeg"
                  alt="247Meeting Logo"
                  w="150px"
                  loading="lazy"
                />
              </Box>
              <Box>
                <Heading as="h5" size="md" mb={2}>
                  Cartrawler
                </Heading>
                <Heading as="h6" size="sm" mb={2} fontWeight="normal">
                  May 2019 - Jun 2022
                </Heading>
                <UnorderedList>
                  <ListItem>
                    Developed a fully responsive template variant of our Smart
                    Block Cross Sell product using React with 100% test coverage
                    using testing tools such as Jest and Backstop for one of
                    Europe's largest airlines.
                  </ListItem>
                  <ListItem>
                    Built multiple scalable components using the Play Framework
                    in preparation for a migration to React.
                  </ListItem>
                  <ListItem>
                    Created multiple POC???s of existing scalable Play Framework
                    components using React in preparation for a large platform
                    migration.
                  </ListItem>
                  <ListItem>
                    Built fully tested enterprise solutions within a monorepo.
                  </ListItem>
                  <ListItem>
                    Created and maintained car rental landing-pages and widgets
                    for the world's largest airlines using the latest standards
                    of WCAG.
                  </ListItem>
                  <ListItem>
                    Aided in detailed code reviews so as to ensure code quality
                    within multiple repositories as well as refining best
                    practices for the team in terms of development processes.
                  </ListItem>
                </UnorderedList>
              </Box>
            </Flex>
            <Flex mt={6}>
              <Box mr={6}>
                <Image
                  src="../img/cartrawler-logo.jpg"
                  alt="Cartrawler Logo"
                  w="150px"
                  loading="lazy"
                />
              </Box>
              <Box>
                <Heading as="h5" size="md" mb={2}>
                  247Meeting
                </Heading>
                <Heading as="h6" size="sm" mb={2} fontWeight="normal">
                  November 2017 - May 2019
                </Heading>
                <UnorderedList>
                  <ListItem>
                    Fully re-designed the Conference Call Scheduler(built using
                    ASP .Net, JavaScript & Bootstrap) making it scalable,
                    responsive and accessible so as to give users a more
                    experience when booking a conference.
                  </ListItem>
                  <ListItem>
                    Created a windows service to automate IOS push notifications
                    using Node.js in conjunction with Google???s Firebase Cloud
                    Messaging service(FCM).
                  </ListItem>
                  <ListItem>
                    Updated the existing IOS app (built using Objective C) to
                    allow users to schedule future meetings.
                  </ListItem>
                  <ListItem>
                    Full update of the existing web conference console(built
                    using ASP .Net, JavaScript & Bootstrap) to allow users to
                    monitor and control their conference call in real-time.
                  </ListItem>
                  <ListItem>
                    Integrated feature requests using the Scrum method as well
                    as maintaining existing products.
                  </ListItem>
                  <ListItem>
                    Developed a Node.js script that calls a stored procedure and
                    updates our client list on Intercom via their api to aid our
                    marketing team.
                  </ListItem>
                </UnorderedList>
              </Box>
            </Flex>
          </Box>
        </Section>
      </Container>
    </AboutWrapper>
  );
};
