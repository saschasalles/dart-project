import React from 'react'
import dartboard from '../images/dartboard.svg';


export default function Target() {
  const returnValueClicked = (event) => {
    alert(event.target.attributes.value.value);    
  }

  return(
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="453"
    height="453"
    version="1"
  >
    <defs>
      <marker orient="auto" overflow="visible" refX="0" refY="0">
        <path
          fill="#62adff"
          fillOpacity="1"
          fillRule="evenodd"
          strokeLinejoin="round"
          strokeWidth="0.625"
          d="M8.719 4.034L-2.207.016 8.719-4.002c-1.746 2.372-1.736 5.618 0 8.036z"
          fontSize="12"
          transform="matrix(-.3 0 0 -.3 1.5 0)"
        ></path>
      </marker>
    </defs>
    <g transform="translate(-9.313 -200.148)">
      <g transform="translate(235.813 426.648)">
        <g>
          <path
            fill="#000"
            fillOpacity="1"
            fillRule="evenodd"
            stroke="none"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="1.1"
            d="M226.5 0a226.5 226.5 0 11-453 0 226.5 226.5 0 11453 0z"
            opacity="1"
            value="0"
            onClick={(event) => returnValueClicked(event)}
          ></path>
        </g>
        <g
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#d0edfd"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="1.1"
        >
           <g fill="red" opacity="1">
            <path
              d="M170.55 0a170.55 170.55 0 01-8.347 52.703L0 0z"
              transform="rotate(-99)"
              value="40"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M170.55 0a170.55 170.55 0 01-8.347 52.703L0 0z"
              transform="rotate(-135)"
              value="24"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M170.55 0a170.55 170.55 0 01-8.347 52.703L0 0z"
              transform="rotate(-171)"
              value="28"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M170.55 0a170.55 170.55 0 01-8.347 52.703L0 0z"
              transform="rotate(153)"
              value="16"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M170.55 0a170.55 170.55 0 01-8.347 52.703L0 0z"
              transform="rotate(117)"
              value="14"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M170.55 0a170.55 170.55 0 01-8.347 52.703L0 0z"
              transform="rotate(81)"
              value="6"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M170.55 0a170.55 170.55 0 01-8.347 52.703L0 0z"
              transform="rotate(45)"
              value="4"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M170.55 0a170.55 170.55 0 01-8.347 52.703L0 0z"
              transform="rotate(9)"
              value="20"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M170.55 0a170.55 170.55 0 01-8.347 52.703L0 0z"
              transform="rotate(-27)"
              value="26"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M170.55 0a170.55 170.55 0 01-8.347 52.703L0 0z"
              transform="rotate(-63)"
              value="36"
              onClick={(event) => returnValueClicked(event)}
            ></path>
          </g>
          <g fill="#000" opacity="1">
            <path
              d="M161.45 0a161.45 161.45 0 01-7.902 49.89L0 0z"
              transform="rotate(-99)"
              value="20"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M161.45 0a161.45 161.45 0 01-7.902 49.89L0 0z"
              transform="rotate(-135)"
              value="12"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M161.45 0a161.45 161.45 0 01-7.902 49.89L0 0z"
              transform="rotate(-171)"
              value="14"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M161.45 0a161.45 161.45 0 01-7.902 49.89L0 0z"
              transform="rotate(153)"
              value="8"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M161.45 0a161.45 161.45 0 01-7.902 49.89L0 0z"
              transform="rotate(117)"
              value="7"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M161.45 0a161.45 161.45 0 01-7.902 49.89L0 0z"
              transform="rotate(81)"
              value="3"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M161.45 0a161.45 161.45 0 01-7.902 49.89L0 0z"
              transform="rotate(45)"
              value="2"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M161.45 0a161.45 161.45 0 01-7.902 49.89L0 0z"
              transform="rotate(9)"
              value="10"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M161.45 0a161.45 161.45 0 01-7.902 49.89L0 0z"
              transform="rotate(-27)"
              value="13"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M161.45 0a161.45 161.45 0 01-7.902 49.89L0 0z"
              transform="rotate(-63)"
              value="18"
              onClick={(event) => returnValueClicked(event)}
            ></path>
          </g>
          <g fill="red" opacity="1">
            <path
              d="M107.55 0a107.55 107.55 0 01-5.264 33.235L0 0z"
              transform="rotate(-99)"
              value="60"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M107.55 0a107.55 107.55 0 01-5.264 33.235L0 0z"
              transform="rotate(-135)"
              value="36"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M107.55 0a107.55 107.55 0 01-5.264 33.235L0 0z"
              transform="rotate(-171)"
              value="42"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M107.55 0a107.55 107.55 0 01-5.264 33.235L0 0z"
              transform="rotate(153)"
              value="24"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M107.55 0a107.55 107.55 0 01-5.264 33.235L0 0z"
              transform="rotate(117)"
              value="21"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M107.55 0a107.55 107.55 0 01-5.264 33.235L0 0z"
              transform="rotate(81)"
              value="9"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M107.55 0a107.55 107.55 0 01-5.264 33.235L0 0z"
              transform="rotate(45)"
              value="6"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M107.55 0a107.55 107.55 0 01-5.264 33.235L0 0z"
              transform="rotate(9)"
              value="30"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M107.55 0a107.55 107.55 0 01-5.264 33.235L0 0z"
              transform="rotate(-27)"
              value="39"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M107.55 0a107.55 107.55 0 01-5.264 33.235L0 0z"
              transform="rotate(-63)"
              value="54"
              onClick={(event) => returnValueClicked(event)}
            ></path>
          </g>
          <g fill="#000" opacity="1">
            <path
              d="M98.45 0a98.45 98.45 0 01-4.818 30.423L0 0z"
              transform="rotate(-99)"
              value="20"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M98.45 0a98.45 98.45 0 01-4.818 30.423L0 0z"
              transform="rotate(-135)"
              value="12"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M98.45 0a98.45 98.45 0 01-4.818 30.423L0 0z"
              transform="rotate(-171)"
              value="14"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M98.45 0a98.45 98.45 0 01-4.818 30.423L0 0z"
              transform="rotate(153)"
              value="8"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M98.45 0a98.45 98.45 0 01-4.818 30.423L0 0z"
              transform="rotate(117)"
              value="7"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M98.45 0a98.45 98.45 0 01-4.818 30.423L0 0z"
              transform="rotate(81)"
              value="3"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M98.45 0a98.45 98.45 0 01-4.818 30.423L0 0z"
              transform="rotate(45)"
              value="2"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M98.45 0a98.45 98.45 0 01-4.818 30.423L0 0z"
              transform="rotate(9)"
              value="10"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M98.45 0a98.45 98.45 0 01-4.818 30.423L0 0z"
              transform="rotate(-27)"
              value="13"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M98.45 0a98.45 98.45 0 01-4.818 30.423L0 0z"
              transform="rotate(-63)"
              value="18"
              onClick={(event) => returnValueClicked(event)}
            ></path>
          </g>





          <g fill="#00a000" opacity="1">
            <path
              d="M170.55 0a170.55 170.55 0 01-8.347 52.703L0 0z"
              transform="rotate(-117)"
              value="10"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M170.55 0a170.55 170.55 0 01-8.347 52.703L0 0z"
              transform="rotate(-153)"
              value="18"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M170.55 0a170.55 170.55 0 01-8.347 52.703L0 0z"
              transform="rotate(171)"
              value="22"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M170.55 0a170.55 170.55 0 01-8.347 52.703L0 0z"
              transform="rotate(135)"
              value="32"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M170.55 0a170.55 170.55 0 01-8.347 52.703L0 0z"
              transform="rotate(99)"
              value="38"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M170.55 0a170.55 170.55 0 01-8.347 52.703L0 0z"
              transform="rotate(63)"
              value="34"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M170.55 0a170.55 170.55 0 01-8.347 52.703L0 0z"
              transform="rotate(27)"
              value="30"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M170.55 0a170.55 170.55 0 01-8.347 52.703L0 0z"
              transform="rotate(-9)"
              value="12"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M170.55 0a170.55 170.55 0 01-8.347 52.703L0 0z"
              transform="rotate(-45)"
              value="8"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M170.55 0a170.55 170.55 0 01-8.347 52.703L0 0z"
              transform="rotate(-81)"
              value="2"
              onClick={(event) => returnValueClicked(event)}
            ></path>
          </g>
          <g fill="#e7e4c7" opacity="1">
            <path
              d="M161.45 0a161.45 161.45 0 01-7.902 49.89L0 0z"
              transform="rotate(-117)"
              value="5"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M161.45 0a161.45 161.45 0 01-7.902 49.89L0 0z"
              transform="rotate(-153)"
              value="9"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M161.45 0a161.45 161.45 0 01-7.902 49.89L0 0z"
              transform="rotate(171)"
              value="11"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M161.45 0a161.45 161.45 0 01-7.902 49.89L0 0z"
              transform="rotate(135)"
              value="16"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M161.45 0a161.45 161.45 0 01-7.902 49.89L0 0z"
              transform="rotate(99)"
              value="19"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M161.45 0a161.45 161.45 0 01-7.902 49.89L0 0z"
              transform="rotate(63)"
              value="17"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M161.45 0a161.45 161.45 0 01-7.902 49.89L0 0z"
              transform="rotate(27)"
              value="15"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M161.45 0a161.45 161.45 0 01-7.902 49.89L0 0z"
              transform="rotate(-9)"
              value="6"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M161.45 0a161.45 161.45 0 01-7.902 49.89L0 0z"
              transform="rotate(-45)"
              value="4"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M161.45 0a161.45 161.45 0 01-7.902 49.89L0 0z"
              transform="rotate(-81)"
              value="1"
              onClick={(event) => returnValueClicked(event)}
            ></path>
          </g>
          <g fill="#00a000" opacity="1">
            <path
              d="M107.55 0a107.55 107.55 0 01-5.264 33.235L0 0z"
              transform="rotate(-117)"
              value="15"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M107.55 0a107.55 107.55 0 01-5.264 33.235L0 0z"
              transform="rotate(-153)"
              value="27"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M107.55 0a107.55 107.55 0 01-5.264 33.235L0 0z"
              transform="rotate(171)"
              value="33"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M107.55 0a107.55 107.55 0 01-5.264 33.235L0 0z"
              transform="rotate(135)"
              value="48"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M107.55 0a107.55 107.55 0 01-5.264 33.235L0 0z"
              transform="rotate(99)"
              value="57"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M107.55 0a107.55 107.55 0 01-5.264 33.235L0 0z"
              transform="rotate(63)"
              value="51"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M107.55 0a107.55 107.55 0 01-5.264 33.235L0 0z"
              transform="rotate(27)"
              value="45"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M107.55 0a107.55 107.55 0 01-5.264 33.235L0 0z"
              transform="rotate(-9)"
              value="18"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M107.55 0a107.55 107.55 0 01-5.264 33.235L0 0z"
              transform="rotate(-45)"
              value="12"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M107.55 0a107.55 107.55 0 01-5.264 33.235L0 0z"
              transform="rotate(-81)"
              value="3"
              onClick={(event) => returnValueClicked(event)}
            ></path>
          </g>
          <g fill="#e7e4c7" opacity="1">
            <path
              d="M98.45 0a98.45 98.45 0 01-4.818 30.423L0 0z"
              transform="rotate(-117)"
              value="5"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M98.45 0a98.45 98.45 0 01-4.818 30.423L0 0z"
              transform="rotate(-153)"
              value="9"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M98.45 0a98.45 98.45 0 01-4.818 30.423L0 0z"
              transform="rotate(171)"
              value="11"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M98.45 0a98.45 98.45 0 01-4.818 30.423L0 0z"
              transform="rotate(135)"
              value="16"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M98.45 0a98.45 98.45 0 01-4.818 30.423L0 0z"
              transform="rotate(99)"
              value="19"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M98.45 0a98.45 98.45 0 01-4.818 30.423L0 0z"
              transform="rotate(63)"
              value="17"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M98.45 0a98.45 98.45 0 01-4.818 30.423L0 0z"
              transform="rotate(27)"
              value="15"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M98.45 0a98.45 98.45 0 01-4.818 30.423L0 0z"
              transform="rotate(-9)"
              value="6"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M98.45 0a98.45 98.45 0 01-4.818 30.423L0 0z"
              transform="rotate(-45)"
              value="4"
              onClick={(event) => returnValueClicked(event)}
            ></path>
            <path
              d="M98.45 0a98.45 98.45 0 01-4.818 30.423L0 0z"
              transform="rotate(-81)"
              value="1"
              onClick={(event) => returnValueClicked(event)}
            ></path>
          </g>
          <path
            fill="#00a000"
            d="M16.45 0a16.45 16.45 0 11-32.9 0 16.45 16.45 0 1132.9 0z"
            opacity="1"
            value="25"
            onClick={(event) => returnValueClicked(event)}
          ></path>
          <path
            fill="red"
            d="M6.9 0A6.9 6.9 0 11-6.9 0 6.9 6.9 0 116.9 0z"
            opacity="1"
            value="50"
            onClick={(event) => returnValueClicked(event)}
          ></path>
        </g>
        <g
          style={{
            WebkitTextAlign: "start",
            textAlign: "start",
            lineHeight: "100%",
          }}
          fill="#fff"
          fillOpacity="1"
          fontFamily="Sans"
          fontSize="28"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          textAnchor="start"
          writingMode="lr-tb"
        >
          <text x="-16.952" y="-187.825" xmlSpace="preserve">
            <tspan x="-16.952" y="-187.825">
              20
            </tspan>
          </text>
          <text x="51.872" y="-180.366" xmlSpace="preserve">
            <tspan x="51.872" y="-180.366">
              1
            </tspan>
          </text>
          <text x="100.015" y="-150.531" xmlSpace="preserve">
            <tspan x="100.015" y="-150.531">
              18
            </tspan>
          </text>
          <text x="153.243" y="-103.744" xmlSpace="preserve">
            <tspan x="153.243" y="-103.744">
              4
            </tspan>
          </text>
          <text x="173.925" y="-45.77" xmlSpace="preserve">
            <tspan x="173.925" y="-45.77">
              13
            </tspan>
          </text>
          <text x="187.147" y="9.154" xmlSpace="preserve">
            <tspan x="187.147" y="9.154">
              6
            </tspan>
          </text>
          <text x="171.551" y="67.468" xmlSpace="preserve">
            <tspan x="171.551" y="67.468">
              10
            </tspan>
          </text>
          <text x="142.733" y="127.138" xmlSpace="preserve">
            <tspan x="142.733" y="127.138">
              15
            </tspan>
          </text>
          <text x="106.118" y="169.856" xmlSpace="preserve">
            <tspan x="106.118" y="169.856">
              2
            </tspan>
          </text>
          <text x="42.718" y="196.64" xmlSpace="preserve">
            <tspan x="42.718" y="196.64">
              17
            </tspan>
          </text>
          <text x="-6.103" y="208.167" xmlSpace="preserve">
            <tspan x="-6.103" y="208.167">
              3
            </tspan>
          </text>
          <text x="-74.248" y="199.013" xmlSpace="preserve">
            <tspan x="-74.248" y="199.013">
              19
            </tspan>
          </text>
          <text x="-123.747" y="173.246" xmlSpace="preserve">
            <tspan x="-123.747" y="173.246">
              7
            </tspan>
          </text>
          <text x="-174.942" y="127.138" xmlSpace="preserve">
            <tspan x="-174.942" y="127.138">
              16
            </tspan>
          </text>
          <text x="-193.589" y="72.892" xmlSpace="preserve">
            <tspan x="-193.589" y="72.892">
              8
            </tspan>
          </text>
          <text x="-214.609" y="8.815" xmlSpace="preserve">
            <tspan x="-214.609" y="8.815">
              11
            </tspan>
          </text>
          <text x="-208.506" y="-48.821" xmlSpace="preserve">
            <tspan x="-208.506" y="-48.821">
              14
            </tspan>
          </text>
          <text x="-165.11" y="-109.508" xmlSpace="preserve">
            <tspan x="-165.11" y="-109.508">
              9
            </tspan>
          </text>
          <text x="-134.258" y="-152.226" xmlSpace="preserve">
            <tspan x="-134.258" y="-152.226">
              12
            </tspan>
          </text>
          <text x="-67.468" y="-178.671" xmlSpace="preserve">
            <tspan x="-67.468" y="-178.671">
              5
            </tspan>
          </text>
        </g>
      </g>
    </g>
  </svg>
  )
}
