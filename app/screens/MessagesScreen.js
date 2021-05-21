import React, { useState } from 'react';
import {
    FlatList,
    StyleSheet,
    View
} from "react-native";

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from './../components/ListItemDeleteAction';

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 3,
        title: 'T3',
        description: 'D3',
        image: require('../assets/mosh.jpg')
    },
]

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);


    const handleDelete = message => {
        // Delete the message form messages
        setMessages(messages.filter(m => m.id !== message.id));

        // call the server
    };

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({item}) => (
                    <ListItem
                        image={item.image}
                        title={item.title}
                        subTitle={item.description}
                        onPress={() => console.log("Message selected.", item)}
                        renderRightActions={() =>
                            <ListItemDeleteAction
                                onPress={() => handleDelete(item)}
                            />
                        }
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}

                // An array of messages after we pull down to refresh
                onRefresh={() => {
                    setMessages([
                        {
                            id: 3,
                            title: 'T3',
                            description: 'D3',
                            image: require('../assets/mosh.jpg')
                        },
                    ])
                }}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
});

export default MessagesScreen;