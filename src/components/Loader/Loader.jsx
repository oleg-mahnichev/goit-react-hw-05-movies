import { RotatingLines } from 'react-loader-spinner';
import { WrapperLoader } from './Loader.styled';

export const Loader = () => (
  <WrapperLoader>
    <RotatingLines
      strokeColor="blue"
      strokeWidth="5"
      animationDuration="0.75"
      width="120"
      visible={true}
    />
  </WrapperLoader>
);