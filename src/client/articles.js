import React, {Component} from 'react';

class Articles extends Component {
   render() {
      return (
         <div className='articles'>
            <article />
         </div>
      );
   }
}

export default Articles;

/*
<div className='articles' infinite-scroll="loadMore()" infinite-scroll-distance="1" infinite-scroll-disabled="maxResults > numArticles">
            <article ng-repeat="article in articles | filter: filterType | limitTo: maxResults">
               <h1 class="title">{{ article.title }}</h2>
               <p class="date">{{ article.date }}</p>
               <img class="image" ng-src="{{ article.image }}">
               <p class="blurb">{{ article.blurb }}</p>
               <p class="more" ng-click="showText = !showText; filter('more')" ng-show="!showText">Read More →</p>
               <p class="text" ng-show="showText" ng-bind-html="article.text"/>
            </article>
         </div>*/