const Delivery = require("../models/deliveryModel");
const express = require("express");
const router = express.Router();

// Toutes les livraisons
router.get("/", async function (req, res) {
  try {
    const deliveries = await Delivery.find().exec();
    return res.status(200).json({
      data: deliveries,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

// Obtenir une livraison par son ID
router.get("/:id", async function (req, res) {
  try {
    const delivery = await Delivery.findById(req.params.id).exec();
    if (delivery) {
      return res.status(200).json({
        data: delivery,
      });
    } else {
      return res.status(404).json({
        error: "Delivery information not found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

// Créer une nouvelle livraison
router.post("/", async function (req, res) {
  try {
    const delivery = new Delivery(req.body);
    await delivery.save();
    return res.status(201).json({
      message: "Delivery successfully created",
      data: delivery,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

// Mise à jour d'une livraison
router.put("/:id", async function (req, res) {
  try {
    const delivery = await Delivery.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (delivery) {
      return res.status(200).json({
        message: "Delivery successfully updated",
        data: delivery,
      });
    } else {
      return res.status(404).json({
        error: "Delivery information not found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

// Supprimer une livraison
router.delete("/:id", async function (req, res) {
  try {
    const delivery = await Delivery.findByIdAndDelete(req.params.id);
    if (delivery) {
      return res.status(200).json({
        message: "Delivery successfully deleted",
      });
    } else {
      return res.status(404).json({
        error: "Delivery not found",
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;