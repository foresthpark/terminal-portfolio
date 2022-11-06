import tw from "tailwind-styled-components";

interface StyledCommandInputProps {
  //   commandExists: boolean;
  [key: string]: unknown;
}

export const StyledCommandInput = tw.input<StyledCommandInputProps>`
    bg-transparent

    ${({ commandExists }) =>
      commandExists ? "text-term-green" : "text-term-red"}

    ${({ commandExists }) =>
      commandExists ? "caret-term-green" : "caret-term-red"}
   
    shadow-sm
    focus:outline-none
    sm:text-sm
`;
