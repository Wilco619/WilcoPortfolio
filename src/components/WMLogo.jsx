import React, { useId } from "react";

/**
 * WMLogo — Wilco Milcinovic monogram
 *
 * Props:
 *   accent    {string}  Color for W letter, hex frame, diamonds & details
 *                       Default: "#DC143C" (crimson)
 *   secondary {string}  Color for M letter
 *                       Default: "#FFFFFF" (white)
 *   ring      {string}  Color for mid hex ring and scan lines
 *                       Default: "#1A5FAD" (blue)
 *   size      {number}  Width & height in px. Default: 200
 *
 * Usage:
 *   <WMLogo />
 *   <WMLogo size={40} />
 *   <WMLogo accent="#F0C040" />                          // gold
 *   <WMLogo accent="#FFFFFF" secondary="#DC143C" />      // inverted
 */
export default function WMLogo({
  accent    = "#DC143C",
  secondary = "#ffffff",
  ring      = "#1A5FAD",
  size      = 200,
}) {
  const id = useId()
  const wclipId = `${id}-wclip`
  const mclipId = `${id}-mclip`

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 680 680"
      role="img"
      aria-label="WM monogram logo — Wilco Milcinovic"
    >
      <defs>
        <clipPath id={wclipId}>
          <rect x="0" y="0" width="340" height="680" />
        </clipPath>
        <clipPath id={mclipId}>
          <rect x="340" y="0" width="340" height="680" />
        </clipPath>
      </defs>

      {/* ── Outer hex frame ── */}
      <polygon
        fill="none"
        stroke={accent}
        strokeWidth="2.5"
        points="340,42 588,183 588,497 340,638 92,497 92,183"
      />

      {/* ── Mid hex ring ── */}
      <polygon
        fill="none"
        stroke={ring}
        strokeWidth="1.2"
        points="340,68 564,199 564,471 340,612 116,471 116,199"
      />

      {/* ── Inner hex ring ── */}
      <polygon
        fill="none"
        stroke={accent}
        strokeWidth="0.7"
        opacity="0.5"
        points="340,96 540,216 540,444 340,584 140,444 140,216"
      />

      {/* ── Vertex ticks ── */}
      <g stroke={accent} strokeWidth="2" strokeLinecap="round" opacity="0.9">
        <line x1="340" y1="42"  x2="340" y2="62"  />
        <line x1="588" y1="183" x2="572" y2="192" />
        <line x1="588" y1="497" x2="572" y2="488" />
        <line x1="340" y1="638" x2="340" y2="618" />
        <line x1="92"  y1="497" x2="108" y2="488" />
        <line x1="92"  y1="183" x2="108" y2="192" />
      </g>

      {/* ── Scan lines ── */}
      <g stroke={ring} strokeWidth="0.4" opacity="0.28">
        <line x1="152" y1="255" x2="528" y2="255" />
        <line x1="128" y1="285" x2="552" y2="285" />
        <line x1="112" y1="340" x2="568" y2="340" />
        <line x1="128" y1="395" x2="552" y2="395" />
        <line x1="152" y1="425" x2="528" y2="425" />
      </g>

      {/* ── Corner brackets ── */}
      <g fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round">
        <polyline points="230,200 210,200 210,220" />
        <polyline points="450,200 470,200 470,220" />
        <polyline points="230,480 210,480 210,460" />
        <polyline points="450,480 470,480 470,460" />
      </g>

      {/* ── Diamond ornaments ── */}
      <polygon fill={accent} opacity="0.9" points="340,108 347,115 340,122 333,115" />
      <polygon fill={accent} opacity="0.9" points="340,558 347,565 340,572 333,565" />
      <polygon fill={accent} opacity="0.9" points="108,340 115,333 122,340 115,347" />
      <polygon fill={accent} opacity="0.9" points="558,340 565,333 572,340 565,347" />

      {/* ── Flanking accent bars ── */}
      <rect fill={accent} x="148" y="334" width="38" height="2"   opacity="0.7" />
      <rect fill={accent} x="148" y="340" width="22" height="1"   opacity="0.4" />
      <rect fill={accent} x="494" y="334" width="38" height="2"   opacity="0.7" />
      <rect fill={accent} x="510" y="340" width="22" height="1"   opacity="0.4" />

      {/* ── W — accent color, left half ── */}
      <text
        fontFamily="'Orbitron', monospace"
        fontWeight="900"
        fontSize="190"
        fill={accent}
        x="340"
        y="390"
        textAnchor="middle"
        clipPath={`url(#${wclipId})`}
      >
        WM
      </text>

      {/* ── M — secondary color, right half ── */}
      <text
        fontFamily="'Orbitron', monospace"
        fontWeight="900"
        fontSize="190"
        fill={secondary}
        x="340"
        y="390"
        textAnchor="middle"
        clipPath={`url(#${mclipId})`}
      >
        WM
      </text>

      {/* ── Center seam ── */}
      <line
        x1="340" y1="210"
        x2="340" y2="410"
        stroke={accent}
        strokeWidth="0.8"
        opacity="0.45"
      />

      {/* ── Bottom accent strip ── */}
      <rect fill={accent} x="236" y="438" width="208" height="1.5" opacity="0.7" />
      <rect fill={ring}   x="256" y="443" width="168" height="1"   opacity="0.5" />

      {/* ── Name label ── */}
      <text
        fontFamily="'Orbitron', monospace"
        fontSize="20"
        fill={accent}
        opacity="0.75"
        x="340"
        y="466"
        textAnchor="middle"
        letterSpacing="5"
      >
        MILCINOVIC
      </text>
    </svg>
  );
}
