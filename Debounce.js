// 1. Debounce rapid events
function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

// 2. Web Workers for CPU-intensive tasks
const worker = new Worker('task.js');
worker.postMessage(data);
worker.onmessage = (e) => console.log(e.data);

// 3. Virtualize long lists (react-window, etc.)
