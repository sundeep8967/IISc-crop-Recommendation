import { Button,Box,NativeBaseProvider } from "native-base";

const Buttonn = () => {
    return (
        <NativeBaseProvider>
        <Button>
        <Box alignItems="center">
        <Button onPress={() => console.log("hello world")}>Submit</Button>
      </Box>
      </Button>
      </NativeBaseProvider>
    );
  };

export default Buttonn;