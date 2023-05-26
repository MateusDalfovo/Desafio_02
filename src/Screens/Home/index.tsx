import { styles } from './styles';
import { Text, TextInput, View, TouchableOpacity, FlatList, Alert, Image, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

export default function Home() {

    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');

    return (

        <View style={styles.container}>

            <Image style={styles.logo} source={require('../../../assets/logo_market.png')}></Image>

            <Text style={styles.escrita}> marketspace </Text>
            <Text style={styles.sub_escrita}> Seu espaço de compra e venda </Text>
            <Text style={styles.conta}> Acesse sua conta </Text>

            <SafeAreaView>
                    
                    <View>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder=' Email'
                        />
                    </View>

                    <View>

                        <TextInput
                            style={styles.input_senha}
                            onChangeText={onChangeNumber}
                            value={number}
                            placeholder='Senha'
                            keyboardType='numeric'
                        />
                    </View>



                
            </SafeAreaView>
        </View>



    )

}