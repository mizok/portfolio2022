import {
  trigger,
  state,
  style,
  animate,
  transition,
  AnimationTriggerMetadata
} from '@angular/animations';

export const animateScaleFadeInOut: AnimationTriggerMetadata =
  trigger('animateScaleFadeInOut', [
    state('void, exit', style({ opacity: 0, transform: 'scale(0.8)' })),
    state('enter', style({ transform: 'none' })),
    transition('* => enter',
      animate('150ms cubic-bezier(0, 0, 0.2, 1)',
        style({ transform: 'none', opacity: 1 }))),
    transition('* => void, * => exit',
      animate('75ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        style({ opacity: 0 }))),

  ]);
