import React, {Component} from 'react';

import stories from '../public/stories';
import NotFound from './not-found';

class SinglePost extends Component {
   constructor(props) {
      super(props);
      this.state = { docTitle: 'The Chris Times' };
   }

   componentDidMount() {
      document.title = this.state.docTitle;
   }

   render() {
      const id = this.props.param.id;
      const post = stories.filter((post) => post.id === id)[0];
      if (!post) {
         return <NotFound />;
      }

      this.setState({docTitle: post.title});

      return (
         <div className='single-post'>
            <article>
               <h1 className='title'>{post.title}</h1>
               <p className='date'>{post.date}</p>
               <img className='image' src={'img/' + post.image}/>
               <p className='blurb'>{post.blurb}</p>
               <p className="text">{post.text}</p>
            </article>
         </div>
      );
   }
}

export default SinglePost;