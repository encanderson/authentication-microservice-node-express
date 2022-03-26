import * as redis from "redis";

import { managerList } from "@src/database";

import { config } from "../../config";

const allowlist = redis.createClient(config.allowlist);

export const managerAllowlist = managerList(allowlist);
