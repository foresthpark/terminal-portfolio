import History from "@/components/History/History";
import { historyAtom } from "@/components/History/History.jotai";
import LeftLane from "@/components/LeftLane/LeftLane";
import * as outputs from "@/constants/outputs";
import { StyledCommandInput } from "@/styles/StyledCommandInput";
import commandExists from "@/utils/commandExists";
import { handleTabCompletion } from "@/utils/handleTabCompletions";
import { useAtom } from "jotai";
import { useEffect, useRef } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

export interface ICommandSubmit {
  command: string;
}

interface HomePageProps {
  inputRef: React.MutableRefObject<HTMLInputElement>;
}

const Home = ({ inputRef }: HomePageProps) => {
  const { register, handleSubmit, reset, watch, setFocus, setValue } =
    useForm<ICommandSubmit>();
  const { ref, ...rest } = register("command");
  const [history, setHistory] = useAtom(historyAtom);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo(0, containerRef?.current.scrollHeight);
    }
  }, [history]);

  useEffect(() => {
    if (inputRef?.current) {
      inputRef?.current?.focus();
    }
  }, [inputRef, setFocus]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();

      setHistory([]);
    }

    if (e.key === "Tab") {
      e.preventDefault();

      handleTabCompletion(watch("command"), setValue);
    }
  };

  const onSubmit: SubmitHandler<ICommandSubmit> = async ({ command }) => {
    switch (command) {
      case "clear":
        setHistory([]);
        reset();
        break;
      default:
        if (Object.keys(outputs).indexOf(command) === -1) {
          const newHistory = {
            id: history.length,
            date: new Date(),
            command,
            output: "Command not found. Try 'help' for a list of commands.",
          };

          setHistory((prev) => [...prev, newHistory]);
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

        setHistory((prev) => [...prev, newHistory]);
        reset();
        return;
    }
  };

  return (
    <div ref={containerRef} className="h-full overflow-auto p-4">
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
          onKeyDown={handleKeyDown}
        />
      </form>
    </div>
  );
};

export default Home;
