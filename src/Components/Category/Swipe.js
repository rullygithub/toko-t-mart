import React, { Component } from 'react'
import Category from './Category';

export default class Swipe extends Component {

    state = {
        activeIndex:0
    };

    handleSwipeLeft = () => {
        this.setState(prevState => ({
          activeIndex: prevState.activeIndex === this.props.items.length - 1 ? 0 : prevState.activeIndex + 1
        }));
      };
    
      handleSwipeRight = () => {
        this.setState(prevState => ({
          activeIndex: prevState.activeIndex === 0 ? this.props.items.length - 1 : prevState.activeIndex - 1
        }));
      };


  render() {

    const { items } = this.props;
    const { activeIndex } = this.state;
    const leftIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    const rightIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;

    return (
        <div className="swipe-container">
        <div className="swipe-items">
          <Category image={items[leftIndex].image} title={items[leftIndex].title} />
          <Category image={items[activeIndex].image} title={items[activeIndex].title} />
          <Category image={items[rightIndex].image} title={items[rightIndex].title} />
        </div>
        <div className="swipe-buttons">
          <button onClick={this.handleSwipeLeft}>Left</button>
          <button onClick={this.handleSwipeRight}>Right</button>
        </div>
      </div>
    )
  }
}
