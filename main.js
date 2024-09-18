import './style.css'
import * as Tone from "tone"
import getNoteFromKey from './noteUtils';

//const synth = new Tone.Synth().toDestination();
const sampler = new Tone.Sampler({
    urls: {
        C4: "C4.mp3",
        "C#4": "Cs4.mp3",
        D4: "D4.mp3",
        "D#4": "Ds4.mp3",
        D4: "D4.mp3",
        "C#4": "Cs4.mp3",
        E4: "E4.mp3",
        F4: "F4.mp3",
        "F#4": "Fs4.mp3",
        G4: "G4.mp3",
        "G#4": "Gs4.mp3",
        A4: "A4.mp3",
        "A#4": "As4.mp3",
        B4: "A4.mp3",
        C5: "C5.mp3"
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
}).toDestination();

let keys = document.querySelectorAll('.key')
for (let key of keys) {
    let noteToPlay = key.getAttribute('data-note')
    key.addEventListener('mousedown', () => playNote(noteToPlay))
    key.addEventListener('mouseup', stopNote)
    key.addEventListener('mouseleave', stopNote)
}

document.addEventListener('keypress', ctrlKeyboard)
document.addEventListener('keyup', stopNote)

function ctrlKeyboard(event) {
    let keyName = event.key
    //let note = keyMap[keyName]
    let note = getNoteFromKey(keyName)
    playNote(note)
}

function playNote(note) {
    synth.triggerAttackRelease(note);
}

function stopNote() {
    synth.triggerRelease();
}