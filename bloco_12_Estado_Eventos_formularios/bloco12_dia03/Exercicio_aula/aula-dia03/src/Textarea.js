import React from 'react'
import Form from './Form'

class Textarea extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <fieldset>TextArea 
        <label>Texto
        <textarea name="textarea" value={value} onChange={handleChange}></textarea>
        </label>
        </fieldset>
    )
  }
}

export default Textarea