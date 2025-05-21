import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";
import ClipButton from "./ClipButton";

const Skills = () => {
  return (
    <div id="skills" className="min-h-dvh w-screen bg-[#5542ff] text-blue-50">
      <div className="flex w-full lg:h-[80vh] flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-md">
          Welcome to Skills section
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="<b>Skills</b>"
            containerClass="mt-5 pointer-events-none text-[#eaff29] relative z-10"
          />

          <div className="w-full h-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 max-md:px-10 px-20 py-10 gap-6">
            <div className="col-span-1">
              <h2 className="text-center font-circular-web lg:text-2xl text-[#211650] font-bold ">
                Programming Languages <br /> & Tools
              </h2>
              <ul className="grid grid-flow-row auto-rows-max grid-cols-2">
                <li>
                  <ClipButton title={"JavaScript"} />
                </li>
                <li>
                  <ClipButton title={"C++"} />
                </li>
                <li>
                  <ClipButton title={"Pyhton"} />
                </li>
                <li>
                  <ClipButton title={"Java"} />
                </li>
                <li>
                  <ClipButton title={"Git"} />
                </li>
                <li>
                  <ClipButton title={"GitHub"} />
                </li>
                <li>
                  <ClipButton title={"Kafka"} />
                </li>
                <li>
                  <ClipButton title={"Postman"} />
                </li>
                <li>
                  <ClipButton title={"VS code"} />
                </li>
                <li>
                  <ClipButton title={"WebStorm"} />
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h2 className="text-center font-circular-web lg:text-2xl text-[#211650] font-bold ">
                Web and Mobile Development
              </h2>
              <ul className="grid grid-flow-row auto-rows-max grid-cols-2">
                <li>
                  <ClipButton title={"HTML"} />
                </li>
                <li>
                  <ClipButton title={"CSS"} />
                </li>
                <li>
                  <ClipButton title={"React"} />
                </li>
                <li>
                  <ClipButton title={"React-Native"} />
                </li>
                <li>
                  <ClipButton title={"Node.js"} />
                </li>
                <li>
                  <ClipButton title={"Express"} />
                </li>
                <li>
                  <ClipButton title={"Axios"} />
                </li>
                <li>
                  <ClipButton title={"Tailwind"} />
                </li>
                <li>
                  <ClipButton title={"GSAP"} />
                </li>
                <li>
                  <ClipButton title={"ShadCDN"} />
                </li>
                <li>
                  <ClipButton title={"Next"} />
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h2 className="text-center font-circular-web lg:text-2xl text-[#211650] font-bold ">
                Machine Learning , Generative AI & RAG
              </h2>
              <ul className="grid grid-flow-row auto-rows-max grid-cols-2">
                <li className="col-span-2">
                  <ClipButton title={"Vector Embeddings"} />
                </li>
                <li>
                  <ClipButton title={"Indexing"} />
                </li>
                <li>
                  <ClipButton title={"Chunking"} />
                </li>
                <li>
                  <ClipButton title={"RAG Pipelines"} />
                </li>
                <li>
                  <ClipButton title={"LlamaIndex"} />
                </li>
                <li>
                  <ClipButton title={"LangChain"} />
                </li>
                <li>
                  <ClipButton title={"Colpali"} />
                </li>
                <li className="col-span-2">
                  <ClipButton title={"Vector Databases"} />
                </li>
                <li>
                  <ClipButton title={"LangGraph"} />
                </li>
                <li>
                  <ClipButton title={"CrewAI"} />
                </li>
                
              </ul>
            </div>
            <div className="col-span-1">
              <h2 className="text-center font-circular-web lg:text-2xl text-[#211650] font-bold ">
                 Databases, Cloud & <br />DevOps
              </h2>
              <ul className="grid grid-flow-row auto-rows-max grid-cols-2">
                <li>
                  <ClipButton title={"MongoDb"} />
                </li>
                <li>
                  <ClipButton title={"FireBase"} />
                </li>
                <li>
                  <ClipButton title={"mySql"} />
                </li>
                <li>
                  <ClipButton title={"PostgreSQL"} />
                </li>
                <li>
                  <ClipButton title={"Docker"} />
                </li>
                <li>
                  <ClipButton title={"AWS"} />
                </li>
                <li className="col-span-2">
                  <ClipButton title={"Hugging Face Spaces"} />
                </li>
                <li>
                  <ClipButton title={"CI/CD Pipeline"} />
                </li>
                <li>
                  <ClipButton title={"FastAPI"} />
                </li>
                
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
