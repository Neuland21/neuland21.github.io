require('../../stylesheets/comingsoon.scss');

import React, { Component, PropTypes } from 'react';
// import MailchimpForm from './MailchimpForm';
import SubscribeForm from 'react-mailchimp-subscribe';

const mailchimpFormProps = {
  action: '//neuland21.us16.list-manage.com/subscribe/post?u=52cdca374a2d70783324ab813&amp;id=0b4a21ba13',
  messages: {
    inputPlaceholder: 'E-Mail',
    btnLabel: 'Neuigkeiten erhalten',
    sending: 'Im Gange...',
    success: 'Danke! Sie erhalten in Kürze eine Bestätigung per E-Mail.',
    error: 'Irgendwas ist falsch gelaufen.'
  },
  styles: {
    success: {
      color: 'white',
      fontSize: 12,
    },
    sending: {
      color: 'white',
      fontSize: 12,
    },
    error: {
      color: 'white',
      fontSize: 12,
    }
  }
}

const MailchimpForm = () => <SubscribeForm { ...mailchimpFormProps } />

class ComingSoon extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div className='overlay'>
        <div className='coming-soon-contents-container'>

          <div className='coming-soon-text'>
            <div className='coming-soon-header'>Neuland 21</div>
            <div className='coming-soon-subheader'>
              Ein Think & Do Tank für das 
              Landleben im 21. Jahrhundert
            </div>
            <div className='coming-soon-contents'>
              Landflucht. Demographischer Wandel. Sterbende Dörfer. Die Herausforderungen für den ländlichen Raum sind nicht neu. Die politischen Lösungen allerdings auch nicht. Mit Neuland 21 holen wir das Landleben ins 21. Jahrhundert. 
              <br /><br />
              Als gemeinnütziger Think & Do Tank nutzen wir etablierte Methoden der Startup- und Kreativbranche, um die immer drängender werdenden Probleme unserer Dörfer und Kleinstädte anzugehen. Wir entwickeln und pilotieren digitale und soziale Innovationen in den Bereichen Nahversorgung, Mobilität, Gesundheit, Arbeit und Kultur.
              <br /><br />
              Lass deine E-Mail Adresse da und wir benachrichtigen dich, sobald unsere Webseite fertig ist.
            </div>
            <br />
            <div className='email-form'>
              <MailchimpForm /> 
            </div>
            <br /><br />
            <div className='footer-contents'>
              hallo@neuland21.de
              <br />
              Friedrichstraße 180, 10117 Berlin
            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default ComingSoon