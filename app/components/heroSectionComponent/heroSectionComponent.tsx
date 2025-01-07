

import React from 'react';
import { HeroSectionProps } from '@/redux/types/navigationTypes';
import Image from 'next/image';
import MediaRendering from '../mediaRendering/media-rendering';
import Button from '../button/button';

interface ImageItem {
  title: string;
  url: string;
  description: string;
}

const findImageSource = (imageArray: ImageItem[], screenSize: string): string => {

  const image = imageArray.find(item => {
    return item.title === screenSize
  })
  return image?.url || '';
} 

const HeroSectionComponent = (props: HeroSectionProps) => {

  const { heroTitle, isNewProduct, heroImageCollection: { items }, button } = props;
  console.log('heroSectionComponent Props', props);

  const mobileImage = findImageSource(items, 'mobile');
  const tabletImage = findImageSource(items, 'tablet');
  const desktopImage = findImageSource(items, 'desktop');

  return (
    <div>
      <MediaRendering minWidth={null} maxWidth="640">
        <div className="relative w-full h-[70vh]">
        <Image
        src={mobileImage}
        alt={heroTitle}
        fill
        sizes="(max-width: 640px)"
      />
        {isNewProduct ? <h2 className="absolute top-72 left-1/2 transform -translate-x-1/2 text-white">New product</h2> : null}
       {button ? 
      <div className="absolute bottom-36 left-1/2 transform -translate-x-1/2">
        <Button buttonText={button.buttonText}
          buttonTitle={button.buttonTitle}
          textColour={button.textColour[0]}
          colour={button.colour[0]}
          hoverColour={button.hoverColour[0]}
          linkUrl={button.linkUrl}/></div> : null}
      </div>
      </MediaRendering>
      <MediaRendering minWidth="641" maxWidth="768">
        <div className="relative w-full h-[70vh]">
        <Image
        src={tabletImage}
        alt={heroTitle}
        fill
        sizes="(min-width: 641px max-width: 768px)"
      />
       {button ? 
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <Button buttonText={button.buttonText}
          buttonTitle={button.buttonTitle}
          textColour={button.textColour[0]}
          colour={button.colour[0]}
          hoverColour={button.hoverColour[0]}
          linkUrl={button.linkUrl}/></div> : null}
      </div>
      </MediaRendering>
        <MediaRendering minWidth="769" maxWidth={null}>
        <div className="relative w-full h-[70vh]">
        <Image
        src={desktopImage}
        alt={heroTitle}
        fill
        sizes="(min-width: 769px)"
      />
       {button ? 
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <Button buttonText={button.buttonText}
          buttonTitle={button.buttonTitle}
          textColour={button.textColour[0]}
          colour={button.colour[0]}
          hoverColour={button.hoverColour[0]}
          linkUrl={button.linkUrl}/></div> : null}
      </div>
      </MediaRendering>
  </div>
  );
};

export default HeroSectionComponent;  