const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isEmailValid(v) {
    return v && EMAIL_REGEX.test(v);
  }
  
  export function getFormattedTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds % 60).padStart(2, "0");
  
    return `${formattedMinutes}:${formattedSeconds}`;
  }
  
  export function isEmpty(v) {
      return !v
  }