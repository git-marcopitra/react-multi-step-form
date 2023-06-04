import { Box } from "@/elements";
import MultiStepForm from "@/views/multi-step-form";
import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Multi Step Form</title>
      <meta name="description" content="Multi Step Form by git-marcopitra" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Box
      as="main"
      bg="#282828"
      width="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <MultiStepForm />
    </Box>
  </>
);

export default Home;
