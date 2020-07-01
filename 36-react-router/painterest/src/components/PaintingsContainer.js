import React from 'react';
import {Route, Switch} from 'react-router-dom'

import PaintingsList from './PaintingsList';
import PaintingsNew from './PaintingsNew';
import PaintingShow from './PaintingShow';

// const painting = {
//   "id": "59bd5a519c18db5297a32479",
//   "collecting_institution": null,
//   "date": "1446",
//   "dimensions": {
//     "text": "11 1/2 Ã— 8 1/2 in",
//     "height": 11.5,
//     "width": 8.5,
//     "depth": null,
//     "diameter": null
//   },
//   "slug": "petrus-christus-portrait-of-a-carthusian",
//   "title": "Portrait of a Carthusian",
//   "image":
//     "https://d32dm0rphc51dk.cloudfront.net/pVc7CubFzVlPhbErTAqyYg/medium.jpg",
//   "artist": {
//     "name": "Petrus Christus",
//     "hometown": "Baarle-Hertog, Belgium",
//     "birthday": "1410",
//     "deathday": "1475"
//   },
//   "votes": 64
// }

class PaintingsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      paintings: [],
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleVote = this.handleVote.bind(this);
  }

  componentDidMount() {
    // setTimeout(() => {
      fetch('http://localhost:3001/api/v1/paintings/')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          paintings: data.slice(0, 20).sort((a, b) => b.votes - a.votes),
        });
      });
    // }, 5000);
  
  }

  handleDelete(id) {
    const updatedState = this.state.paintings.filter((pntg) => pntg.id !== id);

    this.setState({ paintings: updatedState });
  }

  handleVote(id) {
    const updatedPaintings = this.state.paintings
      .map((pntg) => {
        if (pntg.id === id) {
          return Object.assign({}, pntg, { votes: pntg.votes + 1 });
        } else {
          return pntg;
        }
      })
      .sort((a, b) => b.votes - a.votes);

    this.setState((state) => {
      return { paintings: updatedPaintings };
    });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/paintings/new" component={PaintingsNew} />
          <Route path="/paintings/:slug" render={(routerProps) => {
            const slug = routerProps.match.params.slug
            const painting = this.state.paintings.find(p => p.slug === slug)
            
            // return <PaintingShow painting={painting} />
            return painting ? <PaintingShow painting={painting} /> : "Loading..."
          }} />
          <Route path="/paintings" render={() => {
            return <PaintingsList paintings={this.state.paintings} />
          }} />
        </Switch>
      </div>
    );
  }
}

export default PaintingsContainer;
