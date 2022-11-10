import { NextPage } from "next";
import Image from "next/image";
import Check from "../public/icon-check.svg";

type Gradient = {
  direction: string;
  from: string;
  to: string;
};

type CircleProps = {
  gradient?: Gradient;
  isInBox: boolean;
};

const Circle: NextPage<CircleProps> = (props) => {
  const { gradient, isInBox } = props;

  return (
    <div
      className={
        "w-6 h-6 rounded-full bg-circle-outline p-px " +
        (isInBox &&
          !gradient &&
          "lg:group-hover:bg-gradient-to-br from-[#57DDFF] to-[#C058F3]")
      }
    >
      <div
        className={
          "w-full h-full rounded-full flex justify-center items-center " +
          (gradient
            ? "bg-gradient-to-br from-[#57DDFF] to-[#C058F3]"
            : "bg-box")
        }
      >
        {gradient && <Image src={Check} alt="Check" />}
      </div>
    </div>
  );
};

export default Circle;
