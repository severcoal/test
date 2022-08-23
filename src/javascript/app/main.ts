// Note that a dynamic `import` statement here is required due to
// webpack/webpack#6615, but in theory `import { greet } from './pkg';`
// will work here one day as well!
(async () => {
  const rust = await import("../../../target/es2017/app/sandbox.js");
  console.log("Hello");
  try {
    rust.greet("World!");
  } catch (err) {
    console.log(err);
  }
})();
