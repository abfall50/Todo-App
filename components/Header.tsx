import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect } from "react";
import Sun from "../public/icon-sun.svg";
import Moon from "../public/icon-moon.svg";

const Header = () => {
  const { theme, setTheme } = useTheme();

  /* Setting the theme to dark on the first render. */
  useEffect(() => {
    setTheme("dark");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * If the theme is dark, set it to light, otherwise set it to dark
   */
  const changeTheme = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  return (
    <>
      <section className="w-full h-[11% flex justify-between items-center">
        <span className="text-3xl font-medium font-['Josefin_Sans'] text-white tracking-widest lg:text-4xl">
          TODO
        </span>
        <button onClick={changeTheme}>
          <Image src={theme === "dark" ? Sun : Moon} alt="Sun" />
        </button>
      </section>
    </>
  );
};

export default Header;
