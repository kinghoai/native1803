import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import bugIcon from '../images/bug.jpg';
export class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singers: [
                { _id: 'a1', name: 'Justin Bieber', image: 'https://zmp3-photo.zadn.vn/thumb/240_240/avatars/0/0/00ee53543d5d58856e50f5fde919a19b_1447671074.jpg' },
                { _id: 'a2', name: 'Alan Walker', image: 'https://zmp3-photo.zadn.vn/thumb/240_240/avatars/c/0/c0158a5d0afdbb8b3d177162b9328a7c_1452770729.jpg' },
                { _id: 'a3', name: 'Camila Cabello', image: 'https://zmp3-photo.zadn.vn/thumb/240_240/avatars/0/3/033e843ca1e354b5298fc21816a633d4_1516949382.jpg' },
                { _id: 'a4', name: 'Charlie Puth', image: 'https://zmp3-photo.zadn.vn/thumb/240_240/avatars/e/6/e6315a53da3054a2a4587b532d06933c_1425035895.jpg' },
                { _id: 'a5', name: 'Maroon 5', image: 'https://mp3.zing.vn/nghe-si/Maroon-5' },
                { _id: 'a6', name: 'Bruno Mars', image: 'https://zmp3-photo.zadn.vn/thumb/240_240/avatars/e/b/eb6d98feebca39aebf2c6d6c0c058d30_1475836289.jpg' },
                { _id: 'a7', name: 'Ellie Goulding', image: 'https://zmp3-photo.zadn.vn/thumb/240_240/avatars/d/1/d121e70471630c754a95888a38e8d2b9_1442572824.jpg' },
            ]
        };
    }
    render() {
        const { singles } = this.state;
        return (
            <View style={styles.container}>
                {/* <Image 
                    source={bugIcon} 
                    style={{width: 30, height: 30}}/> */}
                {/* <Image 
                    source={{uri: 'https://zmp3-photo.zadn.vn/thumb/240_240/avatars/0/0/00ee53543d5d58856e50f5fde919a19b_1447671074.jpg'}}
                    style={{width: 60, height: 60}} /> */}
                <Text style={styles.title}>US-UK Singers</Text>
                {singers.map(single=>(
                    <View key={single.name}>
                        <Image source={{ uri:singers.image }} style={styles.avatar} />
                        <Text>{single.name}</Text>
                    </View>
                ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        flex: 1,
        alignItems: 'center'
    },
    title: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 20
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius:25,
    }
});