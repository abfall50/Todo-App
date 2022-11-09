import Head from "next/head";
import Box from "../components/Box";
import FilterFooter from "../components/FilterFooter";
import Header from "../components/Header";
import InputBar from "../components/InputBar";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Todo App</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="w-full h-1/3 bg-[#161722] border-2 border-red-500"></div>
      <div className="w-full h-2/3 bg-[#161722] border-2 border-blue-600"></div>

      <div className="w-full h-full absolute top-0 flex justify-center items-center">
        <div className="w-[85%] h-[90%] flex flex-col">
          <Header />
          <InputBar />
          <Box />
          <FilterFooter />
          <div className="w-full h-[8%] flex justify-center items-center">
            <span className="w-full h-full text-md font-['Josephin_Sans'] text-center text-[#4D5066]">
              Drag and drop to reorder list
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
