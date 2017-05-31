import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import stories from '../public/stories';

class Articles extends Component {
   render() {
      var listArticles = stories.map(function(story) {
         return (
            <article key={story.id}>
               <h1 className='title'>{story.title}</h1>
               <p className='date'>{story.date}</p>
               <img className='image' src={'img/' + story.image}/>
               <p className='blurb'>{story.blurb}</p>
               <p className='more'><Link className='more-link' to={'/posts/' + story.id}>Read More →</Link></p>
            </article>
         );
      });

      return (
         <div className='articles'>
            {listArticles}
         </div>
      );
   }
}

export default Articles;