import { React, useEffect } from "react";
import {
  Box,
  Text,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import SignUp from "../components/authentication/signup";
import SignIn from "../components/authentication/signin";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box bg="yellow">
        <header
          style={{
            backgroundColor: "black",
          }}
        >
          <Text
            style={{
              fontFamily: "monospace",
              fontWeight: "bold",
              padding: ".5rem",
              color: "white",
            }}
            fontSize="4xl"
          >
            <a href="/" title="Buysell">
              BuySell
            </a>
          </Text>
        </header>
        <Box
          minHeight="75.5vh"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            bg="white"
            maxW={{ base: "95vw", md: "60vw", lg: "45vw" }}
            width="100%"
            m={4}
            p={4}
            borderWidth="1px"
            marginBottom="2rem"
          >
            <Tabs fontFamily="monospace" fontSize="2rem">
              <TabList mb="1em">
                <Tab width="50%">Log In</Tab>
                <Tab width="50%">Sign Up</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <SignIn />
                </TabPanel>
                <TabPanel>
                  <SignUp />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Homepage;
