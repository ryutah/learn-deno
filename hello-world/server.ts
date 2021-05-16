// deno run --allow-net https://deno.land/std@0.96.0/examples/echo_server.ts ./hello_world/server.ts
// nc localhost 8080
// hello

const hostname = "0.0.0.0";
const port = 8080;
const listener = Deno.listen({ hostname: hostname, port: port });

console.log(`Listening on ${hostname}:${port}`);

for await (const conn of listener) {
  Deno.copy(conn, conn);
}
