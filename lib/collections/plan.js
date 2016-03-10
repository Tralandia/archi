Plan = new Meteor.Collection("Plan");
C.Plan = Plan;

C.PlanSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Názov"
  },
  type: {
    type: String,
    optional: true,
    label: "Typ domu"
  },
  garage: {
    type: String,
    optional: true,
    label: "Garáž"
  },
  roof: {
    type: String,
    optional: true,
    label: "Strecha"
  },
  landWidth: {
    type: Number,
    optional: true,
    label: "Šírka pozemku"
  },
  landLength: {
    type: Number,
    optional: true,
    label: "Dĺžka pozemku"
  },
  rooftopHeight: {
    type: Number,
    optional: true,
    label: "Max. výška strechy"
  },
  stories: {
    type: Number,
    optional: true,
    label: "pocet poschodi"
  },
  livingRoomCount: {
    type: Number,
    optional: true,
    label: "Obytné miestnosti"
  },
  "capacity.min": {
    type: Number,
    optional: true,
    label: "Kapacita Osob"
  },
  "capacity.max": {
    type: Number,
    optional: true,
    label: "Kapacita Osob"
  },
  bathroomsCount: {
    type: Number,
    optional: true,
    label: "Kúpeľne"
  },
  usableArea: {
    type: Number,
    optional: true,
    label: "Úžitková plocha"
  },
  livingArea: {
    type: Number,
    optional: true,
    label: "Obytná plocha"
  },
  usedArea: {
    type: Number,
    optional: true,
    label: "Zastavaná plocha"
  },
  entranceOrientation: {
    type: String,
    optional: true,
    label: "Orientácia vstupu do domu"
  },
  planPrice: {
    type: Number,
    optional: true,
    label: "Cena projektu domu"
  },
  studyPrice: {
    type: Number,
    optional: true,
    label: "Cena štúdie domu"
  },
  housePrice: {
    type: Number,
    optional: true,
    label: "Cena realizácie domu"
  },
  "photos.interior": {
    type: Object,
    optional: true,
    label: "Fotografie interiér"
  },
  "photos.exterior": {
    type: Object,
    optional: true,
    label: "Exteriér"
  },
  "photos.views": {
    type: Object,
    optional: true,
    label: "Pohľady"
  },
  "photos.builds": {
    type: Object,
    optional: true,
    label: "Realizácie"
  },
  similarPlans: {
    type: Object,
    optional: true,
    label: "Podobné domy"
  },
  doubleHouseOption: {
    type: Boolean,
    optional: true,
    label: "Možný na dvojdom"
  },
  suitableForHillside: {
    type: Boolean,
    optional: true,
    label: "Vhodný na svahovitý pozemok"
  },
  built: {
    type: Date,
    optional: true,
    label: "Realizované"
  },
  documentation: {
    type: Object,
    optional: true,
    label: "Dokumentacia (vsetky suvisiace subory, aj cele zip)"
  }
});

Plan.attachSchema(C.PlanSchema);

Plan.allow({
	insert: function(userId, doc) {
		return userId ? true : false;
	},
	update: function(userId, doc) {
		return userId ? true : false;
	},
	remove: function(userId, doc) {
		return userId ? true : false;
	}
});
