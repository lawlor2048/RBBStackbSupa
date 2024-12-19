export interface Product {
  "Product Name": string;
  "Value Offer": string;
  "Discount Price"?: string;
  "Discount Period"?: string;
  "Standard Price"?: string;
  "Monthly Price"?: string;
  "Contract Duration": string;
  "Price After Contract"?: string;
  "Install Fee": string;
  "Activation Fee"?: string;
  "Download Speed"?: string;
  "Upload Speed"?: string;
  "Average Download Speed"?: string;
  "Download Allowance": string;
  "Maximum Download Speed"?: string;
  "Maximum Upload Speed"?: string;
  "Estimated Download Speed"?: string;
  [key: string]: string | undefined;
}

export interface ProductGroup {
  "Product Type": string;
  "Description": string;
  "Access Type": string;
  "Products": Product[];
}

export interface CoverageResponse {
  max_speeds: string;
  address: string;
  eircode: string;
  products: ProductGroup[];
  business_address: boolean;
}