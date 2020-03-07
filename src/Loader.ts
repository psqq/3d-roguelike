import Loadable from "./Loadable";
import Subject from "./Subject";
import Observer from "./Observer";

interface LoaderStatus {
  total: number;
  loaded: number;
}

export default class Loader implements Subject<LoaderStatus> {
  private resources: Loadable[];
  private progress: number;
  private observers: Observer<LoaderStatus>[];
  constructor() {
    this.resources = [];
    this.observers = [];
    this.progress = 0;
  }
  add(resource: Loadable) {
    this.resources.push(resource);
  }
  async load() {
    let promises = [];
    for (let resource of this.resources) {
      promises.push(
        resource.load().then(result => {
          this.progress++;
          this.notifyObservers();
          return result;
        })
      );
    }
    const result = await Promise.all(promises);
    this.resources = [];
    this.progress = 0;
    return result;
  }
  registerObserver(observer: Observer<LoaderStatus>): void {
    this.observers.push(observer);
  }
  removeObserver(observer: Observer<LoaderStatus>): void {
    this.observers = this.observers.filter(x => x != observer);
  }
  notifyObservers(): void {
    for (let observer of this.observers) {
      observer.update({
        total: this.resources.length,
        loaded: this.progress,
      });
    }
  }
}