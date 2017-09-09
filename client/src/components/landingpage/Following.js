import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
// import Favorite from 'material-ui/svg-icons/action/favorite';
// import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Following extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      select_value: 0
    };
  }

  handleChange(e, i, value) {
    //TODO filter the results on the primaryText value
    this.setState({
      select_value: value
    });
  }

  render() {
    return (
      <div className='muiThemeProvider'>
        <div className='followRoot container'>
          <div className='row'>
            <div className='col-4'>
              <Subheader>MOVIES You Are Following</Subheader>
            </div>
            <div className='col-4'>
              <SelectField value={this.state.select_value} onChange={this.handleChange.bind(this)} autoWidth={true}>
                <MenuItem value={0} primaryText='Movie 1' />
                <MenuItem value={1} primaryText='Movie 2' />
                <MenuItem value={2} primaryText='Movie 3' />
                <MenuItem value={3} primaryText='Movie 4' />
                <MenuItem value={4} primaryText='Movie 5' />
              </SelectField>
            </div>
          </div>
          <GridList cellHeight={200} cols={5} className='followList'>
            {this.props.movieFollow.map((movie, i) => (
              <a href = {movie.website} target = "_blank">
                <GridTile
                  key={i}
                  title={movie.title}
                  subtitle={<span>by <b>{movie.director}</b></span>}
                >
                  <img src={movie.Poster}/>
                </GridTile>
              </a>
            ))}
          </GridList>
        </div>
        <div className='followRoot container'>
          <div className='row'>
            <div className='col-4'>
              <Subheader>GENRES You Are Following</Subheader>
            </div>
            <div className='col-4'>
              <SelectField value={this.state.select_value} onChange={this.handleChange.bind(this)} autoWidth={true}>
                <MenuItem value={0} primaryText='Genre 1' />
                <MenuItem value={1} primaryText='Genre 2' />
                <MenuItem value={2} primaryText='Genre 3' />
                <MenuItem value={3} primaryText='Genre 4' />
                <MenuItem value={4} primaryText='Genre 5' />
              </SelectField>
            </div>
          </div>
          <GridList cellHeight={200} cols={5} className='gridList'>
            {this.props.genreFollow.map((genre, i) => (
              <a href = {genre.website} target = "_blank">
                <GridTile
                  key={i}
                  title={genre.title}
                  subtitle={<span>by <b>{genre.director}</b></span>}
                >
                  <img src = {genre.Poster}/>
                </GridTile>
              </a>
            ))}
          </GridList>
        </div>
        <div className='followRoot container'>
          <div className='row'>
            <div className='col-4'>
              <Subheader>ACTORS / ACRESSES You Are Following</Subheader>
            </div>
            <div className='col-4'>
              <SelectField value={this.state.select_value} onChange={this.handleChange.bind(this)} autoWidth={true}>
                <MenuItem value={0} primaryText='Actor 1' />
                <MenuItem value={1} primaryText='Actor 2' />
                <MenuItem value={2} primaryText='Actor 3' />
                <MenuItem value={3} primaryText='Actor 4' />
                <MenuItem value={4} primaryText='Actor 5' />
              </SelectField>
            </div>
          </div>
          <GridList cellHeight={200} cols={5} className='gridList'>
            {this.props.actorFollow.map((actor, i) => (
              <a href = {actor.website} target = "_blank">
                <GridTile
                  key={i}
                  title={actor.title}
                  subtitle={<span>by <b>{actor.director}</b></span>}
                >
                  <img src = {actor.Poster}/>
                </GridTile>
              </a>
            ))}
          </GridList>
        </div>
        <div className='followRoot container'>
          <div className='row'>
            <div className='col-4'>
              <Subheader>DIRECTORS You Are Following</Subheader>
            </div>
            <div className='col-4'>
              <SelectField value={this.state.select_value} onChange={this.handleChange.bind(this)} autoWidth={true}>
                <MenuItem value={0} primaryText='Director 1' />
                <MenuItem value={1} primaryText='Director 2' />
                <MenuItem value={2} primaryText='Director 3' />
                <MenuItem value={3} primaryText='Director 4' />
                <MenuItem value={4} primaryText='Director 5' />
              </SelectField>
            </div>
          </div>
          <GridList cellHeight={200} cols={5} className='gridList'>
            {this.props.directorFollow.map((director, i) => (
              <a href = {director.website} target = "_blank">
                <GridTile
                  key={i}
                  title={director.title}
                  subtitle={<span>by <b>{director.director}</b></span>}
                >
                  <img src = {director.Poster}/>
                </GridTile>
              </a>
            ))}
          </GridList>
        </div>
        <div className='followRoot container'>
          <div className='row'>
            <div className='col-4'>
              <Subheader>SCREENWRITERS You Are Following</Subheader>
            </div>
            <div className='col-4'>
              <SelectField value={this.state.select_value} onChange={this.handleChange.bind(this)} autoWidth={true}>
                <MenuItem value={0} primaryText='Writer 1' />
                <MenuItem value={1} primaryText='Writer 2' />
                <MenuItem value={2} primaryText='Writer 3' />
                <MenuItem value={3} primaryText='Writer 4' />
                <MenuItem value={4} primaryText='Writer 5' />
              </SelectField>
            </div>
          </div>
          <GridList cellHeight={200} cols={5} className='gridList'>
            {this.props.writerFollow.map((writer, i) => (
              <a href = {writer.website} target = "_blank">
                <GridTile
                  key={i}
                  title={writer.title}
                  subtitle={<span>by <b>{writer.director}</b></span>}
                >
                  <img src = {writer.Poster}/>
                </GridTile>
              </a>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
}

export default Following;