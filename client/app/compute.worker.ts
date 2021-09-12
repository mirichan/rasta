import { ComputeInstruction, ComputeMessage, SafeWorker } from "./custom-worker";
import { ReadyMessage } from "./worker-pool";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ctx: SafeWorker<ComputeMessage | ReadyMessage> = self as any;

import("../../compute/pkg").then((wasm) => {
    wasm.init();
    ctx.addEventListener("message", (ev: MessageEvent<ComputeInstruction>) => {
        if (ev.data.type === "test") {
            console.log("Generating image data for...", ev.data);
            const imageData = new ImageData(
                new Uint8ClampedArray(
                    wasm.get_buffer(ev.data.width, ev.data.height, ev.data.row0, ev.data.rows).buffer
                ),
                ev.data.width,
                ev.data.rows
            );
            ctx.postMessage({
                type: "image",
                width: ev.data.width,
                height: ev.data.height,
                row0: ev.data.row0,
                rows: ev.data.rows,
                data: imageData,
            });
        }
    });
    ctx.postMessage({
        type: "ready",
    });
});

export default null as { new (): SafeWorker<ComputeInstruction> };

// TODO: better events, look into shared memory:
// https://blog.scottlogic.com/2019/07/15/multithreaded-webassembly.html
