import { delay } from "@/lib/delay";

export async function SlowComponent() {
  await delay(1000);
  return <div>SlowComponent things go here</div>;
}
