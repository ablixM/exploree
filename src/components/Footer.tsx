import { Box, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { IconType } from "react-icons";
import { contact } from "../data/contact.ts";
import UserAgreementLink from "./UserAgreementLink.tsx";

export interface ContactProps {
  label: string;
  icon: IconType;
  onClick: () => void;
  src?: string;
}

const Footer = () => {
  return (
    <Box padding={4} bg={"blue.500"} marginTop={16}>
      <Box bg={"blue.500"}>
        <Image width={"176px"} height={"44px"} src={logo} />
      </Box>

      <SimpleGrid row={3} paddingY={2}>
        {contact.map((contact) => (
          <Flex
            flexDirection={"row"}
            align={"center"}
            key={contact.label}
            onClick={contact.onClick}
            paddingX={2}
            paddingY={1}
          >
            <contact.icon />
            <Box paddingX={4}>{contact.label}</Box>
          </Flex>
        ))}
      </SimpleGrid>
      <UserAgreementLink />
    </Box>
  );
};
export default Footer;
