import React from 'react';
import PropTypes from 'prop-types';

const colorPalette = {
  grayscale: ['#C6C6C6', '#C6C6C6', '#7E7E7E', '#7C7C7C', '#7C7C7C', '#9F9F9F'],
  colored: ['#F5C15F', '#EB7835', '#EB5242', '#CB4AB0', '#49B1DE', '#61C482'],
};

const RainbowIcon = ({ paletteType = 'colored', palette = [] }) => {
  return (
    <svg
      width="19px"
      height="9px"
      viewBox="0 0 19 9"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-492.000000, -630.000000)">
          <g transform="translate(492.000000, 630.000000)">
            <path
              d="M9.5,0 C4.24785714,0 0,4.02428571 0,9 L2.71428571,9 C2.71428571,5.45142857 5.75428571,2.57142857 9.5,2.57142857 C13.2457143,2.57142857 16.2857143,5.45142857 16.2857143,9 L19,9 C19,4.02428571 14.7521429,0 9.5,0 Z"
              fill={palette[0] || colorPalette[paletteType][0]}
            />
            <path
              d="M9.5,1 C4.80071429,1 1,4.57714286 1,9 L3.42857143,9 C3.42857143,5.84571429 6.14857143,3.28571429 9.5,3.28571429 C12.8514286,3.28571429 15.5714286,5.84571429 15.5714286,9 L18,9 C18,4.57714286 14.1992857,1 9.5,1 Z"
              fill={palette[1] || colorPalette[paletteType][1]}
            />
            <path
              d="M9.5,2 C5.35357143,2 2,5.13 2,9 L4.14285714,9 C4.14285714,6.24 6.54285714,4 9.5,4 C12.4571429,4 14.8571429,6.24 14.8571429,9 L17,9 C17,5.13 13.6464286,2 9.5,2 Z"
              fill={palette[2] || colorPalette[paletteType][2]}
            />
            <path
              d="M9.5,3 C5.90642857,3 3,5.68285714 3,9 L4.85714286,9 C4.85714286,6.63428571 6.93714286,4.71428571 9.5,4.71428571 C12.0628571,4.71428571 14.1428571,6.63428571 14.1428571,9 L16,9 C16,5.68285714 13.0935714,3 9.5,3 Z"
              fill={palette[3] || colorPalette[paletteType][3]}
            />
            <path
              d="M9.5,4 C6.45928571,4 4,6.23571429 4,9 L5.57142857,9 C5.57142857,7.02857143 7.33142857,5.42857143 9.5,5.42857143 C11.6685714,5.42857143 13.4285714,7.02857143 13.4285714,9 L15,9 C15,6.23571429 12.5407143,4 9.5,4 Z"
              fill={palette[4] || colorPalette[paletteType][4]}
            />
            <path
              d="M9.5,5 C7.01214286,5 5,6.78857143 5,9 L6.28571429,9 C6.28571429,7.42285714 7.72571429,6.14285714 9.5,6.14285714 C11.2742857,6.14285714 12.7142857,7.42285714 12.7142857,9 L14,9 C14,6.78857143 11.9878571,5 9.5,5 Z"
              fill={palette[5] || colorPalette[paletteType][5]}
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

RainbowIcon.propTypes = {
  paletteType: PropTypes.oneOf(['colored', 'grayscale']),
  palette: PropTypes.array,
};

export default RainbowIcon;