import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

export default function SkeletonCard() {
  return (
    <Box
      padding="4"
      margin={"4"}
      rounded={"xl"}
      boxShadow="lg"
      bg="#00ADB4"
      w="316px"
      h="427px"
    >
      <SkeletonCircle size="10" rounded={"lg"} w="285px" h="180px" />
      <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
    </Box>
  );
}
