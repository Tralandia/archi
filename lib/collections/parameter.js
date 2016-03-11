Parameter = new Meteor.Collection("Parameter");
C.Parameter = Parameter;

C.ParameterSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Parameter"
  },
  type: {
    type: String,
    label: "Typ parametra"
  }
});

C.Parameter.attachSchema(C.ParameterSchema);
