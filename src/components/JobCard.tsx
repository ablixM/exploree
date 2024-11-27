import { Job } from "../entities/job.ts";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

interface Props {
  job: Job;
}

export const JobCard = ({ job }: Props) => {
  return (
    <>
      <Card>
        <CardHeader>{job.title}</CardHeader>
        <CardBody>{job.description}</CardBody>
        <CardFooter>{job.location}</CardFooter>
      </Card>
    </>
  );
};
