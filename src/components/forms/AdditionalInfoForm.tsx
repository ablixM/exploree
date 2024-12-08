import {
  FormControl,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

const AdditionalInfoForm = () => {
  return (
    <SimpleGrid
      column={1}
      spacingY={2}
      paddingX={5}
      textAlign={"center"}
      marginBottom={8}
    >
      <Text paddingX={4} paddingY={2} fontSize={"md"}>
        Additional Information
      </Text>
      <FormControl paddingY={1}>
        <FormLabel>Gender</FormLabel>
        <Select
          aria-label="Select gender"
          fontSize={"md"}
          size="lg"
          placeholder="Select gender"
        >
          <option>Male</option>
          <option>Female</option>
          <option>tutu</option>
        </Select>
      </FormControl>
      <FormControl paddingY={1}>
        <FormLabel>Martial status</FormLabel>
        <Select
          aria-label="Select martial status"
          fontSize={"md"}
          size="lg"
          placeholder="Select status"
        >
          <option>Married</option>
          <option>Single</option>
        </Select>
      </FormControl>
      <FormControl paddingY={1}>
        <FormLabel>Birth Date</FormLabel>
        <Input
          fontSize={"md"}
          placeholder="Select Date and Time"
          size="lg"
          type="date"
        />
      </FormControl>
      <FormControl paddingY={1}>
        <FormLabel>Country</FormLabel>
        <Select
          aria-label="Select country"
          fontSize={"md "}
          size="lg"
          placeholder="Select country"
        >
          <option>United Arab Emirates</option>
          <option>Nigeria</option>
        </Select>
      </FormControl>
      <FormControl paddingY={1}>
        <FormLabel>State</FormLabel>
        <Select
          aria-label="Select state"
          fontSize={"md"}
          size="lg"
          placeholder="Select state"
        >
          <option>United Arab Emirates</option>
          <option>Nigeria</option>
        </Select>
      </FormControl>
    </SimpleGrid>
  );
};

export default AdditionalInfoForm;
