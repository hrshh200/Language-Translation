import React, { useState } from 'react';
import './Home.css';
import axios from 'axios';

function MyForm() {
    const [textValue, setTextValue] = useState('');
    const [result, setResult] = useState('');
    // const [selectedLanguage, setselectedLanguage] = useState('');
    const [selectedValue, setselectedValue] = useState('');


    const handleChange = (e) => {
        setTextValue(e.target.value);
    };

    // const handleLanguageChange = (e) => {
    //     setselectedLanguage(e.target.value);
    // };

    const handleValueChange = (e) => {
        setselectedValue(e.target.value);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request to your API endpoint
            const response = await axios.post('http://localhost:5000/translate', { textValue, selectedValue });
            console.log(textValue, selectedValue)
            console.log('Response from API:', response.data);
            setResult(response.data.Message); // Update state with the API response
            // You can handle the response from the API here
        } catch (error) {
            console.error('Error sending data to API:', error);
            // Handle errors here
        }
    };

    return (
        <div>
            <h2>Translate you text..!!</h2>
            <form className="container" onSubmit={handleSubmit}>
                <textarea
                    rows="4"
                    cols="50"
                    placeholder="Enter text here..."
                    value={textValue}
                    onChange={handleChange}
                />
                <h3>Select the language:</h3>
                <div className='dropdown-container'>
                    <select className="dropdown-select" value={selectedValue} onChange={handleValueChange}>
                        <option value="fr">French</option>
                        <option value="hi">Hindi</option>
                        <option value="es">Spanish</option>
                    </select>
                </div>{'\u00A0'}
                <button type="submit">Translate</button>{'\u00A0'}
                <textarea
                    rows="4"
                    cols="50"
                    placeholder="Translated text will appear here..."
                    value={result}
                />
            </form>
        </div>
    );
}

export default MyForm;
