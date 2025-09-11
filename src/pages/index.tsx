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
  const hasExecutedAutoCommand = useRef(false);

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

  const executeCommand = async (command: string) => {
    switch (command) {
      case "clear":
        setHistory([]);
        break;
      default:
        if (Object.keys(outputs).indexOf(command) === -1) {
          setHistory((prev) => [...prev, {
            id: prev.length,
            date: new Date(),
            command,
            output: "Command not found. Try 'help' for a list of commands.",
          }]);
          return;
        }

        const output = await outputs[command]();

        setHistory((prev) => [...prev, {
          id: prev.length,
          date: new Date(),
          command,
          output,
        }]);
        return;
    }
  };

  useEffect(() => {
    const handleAutoCommand = async () => {
      if (hasExecutedAutoCommand.current) return;
      
      const hash = window.location.hash.substring(1);
      if (hash && Object.keys(outputs).indexOf(hash) !== -1) {
        hasExecutedAutoCommand.current = true;
        await executeCommand(hash);
        window.history.replaceState(null, '', window.location.pathname);
      }
    };

    handleAutoCommand();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    await executeCommand(command);
    reset();
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
          commandexists={commandExists(watch("command"))}
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
