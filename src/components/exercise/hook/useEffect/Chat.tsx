import { useState, useEffect } from 'react';

import { View, Text, TextInput, Button } from 'react-native';

type Connection = {
  connect: () => void;
  disconnect: () => void;
};

type CreateConnectionParams = {
  serverUrl: string;
  roomId: string;
};

function createConnection({
  serverUrl,
  roomId,
}: CreateConnectionParams): Connection {
  return {
    connect() {
      console.log(
        'Connected to the chat server at ' + serverUrl + ' in room ' + roomId,
      );
    },
    disconnect() {
      console.log(
        'Disconnected from the chat server at ' +
          serverUrl +
          ' in room ' +
          roomId,
      );
    },
  };
}

function ChatRoom() {
  const [serverUrl, setServerUrl] = useState('https://chat.server.com');
  const [roomId, setRoomId] = useState('room1');

  useEffect(() => {
    const connection = createConnection({ serverUrl, roomId });
    connection.connect();

    return () => {
      connection.disconnect();
    };
  }, []);

  return (
    <View>
      <Text>Chat Room</Text>
      <TextInput
        placeholder="Server URL"
        value={serverUrl}
        onChangeText={text => setServerUrl(text)}
      />
      <TextInput
        placeholder="Room ID"
        value={roomId}
        onChangeText={text => setRoomId(text)}
      />
      <Button
        title="Join Chat"
        onPress={() => console.log('Joining chat...')}
      />

      <Text>Connected to: {serverUrl}</Text>
      <Text>Room ID: {roomId}</Text>
    </View>
  );
}
