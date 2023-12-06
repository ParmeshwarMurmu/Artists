import React, { useState } from 'react';
import data from '@emoji-mart/data';
// import { Picker } from 'emoji-mart'; // Import Picker from the correct path
import Picker from '@emoji-mart/react'

const Emoji = ({ onEmojiSelect }) => {
  const [text, setText] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const handleEmojiSelect = (emoji) => {
    setSelectedEmoji(emoji);
  };

  const handleButtonClick = () => {
    const commentWithEmoji = `${text} ${selectedEmoji ? selectedEmoji.native : ''}`;
    onEmojiSelect(commentWithEmoji);
    // Reset text and selectedEmoji if needed
    setText('');
    setSelectedEmoji(null);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write something..."
      />
      <Picker data={data} onSelect={handleEmojiSelect} />
      <button onClick={handleButtonClick}>Add Emoji</button>
    </div>
  );
};

export default Emoji;
