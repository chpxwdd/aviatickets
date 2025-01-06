interface Flight {
  id: string;
  is_tour_operator: boolean;
  tariff: string;
  tariff_class: string;
  fare_family_type: string;
  fare_family_flag: boolean;
  fare_family_marketing_name: string;
  duration: number;
  segments_count: number;
  type: string;
  is_inner_flight: boolean;
  is_baggage: boolean;
  is_charter: boolean;
  is_refund: boolean;
  is_hide_tariff: boolean;
  is_subsidized: boolean;
  book_url: string;
  citizenships: null;
  is_vtrip: boolean;
  provider: Provider;
  office_id: string;
  price: Price;
  price_details: any[];
  extra_baggage: Extrabaggage;
  segments: Segment[];
  segments_direction: number[][];
  upgrades: Upgrade[];
  pricer_info: any[];
  documents: Documents;
  ticketing_time_limit: number;
  booking_with_partial_data_allowed: boolean;
  special_tariff_type: null;
  age_thresholds: Agethresholds;
  is_health_declaration_checked: boolean;
  is_discount_code_applied: boolean;
  is_partner_office: boolean;
}

interface Agethresholds {
  infant: Infant;
  child: Infant;
  adult: Infant;
}

interface Infant {
  min: number;
  max: number;
}

interface Documents {
  adt: Adt;
  chd: Adt;
  inf: Adt;
  ins: Adt;
  src: Src;
  yth: Src;
}

interface Src {
  ru: string[];
  other: any[];
}

interface Adt {
  ru: string[];
  other: string[];
}

interface Upgrade {
  id: string;
  key: null;
  is_baggage: boolean;
  is_refund: boolean;
  increase_price: Increaseprice;
}

interface Increaseprice {
  RUB: number;
}

interface Segment {
  arr: Arr;
  dep: Arr;
  seats: number;
  flight_number: string;
  direction: number;
  duration: Duration;
  route_duration: number;
  is_baggage: boolean;
  baggage: Baggage;
  comment: string;
  comment_hash: string;
  cbaggage: Cbaggage;
  accessories: Cbaggage;
  is_refund: boolean;
  is_change: boolean;
  refund: boolean;
  change: boolean;
  class: Class;
  first: boolean;
  last: boolean;
  fare_code: string;
  carrier: Supplier;
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

interface Aircraft {
  code: string;
  title: string;
}

interface Class {
  type_id: number;
  name: string;
  service: string;
}

interface Cbaggage {
  piece: number;
  weight: number;
  dimensions: Dimensions;
  weight_unit: string;
}

interface Dimensions {
  width: number;
  length: number;
  height: number;
}

interface Baggage {
  piece: null;
  weight: null;
  dimensions: null;
  weight_unit: null;
}

interface Duration {
  flight: Flight;
}

interface Flight {
  common: number;
  hour: number;
  minute: number;
}

interface Arr {
  date: string;
  time: string;
  datetime: string;
  ts: number;
  terminal: string;
  airport: Airport;
  city: Supplier;
  region: Region;
  country: Supplier;
}

interface Region {
  id: null;
  code: null;
  title: null;
}

interface Airport {
  id: number;
  title: string;
  short_title: string;
  code: string;
}

interface Extrabaggage {
  list: List[];
  limit: Limit;
}

interface Limit {
  hold_weight: number;
  hand_weight: number;
  hand_height: number;
  hand_width: number;
  hand_length: number;
}

interface List {
  count: number;
  price: Price2;
}

interface Price2 {
  RUB: RUB2;
}

interface RUB2 {
  amount: number;
}

interface Price {
  RUB: RUB;
}

interface RUB {
  amount: number;
  passengers_amounts: Passengersamounts;
  agent_mode_prices: Agentmodeprices;
  comsa: number;
  partner_affiliate_fee: number;
  start_price: number;
  passengers_amounts_details: Passengersamountsdetail2[];
}

interface Passengersamountsdetail2 {
  type: string;
  amount: number;
  tax: number;
  tariff: number;
  fee: number;
  partner_affiliate_fee: number;
  comsa: number;
}

interface Agentmodeprices {
  total_amount_for_active_agent_mode: number;
  total_amount_for_non_active_agent_mode: number;
  total_partner_affiliate_fee: number;
  debit_from_balance: number;
  passengers_amounts_details: Passengersamountsdetail[];
}

interface Passengersamountsdetail {
  type: string;
  service_amount_for_active_agent_mode: number;
  service_amount_for_non_active_agent_mode: number;
}

interface Passengersamounts {
  adult: number;
  child: number;
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
