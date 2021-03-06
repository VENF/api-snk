import IconBase from './IconBase';
const IconHome = ({ width, heigth, color, stroke }) => {
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
        <path
          d="m13-1h-9c-1.1045695 0-2 .8954305-2 2v12c0 1.1045695.8954305 2 2 2h9c1.1045695 0 2-.8954305 2-2v-12c0-1.1045695-.8954305-2-2-2z"
          transform="matrix(0 1 -1 0 15.5 -1.5)"
        />
        <path
          d="m7.99999972 5.00000002h-7c-.55228475 0-1 .44771525-1 1v2c0 .55228475.44771525 1 1 1h7c.55228475 0 1-.44771525 1-1v-2c0-.55228475-.44771525-1-1-1z"
          transform="matrix(0 1 -1 0 11.5 2.5)"
        />
        <path
          d="m11.9999996.99999966h-1c-.5522848 0-1.00000003.44771525-1.00000003 1v4c0 .55228475.44771523 1 1.00000003 1h1c.5522847 0 1-.44771525 1-1v-4c0-.55228475-.4477153-1-1-1z"
          transform="matrix(0 1 -1 0 15.5 -7.5)"
        />
        <path
          d="m12.4999997 6.50000002h-2c-.55228473 0-.99999998.44771525-.99999998 1v3.99999998c0 .5522848.44771525 1 .99999998 1h2c.5522848 0 1-.4477152 1-1v-3.99999998c0-.55228475-.4477152-1-1-1z"
          transform="matrix(0 1 -1 0 21 -2)"
        />
      </g>
    </IconBase>
  );
};

export default IconHome;
