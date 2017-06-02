import React, {Component} from 'react';

import stories from '../public/stories';
import NotFound from './not-found';

class SinglePost extends Component {
   constructor(props) {
      super(props);
      const id = this.props.match.params.id;
      var found = true;
      var title = 'The Chris Times'
      const result = stories.filter(function(story) {return story.id == id;})[0];
      if (!result) {
         found = false;
      } else {
         title = result.title;
      }
      this.state = {
         docTitle: title,
         match: found,
         post: result
      };
   }

   componentDidMount() {
      document.title = this.state.docTitle;
   }

   render() {
      if (!this.state.match) {
         return <NotFound />;
      } else {
         const content = {
            __html: this.state.post.text
         };
         return (
            <div className='single-post'>
               <article key={this.state.post.id}>
                  <h1 className='title'>{this.state.post.title}</h1>
                  <p className='date'>{this.state.post.date}</p>
                  <img className='image' src={'../img/' + this.state.post.image}/>
                  <p className='blurb'>{this.state.post.blurb}</p>
                  <p className="text" dangerouslySetInnerHTML={content} />
               </article>
            </div>
         );
      }
   }
}

export default SinglePost;