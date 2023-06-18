const express = require("express")
const {InventoryModel} = require("../model/marketplace_inventory.model")
const carRoute = express.Router()

carRoute.get("")

module.exports = {carRoute}