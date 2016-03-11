Files = new FS.Collection("files", {
  stores: [new FS.Store.FileSystem("files", {path: "~/uploads/files"})]
});
C.Files = Files;
