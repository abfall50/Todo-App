import { NextPage } from "next";
import Image from "next/image";
import Check from '../public/icon-check.svg'

type Gradient = {
  direction: string;
  from: string;
  to: string;
};

type CircleProps = {
  color?: string;
  gradient?: Gradient;
};

const Circle: NextPage<CircleProps> = (props) => {
  const { color, gradient } = props;

  return (
    <div
      className={
        "w-6 h-6 border-2 rounded-full flex justify-center items-center " +
        (color ? `border-[#${color}] ` : "") +
        (gradient
          ? `bg-${gradient.direction} from-[#${gradient.from}] to-[#${gradient.to}] border-0 `
          : "bg-[#34364C] ")
      }
    >
		{gradient && <Image src={Check} alt="Check" />}
	</div>
  );
};

export default Circle;
