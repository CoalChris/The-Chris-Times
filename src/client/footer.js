import React, {Component} from 'react';
import {Row} from 'react-bootstrap';

class Footer extends Component {
   render() {
      return (
         <footer className='container-fluid'>
            <Row>
               <p className='col-sm-4'>&copy; 2017 CC Group</p>
               <ul className='col-sm-8'>
                  <li><a href='https://www.facebook.com/coal.chris' target='_blank'><img src='../public/img/facebook.svg' /></a></li>
                  <li className='col-sm-1'><a href='https://www.youtube.com/channel/UCf9J4CNaeTISEJAm-nR-nmg' target='_blank'><img src='../public/img/youtube.png' /></a></li>
               </ul>
            </Row>
         </footer>
      );
   }
}

export default Footer;