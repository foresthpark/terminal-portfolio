import tw from "tailwind-styled-components";

interface ILayoutProps {
  [key: string]: unknown;
}

export const StyledMainContainer = tw.div<ILayoutProps>`
    min-w-max
    min-h-screen
    p-4
    text-xs
    md:min-w-full
    md:text-base
    bg-term-background
`;

export const StyledBorderContainer = tw.div<ILayoutProps>`
    h-full    
    overflow-y-auto
    border-2
    border-term-yellow
    rounded-md
    
`;
