import Observer from "./Observer";

export default interface Subject<T> {
  registerObserver(observer: Observer<T>): void;
  removeObserver(observer: Observer<T>): void;
  notifyObservers(): void;
}