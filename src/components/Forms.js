import React from 'react';
import useInput from './hooks/input-hook';
import '../App.css';

export function Forms(props) {
  const { value: subject, bind: bindSubject, reset: resetSubject } = useInput('');
  const { value: text, bind: bindText, reset: resetText } = useInput('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert('Submitting Infos', { subject }, { text });
    resetSubject();
    resetText();

  
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Subject :
            <input type="text" {...bindSubject} />
        </label>
      </div>
      <div>
        <label>
          Text Area :
            <input type="text" {...bindText} />
        </label>
      </div>
      <div className="form-group">
        <label for="endType">End select</label>
        <select>
          <option value="Front">Front</option>
          <option value="Back">Back</option>
        </select>
      </div>
      <form>
        <label>
          <input type="checkbox" 
                 required="required"/>
          Check me out
        </label>
      </form>

        <a href={`mailto:kevin.vegiotti@gmail.com?subject=${subject}&body=${text}`}>Send mail</a>
    </form>
    );
}



export default Forms;