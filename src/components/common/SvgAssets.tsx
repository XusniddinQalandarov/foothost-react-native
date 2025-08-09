import React from 'react';
import { SimpleSvg } from './SimpleSvg';

// Import all SVG assets
import Logo from '../../../assets/images/logo.svg';
import LogoWhite from '../../../assets/images/logo_white.svg';
import SuccessSvg from '../../../assets/images/success.svg';

// Homepage SVGs
import News1Svg from '../../../assets/images/homepage/news1.svg';
import News2Svg from '../../../assets/images/homepage/news2.svg';
import BestFieldSvg from '../../../assets/images/homepage/bestfield.svg';
import MockClansSvg from '../../../assets/images/homepage/mockClans.svg';
import ReadyMatchSvg from '../../../assets/images/homepage/readyMatch.svg';
import Bell from '../../../assets/images/homepage/bell.svg';
import FirstSvg from '../../../assets/images/homepage/first.svg';
import SecondSvg from '../../../assets/images/homepage/second.svg';
import ThirdSvg from '../../../assets/images/homepage/third.svg';

// Onboarding SVGs
import Ellipse1 from '../../../assets/images/onboardingPage/ellipse1.svg';
import Ellipse2 from '../../../assets/images/onboardingPage/ellipse2.svg';
import Ellipse3 from '../../../assets/images/onboardingPage/ellipse3.svg';
import BgBall from '../../../assets/images/onboardingPage/bgBall.svg';
import PlayerWithBall from '../../../assets/images/onboardingPage/playerwithBall.svg';

// Profile SVGs
import CameraSvg from '../../../assets/images/profile/camera.svg';
import ChelseaSvg from '../../../assets/images/profile/chelsea.svg';
import MyuSvg from '../../../assets/images/profile/MYU.svg';

// Booking SVGs
import ParkingSvg from '../../../assets/images/booking/parking.svg';
import ShowerSvg from '../../../assets/images/booking/shower.svg';
import OutfitChangeSvg from '../../../assets/images/booking/outfitChange.svg';
import SeatsSvg from '../../../assets/images/booking/seats.svg';
import LightedSvg from '../../../assets/images/booking/lighted.svg';
import TimeOfWorkSvg from '../../../assets/images/booking/timeofWork.svg';
import LengthOfFieldSvg from '../../../assets/images/booking/lengthofField.svg';
import TypeOfFieldSvg from '../../../assets/images/booking/typeofField.svg';
import TypeOfPitchSvg from '../../../assets/images/booking/typeofPitch.svg';

// Safe SVG wrapper component
const SafeSvg: React.FC<{ Component: React.ComponentType<any>; [key: string]: any }> = ({ 
  Component, 
  ...props 
}) => {
  try {
    return <Component {...props} />;
  } catch (error) {
    console.warn('SVG rendering error:', error);
    return <SimpleSvg {...props} />;
  }
};

// Export wrapped SVG components
export const SvgAssets = {
  // Main logos
  Logo: (props: any) => <SafeSvg Component={Logo} {...props} />,
  LogoWhite: (props: any) => <SafeSvg Component={LogoWhite} {...props} />,
  Success: (props: any) => <SafeSvg Component={SuccessSvg} {...props} />,

  // Homepage
  News1: (props: any) => <SafeSvg Component={News1Svg} {...props} />,
  News2: (props: any) => <SafeSvg Component={News2Svg} {...props} />,
  BestField: (props: any) => <SafeSvg Component={BestFieldSvg} {...props} />,
  MockClans: (props: any) => <SafeSvg Component={MockClansSvg} {...props} />,
  ReadyMatch: (props: any) => <SafeSvg Component={ReadyMatchSvg} {...props} />,
  Bell: (props: any) => <SafeSvg Component={Bell} {...props} />,
  First: (props: any) => <SafeSvg Component={FirstSvg} {...props} />,
  Second: (props: any) => <SafeSvg Component={SecondSvg} {...props} />,
  Third: (props: any) => <SafeSvg Component={ThirdSvg} {...props} />,

  // Onboarding
  Ellipse1: (props: any) => <SafeSvg Component={Ellipse1} {...props} />,
  Ellipse2: (props: any) => <SafeSvg Component={Ellipse2} {...props} />,
  Ellipse3: (props: any) => <SafeSvg Component={Ellipse3} {...props} />,
  BgBall: (props: any) => <SafeSvg Component={BgBall} {...props} />,
  PlayerWithBall: (props: any) => <SafeSvg Component={PlayerWithBall} {...props} />,

  // Profile
  Camera: (props: any) => <SafeSvg Component={CameraSvg} {...props} />,
  Chelsea: (props: any) => <SafeSvg Component={ChelseaSvg} {...props} />,
  Myu: (props: any) => <SafeSvg Component={MyuSvg} {...props} />,

  // Booking
  Parking: (props: any) => <SafeSvg Component={ParkingSvg} {...props} />,
  Shower: (props: any) => <SafeSvg Component={ShowerSvg} {...props} />,
  OutfitChange: (props: any) => <SafeSvg Component={OutfitChangeSvg} {...props} />,
  Seats: (props: any) => <SafeSvg Component={SeatsSvg} {...props} />,
  Lighted: (props: any) => <SafeSvg Component={LightedSvg} {...props} />,
  TimeOfWork: (props: any) => <SafeSvg Component={TimeOfWorkSvg} {...props} />,
  LengthOfField: (props: any) => <SafeSvg Component={LengthOfFieldSvg} {...props} />,
  TypeOfField: (props: any) => <SafeSvg Component={TypeOfFieldSvg} {...props} />,
  TypeOfPitch: (props: any) => <SafeSvg Component={TypeOfPitchSvg} {...props} />,
};
