import { Flex, IconButton, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

export interface NavItemProps {
  label: string;
  icon: IconType;
  filledIcon: IconType;
  isActive: boolean;
  onClick: () => void;
}

const BottomNavBtn = ({
  label,
  icon: Icon,
  filledIcon: FilledIcon,
  isActive,
  onClick,
}: NavItemProps) => {
  return (
    <>
      <>
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Link to={label}>
            <IconButton
              aria-label={label}
              icon={isActive ? <FilledIcon /> : <Icon />}
              fontSize={"20px"}
              fontWeight={isActive ? "extrabold" : "light"}
              color={isActive ? "blue.600" : "white"}
              onClick={onClick}
            />
            <Text
              fontSize={"sm"}
              fontWeight={isActive ? "normal" : "light"}
              color={isActive ? "blue.500" : "white"}
            >
              {label}
            </Text>
          </Link>
        </Flex>
      </>
    </>
  );
};

export default BottomNavBtn;
