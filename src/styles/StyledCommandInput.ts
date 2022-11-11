import tw from "tailwind-styled-components";

interface StyledCommandInputProps {
  commandexists: boolean;
  [key: string]: unknown;
}

export const StyledCommandInput = tw.input<StyledCommandInputProps>`
    bg-transparent

    ${({ commandexists }) =>
      commandexists
        ? "text-term-text-success-primary"
        : "text-term-text-error-primary"}

    ${({ commandexists }) =>
      commandexists
        ? "caret-term-text-success-primary"
        : "caret-term-text-error-primary"}
   
    shadow-sm
    focus:outline-none
    sm:text-sm

`;
