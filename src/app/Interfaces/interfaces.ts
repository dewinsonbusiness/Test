
export interface company {

created_at?:string | null,
deleted_at?:string | null,
plan_id:number,
plan_name?:string,
plan_status?:number,
tenant_cedrnc:string,
tenant_id?:number,
tenant_name:string,
udapted_at?:string | null
}

export interface UserData{
    email:string,
    password:string
}


export interface Encf {
    current_page:   number;
    data:           Datum[];
    first_page_url: string;
    from:           number;
    last_page:      number;
    last_page_url:  string;
    links:          Link[];
    next_page_url:  string;
    path:           string;
    per_page:       number;
    prev_page_url:  null;
    to:             number;
    total:          number;
}

export interface Datum {
    transncf_id:           number;
    transncf_encf:         string;
    transncf_fechaemision: Date;
    transncf_rnccomprador: string;
    transncf_itbis:        string;
    transncf_montototal:   string;
    transncf_status:       number;
    tenant_cedrnc:         string;
    tipoNcf_name:          string;
}

export interface Link {
    url:    null | string;
    label:  string;
    active: boolean;
}

export interface Plans {
  plan_id?:              number;
  plan_name:            string;
  plan_status?:          number;
  created_at?:           Date;
  updated_at?:           Date;
  deleted_at?:           null;
  planDetail_seq?:       number;
  planDetail_from:      string;
  planDetail_to:        string;
  planDetail_priceXdoc: string;
  planDetail_tolerance: string;
}


export interface plansend{
    plan_name:string;
    planDetail_from:number;
    planDetail_to:number;
    planDetail_tolerance:string;
    planDetail_priceXdoc:number;
}



export interface udaptedplan{
    plan_id:number
    plan_name:string;
    planDetail_from:number;
    planDetail_to:number;
    planDetail_tolerance:string;
    planDetail_priceXdoc:number;
}


















