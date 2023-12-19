import tw from 'twrnc'
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper'
import  Icon  from 'react-native-vector-icons/FontAwesome5';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = () => {
    
    return (
        <View>
          <Searchbar
            placeholder="Buscar..."
            placeholderTextColor="gray"
            iconColor="yellow"
            elevation={5}
            inputStyle={{ 
              color: "rgba(247,247,247,1)", 
              fontSize: 20, 
          
            }}
            style={tw`h-16 bg-blue-950 placeholder:text-stone-50 shadow-2xl` }
          />
        </View>
      );

    }
//     return (
//         <View style={tw`flex-row items-center bg-gray-200 p-2`}>
            
//                 <TextInput style={tw`flex-1 p-2 bg-white rounded-3xl`} placeholder='Search' />
//                 <TouchableOpacity style={tw`ml-2 p-2 bg-blue-500 rounded-md`}>
//                 <Icon name="search" color={"black"} size={20} />
//                 <Text style={tw`text-white`}>Buscar</Text>
//                 </TouchableOpacity>
//         </View>
//     );
// }

export default SearchBar;
