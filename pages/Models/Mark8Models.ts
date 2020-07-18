import _ from "lodash";
class Mark8Models {
  accept_agent: boolean;
  agent_post: boolean;
  aircon: boolean;
  bath: number;
  bath_tub: boolean;
  bedroom: number;
  condo_name_en: string;
  description: string;
  electric_stove: boolean;
  floor: number;
  furniture: boolean;
  gas_stove: boolean;
  id: number;
  photo1: string;
  refrigerator: boolean;
  rent_price: any;
  sale_price: any;
  size__sq_m_: number;
  title: string;
  washing_machine: boolean;
  water_heater: boolean;

  constructor(json: any) {
    this.id = _.get(json, "id");
    this.condo_name_en = _.get(json, "condo_name_en");
    this.rent_price = _.get(json, "rent_price");
    this.sale_price = _.get(json, "sale_price");
    this.bedroom = _.get(json, "bedroom");
    this.bath = _.get(json, "bath");
    this.size__sq_m_ = _.get(json, "size__sq_m_");
    this.floor = _.get(json, "floor");
    this.title = _.get(json, "title");
    this.description = _.get(json, "description");
    this.photo1 = _.get(json, "photo1");
    this.agent_post = _.get(json, "agent_post");
    this.accept_agent = _.get(json, "accept_agent");
    this.aircon = _.get(json, "aircon");
    this.bath_tub = _.get(json, "bath_tub");
    this.electric_stove = _.get(json, "electric_stove");
    this.furniture = _.get(json, "furniture");
    this.gas_stove = _.get(json, "gas_stove");
    this.refrigerator = _.get(json, "refrigerator");
    this.washing_machine = _.get(json, "washing_machine");
    this.water_heater = _.get(json, "water_heater");
  }
}

export default Mark8Models;
