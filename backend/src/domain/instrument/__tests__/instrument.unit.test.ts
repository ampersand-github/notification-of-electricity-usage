import { Instrument } from '../Instrument';
import { InstrumentId } from '../Instrument-id';
import { IInstrumentDomain } from '../__interface__/Instrument-domain-interface';

const InstrumentProps: IInstrumentDomain = {
  name: '名前',
  address: "東京都・・・"
};

describe('Instrument', () => {
  it('createできる', () => {
    expect(Instrument.create(InstrumentProps)).toEqual(expect.any(Instrument));
  });

  it('restoreできる', () => {
    const instrumentId: InstrumentId = InstrumentId.restore('test-id');
    expect(Instrument.restore(InstrumentProps, instrumentId)).toEqual(
      expect.any(Instrument),
    );
    expect(
      Instrument.restore(InstrumentProps, instrumentId).id.equals(instrumentId),
    ).toBe(true);
  });
});
