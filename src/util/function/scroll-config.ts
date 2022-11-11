import { isMobile } from './device'

export const scrollOptions = {
    damping: isMobile ? 0.05 : 0.1,
    thumbMinSize: 20,
    renderByPixels: !('ontouchstart' in document),
    alwaysShowTracks: true,
    continuousScrolling: true,
};


export const overscrollOptions = {
    enable: false,
    effect: 'glow',
    damping: 0.2,
    maxOverscroll: 50,
    glowColor: '#222a2d',
};