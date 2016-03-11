Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {
  	path: "~/uploads/images",
	filter: {
		maxSize: 1048576, // in bytes
		allow: {
			contentTypes: ['image/*'],
			extensions: ['png']
		}
	}
  })]
});
C.Images = Images;
