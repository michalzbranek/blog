/**
 * Postinstall patch: add ESM-compatible `exports` field to
 * react-transition-group so that @mui/material's .mjs files can
 * import 'react-transition-group/TransitionGroupContext' in Node ESM.
 *
 * react-transition-group v4 was published before the Node ESM `exports`
 * field was widely adopted. Without it, Node's ESM loader rejects the
 * directory-style import used in @mui/material/internal/Transition.mjs.
 */
import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkgPath = resolve(
  __dirname,
  "../node_modules/react-transition-group/package.json"
);

let pkg;
try {
  pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
} catch {
  // node_modules not installed yet, skip
  process.exit(0);
}

if (pkg.version !== '4.4.5') {
  console.warn(`postinstall: react-transition-group version ${pkg.version} — patch may not apply correctly, verify exports paths`);
}

if (!pkg.exports) {
  pkg.exports = {
    ".": {
      import: "./esm/index.js",
      require: "./cjs/index.js",
      default: "./cjs/index.js",
    },
    "./Transition": {
      import: "./esm/Transition.js",
      require: "./cjs/Transition.js",
      default: "./cjs/Transition.js",
    },
    "./TransitionGroup": {
      import: "./esm/TransitionGroup.js",
      require: "./cjs/TransitionGroup.js",
      default: "./cjs/TransitionGroup.js",
    },
    "./TransitionGroupContext": {
      import: "./esm/TransitionGroupContext.js",
      require: "./cjs/TransitionGroupContext.js",
      default: "./cjs/TransitionGroupContext.js",
    },
    "./CSSTransition": {
      import: "./esm/CSSTransition.js",
      require: "./cjs/CSSTransition.js",
      default: "./cjs/CSSTransition.js",
    },
    "./SwitchTransition": {
      import: "./esm/SwitchTransition.js",
      require: "./cjs/SwitchTransition.js",
      default: "./cjs/SwitchTransition.js",
    },
    "./ReplaceTransition": {
      import: "./esm/ReplaceTransition.js",
      require: "./cjs/ReplaceTransition.js",
      default: "./cjs/ReplaceTransition.js",
    },
  };

  writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n", "utf8");
  console.log("postinstall: patched react-transition-group exports field");
} else {
  console.log("postinstall: react-transition-group already has exports field");
}
