import { Button } from "@/components/ui";

export const About = () => {
  return (
    <div className="text-md md:flex-row flex flex-col gap-4 p-6  items-center">
      <div>
        <img className="rounded-sm " src="public/images/google-icon-logo.svg" height={300} width={300} alt="" />
      </div>
      <div className="flex flex-col text-right gap-4">
        <div className="text-sm md:text-right text-center">
          As an undergraduate software engineering student at ICBT Colombo
          Campus, pursuing a degree from Cardiff Metropolitan University, UK, I
          am deeply passionate about web development and eager to leverage my
          skills to tackle real-world challenges. I'm on the lookout for
          opportunities to learn and grow further in this field.
        </div>
        <div className="flex items-center gap-2 md:justify-end justify-center">
          <Button size="sm" className="!text-xs dark:text-white">
            About me
          </Button>

          <Button size={"sm"} className="!text-xs dark:text-white">My cv</Button>
        </div>
      </div>
    </div>
  );
};
