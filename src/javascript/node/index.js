const { createServer } = require("http");
const { promises } = require("fs");
const { Converter } = require("showdown");
const { resolve, join } = require("path");
const { readFile } = promises;

// 🦀 delete me from here
const converter = new Converter();
// 🦀 delete me to here

createServer(async (req, res) => {
  switch (req.url) {
    case "/":
      // 🦀 uncomment me
      const html = await readFile(resolve(__dirname, "index.html"), "utf8");

      // 🦀 delete me from here
      // const html = `<html><head></head><body><p><meta charset="utf8"> </p><p align="center"><img src="https://www.rust-lang.org/static/images/rust-logo-blk.svg"></p><h1 id="rustwasmbindgensandbox">Rust WASM-Bindgen Sandbox</h1> <p>There is no official sanbox so I hacked this one up with reasonable defaults that should give you enough to get started building rust wasm binaries in no time at all.</p><h2 id="gettingstarted">Getting Started</h2> <p>The app is split into two domains, Rust and JavaScript, in the <em>javascript</em> folder you will see the <em>node</em> folder which is serving this readme. You can also see the <em>app</em> folder which contains the entry point for your application <em>main.ts</em> you can consume the wasm binary in here. tsconfig "paths" will map the compiled wasm binary in <code>target/es2017/app</code> to the application sources. Application typescript will compile back to <code>target/es2017/app</code>.</p><p><em>Folder structure</em></p><pre><code>src
      // |–– javascript
      // |–––– app
      // |–––––– main.ts
      // |–– node
      // |–––– index.js
      // |–– rust
      // |–––– lib.rs
      // </code></pre> <p><strong>A loose set of instructions</strong></p><ol> <li>open <code>src/javascript/node</code> and follow the prompt comments 🦀</li><li>build anything</li></ol> <h2 id="questionsandanswers">Questions and Answers</h2> <h3 id="itsboken">Its boken?</h3> <pre><code class="sh language-sh">yarn install
      // </code></pre> <p>Codesandbox containers dont seem to persist system wide dependencies after server restarts so the workaround is to use the <code>./bin/repair-rust.sh</code> script, this <em>should</em> run on <code>npm install</code> lifecycle hook, however if it doesnt you can run <code>yarn run install</code>. You should then be able to open any 'Terminal tab' and run either <code>cargo</code> or <code>rustup</code>. Sorry that this kind of sucks, but its the best I could do at the moment.</p><h3 id="whytypescript">Why Typescript?</h3> <p>wasm-bindgen generates Typescript .d.ts types for consuming your wasm binary safely, so it makes sense to use typescript throughout and have a very strictly authored application.</p><h3 id="wherearethecompiledwasmgoodness">Where are the compiled WASM goodness?</h3> <p>…indeed, I think this is a beta? Codesandbox's tree doesnt seem to update, but you can <code>ls</code> from the terminal <code>/sandbox/target/es2018</code></p><h3 id="itsprettyslowtobuild">Its pretty slow to build</h3> <p>Rust builds always are the first time.</p><p>🧡 Made with love for our comunity. Adam <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" integrity="sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ==" crossorigin="anonymous"><style>h1{text-decoration-color: #A62244; text-decoration-line: underline;}</style></p></body></html>`;
      // 🦀 delete me to here
      res.write(html); //write a response to the client
      res.end();
      break;
    default:
      if (req.url.endsWith(".js")) {
        res.setHeader("Content-Type", "text/javascript");
        const targetPath = join(resolve(__dirname, "../../../"), req.url);
        const contents = await readFile(targetPath, "utf8");
        res.end(contents);
      }
      if (req.url.endsWith("wasm")) {
        console.log(req.url);
      }
      // res.write(html); //write a response to the client
      res.end();
      break;
  }
}).listen(8080); //the server object listens on port 8080
