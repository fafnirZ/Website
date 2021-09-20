import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .path {
    stroke: var(--secondary);
    stroke-dasharray:1000;
    stroke-dashoffset:1000;
    animation: dash 4s linear forwards;
  }
  @keyframes dash {
    to {
        stroke-dashoffset:0;
    }
  }

  #graphic-large {
    padding-right: 5rem;
  }

  #graphic-large-group {
    display:flex;
  }
`

const OperaBridge = () : ReactElement => {
  //temporary method
  return (
    <Container>
      <svg id="graphic-large" viewBox="0 150 1240 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="graphic-large-group">
              <path className="path" d="M278.783 429.873L351.834 429.171" />
              <path className="path" d="M242.921 403.019C253.531 403.807 275.812 406.006 280.052 408.493" />
              <path className="path" d="M433.163 420.872L450.374 420.779C450.334 413.336 445.009 402.201 442.352 397.564L433.163 420.872Z" />
              <path className="path" d="M274.637 339.321C262.638 362.547 238.198 410.434 236.432 416.175" />
              <path className="path" d="M369.999 370.432C363.277 349.486 332.156 304.268 261.447 290.961C265.242 303.752 270.414 318.611 274.998 340.963C280.27 364.386 290.451 413.318 289.002 421.661L296.29 421.776L369.999 370.432ZM369.999 370.432L420.7 420.568L427.283 420.672L440.392 394.737L427.954 378.399C442.102 380.821 471.466 386.636 475.731 390.523" />
              <path className="path" d="M369.064 369.458C379.481 359.712 412.92 342.372 463.332 350.983M463.332 350.983L446.084 380.887L449.53 380.942L463.332 350.983Z" />
              <path className="path" d="M277.243 350.993C274.366 361.26 272.017 390.082 285.634 423.236" />
              <path className="path" d="M453.138 421.706L275.412 422.376L252.954 415.739L232.257 415.411L198.482 403.709L186.621 403.521L173.03 409.819L154.658 409.527L154.485 420.457L152.411 419.261L147.294 419.18L147.121 430.11L139.447 429.988L139.177 446.965L82.4345 446.065L82.298 454.669L593.77 457.201L593.94 446.503L571.799 434.521L495.987 433.319L458.487 421.791L453.138 421.706Z" />
              <path className="path" d="M406.587 408.872C394.791 409.538 369.703 411.264 363.723 412.844L358.142 412.755C350.506 410.231 332.864 405.004 323.384 404.295" />
              <path className="path" d="M359.065 413.235C358.794 410.75 360.414 398.602 369.057 369.896" />
              <path className="path" d="M274.408 339.085C267.107 334.937 246.046 326.26 220.204 324.734C226.364 342.122 237.396 384.741 232.246 416.108" />
              <path className="path" d="M228.558 355.338C217.685 351.599 189.965 345.235 166.075 349.695C172.731 365.153 185.972 397.556 185.691 403.507" />
              <path className="path" d="M475.489 391.123L491.133 431.381C507.197 415.818 542.459 383.719 554.988 379.824L532.265 404.585L532.162 411.097L556.148 424.038L554.188 430.288L554.129 434.008" />
              <path className="path" d="M475.496 390.658C493.894 384.437 535.689 373.47 555.693 379.37" />
              <path className="path" d="M183.498 395.098C176.975 395.77 161.206 398.559 150.321 404.341L156.061 409.084" />
              <path className="path" d="M158.848 424.016L179.11 437.131L183.528 437.201L198.523 445.115L198.478 447.906L232.896 448.452" />
              <path className="path" d="M214.808 430.253L230.157 430.497" />
              <path className="path" d="M407.646 430.056L465.784 430.979" />
              <path className="path" d="M353.849 448.742L486.209 448.516" />
              <path className="path" d="M980 333V320.5H984.5V308H986.5L988 301L992 297.5H1013.5V301H1021L1024.5 303H1038.5L1044 306V323H1046.5V335.5" />
              <path className="path" d="M939.5 333C993.5 334.167 1110.1 337.9 1144.5 343.5" />
              <path className="path" d="M793.5 327V330" />
              <path className="path" d="M499.5 282.5V329.5" />
              <path className="path" d="M542 274L543.5 329" />
              <path className="path" d="M604.5 266C648.833 268.833 752.9 285.8 814.5 331" />
              <path className="path" d="M386.5 336C420.833 311 512.8 262.1 606 266.5C640.833 267.833 728.9 282.5 802.5 330.5" />
              <path className="path" d="M437 272.5L456.5 296" />
              <path className="path" d="M391.5 290.5L413 319.5" />
              <path className="path" d="M360.5 336C439.167 333.167 602.7 327.8 627.5 329C652.3 330.2 820.167 332.167 901 333H905" />
              <path className="path" d="M362 346C433.167 342.5 582.1 335.6 608.5 336C613.3 341.2 619.833 342.167 622.5 342C623.5 342 626.1 341.4 628.5 339C631.5 336 627 336 650 336C668.4 336 767 338 814 339L868.5 381.5L858.5 392" />
              <path className="path" d="M373 345L365 352.5" />
              <path className="path" d="M828.5 342L888 384.5C887.167 370.333 886 342 888 342C890 342 879.833 342 874.5 342V371.5" />
              <path className="path" d="M873 355.8L868 365V342L859 361.933" />
              <path className="path" d="M854 360.5V342.5L847 354V342.5" />
              <path className="path" d="M841.5 342.5L838.5 347L834.5 342.5" />
              <path className="path" d="M909.5 293.5L905 313.5V331.5" />
              <path className="path" d="M909.5 294V380H903V348.5" />
              <path className="path" d="M909 293.5H930.5L936 313.5C937.667 331 940.5 367 938.5 371" />
              <path className="path" d="M908.5 296.5H894.5L888 316.5V331" />
              <path className="path" d="M894.5 298C893.833 303.5 892.4 317.7 892 330.5" />
              <path className="path" d="M346.5 310.5C475.5 250 550 240 629.5 244C703 247.698 757 259.5 886 321" />
              <path className="path" d="M349.5 311L365 335" />
              <path className="path" d="M371.5 335V301.5L392 333.5V291" />
              <path className="path" d="M413.5 281.5V332.5" />
              <path className="path" d="M434.5 275V333" />
              <path className="path" d="M453.5 268L454.5 332.5" />
              <path className="path" d="M475 261.5L476.5 331.5" />
              <path className="path" d="M495.5 255.5L496.5 330.5" />
              <path className="path" d="M516.5 252.5L518 330.5" />
              <path className="path" d="M536.5 248.5L538.5 330" />
              <path className="path" d="M557 245.5V329" />
              <path className="path" d="M577 243.5L579 329" />
              <path className="path" d="M597 243.5L599 328" />
              <path className="path" d="M617.5 243.5L619.5 329" />
              <path className="path" d="M638 244.5L640 329.5" />
              <path className="path" d="M658.5 247V329.5" />
              <path className="path" d="M678 248L679.5 329" />
              <path className="path" d="M698 251.5L699.5 329.5" />
              <path className="path" d="M718.5 255V330.5" />
              <path className="path" d="M739 262V329.5" />
              <path className="path" d="M757.5 267.5L759 330" />
              <path className="path" d="M777.5 274L779 330.5" />
              <path className="path" d="M796.5 281.5V330.5" />
              <path className="path" d="M817.5 291V330.5" />
              <path className="path" d="M835.5 298.5V330" />
              <path className="path" d="M854 307V331.5" />
              <path className="path" d="M867 312V331.5" />
              <path className="path" d="M868 332.5L879.5 319" />
              <path className="path" d="M413 282L433.5 308" />
              <path className="path" d="M435.5 276.5L454.5 299.5" />
              <path className="path" d="M453 267.5L475 291.5" />
              <path className="path" d="M475 262L496 283" />
              <path className="path" d="M496 257.5L514.5 277.5" />
              <path className="path" d="M517 253.5L536 273" />
              <path className="path" d="M538 249L557.5 271.5" />
              <path className="path" d="M556.5 246.5L577 268" />
              <path className="path" d="M575 243.5L597 267" />
              <path className="path" d="M599 267L617 245.5" />
              <path className="path" d="M618.5 267L638.5 245.5" />
              <path className="path" d="M638.5 269L659 248" />
              <path className="path" d="M659.5 270L678 250" />
              <path className="path" d="M680 274L697.5 254" />
              <path className="path" d="M698.5 279.5L718.5 258.5" />
              <path className="path" d="M718.5 287.5L744.5 264" />
              <path className="path" d="M739 295.5L763 269.5" />
              <path className="path" d="M758 305.5L783 277.5" />
              <path className="path" d="M779 314L802.5 285" />
              <path className="path" d="M797.5 325L822.5 292" />
              <path className="path" d="M822 332L841 301" />
              <path className="path" d="M847.5 332.5L859 309" />
              <path className="path" d="M416.5 281.5L434.5 305" />
              <path className="path" d="M458.5 267.5L479 288" />
              <path className="path" d="M479.5 261L498 280" />
              <path className="path" d="M500 255L520 274.5" />
              <path className="path" d="M542.5 247.5L561.5 266.5" />
              <path className="path" d="M563 246L583.5 266V244L605.5 266L624 244V268L645 246V270L666 247.5" />
              <path className="path" d="M706 254.5L685.5 276" />
              <path className="path" d="M726.5 259.5L705 280.5" />
              <path className="path" d="M769 272.5C768.2 273.7 754 288.667 747 296" />
              <path className="path" d="M788.5 280L765.5 305" />
              <path className="path" d="M809.5 288.5L788.5 315" />
              <path className="path" d="M828 295.5L806 325.5" />
              <path className="path" d="M847.5 305.5L831.5 332" />
              <path className="path" d="M866 313L857 331" />
              <path className="path" d="M563.5 270.5V327" />
              <path className="path" d="M583.5 268.5V327" />
              <path className="path" d="M604 269V326.5" />
              <path className="path" d="M625 270.5V327" />
              <path className="path" d="M646 274V327" />
              <path className="path" d="M666.5 277.5V327" />
              <path className="path" d="M686.5 283L688 329" />
              <path className="path" d="M708 289V328.5" />
              <path className="path" d="M726.905 296.486L727.781 331.231" />
              <path className="path" d="M749 304.5V329.5" />
              <path className="path" d="M768.5 314.5V329.5" />
              <path className="path" d="M519.5 277.5L521 328" />
              <path className="path" d="M458.5 299V331.5" />
              <path className="path" d="M479 290L480 330.5" />
              <path className="path" d="M437 309V331.5" />
              <path className="path" d="M415.5 319V331.5" />
              <path className="path" d="M394.5 332V334" />
              <path className="path" d="M1142 348C1080 345.5 954 341.6 946 346" />
              <path className="path" d="M950 349.5V369" />
              <path className="path" d="M952.5 355H987.5V376" />
              <path className="path" d="M994 357V372.5" />
              <path className="path" d="M1035.5 374.5V356H996" />
              <path className="path" d="M1013 375V356.5H1020V375" />
              <path className="path" d="M1043 357V376" />
              <path className="path" d="M1043.5 356.5L1079.5 358.5V364.5L1084.5 361.5V358.5H1090" />
              <path className="path" d="M1044.5 313.5L1062.5 305H1081H1087.5L1089.5 308H1096L1098.5 309.5H1105L1108.5 310.5L1110 313.5H1113.5L1116.5 308H1127L1130 302.5H1133V288.5H1138.5V275.5H1163.5V305M1163.5 312V305M1163.5 305H1177V310.5L1182.5 309.5L1190 308V275.5H1216" />
              <path className="path" d="M1124 371V360.5L1132.5 358H1152.5L1158.5 352.5H1165L1168.5 349L1172.5 355H1182.5L1188.5 360.5L1192 352.5H1203.5L1206 343H1188.5L1192 336.5H1196L1199.5 330L1206 324L1208.5 330V336.5H1216" />
              <path className="path" d="M617.5 455.5H900.5H1084L1239.5 446" />
              <path className="path" d="M1029.5 445L1055 433H1078.5L1092 426.5L1106 422H1133.5L1152 418L1170 414L1189 422L1202 418V403H1210.5H1220L1225 395H1231.5L1237.5 381.5" />
              <path className="path" d="M1080 424L1088 408H1101L1137 402V390H1170" />
          </g>
      </svg>
    </Container>
  )
};

export default OperaBridge;