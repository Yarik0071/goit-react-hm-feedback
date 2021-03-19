import React, {Component} from 'react'


class Searchbar extends Component {

    state = {
        inputValue: '',
        time: 0
      }

        handleChange = (e) => {
          const { value } = e.target
    
          this.setState({
            inputValue: value,
          })
        }
    
        handleSubmit = e => {
          e.preventDefault()

          const { fetchLink } = this.props

          let time = new Date().getTime()
          fetchLink(this.state.inputValue,time)

          this.setState({ 
            inputValue: '',
            time: 0
          })
        }

render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="url"
            autoComplete="off"
            autoFocus
            placeholder="Search link"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </form>

    <div><p>time: {this.props.currentTime}ms</p></div>
      </header>
    );
}
}

export default Searchbar