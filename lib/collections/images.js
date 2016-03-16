Images = new FS.Collection("images", {
	stores: [new FS.Store.GridFS("images", {
			filter: {
				maxSize: 1048576,
				allow: {
					contentTypes: ['image/*'],
					extensions: ['png']
				}
			},
			maxTries: 1,
			chunkSize: 1024*1024
		}
	)]
});
C.Images = Images;
