PlanSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Názov"
  },
  type: {
    type: String,
    label: "Typ domu"
  },
  garage: {
    type: String,
    label: "Garáž"
  },
  roof: {
    type: String,
    label: "Strecha"
  },
  landWidth: {
    type: Number,
    label: "Šírka pozemku"
  },
  landLength: {
    type: Number,
    label: "Dĺžka pozemku"
  },
  rooftopHeight: {
    type: Number,
    label: "Max. výška strechy"
  },
  stories: {
    type: Number,
    label: "pocet poschodi"
  },
  livingRoomCount: {
    type: Number,
    label: "Obytné miestnosti"
  },
  "capacity.min": {
    type: Number,
    label: "Kapacita Osob"
  },
  "capacity.max": {
    type: Number,
    label: "Kapacita Osob"
  },
  bathroomsCount: {
    type: Number,
    label: "Kúpeľne"
  },
  usableArea: {
    type: Number,
    label: "Úžitková plocha"
  },
  livingArea: {
    type: Number,
    label: "Obytná plocha"
  },
  usedArea: {
    type: Number,
    label: "Zastavaná plocha"
  },
  entranceOrientation: {
    type: String,
    label: "Orientácia vstupu do domu"
  },
  planPrice: {
    type: Number,
    label: "Cena projektu domu"
  },
  studyPrice: {
    type: Number,
    label: "Cena štúdie domu"
  },
  housePrice: {
    type: Number,
    label: "Cena realizácie domu"
  },
  "photos.interior": {
    type: Object,
    label: "Fotografie interiér"
  },
  "photos.exterior": {
    type: Object,
    label: "Exteriér"
  },
  "photos.views": {
    type: Object,
    label: "Pohľady"
  },
  "photos.builds": {
    type: Object,
    label: "Realizácie"
  },
  similarPlans: {
    type: Object,
    label: "Podobné domy"
  },
  doubleHouseOption: {
    type: Boolean,
    label: "Možný na dvojdom"
  },
  suitableForHillside: {
    type: Boolean,
    label: "Vhodný na svahovitý pozemok"
  },
  built: {
    type: Date,
    label: "Realizované"
  },
  documentation: {
    type: Object,
    label: "Dokumentacia (vsetky suvisiace subory, aj cele zip)"
  }
});