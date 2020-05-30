import React from 'react';
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

const Gallery = (props) => {
  return (
    <>
      {props.images && props.images.length
        ? <GridList cols={3}>
          {props.images.map((image, i) => (
            <GridListTile key={i} cols={1}>
              <img src={process.env.PUBLIC_URL + image} alt='Loading...' />
            </GridListTile>
          ))}
        </GridList>
        : <div id='empty'>
          No images available...
          </div>}
    </>
  );
}

export default Gallery;