import { exposeApi } from '../main/preload'

console.log(">>> PRELOAD STARTED");

exposeApi()

// ✅ Dispatch a custom event when preload is ready
window.addEventListener('DOMContentLoaded', () => {
  const event = new CustomEvent('preload-ready')
  window.dispatchEvent(event)
})

console.log(">>> exposeApi() called");
