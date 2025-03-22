import { Badge } from "@/components/ui";
import { FolderGit2 } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      name: "Apple iStore Desktop App",
      description:
        "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quo dolorem quae voluptatibus doloremque in beatae saepe fugit omnis nihil! ",
      tools: ["java", "java swing"],
      repo: "",
    },
    {
      name: "Railway Booking Web",
      description:
        "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quo dolorem quae voluptatibus doloremque in beatae saepe fugit omnis nihil! ",
      tools: ["react", ".net", "sql", "css"],
      repo: "",
    },
    {
      name: "Pet care Mobile App",
      description:
        "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quo dolorem quae voluptatibus doloremque in beatae saepe fugit omnis nihil! ",
      tools: ["java", "sql lite"],
      repo: "",
    },
    {
      name: "Explore Srilanka Web",
      description:
        "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quo dolorem quae voluptatibus doloremque in beatae saepe fugit omnis nihil! ",
      tools: ["html", "css", "php", "sql"],
      repo: "",
    },
    {
      name: "Projectly Web App",
      description:
        "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quo dolorem quae voluptatibus doloremque in beatae saepe fugit omnis nihil! ",
      tools: ["react", "express", ".net", "superbase"],
      repo: "",
    },
    {
      name: "   Project Name",
      description:
        "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quo dolorem quae voluptatibus doloremque in beatae saepe fugit omnis nihil! ",
    },
  ];
  return (
    <div className="p-6 text-sm">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-2 ">
        {projects.map((data) => {
          return (
            <div className="rouded-sm border p-2">
              <div className="flex justify-between items-center">
                <div className="font-medium">{data.name}</div>
                <div className="font-medium cursor-pointer">{data.repo} <FolderGit2 size={18}/></div>
              </div>
              <div className="text-sm my-2">{data.description}</div>
              <div className="flex gap-1 mb-2">
                {data.tools?.map((data) => {
                  return (
                    <Badge className="text-xs px-2 py-1 rounded-sm dark:text-white bg-slate-700">
                      {data}
                    </Badge>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
