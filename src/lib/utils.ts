import { Howl } from 'howler';

export const effectSound = (src: any, volume = 1) => {
    let sound: any;
    const soundInject = (src: any) => {
        sound = new Howl({ src });
        sound.volume(volume);
    }
    soundInject(src);
    return sound;
}

