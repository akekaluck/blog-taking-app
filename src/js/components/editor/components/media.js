import React from 'react';

const styles = {
  media: {
    width: '100%',
  }
}
const Audio = (props) => {
  return <audio controls src={props.src} style={styles.media} />;
};

const Image = (props) => {
  return <img src={props.src} style={styles.media} />;
};

const Video = (props) => {
  return <video controls src={props.src} style={styles.media} />;
};

const Media = (props) => {
  const entity = props.contentState.getEntity(
    props.block.getEntityAt(0)
  );
  const {src} = entity.getData();
  const type = entity.getType();
  console.log('Media: ', src);

  let media;
  if (type === 'audio') {
    media = <Audio src={src} />;
  } else if (type === 'inline-image') {
    media = <Image src={src} />;
  } else if (type === 'video') {
    media = <Video src={src} />;
  }
  return media;
};

export default Media;
