import IconBase from './IconBase';
const IconDoc = ({ width, heigth, color, stroke }) => {
  return (
    <IconBase width={width} heigth={heigth} color={color} viewBox="0 0 21 21">
      <g
        fill="none"
        fillRule="evenodd"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(4 3)"
      >
        <path d="m12.5 12.5v-7l-5-5h-5c-1.1045695 0-2 .8954305-2 2v10c0 1.1045695.8954305 2 2 2h8c1.1045695 0 2-.8954305 2-2z" />
        <path d="m2.5 7.5h5" />
        <path d="m2.5 9.5h7" />
        <path d="m2.5 11.5h3" />
        <path d="m7.5.5v3c0 1.1045695.8954305 2 2 2h3" />
      </g>
    </IconBase>
  );
};

export default IconDoc;
