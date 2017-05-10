import React, {Component} from 'react';
import { Jumbotron, Carousel } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class HomeJumbotron extends Component {
   render() {
      return (
         <Jumbotron className='home-jumbotron'>
            <Carousel>
               <Carousel.Item>
                  <img src='../public/img/sakura.jpg'/>
                  <Carousel.Caption>
                     <h3>First slide label</h3>
                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                  <img src='../public/img/platia.jpg'/>
                  <Carousel.Caption>
                     <h3>Second slide label</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                  <img src='../public/img/easter.jpg'/>
                  <Carousel.Caption>
                     <h3>Third slide label</h3>
                     <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
               </Carousel.Item>
            </Carousel>
         </Jumbotron>
      );
   }
}

export default HomeJumbotron;