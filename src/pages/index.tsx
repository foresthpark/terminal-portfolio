import { type NextPage } from "next";
import { useForm } from "react-hook-form";
import * as outputs from "@/constants/ouputs";
import { useState } from "react";
import LeftLane from "@/components/LeftLane/LeftLane";
console.log("🚀 ~ file: index.tsx ~ line 4 ~ ouputs", outputs);

const Home: NextPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const [display, setDisplay] = useState("");

  const onSubmit = async (data: { command: string }) => {
    if (Object.keys(outputs).indexOf(data.command) === -1) {
      setDisplay("Command not found");
      return;
    }

    const output = await outputs[data.command]();
    console.log(
      "🚀🚀🚀🚀 ~ file: index.tsx ~ line 15 ~ onSubmit ~ output",
      output
    );

    setDisplay(output);
    reset();
  };

  return (
    <div>
      <span className="mb-2 whitespace-pre-wrap text-term-yellow">
        {display}
      </span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <LeftLane />
        <input
          {...register("command")}
          className="block w-full rounded-md border-gray-300 caret-term-green shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </form>
    </div>
  );
};

export default Home;
