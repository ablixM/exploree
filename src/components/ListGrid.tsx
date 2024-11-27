import {
  Box,
  Flex,
  SimpleGrid,
  Spinner,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import useListings from "../hooks/useListings.ts";
import { JobCard } from "./JobCard.tsx";
import useJobs from "../hooks/useJobs.ts";
import CardSkeleton from "./CardSkeleton.tsx";
import ListCardContainer from "./ListCardContainer.tsx";

const ListGrid = () => {
  const { data, isLoading: listIsLoading, error } = useListings();
  const { data: jobs, isLoading: jobIsLoading } = useJobs();
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return null;
  if (!data) return null;
  return (
    <SimpleGrid width={"100%"} marginY={5} padding={4}>
      {listIsLoading ? (
        <Spinner />
      ) : (
        <Tabs isFitted variant="enclosed" size={"lg"} position={"sticky"}>
          <TabList width={"100%"}>
            {data?.results.map((list) => (
              <Tab key={list.id} fontSize={"md"}>
                {list.name}
              </Tab>
            ))}
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="3px"
            bg="blue.200"
            borderRadius="5px"
          />
          <TabPanels>
            <TabPanel as={SimpleGrid} columns={{ sm: 1, md: 2 }} spacing={6}>
              {
                // jobs?.results.map((job) => (
                //   <ListCardContainer key={job.id}>
                //     <JobCard job={job} />
                //   </ListCardContainer>
                //
                // ))

                skeletons.map((skeleton) => (
                  <ListCardContainer key={skeleton}>
                    <CardSkeleton />
                  </ListCardContainer>
                ))
              }
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
            <TabPanel>
              <p>Four!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      )}
    </SimpleGrid>
  );
};

export default ListGrid;
