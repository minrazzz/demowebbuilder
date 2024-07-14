import ComponentList from "./componentList";
import ComponentCard from "./componentList/ComponentCard";
import { BuilderNavbar } from "./navbar";
import RenderJsonToBlock from "./RenderJsonToBlock";

const BuilderLayout: React.FC = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      {/* <nav className="h-[80px] w-full">
        <BuilderNavbar />
      </nav>
      <div className="grid grid-cols-12 flex-grow">
        <div className="col-span-3 h-full">
          <ComponentList />
          <ComponentCard />
        </div>
      </div> */}
      <RenderJsonToBlock />
    </div>
  );
};

export default BuilderLayout;
