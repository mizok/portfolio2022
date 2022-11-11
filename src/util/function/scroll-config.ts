import { isMobile } from './device'

export const scrollOptions = {
    damping: isMobile ? 0.05 : 0.1,
    thumbMinSize: 20,
    renderByPixels: !('ontouchstart' in document),
    alwaysShowTracks: false,
    continuousScrolling: true,
};

