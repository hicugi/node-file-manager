import stream from "stream";

export const listenStdIn = (callback) => {
  function transform(chunk, _, transformCb) {
    const data = chunk.toString().trim();

    callback(data);

    transformCb();
    this.push("\n");
  }

  const transformStream = new stream.Transform({ transform });

  process.stdin.pipe(transformStream).pipe(process.stdout);
};
