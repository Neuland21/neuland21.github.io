import React from 'react';
import { render } from 'react-dom';
import SubscribeForm from 'react-mailchimp-subscribe';

const formProps = {
  action: '//neuland21.us16.list-manage.com/subscribe/post?u=52cdca374a2d70783324ab813&amp;id=0b4a21ba13',
  messages: {
    inputPlaceholder: 'Email',
    btnLabel: 'Abonnieren',
    success: 'Abonniert!',
    error: 'Irgendwas ist falsch gelaufen...'
  },
  styles: {
    success: {
      color: 'green',
    },
    error: {
      color: 'red',
    }
  }
}

export const MailchimpForm = () => <SubscribeForm {...formProps} />