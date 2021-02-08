import IconBase from "./IconBase";
const IconBook = ({ width, heigth, color, stroke }) => {
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
        <path d="m2.5.5h8c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2h-8c-1.1045695 0-2-.8954305-2-2v-10c0-1.1045695.8954305-2 2-2z" />
        <path d="m3.5.5h4v5.012l-2-2.012-2 2.012z" />
      </g>
    </IconBase>
  );
};

export default IconBook;
