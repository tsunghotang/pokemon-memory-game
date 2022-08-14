let min = 0;
let sec = 0;

const startTimer = () => {
  let leadingZero = '';
  leadingZero = (sec < 10) ? '0' : '';
  document.getElementById('ms').innerHTML = leadingZero + sec;
  sec++;

  if (sec >= 60) {
    sec = 0;
    min++;
    leadingZero = (min < 10) ? '0' : '';
    document.getElementById('mm').innerHTML = leadingZero + min;
  }
};

export { startTimer };
