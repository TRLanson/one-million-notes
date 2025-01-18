import React, { useState } from 'react';

const addNote = () => {
    const [wordCount, setWordCount] = useState<number>(0);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const input = event.target.value;

        // Stop the user from typing more if they exceed the word limit
        const words = input.trim().split(/\s+/).filter(word => word.length > 0);
        const wordLimit = 50; // Hardcoded word count limit
        if (words.length > wordLimit) {
            event.preventDefault();
            return;
        }

        setWordCount(wordLimit); 
    };

    return (
        <div style={{ textAlign: 'left'}}>
            <textarea
                style={{
                    width: '300px',
                    height: '100px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    padding: '10px',
                    position: 'fixed',
                    left: '50%',
                    top: '50%',

                }}
                onChange={handleChange}
                placeholder="Tell us about your day..."
            ></textarea>
            <div style={{ marginTop: '10px', fontSize: '16px' }}>
                Word Count: {wordCount}
            </div>
        </div>
    );
};

export default addNote;