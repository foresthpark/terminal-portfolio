import { type NextPage } from "next";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import * as outputs from "@/constants/ouputs";
import { useState } from "react";
import LeftLane from "@/components/LeftLane/LeftLane";

interface ICommandSubmit {
  command: string;
}

const Home: NextPage = () => {
  const { register, handleSubmit, reset } = useForm<ICommandSubmit>();
  const [display, setDisplay] = useState("");

  const onSubmit: SubmitHandler<ICommandSubmit> = ({ command }) => {
    if (Object.keys(outputs).indexOf(command) === -1) {
      setDisplay("Command not found. Trye 'help' for a list of commands.");
      reset();
      return;
    }

    const output = outputs[command]();

    setDisplay(output);
    reset();
    return;
  };

  return (
    <div className="p-4">
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
