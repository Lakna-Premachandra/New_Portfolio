import { ModeToggle } from "../mode-toggle";

export const Header = () => {
  return (
    <div className=" p-2  flex justify-between items-center w-full ">
      <div className="text-lg">Name</div>
      <div className="flex items-center gap-4 justify-center text-sm">
        <div>About</div>
        <div>Projects</div> <div>Contact</div>
        <ModeToggle/>
      </div>
    </div>
  );
};
