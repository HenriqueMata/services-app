import { SvgProps } from "react-native-svg";

import Appliance from "../../assets/images/appliance";
import Beauty from "../../assets/images/beauty";
import Cleaning from "../../assets/images/cleaning";
import Electronics from "../../assets/images/electronics";
import Painting from "../../assets/images/painting";
import Plumbing from "../../assets/images/plumbing";
import Repair from "../../assets/images/repair";
import Salon from "../../assets/images/salon";
import Shifting from "../../assets/images/shifting";
import Default from "../../assets/images/right-arrow";

// React.ComponentType<React.SVGProps<SVGSVGElement>>
export interface IconSet {
  [key: string]: React.FC<SvgProps>;
}

const icons = {
  appliance: Appliance,
  beauty: Beauty,
  repair: Repair,
  painting: Painting,
  cleaning: Cleaning,
  electronics: Electronics,
  plumbing: Plumbing,
  salon: Salon,
  shifting: Shifting,
  default: Default,
};

export default icons;
