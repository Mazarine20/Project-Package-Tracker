export class Package {
  //active_delivery_id: string;
  description: string;
  weight: number;
  width: number;
  height: number;
  depth: number;
  from_name: string;
  from_address: string;
  from_location: {
    type: string;
    coordinates: number[];
  };
  to_name: string;
  to_address: string;
  to_location: {
    type: string;
    coordinates: number[];
  };

  constructor() {
    //this.active_delivery_id = "";
    this.description = "";
    this.weight = 0;
    this.width = 0;
    this.height = 0;
    this.depth = 0;
    this.from_name = "";
    this.from_address = "";
    this.from_location = {
      type: "",
      coordinates: []
    };
    this.to_name = "";
    this.to_address = "";
    this.to_location = {
      type: "",
      coordinates: []
    };
  }
}
