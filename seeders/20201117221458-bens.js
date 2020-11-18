'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('benefits', null, { truncate: true, cascade: true, restartIdentity: true });

    await queryInterface.bulkInsert('benefits', [
        {
          "name": "Adaptogen",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Alleviates Insomnia",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Anti-Bacterial",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Anti-Inflammatory",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Antioxidant Rich",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Blood Circulation",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Boost Immunity",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Caffeine-Free",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Calcium Rich",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Clean Greasy Stomachs",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Clear Phlegm",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Coffee-Alternative",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Combat Fatigue",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Contains Antioxidants",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Contains Catechins",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Contains Fiber",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Cooling",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Cools Body",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Decrease Appetite",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Detox",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Detox Liver",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Ease Anxiety",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Ease Constipation",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Ease Cramps",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Ease Digestion",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Ease Headaches",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Ease Nausea",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Ease Stomachaches",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Energizer",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Fat Burner",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Improve Eyesight",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Improve Overall Weakness",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Improve Respiratory System",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Improves Skin Complexion",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Increase Appetite",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Increase Blood Flow",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Increase Focus",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Inhibit Sugar Absorption",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Iron Rich",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Low Caffeine",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Lower Blood Pressure",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Lower Blood Sugar Levels",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Lower Diabetic Count",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "May Aid Preventing Heart Disease",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "May Boost Muscle Endurance",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "May Enhance Memory",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "May Help Purify Blood",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "May Improve Cardiovascular Health",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "May Improve Memory",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "May Increase Metabolism",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "May Lower Cholesterol",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "May Prevent Cell Aging",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "May Reduce Anxiety",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "May Reduce Lactic Acid Build-Up",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Mild-diuretic",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Mineral Rich",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Multiple Steeps",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Pain Relieving",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Prevent Tooth Decay",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Probiotics Rich",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Promote Alertness",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Promote Longevity",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Promote Rest",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Promote Weight Loss",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Reduce Body Fat",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Reduce Ulcer Symptoms",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Regulate Blood Sugar Levels",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Relieve Stress",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Relieves Body Heat",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Retain Body Fluid Levels",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Soothing",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Stimulates Mind",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Sugar Substitute",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Treat Arthritis",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Vitamin A Rich",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Vitamin C Rich",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Vitamin Rich",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Warming",
          createdAt: new Date(),
          updatedAt: new Date()
        },
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};