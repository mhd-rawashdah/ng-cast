angular.module('video-player')

.component('app', {
	 templateUrl: 'src/templates/app.html',
	 controller:function () {
	 	this.internalState = {
	 		videos:exampleVideoData,
	 		currentVideo:exampleVideoData[0]

	 	}

	 

	 	
	 }
  // TODO
});
