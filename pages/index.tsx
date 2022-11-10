import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import Background from "../components/Background";
import Box from "../components/Box";
import FilterFooter from "../components/FilterFooter";
import Header from "../components/Header";
import InputBar from "../components/InputBar";
import { useMediaQuery } from "../features/hooks";

export default function Home() {
  let breakpoint = useMediaQuery(1024);

  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Todo App</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Background />

      <main className="w-full h-full absolute top-0 flex justify-center items-center">
        <div className="w-[85%] h-[85%] flex flex-col md:w-3/5 lg:w-2/5">
          <Header />
          <InputBar />
          <Box />
          {breakpoint ? <FilterFooter /> : ""}
        </div>
      </main>
    </div>
  );
}
