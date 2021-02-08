import IconBase from './IconBase';
const IconCode = ({ width, heigth, color, stroke }) => {
  return (
    <IconBase width={width} heigth={heigth} color={color} viewBox="0 0 21 21">
      <g
        fill="none"
        fillRule="evenodd"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(2 3)"
      >
        <line x1="10.5" x2="6.5" y1=".5" y2="14.5" />
        <polyline
          points="7.328 2.672 7.328 8.328 1.672 8.328"
          transform="rotate(135 4.5 5.5)"
        />
        <polyline
          points="15.328 6.672 15.328 12.328 9.672 12.328"
          transform="scale(1 -1) rotate(-45 -10.435 0)"
        />
      </g>
    </IconBase>
  );
};

export default IconCode;
