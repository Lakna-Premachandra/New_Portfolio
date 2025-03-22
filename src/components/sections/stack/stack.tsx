import { Badge } from "@/components/ui";

export const Stack = () => {
  return (
    <div className="px-6  text-sm   ">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi cupiditate
      a aspernatur cum ab alias. Iusto minus dolorum aperiam tempore et, fugiat
      corporis, eum, libero animi ab laboriosam. A perspiciatis iste dolores
      necessitatibus fugit voluptatem quasi exercitationem earum, libero
      perferendis consequuntur, consectetur, cumque magni cum optio? Quibusdam
      distinctio non voluptates?

    <div className="flex items-center flex-wrap gap-2 my-3"> 
    <Badge  className="bg-[#37bba3] rounded-sm">React js</Badge>
      <Badge className="bg-[#3178c6] rounded-sm">Typescript</Badge>
      <Badge className="bg-slate-700 rounded-sm">Next js</Badge>
      <Badge className="bg-yellow-500 rounded-sm">Tailwind</Badge>
      <Badge className="bg-red-400 rounded-sm">Sql</Badge>
      <Badge className="bg-purple-500 rounded-sm">c#/.Net</Badge>
      <Badge className="bg-pink-400 rounded-sm">Git & Github / Azure Devops /Docker</Badge>
      <Badge className="bg-orange-400 rounded-sm">Html</Badge>
      <Badge className="bg-purple-500 rounded-sm">Css</Badge>


    </div>

    </div>
  );
};
