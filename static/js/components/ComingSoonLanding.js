require('../../stylesheets/comingsoon.scss');

import React, { Component, PropTypes } from 'react';

class ComingSoon extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div className='coming-soon-contents-container'>

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
          Und nicht vergessen: #ruralisthenewurban. 
        </div>

      </div>
    )
  }
}

export default ComingSoon