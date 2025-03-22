import { Footer, Header } from "../common";
import { About, Experience, Projects, Stack } from "../sections";

export const Layout = () => {
  return (
    <div className="w-full flex flex-col border border-y-0 min-h-screen ">
      <div className="border">
        <div className="m-auto max-w-6xl border border-y-0">
          <Header />
        </div>
      </div>
      <div className="flex-1 ">
        <div className="border border-t-0  ">
          <div className="m-auto max-w-6xl border border-y-0 ">
            <div className=" text-sm p-3 font-medium">About me</div>
            <About />
          </div>
        </div>
        <div className="border border-t-0  ">
          <div className="m-auto max-w-6xl border border-y-0 py-6 ">
            <div className=" text-sm px-3 font-medium pb-4">Stack</div>
            <Stack />
          </div>
        </div>{" "}
        <div className="border border-t-0  ">
          <div className="m-auto max-w-6xl border border-y-0 py-6 text-sm">
            <div className=" text-sm px-3 font-medium">Projects</div>
            <Projects />
          </div>
        </div>{" "}
        <div className="border border-t-0 ">
          <div className="m-auto max-w-6xl border border-y-0 p-6 text-sm">
          <div className=" text-sm px-3 font-medium">Experience & Education</div>
          <Experience />
          </div>
        </div>{" "}
        <div className="border border-t-0 ">
          <div className="m-auto max-w-6xl border border-y-0 p-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            aliquid impedit ratione ut distinctio at maiores dicta suscipit sit
            dolores!
          </div>
        </div>
      </div>
      <div className="border  ">
        <div className="m-auto max-w-6xl border border-y-0 ">
          <Footer />
        </div>
      </div>
    </div>
  );
};
