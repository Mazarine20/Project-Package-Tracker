const Package = require("../models/packageModel");
const Delivery = require("../models/deliveryModel");

const express = require("express");
const router = express.Router();

// Tous les paquets
router.get("/", async function (req, res) {
  try {
    const packages = await Package.find().exec();
    return res.status(200).json({
      data: packages,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

// Obtenir un paquet par son ID
router.get("/:id", async function (req, res) {
  try {
    const package = await Package.findById(req.params.id).exec();
    if (package) {
      return res.status(200).json({
        data: package,
      });
    } else {
      return res.status(404).json({
        error: "Package information not found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

// Créer un nouveau paquet
router.post("/", async function (req, res) {
  try {
    const package = new Package(req.body);
    await package.save();
    return res.status(201).json({
      message: "Package successfully created",
      data: package,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

// Mise à jour d'un paquet
router.put("/:id", async function (req, res) {
  try {
    const package = await Package.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!package) {
      return res.status(404).json({
        error: "Package information not found",
      });
    } else {
      return res.status(200).json({
        message: "Package successfully updated",
        data: package,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

// Supprimer un paquet
router.delete("/:id", async function (req, res) {
  try {
    const deletedPackage = await Package.findByIdAndDelete(req.params.id);

    if (!deletedPackage) {
      return res.status(404).json({
        error: "Package information not found",
      });
    } else {
    //   // Supprime les livraisons associées à ce paquet
    //   await Delivery.deleteMany({ package_id: packageId });
      return res.status(200).json({
        message: "Package successfully deleted",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});


router.get("/packageIds", async function (req, res) {
  try {
    const packages = await Package.find().exec();
    const packageIds = packages.map((package) => package._id);
    return res.status(200).json({
      data: packageIds,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;