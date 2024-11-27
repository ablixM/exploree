import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Skeleton,
  SkeletonCircle,
  Stack,
} from "@chakra-ui/react";

const CardSkeleton = () => {
  return (
    <>
      <Card width={"100%"}>
        <CardHeader>
          <HStack gap="5">
            <Stack flex="1">
              <Skeleton height="5" />
              <Skeleton height="5" width="80%" />
            </Stack>
            <SkeletonCircle size="12" />
          </HStack>
        </CardHeader>
        <CardBody>
          <Stack spacing={3}>
            <Skeleton height="15px" />
            <Skeleton height="10px" />
            <Skeleton height="10px" />
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default CardSkeleton;
