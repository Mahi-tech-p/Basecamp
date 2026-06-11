import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
/**
 * 
 * @param {*} req 
 * @param {*} res 
 
export const healthCheck = async (req, res) => {
    try {
        res.status(200).json(
            new ApiResponse(200 ,{ message:"server is Up and running"})
        )
    } catch (err) {
        // res.status(400).json({})
        next(err)
    }
}
    */

export const healthCheck = asyncHandler(async (req, res) => {
    res
        .status(200)
        .json(
        new ApiResponse(200, { message: "server is Up and running" })
    )
})