export default function hashCode(str) {
  str = (str || '').toString();

  let hash = 0;
  if (str.length === 0) return hash;
  for (let i = 0; i < str.length; i++) {
    const chr = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0;
  }

  return `${hash < 0 ? 'n' : 'p'}${Math.abs(hash)}`
}
