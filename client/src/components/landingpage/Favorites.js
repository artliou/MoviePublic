import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Favorite from 'material-ui/svg-icons/action/favorite';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Search from './Search';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
  }

render() {
     console.log(this.props.favorites);
     return (
      <div className='muiThemeProvider'>
      <div className='gridRoot'>
        <Search />
        <GridList cellHeight={200} cols={5} className='gridList'>
          <Subheader>Favorites</Subheader>
          {this.props.favorites.map((favorite, i) => (
            <a href = {favorite.Website} target = "_blank">
            <GridTile 
            key={i} 
            title={favorite.Title}
            subtitle={<span>by <b>{favorite.Director}</b></span>}
            >
            <img src = {favorite.Poster}/>
            </GridTile>
            </a>
          ))}
        </GridList>
        </div>
      </div>
    );
  }
}

export default Favorites;




