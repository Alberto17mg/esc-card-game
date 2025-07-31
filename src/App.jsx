
import React, { useState } from 'react';
import { db } from './firebaseConfig';

function App() {
  const [room, setRoom] = useState('');
  const [joined, setJoined] = useState(false);

  const createRoom = () => {
    const code = Math.random().toString(36).substring(2, 7).toUpperCase();
    setRoom(code);
    setJoined(true);
  };

  const joinRoom = (e) => {
    e.preventDefault();
    if (room.length === 5) setJoined(true);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>ESC Card Game</h1>
      {!joined ? (
        <div>
          <button onClick={createRoom}>Crear sala</button>
          <form onSubmit={joinRoom}>
            <input
              placeholder="Código de sala"
              value={room}
              onChange={(e) => setRoom(e.target.value.toUpperCase())}
            />
            <button type="submit">Entrar</button>
          </form>
        </div>
      ) : (
        <h2>Estás en la sala: {room}</h2>
      )}
    </div>
  );
}

export default App;
