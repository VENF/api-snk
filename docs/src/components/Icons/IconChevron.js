import IconBase from './IconBase';
const IconChevron = ({ width, heigth, color, stroke }) => {
  return (
    <IconBase width={width} heigth={heigth} color={color} viewBox="0 0 21 21">
      <path
        d="m8.5.5-4 4-4-4"
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(6 8)"
      />
    </IconBase>
  );
};

export default IconChevron;
