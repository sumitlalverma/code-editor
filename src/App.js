import { Box } from "@chakra-ui/react";
import EditorWindow from "./components/EditorWindow";

function App() {
  return (
    <Box minH="100vh" bg="#ebf7ff" color="gray.500" px={6} py={8}>
      <EditorWindow />
    </Box>
  );
}

export default App;
