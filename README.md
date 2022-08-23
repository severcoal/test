# Rust WASM-Bindgen Sandbox

There is no official sanbox so I hacked this one up with reasonable defaults that should give you enough to get started building rust wasm binaries in no time at all.

## Getting Started

The app is split into two domains, Rust and JavaScript, in the _javascript_ folder you will see the _node_ folder which is serving this readme.
You can also see the _app_ folder which contains the entry point for your application _main.ts_ you can consume the wasm binary in here. tsconfig "paths" will map the compiled wasm binary in `target/es2017/app` to the application sources. Application typescript will compile back to `target/es2017/app`.

_Folder structure_

```
src
|–– javascript
|–––– app
|–––––– main.ts
|–– node
|–––– index.js
|–– rust
|–––– lib.rs
```

**A loose set of instructions**

1. open `src/javascript/node` and follow the red crab 🦀
2. build something

## Questions and Answers

### Its boken?

```sh
yarn install
```

Codesandbox containers dont seem to persist system wide dependencies after server restarts so the workaround is to use the `./bin/repair-rust.sh` script, this _should_ run on `npm install` lifecycle hook, however if it doesnt you can run `yarn run install`. You should then be able to open any 'Terminal tab' and run either `cargo` or `rustup`. Sorry that this kind of sucks, but its the best I could do at the moment.

### Why Typescript?

wasm-bindgen generates Typescript .d.ts types for consuming your wasm binary safely, so it makes sense to use typescript throughout and have a very strictly authored application.

### Where are the compiled WASM goodness?

...indeed, I think this is a beta? Codesandbox's tree doesnt seem to update, but you can `ls` from the terminal `/sandbox/target/es2018`

### Its pretty slow to build

Rust builds always are the first time.

🧡 Made with love for our comunity. Adam
