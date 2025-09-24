import { Image as ExpoImage } from 'expo-image';
import React, { useState } from 'react';
import { type IIMageProps } from './image.types';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export const Image: React.FC<IIMageProps> = React.memo((props) => {
  const [isLoading, setLoading] = useState(true);
  const [imageUri, setImageUri] = useState('https://source.unsplash.com/random/3840x2160/?cars');

  const onLoadStart = () => {
    setLoading(true);
  };

  const onLoadEnd = () => {
    setLoading(false);
  };

  return (
    <ExpoImage
      className={styles.image}
      source="https://picsum.photos/seed/696/3000/2000"
      placeholder={{ blurhash }}
      contentFit="cover"
      transition={1000}
      cachePolicy="disk"
    />
  );
});

const styles = {
  image: `flex-1 w-full`,
};

Image.displayName = 'Image';
