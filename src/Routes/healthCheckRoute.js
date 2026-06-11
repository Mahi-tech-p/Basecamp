import express from "express"
import { healthCheck } from "../Controllers/HealthCheckController.js"

const router = express.Router()

router.route('/').get(healthCheck)
router.route('/insta').get(healthCheck)

export default router
