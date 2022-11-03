import tw from "tailwind-styled-components";

export const StyledMainContainer = tw.div`
    min-w-max
    min-h-screen
    p-3
    text-xs
    md:min-w-full
    md:text-base
    bg-term-background
`;

export const StyledBorderContainer = tw.div`
    min-h-screen    
    overflow-y-auto
    border-2
    border-term-yellow
    rounded-md
    
`;
