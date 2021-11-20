import { AggregateRoot } from "../__shared__/aggregate-root";
import { HistoryId } from "./history-id";
import { IHistoryDomain } from "./__interface__/history-domain-interface";

export class History extends AggregateRoot<IHistoryDomain, HistoryId> {
  public static create(props: IHistoryDomain): History {
    return new History(props, HistoryId.create());
  }

  public static restore(props: IHistoryDomain, id: HistoryId): History {
    return new History(props, id);
  }

  public get year(): IHistoryDomain["year"] {
    return this.props.year;
  }

  public get month(): IHistoryDomain["month"] {
    return this.props.month;
  }

  public get price(): IHistoryDomain["price"] {
    return this.props.price;
  }

  public get meter(): IHistoryDomain["meter"] {
    return this.props.meter;
  }

  public get readingDate(): IHistoryDomain["readingDate"] {
    return this.props.readingDate;
  }

  public get start(): IHistoryDomain["start"] {
    return this.props.start;
  }

  public get end(): IHistoryDomain["end"] {
    return this.props.end;
  }
}
