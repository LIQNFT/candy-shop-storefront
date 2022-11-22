export function shortenAddress(address = '', chars = 4): string {
  if (chars >= address.length) return address;
  return `${address.slice(0, chars)}...${address.slice(-chars)}`;
}
