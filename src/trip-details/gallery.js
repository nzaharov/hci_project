import React from 'react';
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import ModalPicture from '../common/modal-picture';

const Gallery = (props) => {
  return (
    <>
      {props.images && props.images.length
        ? <GridList cols={3}>
          {props.images.map((image, i) => (
            <GridListTile key={i} cols={1}>
              <ModalPicture source={process.env.PUBLIC_URL + image} />
            </GridListTile>
          ))}
        </GridList>
        : <div id='empty-gallery'>
          No images available...
          </div>}
    </>
  );
}

export default Gallery;