import React, {useState} from 'react';
import useInput from './hooks/input-hook';
import '../App.css';

export function Forms(props) {
    const []= useInput('');
    const { value:text, bind:bindText, reset:resetText } = useInput('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert('Email sending' ,{subject} ,{text});
        resetSubject();
        resetText();
    }
    return (
        <form onSubmit={handleSubmit}>
          <row>
            <label>
            Subject:
            <input type="text" {...bindSubject} />
            </label>
          </row>
          <row>
            <label>
            Text Area:
            <input type="text" {...bindText} />
            </label>
          </row>

          <a href="mailto:kevin.vegiotti@gmail.com?subject=${subject.value}&body=${text.value}">Send mail</a>
        </form>
    );
}
    


export default Forms;