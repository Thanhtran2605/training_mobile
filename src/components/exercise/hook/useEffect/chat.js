export function createConnection(serverUrl, roomId) {
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
