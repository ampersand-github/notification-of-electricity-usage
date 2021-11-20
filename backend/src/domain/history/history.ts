import { AggregateRoot } from '../__shared__/aggregate-root';
import { HistoryId } from './history-id';
import { IHistoryDomain } from './__interface__/history-domain-interface';


export class History extends AggregateRoot<IHistoryDomain, HistoryId> {
  public static create(props: IHistoryDomain): History {
    return new History(props, HistoryId.create());
  }

  public static restore(props: IHistoryDomain, id: HistoryId): History {
    return new History(props, id);
  }
  public get year(): IHistoryDomain['year'] {
    return this.props.year;
  }
  }
