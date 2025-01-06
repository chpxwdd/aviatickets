interface Segment {
  arr: OD;
  dep: OD;
  seats: number;
  flight_number: string;
  direction: number;
  duration: Duration;
  route_duration: number;
  is_baggage: boolean;
  baggage: Baggage;
  comment: string;
  comment_hash: string;
  cbaggage: Baggage;
  accessories: Baggage;
  is_refund: boolean;
  is_change: boolean;
  refund: boolean;
  change: boolean;
  class: PriceClass;
  first: boolean;
  last: boolean;
  fare_code: string;
  carrier: Carrier;
  marketing_supplier: Supplier;
  validating_carrier: Supplier;
  aircraft: Aircraft;
  stops: any[];
  miles: string;
  change_miles: string;
  is_mini_rules_exists: boolean;
  is_online_checkin_required: boolean;
  brands: any[];
  baggage_recheck: boolean;
  provider: Provider;
  type: string;
}

interface Carrier {
  id: number;
  name: string;
  supplier: Supplier;
}
interface Provider {
  gds: number;
  name: string;
  supplier: Supplier;
}

interface Supplier {
  id: number;
  code: string;
  title: string;
}

interface Aircraft {
  code: string;
  title: string;
}

interface PriceClass {
  type_id: number;
  name: string;
  service: string;
}

interface Baggage {
  piece: number | null;
  weight: number | null;
  dimensions: Dimensions | null;
  weight_unit: string | null;
}

interface Dimensions {
  width: number;
  length: number;
  height: number;
}

interface Duration {
  flight: DurationPart;
  transfer: DurationPart;
}

interface DurationPart {
  common: number;
  hour: number;
  minute: number;
}

interface OD {
  date: string;
  time: string;
  datetime: string;
  ts: number;
  terminal: string;
  airport: Airport;
  city: GeoArea;
  region: GeoArea;
  country: GeoArea;
}

interface GeoArea {
  id: number | null;
  code: string | null;
  title: string | null;
}

interface Airport {
  id: number;
  title: string;
  short_title: string;
  code: string;
}
