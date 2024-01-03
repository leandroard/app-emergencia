import tw from 'twrnc'
import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';



const BotonList = ({item}) => {

    const seleccion = () =>{
        console.log(`vamos a: ${item.title}`)
    }

    return (
    <TouchableWithoutFeedback onPress={seleccion}>
        <View style={tw`mr-1 my-2 p-3 border-l border-gray-300 flex items-center justify-between w-35`}>
        <Image 
        source={item.imagen}
        style={tw` bottom-2 right-2 w-25 h-25 right-1 `}/> 
            <Text style={tw`text-lg text-center text-blue-950 font-semibold`}>{item.title}</Text>
        </View>
    </TouchableWithoutFeedback>
    );
}

export default BotonList;
