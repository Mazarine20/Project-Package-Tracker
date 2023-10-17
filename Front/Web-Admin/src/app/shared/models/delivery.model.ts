export class Delivery {
  package_id: string;
  // pickup_time: Date | null;
  // start_time: Date | null;
  // end_time: Date | null;
  location: {
    type: string;
    coordinates: number[];
  };
  // status: 'open' | 'picked-up' | 'in-transit' | 'delivered' | 'failed';

  constructor() {
    this.package_id = '';
    // this.pickup_time = null;
    // this.start_time = null;
    // this.end_time = null;
    this.location = {
      type: '',
      coordinates: [],
    };
    // this.status = 'open';
  }
}
