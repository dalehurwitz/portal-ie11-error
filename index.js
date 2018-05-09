import { h, Component } from 'preact';
import Portal from 'preact-portal'
import './style';

class App extends Component {
  constructor () {
  	super()
  	this.state = {
      isOpen: false,
      page: 1
    }
  }

  next = () => {
    this.setState({ page: this.state.page + 1 })
  }

  prev = () => {
    this.setState({ page: this.state.page - 1 })
  }

  render (props, {
    page
  }) {
    if (page === 1) {
      return <PageOne next={this.next} />
    }
    return <PageTwo prev={this.prev} />
  }
}

class PageOne extends Component {
	constructor () {
  	super()
  	this.state = {
    	isOpen: false
    }
  }

  open = () => {
  	this.setState({ isOpen: true })
  }

  close = () => {
  	this.setState({ isOpen: false })
  }

  render({ next }) {
  	return (
      <div>
        <h1>Page One</h1>
        <button onClick={this.open}>Open Portal</button>
        {this.state.isOpen && (
          <Portal into="body">
            <div class="overlay">
              <div class="portal">
                <h2>Portal Content</h2>
                <button onClick={next}>Next Page</button>
                <button onClick={this.close}>Close Portal</button>
              </div>
            </div>
          </Portal>
        )}
      </div>
    )
  }
}

function PageTwo ({ prev }) {
  return (
    <div>
      <h1>Page Two</h1>
      <button onClick={prev}>Previous Page</button>
    </div>
  )
}

export default App
