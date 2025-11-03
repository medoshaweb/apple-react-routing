import React from 'react'
import { Alert } from '../Alert/Alert.jsx'
import { SectionOne } from '../SectionOne/SectionOne.jsx';
import { SectionTwo } from '../SectionTwo/SectionTwo.jsx';
import { SectionThree } from '../SectionThree/SectionThree.jsx';
import { SectionFour } from '../SectionFour/SectionFour.jsx';
import { SectionFive } from "../SectionFive/SectionFive.jsx";
import { SectionSix } from "../SectionSix/SectionSix.jsx";
import  YoutubeVideos  from '../YoutubeVideos/YoutubeVideos.jsx';

const Main = () => {
  return (
    <div>
      <Alert />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <YoutubeVideos />
    </div>
  );
}

export default Main