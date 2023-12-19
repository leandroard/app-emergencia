import tw from 'twrnc'
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import SearchBar from '../components/SearchBar';

const Home = () => {
    return (
    <SafeAreaView>
        <View>
            <View style={tw`justify-center h-24 `}>
                <SearchBar/>
            </View>
        <Text style={tw`text-red-700`}>Home Emergency directory </Text>
        </View>
    </SafeAreaView>
    );
}

export default Home;
