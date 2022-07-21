import React from "react";
import { NativeBaseProvider, Box,Select,Center,FormControl,CheckIcon,WarningOutlineIcon,Text } from "native-base";
import { View } from "react-native";

export const Secondbox = ({season, setCrop}) => {
    return( <NativeBaseProvider>
  <Center>
    <Text>
      <FormControl w="3/4" maxW="300" isRequired isInvalid>
       
        <FormControl.Label>Select crop </FormControl.Label>
        <Select minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size={5} />
          }}
          onValueChange={(itemValue)=> {console.log('changed season'); setCrop(itemValue)}}
          
          >
      
          <Select.Item label="Rice" value="rice" />
          <Select.Item label="Maize" value="maize" />
          <Select.Item label="Groundnut" value="groundnut" />
        
          <Select.Item label="Barley" value="barley" />
          <Select.Item label="Wheat" value="wheat" />
          <Select.Item label="Masur Dal" value="masurdal" />
         
          
        </Select>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Please make a selection!
        </FormControl.ErrorMessage>
      </FormControl>
    </Text>
    </Center>

          </NativeBaseProvider>)
  };
