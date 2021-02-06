import Head from "next/head";
import React from "react";
import { Container, IconButton } from "@material-ui/core";
import {
  Header,
  Body,
  Footer,
  ResHeader,
  Carousel,
  Basket,
} from "../components";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const Public = () => {
  return (
    <Container>
      <Head>
        <title>FS-next-v</title>
      </Head>
      <a href='#' className='arrowUpward'>
        <IconButton color='secondary' aria-label='arrowUpward'>
          <ArrowUpwardIcon fontSize='inherit' />
        </IconButton>
      </a>
      <span className='wrapper'>
        <Basket />
        <Header />
      </span>
      <ResHeader />
      <Carousel />
      <Body />
      <Footer />
    </Container>
  );
};

export default Public;
