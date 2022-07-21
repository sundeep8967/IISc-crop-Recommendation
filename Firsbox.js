import React from "react";
import { NativeBaseProvider, Box,Select,Center,FormControl,CheckIcon,WarningOutlineIcon,Text } from "native-base";


export const Firstbox = ({setSeason}) => {
    return( <NativeBaseProvider>
    <Center>
    <Text>
      <FormControl w="3/4" maxW="300" isRequired isInvalid>
        <FormControl.Label>Select Season</FormControl.Label>
        <Select minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Season" _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size={5} />
          }} 
          onValueChange={(itemValue)=> {console.log('changed season'); setSeason(itemValue)}}
          >
          <Select.Item label="KHARIF CROPS" value="khariff" />
          <Select.Item label="RABI CROPS" value="rabi" />
        </Select>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Please make a selection!
        </FormControl.ErrorMessage>
      </FormControl>
    </Text>
</Center>
          </NativeBaseProvider>)
  };
