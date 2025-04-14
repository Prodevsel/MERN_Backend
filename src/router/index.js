import { Router } from "express";

const router = Router();

router.get("/", (_, res) => res.send("it works :)"));

export default router;