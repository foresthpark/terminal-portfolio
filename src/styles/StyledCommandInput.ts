import tw from "tailwind-styled-components";

interface StyledCommandInputProps {
  //   commandExists: boolean;
  [key: string]: unknown;
}

export const StyledCommandInput = tw.input<StyledCommandInputProps>`
    bg-transparent

    ${({ commandExists }) =>
      commandExists
        ? "text-term-text-success-primary"
        : "text-term-text-error-primary"}

    ${({ commandExists }) =>
      commandExists
        ? "caret-term-text-success-primary"
        : "caret-term-text-error-primary"}
   
    shadow-sm
    focus:outline-none
    sm:text-sm
`;
