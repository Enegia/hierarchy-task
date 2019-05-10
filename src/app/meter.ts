export interface Meter {
  id: number;
  facilityId: number;
  name: string;
  subMeters?: Meter[];
}
