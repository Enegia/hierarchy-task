import * as helpers from './meter-hiearchy-helpers';
import { Meter } from '../meter';

describe('MeterHierarchyHelpers', () => {
  let hierarchy: Meter[];

  beforeEach(() => {
    hierarchy = helpers.getExampleHierarchy();
  });

  describe('#findMeterWithId', () => {
    it('should find meter from top level', () => {
      expect(helpers.findMeterWithId(hierarchy, 9)).toEqual({
        id: 9, facilityId: 101, name: 'm 8'
      });
    });

    it('should find meter recursively', () => {
      expect(helpers.findMeterWithId(hierarchy, 46)).toEqual({
        id: 46, name: 'meter46', facilityId: 88
      });
    });

    it('should return null when meter is not found', () => {
      expect(helpers.findMeterWithId(hierarchy, 987)).toBeNull();
    });
  });

  describe('#getHierarchyWithoutMeter', () => {
    it('should remove meter without submeters', () => {
      const expectedHierarchy: Meter[] = [
        {
          id: 5,
          facilityId: 4,
          name: 'mittari 5',
          subMeters: [
            { id: 12, name: 'Meter 12', facilityId: 4 },
            { id: 13, name: 'Meter 13', facilityId: 4 }
          ]
        },
        {
          id: 11,
          facilityId: 88,
          name: 'meter11',
          subMeters: [
            {
              id: 33,
              name: 'M33',
              facilityId: 88,
              subMeters: [
                { id: 45, name: 'meter45', facilityId: 88 },
                { id: 46, name: 'meter46', facilityId: 88 },
                { id: 48, name: 'meter48', facilityId: 88 }
              ]
            }
          ]
        },
        {
          id: 55,
          name: 'Mittari 55',
          facilityId: 400
        }
      ];

      expect(helpers.getHierarchyWithoutMeter(hierarchy, 9)).toEqual(expectedHierarchy);
    });

    it('should remove meter and its submeters', () => {
      const expectedHierarchy: Meter[] = [
        {
          id: 5,
          facilityId: 4,
          name: 'mittari 5',
          subMeters: [
            { id: 12, name: 'Meter 12', facilityId: 4 },
            { id: 13, name: 'Meter 13', facilityId: 4 }
          ]
        },
        {
          id: 9,
          facilityId: 101,
          name: 'm 8'
        },
        {
          id: 55,
          name: 'Mittari 55',
          facilityId: 400
        }
      ];

      expect(helpers.getHierarchyWithoutMeter(hierarchy, 11)).toEqual(expectedHierarchy);
    });

    it('should remove submeter only', () => {
      const expectedHierarchy: Meter[] = [
        {
          id: 5,
          facilityId: 4,
          name: 'mittari 5',
          subMeters: [
            { id: 13, name: 'Meter 13', facilityId: 4 }
          ]
        },
        {
          id: 9,
          facilityId: 101,
          name: 'm 8'
        },
        {
          id: 11,
          facilityId: 88,
          name: 'meter11',
          subMeters: [
            {
              id: 33,
              name: 'M33',
              facilityId: 88,
              subMeters: [
                { id: 45, name: 'meter45', facilityId: 88 },
                { id: 46, name: 'meter46', facilityId: 88 },
                { id: 48, name: 'meter48', facilityId: 88 }
              ]
            }
          ]
        },
        {
          id: 55,
          name: 'Mittari 55',
          facilityId: 400
        }
      ];

      expect(helpers.getHierarchyWithoutMeter(hierarchy, 12)).toEqual(expectedHierarchy);
    });
  });

  afterEach(() => {
    // Check that operations did not have side effects
    expect(hierarchy).toEqual(helpers.getExampleHierarchy());
  });
});
