import { IHistoryDomain } from "../__interface__/history-domain-interface";
import {History} from "../history";
import { HistoryId } from "../history-id";

const historyProps: IHistoryDomain = {
  year:2020
};

describe('History', () => {
  it('createできる', () => {
    expect(History.create(historyProps)).toEqual(expect.any(History));
  });

  it('restoreできる', () => {
    const historyId: HistoryId = HistoryId.restore('test-id');
    expect(History.restore(historyProps, historyId)).toEqual(
      expect.any(History),
    );
    expect(
      History.restore(historyProps, historyId).id.equals(historyId),
    ).toBe(true);
  });
});
