import { Router } from "express";
import { resourceLimits } from "worker_threads";
import {
  searchTravel,
  getOrigin,
  getDestination,
} from "../controllers/search.controllers";

const router = Router();

router.get("/origin", getOrigin);
router.get("/destination/:idOrigin", getDestination);
router.post("/search", searchTravel);

export default router;
