import React, {Component} from 'react';

class ScrollUp extends Component {
   constructor(props) {
      super(props);
      this.state = {show: false};
      this.handleScroll = this.handleScroll.bind(this);
   }

   handleScroll() {
      if (window.pageYOffset > 1000) {
         if (!this.state.show) {
            this.setState({show: true});
         }
      } else {
         if (this.state.show) {
            this.setState({show: false});
         }
      }
   }

   shouldComponentUpdate(nextProps, nextState) {
      return nextState.show !== this.state.show;
   }

   componentDidMount() {
      this.handleScroll();
      window.addEventListener('scroll', this.handleScroll);
   }

   componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
   }

   render() {
      var toShow = {visibility: (this.state.show ? 'visible' : 'hidden')};

      return (
         <img className='scroll-up' onClick={() => window.scrollTo(0, 0)} style={toShow} src='../public/img/up-arrow.png' />
      );
   }
}

export default ScrollUp;