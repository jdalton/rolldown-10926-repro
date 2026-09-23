# Rolldown 1.2.9 darwin-x64 reproduction

This is a minimal programmatic build for rolldown/rolldown#10926.

The test uses `rolldown@1.2.9`, Node.js 26.5.0, and the JavaScript API. The failure is a deterministic SIGSEGV on Intel macOS (`darwin-x64`).

Run `npm install` and `npm run repro` on an Intel macOS runner.
