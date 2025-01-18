import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    config: {
      initialColorMode: "light", // Set the default color mode
      useSystemColorMode: false, // Disable system color mode
    },
  });