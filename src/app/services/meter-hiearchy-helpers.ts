import { Meter } from '../meter';

/**
 * Find meter with given id from hierarchy
 *
 * @returns meter object or null if meter with given id is not found
 */
export function findMeterWithId(hierarchy: Meter[], id: number): Meter | null {
  throw Error('Implement this');
}

/**
 * Get new hierarchy from which meter with given id (and possible submeters) is deleted
 *
 * @returns hierarchy without meter with given id
 */
export function getHierarchyWithoutMeter(hierarchy: Meter[], id: number): Meter[] {
  throw Error('Implement this');
}

export function getExampleHierarchy(): Meter[] {
  return [
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
}
