import React, { useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [isSeller, setIsSeller] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState();
  const toast = useToast();

  const handleClick = () => setShow(!show);

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password || !confirmpassword) {
      toast({
        title: "Please fill all the fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    if (password !== confirmpassword) {
      toast({
        title: "Passwords do not match",
        description: "Password and Confirm Password should be same.",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const url = process.env.REACT_APP_SERVER_URL + "/user/signup";
      const response = await axios.post(
        url,
        { firstName, lastName, email, phoneNumber, isSeller, password },
        config
      );
      if (response.status === 202) {
        toast({
          title: "Email Already Registered",
          description: "This email is already registered to LinkHub.",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      } else {
        onOpen();
      }
      setLoading(false);
    } catch (error) {
      toast({
        title: "Error Occurred",
        description: "Error occurred in registration process.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  const closeBtnHandler = () => {
    onClose();
    window.location.reload();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={closeBtnHandler} size="2xl" isCentered>
        <ModalOverlay />
        <ModalContent
          textAlign="center"
          maxW={{ base: "95%", md: "lg", lg: "2xl" }}
        >
          <ModalHeader fontSize="1.4rem">Registered!</ModalHeader>
          <ModalCloseButton />
          <ModalBody fontSize="1rem">
            You have been regostered successfully! Please log in to use BuySell.
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="green"
              fontSize="1rem"
              padding=".5rem 1rem"
              mr={3}
              onClick={closeBtnHandler}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <VStack spacing="5px">
        <FormControl id="firstName" isRequired>
          <FormLabel>First Name</FormLabel>
          <Input
            placeholder="First name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            autoComplete="off"
          />
        </FormControl>
        <FormControl id="lastName" isRequired>
          <FormLabel>Last Name</FormLabel>
          <Input
            placeholder="Last name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            autoComplete="off"
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            autoComplete="off"
          />
        </FormControl>
        <FormControl id="phoneNumber" isRequired>
          <FormLabel>Phone Number</FormLabel>
          <Input
            placeholder="Phone number"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            autoComplete="off"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>
            Are you a seller ? (Only sellers can sell properties)
          </FormLabel>
          <Select
            background="white"
            mt={2}
            placeholder="Are You A Seller"
            textAlign="center"
            onChange={(e) => {
              setIsSeller(e.target.value.toString() === "true");
            }}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Select>
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              autoComplete="off"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl id="confirmpassword" isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <InputGroup size="md">
            <Input
              type={show ? "text" : "password"}
              placeholder="Confirm Password"
              onChange={(e) => {
                setConfirmpassword(e.target.value);
              }}
              autoComplete="off"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button
          colorScheme="orange"
          width="100%"
          style={{ marginTop: 17, marginBottom: 4 }}
          onClick={submitHandler}
          isLoading={loading}
        >
          Sign Up
        </Button>
      </VStack>
    </>
  );
};

export default SignUp;
