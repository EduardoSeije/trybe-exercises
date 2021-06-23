import React from 'react'
import Textarea from './Textarea'


class Form extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      textarea: '',
      select: '',
      texto1: '',
      texto2: '',
      checkbox: 'false'
    }
  }

  handleChange({ target }) {
    // console.log(event.target.value)
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
      <h1>Formulário aula - dia 03</h1>
      <form className="form">
        <Textarea value={this.state.textarea} handleChange={this.handleChange}/>
        <label>Select
        <select name="select" value={this.state.select} onChange={this.handleChange}>
        <option>a</option>
        <option>b</option>
        <option>c</option>
        </select>
        </label>
        <label>Texto
        <input name="texto1" value={this.state.texto1} onChange={this.handleChange} type="text"></input>
        </label>
        <label>Texto
        <input name="texto2" value={this.state.texto2} onChange={this.handleChange} type="text"></input>
        </label>
        <label>Checkbox
        <input name="checkbox" value={this.state.checkbox} onChange={this.handleChange} type="checkbox"></input>
        </label>
      </form>
    </div>
    )
  }
}

export default Form