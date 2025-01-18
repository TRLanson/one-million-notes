"use client";
import React, { useState } from 'react';

const AddNote = () => {
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

        setWordCount(words.length);
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-left">
                <textarea
                    className="w-72 h-24 border border-gray-300 pt-3 pb-3"
                    onChange={handleChange}
                    placeholder="Tell us about your day..."
                ></textarea>
                <div className="mt-2 text-lg">
                    Word Count: {wordCount}
                </div>
            </div>
        </div>
    );
};

export default AddNote;

