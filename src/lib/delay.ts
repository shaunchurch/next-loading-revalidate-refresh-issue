export async function delay(interval: number = 2000) {
  return new Promise((resolve) => setTimeout(resolve, interval));
}
