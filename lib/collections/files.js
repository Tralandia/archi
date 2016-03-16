Files = new FS.Collection("files", {
  stores: [new FS.Store.GridFS("files", { chunkSize: 1024*1024 })]
});
C.Files = Files;
