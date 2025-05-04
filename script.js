
const textEl = document.getElementById("text");
const voiceSelect = document.getElementById("voiceSelect");
const rate = document.getElementById("rate");
const pitch = document.getElementById("pitch");

let voices = [];

function populateVoices() {
    voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = '';
    voices.forEach((voice, i) => {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = `${voice.name} (${voice.lang})`;
        voiceSelect.appendChild(option);
    });
}

speechSynthesis.onvoiceschanged = populateVoices;

function speak() {
    const utterance = new SpeechSynthesisUtterance(textEl.value);
    const selectedVoice = voices[voiceSelect.value];
    utterance.voice = selectedVoice;
    utterance.rate = rate.value;
    utterance.pitch = pitch.value;
    speechSynthesis.speak(utterance);
}

function downloadAudio() {
    alert("للأسف تحميل الصوت مباشرة غير مدعوم في SpeechSynthesis API، يمكنك تسجيل الشاشة أو الصوت.");
}
