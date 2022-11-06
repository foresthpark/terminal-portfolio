import History from "@/components/History/History";
import { historyAtom } from "@/components/History/History.jotai";
import LeftLane from "@/components/LeftLane/LeftLane";
import * as outputs from "@/constants/ouputs";
import { StyledCommandInput } from "@/styles/StyledCommandInput";
import commandExists from "@/utils/commandExists";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

interface ICommandSubmit {
  command: string;
}

interface HomePageProps {
  inputRef: React.MutableRefObject<HTMLInputElement>;
}

const Home = ({ inputRef }: HomePageProps) => {
  const { register, handleSubmit, reset, watch, setFocus } =
    useForm<ICommandSubmit>();
  const [display, setDisplay] = useState("");
  const { ref, ...rest } = register("command");
  const [history, setHistory] = useAtom(historyAtom);

  useEffect(() => {
    if (inputRef?.current) {
      inputRef?.current?.focus();
    }
  }, [inputRef, setFocus]);

  const onSubmit: SubmitHandler<ICommandSubmit> = async ({ command }) => {
    if (Object.keys(outputs).indexOf(command) === -1) {
      setDisplay("Command not found. Try 'help' for a list of commands.");
      reset();
      return;
    }

    const output = await outputs[command]();

    const newHistory = {
      id: history?.length,
      date: new Date(),
      command,
      output,
    };

    setDisplay(output);
    setHistory((prev) => [...prev, newHistory]);
    reset();
    return;
  };

  return (
    <div className="p-4">
      <History histories={history} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-row items-center justify-start gap-2"
      >
        <LeftLane />
        <StyledCommandInput
          {...rest}
          name="command"
          ref={(e) => {
            ref(e);
            inputRef.current = e; // you can still assign to ref
          }}
          commandExists={commandExists(watch("command"))}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
        />
      </form>
    </div>
  );
};

export default Home;
