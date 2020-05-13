import React from 'react';

export default function Photo() {
  return (
    <svg
      version="1.1"
      id="svg"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="50 0 250 400"
      width="150px"
      height="150px"
      xmlSpace="preserve"
    >
      <path
        fill="#f0f3f5"
        className="svg-no"
        d="M150 80 H200 L250 100 L270 150 L240 300 L200 320 H150 L110 300 L80 150 L100 100 L150 80 Z"
        style={{ stroke: '#000', strokeWidth: 5 }}
      />
      <path
        className="hear"
        fill="#000"
        d="M90 140 L140 160 L140 130 L190 160 L185 135 L240 155 L220 120 L270 150 L250 100 L200 80 L150 80 L100 100 L90 140Z"
        style={{ stroke: '#000', strokeWidth: 5 }}
      />
      <path
        fill="#f0f3f5"
        className="svg-no"
        d="M85 190 H66 V240 L100 250 Z"
        style={{ stroke: '#000', strokeWidth: 5 }}
      />
      <path
        fill="#f0f3f5"
        className="svg-no"
        d="M265 190 H284 V240 L250 250 Z"
        style={{ stroke: '#000', strokeWidth: 5 }}
      />
      <path className="svg-no" fill="#fff" d="M115 182 H160 V220 H115Z" style={{ stroke: '#000', strokeWidth: 5 }} />
      <path className="svg-no" fill="#fff" d="M190 182 H235 V220 H190Z" style={{ stroke: '#000', strokeWidth: 5 }} />
      <path d="M160 200 H190" style={{ stroke: '#000', strokeWidth: 5 }} />
      <path d="M115 200 L85 190" style={{ stroke: '#000', strokeWidth: 5 }} />
      <path d="M235 200 L265 190" style={{ stroke: '#000', strokeWidth: 5 }} />
      <path className="svg-no left-eyebrow" d="M120 170 H150 Z" style={{ stroke: '#000', strokeWidth: 5 }} />
      <path className="right-eyebrow svg-no" d="M200 170 H230 Z" style={{ stroke: '#000', strokeWidth: 5 }} />
      <circle className="left-eye" cx="135" cy="200" r="10" fill="#000" />
      <circle className="right-eye" cx="215" cy="200" r="10" fill="#000" />
      <path d="M160 250 H190" style={{ stroke: '#000', strokeWidth: 5 }} />
      <path d="M150 290 L200 285 Z" style={{ stroke: '#000', strokeWidth: 5 }} />
      <path d="M135 330 L50 350" style={{ stroke: '#000', strokeWidth: 5 }} />
      <path d="M215 330 L300 350" style={{ stroke: '#000', strokeWidth: 5 }} />
      <path
        fill="#f0f3f5"
        className="svg-no"
        d="M120 335 C 200 390 200 390 230 335"
        style={{ stroke: '#000', strokeWidth: 5 }}
      />
      <path className="svg-no" d="M130 310 L140 350" style={{ stroke: '#000', strokeWidth: 5 }} />
      <path className="svg-no" d="M220 310 L210 350" style={{ stroke: '#000', strokeWidth: 5 }} />
    </svg>
  );
}
