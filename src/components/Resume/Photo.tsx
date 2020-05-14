/* eslint no-param-reassign: 0 */
import React, { useMemo, useEffect, useCallback } from 'react';
import { Subject, timer } from 'rxjs';
import { map, filter, delay } from 'rxjs/operators';

interface Data {
  leftEyebrow: HTMLElement | null;
  rightEyebrow: HTMLElement | null;
  type: string;
}

function scale(type: string, idx: number) {
  const leftEye: HTMLElement | null = document.querySelector('.left-eye');
  const rightEye: HTMLElement | null = document.querySelector('.right-eye');
  if (leftEye && rightEye) {
    switch (type) {
      case 'big':
        leftEye.style.transform = 'scale(1)';
        rightEye.style.transform = 'scale(1)';
        break;
      case 'small':
        leftEye.style.transform = 'scale(0.6)';
        rightEye.style.transform = 'scale(0.6)';
        break;
      default:
        break;
    }
  }
  return idx;
}

export default function Photo() {
  const subject = useMemo(() => new Subject<string>(), []);
  useEffect(() => {
    const subscriptionInt = timer(1000, 4000)
      .pipe(
        map((idx) => scale('small', idx)),
        delay(300),
        map((idx) => scale('big', idx)),
        delay(300),
        map((idx) => scale('small', idx)),
        delay(300),
        map((idx) => scale('big', idx)),
        delay(300),
      )
      .subscribe();
    const subscriptionSbj = subject
      .pipe(
        map(
          (type) =>
            ({
              leftEyebrow: document.querySelector('.left-eyebrow'),
              rightEyebrow: document.querySelector('.right-eyebrow'),
              type,
            } as Data),
        ),
        filter(({ leftEyebrow, rightEyebrow }: Data) => leftEyebrow !== null && rightEyebrow !== null),
      )
      .subscribe(({ type, leftEyebrow, rightEyebrow }: Data) => {
        if (leftEyebrow !== null && rightEyebrow !== null) {
          if (type === 'enter') {
            leftEyebrow.style.transform = 'rotate(15deg)';
            rightEyebrow.style.transform = 'rotate(-15deg)';
          } else {
            leftEyebrow.style.transform = '';
            rightEyebrow.style.transform = '';
          }
        }
      });
    return () => {
      subscriptionSbj.unsubscribe();
      subscriptionInt.unsubscribe();
    };
  }, []);
  const mouseHandle = useCallback((type) => {
    switch (type) {
      case 'enter':
        subject.next(type);
        break;
      case 'leave':
        subject.next(type);
        break;
      default:
        break;
    }
  }, []);
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
      onMouseEnter={() => mouseHandle('enter')}
      onMouseLeave={() => mouseHandle('leave')}
    >
      <path
        className="line"
        fill="#f0f3f5"
        d="M150 80 H200 L250 100 L270 150 L240 300 L200 320 H150 L110 300 L80 150 L100 100 L150 80 Z"
      />
      <path
        className="line"
        fill="#000"
        d={`M90 140 L140 160 L140 130 L190 160 L185 135 L240 155
          L220 120 L270 150 L250 100 L200 80 L150 80 L100 100 L90 140Z`}
      />
      <path className="line" fill="#f0f3f5" d="M85 190 H66 L73 240 L100 250 Z" />
      <path className="line" fill="#f0f3f5" d="M265 190 H284 L277 240 L250 250 Z" />
      <path className="line" fill="#fff" d="M115 182 H160 V220 H115Z" />
      <path className="line" fill="#fff" d="M190 182 H235 V220 H190Z" />
      <path className="line" d="M160 200 H190" />
      <path className="line" d="M115 200 L85 190" />
      <path className="line" d="M235 200 L265 190" />
      <path className="left-eyebrow line" d="M120 170 H150 Z" style={{ transformOrigin: '150px 170px' }} />
      <path className="right-eyebrow line" d="M200 170 H230 Z" style={{ transformOrigin: '200px 170px' }} />
      <circle className="left-eye" cx="135" cy="200" r="10" fill="#000" style={{ transformOrigin: '135px 200px' }} />
      <circle className="right-eye" cx="215" cy="200" r="10" fill="#000" style={{ transformOrigin: '215px 200px' }} />
      <path className="line" d="M160 250 H190" />
      <path className="line" d="M150 290 L200 285 Z" />
      <path className="line" d="M135 330 L50 350" />
      <path className="line" d="M215 330 L300 350" />
      <path className="line" fill="#f0f3f5" d="M120 335 C 200 390 200 390 230 335" />
      <path className="line" d="M130 310 L140 350" />
      <path className="line" d="M220 310 L210 350" />
    </svg>
  );
}
