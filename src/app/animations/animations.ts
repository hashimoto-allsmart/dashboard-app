import { trigger, transition, style, animate, state } from '@angular/animations';

export function verticalSlide(name: string, speed: string, show = ':enter', hide = ':leave') {
  return trigger(name, [
    transition(show, [
      style({ height: '0', opacity: 0, overflow: 'hidden' }),
      animate(speed, style({ height: '*', opacity: 1 }))
    ]),
    transition(hide, [
      style({ height: '*', opacity: '1', overflow: 'hidden' }),
      animate(speed, style({ height: '0', opacity: 0 }))
    ])
  ]);
}

export function horizontalSlide(name: string, speed: string) {
  return trigger(name, [
    transition(':enter', [
      style({ width: '0', opacity: 0, overflow: 'hidden' }),
      animate(speed, style({ width: '*', opacity: 1 }))
    ]),
    transition(':leave', [
      style({ width: '*', opacity: '1', overflow: 'hidden' }),
      animate(speed, style({ width: '0' }))
    ])
  ]);
}

export function openClose(name = 'openClose', speed = '0.1s') {
  return trigger(name, [
    state('open', style({
      height: '!',
      opacity: 1,
    })),
    state('closed', style({
      height: '0',
      opacity: 0,
    })),
    transition('open => closed', [
      animate(speed)
    ]),
    transition('closed => open', [
      animate(speed)
    ]),
  ]);
}
