import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import CelebrationIcon from "@mui/icons-material/Celebration";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import BungalowIcon from "@mui/icons-material/Bungalow";
import ExploreIcon from "@mui/icons-material/Explore";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
const data = [
  { amount: 1000, type: "food", createdAt: "22 Apr 2022 10:35:00 PM" },
  { amount: 1000, type: "food", createdAt: "22 Apr 2022 10:35:00 PM" },
  { amount: 1000, type: "food", createdAt: "22 Apr 2022 10:35:00 PM" },
  { amount: 1000, type: "food", createdAt: "22 Apr 2022 10:35:00 PM" },
];

const iconMap = {
  groceries: LocalGroceryStoreIcon,
  party: CelebrationIcon,
  travel: AgricultureIcon,
  food: RestaurantMenuIcon,
  health: FitnessCenterIcon,
  stay: BungalowIcon,
  utilities: ExploreIcon,
  monthly: ReceiptIcon,
  other: AltRouteIcon,
  misc: MiscellaneousServicesIcon,
  shopping: ShoppingCartIcon,
  personal_supplies: SettingsAccessibilityIcon,
  subscription: SubscriptionsIcon,
};
export { data, iconMap };
