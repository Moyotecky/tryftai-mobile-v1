import Svg, { Defs, LinearGradient, Path, Stop, SvgProps } from 'react-native-svg';

export const LocationIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fill="url(#a)"
      fillRule="evenodd"
      d="M17.908 4.121c.375-.167.75-.161 1.126.016.376.177.652.454.829.829.177.375.183.75.016 1.126l-5.975 13.012c-.229.48-.578.766-1.047.86-.47.094-.897.005-1.283-.266-.386-.271-.578-.667-.578-1.189v-5.505H5.49c-.522 0-.918-.192-1.189-.578a1.598 1.598 0 0 1-.266-1.283c.094-.469.38-.818.86-1.048l13.012-5.974Z"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient id="a" x1={4} x2={20} y1={12} y2={12} gradientUnits="userSpaceOnUse">
        <Stop stopColor="#0891B2" />
        <Stop offset={1} stopColor="#0F766E" />
      </LinearGradient>
    </Defs>
  </Svg>
);
