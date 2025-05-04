
function speak() {
  const text = document.getElementById("text").value;
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  } else {
    alert("المتصفح لا يدعم تحويل النص إلى صوت.");
  }
}
