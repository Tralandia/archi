Plan = new Meteor.Collection("Plan");
C.Plan = Plan;

C.PlanSchema = new SimpleSchema({
  name: {
    type: String
  },
  slug: {
    type: String
  },
  description: {
    type: String
  },
  roof: {
    type: String,
    optional: true
  },
  garage: {
    type: String,
    optional: true
  },
  floor: {
    type: String,
    optional: true
  },
  livingRoomCount:  {
    type: Number,
    optional: true
  },
  usedArea: {
    type: Number,
    optional: true
  },
  usableArea: {
    type: Number,
    optional: true
  },
  usableAreaGround: {
    type: Number,
    optional: true
  },
  usableAreaFloor: {
    type: Number,
    optional: true
  },
  livingArea: {
    type: Number,
    optional: true
  },
  planPrice: {
    type: Number,
    optional: true
  },
  housePrice: {
    type: Number,
    optional: true
  },
  rooftopHeight: {
    type: Number,
    optional: true
  },
  rooftopAngle: {
    type: String,
    optional: true
  },
  buildingSpace: {
    type: String,
    optional: true
  },
  bathroomsCount: {
    type: Number,
    optional: true
  },
  entranceOrientation: {
    type: String,
    optional: true
  },
  "photos.interior": {
    type: [String],
    optional: true
  },
  "photos.exterior": {
    type: [String],
    optional: true
  },
  "photos.views": {
    type: [String],
    optional: true
  },
  "photos.builds": {
    type: [String],
    optional: true
  },
  suitableForHillside: {
    type: Boolean,
    optional: true
  },
  built: {
    type: Date,
    optional: true
  },
  energy: {
    type: String,
    optional: true
  }
});

C.Plan.attachSchema(C.PlanSchema);
