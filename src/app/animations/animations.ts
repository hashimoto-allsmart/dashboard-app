import { trigger, transition, style, animate } from '@angular/animations';

export function verticalSlide(name: string, speed: string) {
  return [
    trigger(name, [
      transition(':enter', [
        style({ height: '0', opacity: 0, overflow: 'hidden' }),
        animate(speed, style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ height: '*', opacity: '1', overflow: 'hidden' }),
        animate(speed, style({ height: '0' }))
      ])
    ])
  ];
}

export function horizontalSlide(name: string, speed: string) {
  return [
    trigger(name, [
      transition(':enter', [
        style({ width: '0', opacity: 0, overflow: 'hidden' }),
        animate(speed, style({ width: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ width: '*', opacity: '1', overflow: 'hidden' }),
        animate(speed, style({ width: '0' }))
      ])
    ])
  ];
}
