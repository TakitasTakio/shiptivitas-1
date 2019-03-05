import React from 'react';
import Card from './Card';
import './Swimlane.css';
import Dragula from 'dragula';

export default class Swimlane extends React.Component {
  render() {
    const cards = this.props.clients.map(client => {
      return (
        <Card
          key={client.id}
          id={client.id}
          name={client.name}
          description={client.description}
          status={client.status}
        />
      );
    })
    return (
      <div className="Swimlane-column">
        <div className="Swimlane-title">{this.props.name}</div>
        <div className="Swimlane-dragColumn" ref={this.dragulaRef}>
          {cards}
        </div>
      </div>);
  }

    dragulaRef = (cards) => {
        if (cards) {
            let options = {
                accepts: function (el, target) {
                    return target !== document.getElementsByClassName('Card')

                }
            };
            Dragula([cards], {

                removeOnSpill: true,
                revertOnSpill: true,

            }, options)
        }

    }

}
