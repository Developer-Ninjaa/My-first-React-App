class WorkerPool {
  constructor(size = navigator.hardwareConcurrency) {
    this.workers = Array(size).fill().map(() => new Worker('task.js'));
    this.queue = [];
  }

  execute(data) {
    return new Promise((resolve) => {
      const worker = this.workers.pop() || this.queue.push(resolve);
      if (worker) this.runTask(worker, data, resolve);
    });
  }

  runTask(worker, data, resolve) {
    worker.onmessage = (e) => {
      resolve(e.data);
      this.workers.push(worker);
      if (this.queue.length) {
        this.runTask(worker, this.queue.shift());
      }
    };
    worker.postMessage(data);
  }
}
