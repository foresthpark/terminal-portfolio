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
      reset();
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
    <div className="p-4">
      {/* <span className="mb-2 whitespace-pre-wrap text-term-yellow">
        {display}
      </span> */}

      <p
        className="mb-2 whitespace-pre-wrap text-term-yellow"
        style={{ lineHeight: "normal" }}
        dangerouslySetInnerHTML={{ __html: display }}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-row items-center justify-start gap-2"
      >
        <LeftLane />
        <input
          {...register("command")}
          className="bg-transparent text-term-yellow caret-term-green shadow-sm focus:outline-none sm:text-sm"
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
        />
      </form>
    </div>
  );
};

export default Home;
