// Write your code here.
import {Component} from 'react'

import './index.css'

const PLUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const MINUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  renderAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isActive} = this.state

    if (isActive) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggleIsActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderActiveImage = () => {
    const {isActive} = this.state
    const image = isActive ? MINUS_IMAGE : PLUS_IMAGE
    const altText = isActive ? 'minus' : 'plus'

    return (
      <button className="button" type="button" onClick={this.onToggleIsActive}>
        <img className="image" src={image} alt={altText} />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails

    return (
      <li className="faq-item">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          {this.renderActiveImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem

/*
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  onClickChangeStatus = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderAnswer = () => {
    const {faqsDetails} = this.props
    const {answerText} = faqsDetails
    const {isActive} = this.state

    if (isActive) {
      return (
        <div>
          <hr className="hr" />
          <p className="answer-text">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {isActive} = this.state
    const {faqsDetails} = this.props
    console.log(faqsDetails)
    const {questionText} = faqsDetails

    const btnImage = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const btnAltText = isActive ? 'minus' : 'plus'

    return (
      <li className="fqs-list-item">
        <div className="question-btn-answer">
          <div>
            <h1 className="question-text">{questionText}</h1>
            {this.renderAnswer()}
          </div>
          <button type="button" className="btn">
            <img
              src={btnImage}
              className="+or-"
              alt={btnAltText}
              onClick={this.onClickChangeStatus}
            />
          </button>
        </div>
      </li>
    )
  }
}

export default FaqItem
*/
