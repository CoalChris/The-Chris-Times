import React, {Component} from 'react';

class Sidebar extends Component {
   render() {
      return (
         <div className='sidebar'>
            <div className='profile'>
               <div className='display-picture'>
                  <img src='../public/img/profile.jpg' />
               </div>
               <p>
                  Hi, I'm Chris and welcome to my website. I am an avid follower of technology, Japanese culture, and the Christian faith. I'm based in Sydney, Australia, but love to travel all over the world! Hopefully you'll discover some interesting facts, have a good laugh at my stories, and be inspired to walk down a similarly awesome path!
               </p>
            </div>
            <div className='share'>
               <div className='fb-follow' data-href="https://www.facebook.com/coal.chris" data-layout="standard" data-size="small" data-show-faces="true"></div>
               <div className='share-small'>
                  <div className="fb-like" data-href="https://coalchris.github.io/" data-layout="button_count" data-action="like" data-size="small" data-show-faces="false" data-share="true"></div>
                  <div className='youtube'>
                     <div className='g-ytsubscribe' data-channelid="UCf9J4CNaeTISEJAm-nR-nmg" data-layout="default" data-count="default"></div>
                  </div>
               </div>
            </div>
            <div className='posts'></div>
         </div>
      );
   }
}

export default Sidebar;