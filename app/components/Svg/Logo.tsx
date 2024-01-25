import * as React from "react";
export default function LogoSvg({
  width,
  height,
  color,
}: {
  width: number;
  height: number;
  color: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 262 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H262V48H10.5L0 39V0ZM173.325 11L162.285 36.4398H167.04L169.034 31.6511H177.158L179.045 36.4398H184.632L173.591 11H173.325ZM175.559 27.594L173.208 21.627L170.724 27.594H175.559ZM160.214 34.4112C159.948 34.6329 159.449 34.9322 158.718 35.3091C158.008 35.686 157.133 36.0185 156.091 36.3067C155.049 36.595 153.896 36.728 152.632 36.7058C150.703 36.6615 148.974 36.3178 147.444 35.6749C145.937 35.0098 144.651 34.1119 143.587 32.9813C142.545 31.8506 141.747 30.5537 141.193 29.0905C140.638 27.6273 140.361 26.0643 140.361 24.4016C140.361 22.5393 140.638 20.8323 141.193 19.2804C141.769 17.7285 142.578 16.3872 143.62 15.2566C144.684 14.1259 145.948 13.2502 147.411 12.6295C148.874 12.0087 150.493 11.6983 152.266 11.6983C153.907 11.6983 155.359 11.92 156.623 12.3634C157.886 12.8068 158.917 13.2835 159.715 13.7934L157.82 18.3493C157.266 17.928 156.523 17.4957 155.592 17.0523C154.683 16.5868 153.63 16.354 152.433 16.354C151.502 16.354 150.604 16.5535 149.739 16.9526C148.897 17.3295 148.143 17.8726 147.478 18.582C146.835 19.2915 146.325 20.1228 145.948 21.0761C145.571 22.0073 145.383 23.0271 145.383 24.1356C145.383 25.3106 145.549 26.3858 145.881 27.3613C146.236 28.3367 146.735 29.1792 147.378 29.8886C148.021 30.5759 148.786 31.1079 149.673 31.4848C150.581 31.8617 151.601 32.0502 152.732 32.0502C154.04 32.0502 155.16 31.8395 156.091 31.4183C157.022 30.9971 157.731 30.5537 158.219 30.0881L160.214 34.4112ZM95.6894 11.9644C97.7068 11.9644 99.4139 12.308 100.811 12.9953C102.207 13.6604 103.271 14.6137 104.003 15.8552C104.735 17.0745 105.1 18.5266 105.1 20.2115C105.1 21.2092 104.945 22.2179 104.635 23.2377C104.347 24.2353 103.87 25.1443 103.205 25.9646C102.562 26.7848 101.686 27.4499 100.578 27.9598C99.4915 28.4476 98.1502 28.6914 96.554 28.6914H93.0955V36.4398H88.2736V11.9644H95.6894ZM96.5208 24.0025C97.2524 24.0025 97.862 23.8806 98.3498 23.6367C98.8375 23.3707 99.2144 23.0492 99.4804 22.6724C99.7686 22.2733 99.9682 21.8632 100.079 21.4419C100.212 21.0207 100.279 20.6549 100.279 20.3445C100.279 20.1007 100.234 19.7792 100.146 19.3802C100.079 18.9589 99.9238 18.5377 99.6799 18.1165C99.4361 17.6953 99.0592 17.3405 98.5493 17.0523C98.0616 16.7641 97.3965 16.62 96.554 16.62H93.0955V24.0025H96.5208ZM109.415 11.9644H114.237V31.7841H125.743V36.4398H109.415V11.9644ZM135.541 11.9644H130.719V36.4398H135.541V11.9644ZM184.556 11.9644H201.05V16.62H195.098V36.4398H190.276V16.62H184.556V11.9644ZM204.327 19.4467C203.685 20.9542 203.363 22.5504 203.363 24.2353C203.363 25.9646 203.685 27.583 204.327 29.0905C204.97 30.598 205.857 31.9282 206.988 33.081C208.141 34.2117 209.471 35.0985 210.978 35.7414C212.486 36.3843 214.104 36.7058 215.834 36.7058C217.541 36.7058 219.148 36.3843 220.655 35.7414C222.163 35.0985 223.493 34.2117 224.646 33.081C225.821 31.9282 226.73 30.598 227.373 29.0905C228.038 27.583 228.371 25.9646 228.371 24.2353C228.371 22.5504 228.038 20.9542 227.373 19.4467C226.73 17.9391 225.821 16.6089 224.646 15.4561C223.493 14.2811 222.163 13.3611 220.655 12.696C219.148 12.0309 217.541 11.6983 215.834 11.6983C214.104 11.6983 212.486 12.0309 210.978 12.696C209.471 13.3611 208.141 14.2811 206.988 15.4561C205.857 16.6089 204.97 17.9391 204.327 19.4467ZM208.917 27.2948C208.54 26.3415 208.351 25.3216 208.351 24.2353C208.351 23.1268 208.54 22.0959 208.917 21.1427C209.293 20.1894 209.826 19.358 210.513 18.6486C211.2 17.917 211.998 17.3516 212.907 16.9526C213.816 16.5535 214.803 16.354 215.867 16.354C216.931 16.354 217.917 16.5535 218.826 16.9526C219.735 17.3516 220.522 17.917 221.188 18.6486C221.875 19.358 222.407 20.1894 222.784 21.1427C223.183 22.0959 223.382 23.1268 223.382 24.2353C223.382 25.3216 223.194 26.3415 222.817 27.2948C222.44 28.2259 221.919 29.0572 221.254 29.7888C220.589 30.4983 219.802 31.0525 218.893 31.4516C218.006 31.8506 217.042 32.0502 216 32.0502C214.913 32.0502 213.905 31.8506 212.974 31.4516C212.065 31.0525 211.255 30.4983 210.546 29.7888C209.859 29.0572 209.316 28.2259 208.917 27.2948ZM240.594 11.9644C242.123 11.9644 243.487 12.1639 244.684 12.563C245.881 12.9399 246.879 13.4941 247.677 14.2257C248.497 14.9351 249.118 15.7997 249.539 16.8196C249.96 17.8172 250.171 18.9478 250.171 20.2115C250.171 21.2092 250.016 22.2068 249.705 23.2044C249.417 24.2021 248.929 25.111 248.242 25.9313C247.729 26.5646 247.083 27.1054 246.305 27.5537L252 36.4398H246.38L241.211 28.6582H238V36.4398H233.178V11.9644H240.594ZM241.425 24.0025C242.157 24.0025 242.766 23.8806 243.254 23.6367C243.742 23.3929 244.119 23.0825 244.385 22.7056C244.673 22.3287 244.872 21.9408 244.983 21.5417C245.116 21.1205 245.183 20.7325 245.183 20.3778C245.183 20.1118 245.138 19.7792 245.05 19.3802C244.983 18.9589 244.828 18.5377 244.584 18.1165C244.34 17.6953 243.963 17.3405 243.454 17.0523C242.966 16.7641 242.301 16.62 241.458 16.62H238V24.0025H241.425ZM15.8219 11.9644H11V36.4398H27.328V31.7841H15.8219V11.9644ZM71.5326 11.4988C68.318 11.4988 65.2819 12.7968 63.1166 15.0452L47.423 29.5091C45.9943 30.9926 44.0968 31.8039 42.0653 31.8039C37.8908 31.8039 34.4976 28.3038 34.4976 23.9692C34.4976 19.6347 37.8908 16.1346 42.0653 16.1346C44.0968 16.1346 45.9943 16.9459 47.5123 18.5221L50.0349 20.84L53.4057 17.734L50.593 15.1611C48.3159 12.7968 45.2799 11.4988 42.0653 11.4988C35.4129 11.4988 30.0105 17.1082 30.0105 23.9692C30.0105 30.8303 35.4129 36.4397 42.0653 36.4397C45.2799 36.4397 48.3159 35.1417 50.4813 32.8933L66.1749 18.4294C67.6036 16.9459 69.5011 16.1346 71.5326 16.1346C75.7071 16.1346 79.1003 19.6347 79.1003 23.9692C79.1003 28.3038 75.7071 31.8039 71.5326 31.8039C69.5234 31.8039 67.6036 30.9926 66.0856 29.4164L63.5407 27.0753L60.1698 30.1813L63.0049 32.7774C65.2819 35.1185 68.2956 36.4165 71.5326 36.4165C78.185 36.4165 83.5874 30.8303 83.5874 23.9461C83.5874 17.0618 78.185 11.4988 71.5326 11.4988ZM42.35 27.2C44.1449 27.2 45.6 25.7449 45.6 23.95C45.6 22.1551 44.1449 20.7 42.35 20.7C40.5551 20.7 39.1 22.1551 39.1 23.95C39.1 25.7449 40.5551 27.2 42.35 27.2Z"
        fill={color}
      />
    </svg>
  );
}
