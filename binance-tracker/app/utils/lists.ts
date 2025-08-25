export function getNextLetter(letter: string) {
  if (letter === 'z') {
    return 'a';
  }
  else if (letter === 'Z') {
    return 'A';
  }

  const charCode = letter.charCodeAt(0);
  const nextCharCode = charCode + 1;

  return String.fromCharCode(nextCharCode);
}
