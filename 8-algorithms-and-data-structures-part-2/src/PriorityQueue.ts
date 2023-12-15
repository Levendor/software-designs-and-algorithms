interface PriorityQueueI<T> {
  enqueue(value: T, priority: number): void;
  dequeue(): T | undefined;
  size(): number;
}

export class PriorityQueue<T> implements PriorityQueueI<T> {
  constructor(private queue: { value: T; priority: number }[] = []) {
    this.buildMinHeap();
  }

  enqueue(value: T, priority: number): void {
    this.queue.push({ value, priority });
    this.buildMinHeap();
  }

  dequeue(): T | undefined {
    const task = this.queue.shift();
    this.buildMinHeap();
    return task?.value;
  }

  size(): number {
    return this.queue.length;
  }

  private getParentIndex = (index: number): number => Math.floor(index / 2);

  private getLeftChildIndex = (index: number): number => 2 * index;

  private getRightChildIndex = (index: number): number => 2 * index + 1;

  private swapElements = (minIndex: number, maxIndex: number) =>
    ([this.queue[minIndex], this.queue[maxIndex]] = [this.queue[maxIndex], this.queue[minIndex]]);

  private minHeapify = (index: number): void => {
    const leftIndex = this.getLeftChildIndex(index);
    const rightIndex = this.getRightChildIndex(index);
    let leastIndex: number;

    if (
      this.queue[rightIndex] &&
      rightIndex <= this.size() &&
      this.queue[rightIndex].priority < this.queue[index].priority
    ) {
      leastIndex = rightIndex;
    } else {
      leastIndex = index;
    }

    if (
      this.queue[leftIndex] &&
      leftIndex <= this.size() &&
      this.queue[leftIndex].priority < this.queue[leastIndex].priority
    ) {
      leastIndex = leftIndex;
    }

    if (leastIndex !== index) {
      this.swapElements(leastIndex, index);
      this.minHeapify(leastIndex);
    }
  };

  private buildMinHeap = (): void => {
    for (let i = Math.floor(this.queue.length / 2); i >= 0; i--) {
      this.minHeapify(i);
    }
  };
}
