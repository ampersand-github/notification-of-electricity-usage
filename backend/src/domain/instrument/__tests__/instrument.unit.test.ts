import { Instrument } from '../Instrument';
import { InstrumentId } from '../Instrument-id';
import { IInstrumentDomain } from '../__interface__/Instrument-domain-interface';

const instrumentProps: IInstrumentDomain = {
  name: '名前',
  number:1
};

describe('Instrument', () => {
  it('createできる', () => {
    expect(Instrument.create(instrumentProps)).toEqual(expect.any(Instrument));
  });

  it('restoreできる', () => {
    const instrumentId: InstrumentId = InstrumentId.restore('test-id');
    expect(Instrument.restore(instrumentProps, instrumentId)).toEqual(
      expect.any(Instrument),
    );
    expect(
      Instrument.restore(instrumentProps, instrumentId).id.equals(instrumentId),
    ).toBe(true);
  });
});
