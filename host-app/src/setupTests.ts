// setupTests.ts
import { TextEncoder, TextDecoder } from "util";

// ให้ Jest เข้าใจ TextEncoder/TextDecoder
global.TextEncoder = TextEncoder as typeof global.TextEncoder;
global.TextDecoder = TextDecoder as typeof global.TextDecoder;

// ให้ Jest mock `Response`, `Request`, และ `fetch` (ผ่าน whatwg-fetch)
import "whatwg-fetch";

// Mock BroadcastChannel ให้ Jest ไม่พัง
class FakeBroadcastChannel {
  name: string;
  onmessage: ((this: BroadcastChannel, ev: MessageEvent) => any) | null = null;
  constructor(name: string) {
    this.name = name;
  }
  postMessage(message: any) {
    console.log("BroadcastChannel postMessage called with:", message);
  }
  close() {}
  addEventListener() {}
  removeEventListener() {}
}

global.BroadcastChannel = FakeBroadcastChannel as any;

// Optional: mock TransformStream (เฉพาะกรณี MSW ใช้)
import { TransformStream } from "web-streams-polyfill";
global.TransformStream = TransformStream;

