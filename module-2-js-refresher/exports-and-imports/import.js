// default imports
import normal from "./default-exports/normal-export";
import nml from "./default-exports/normal-export";

// named imports
import { data } from "./named-exports/named-export";
import { baseData } from "./named-exports/named-export";
import { data as d } from "./named-exports/named-export"; // can also use alias
import * as bundled from "./named-exports/named-export"; // can import all at once but need to assign alias to it