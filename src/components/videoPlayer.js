angular.module('video-player')
.component('videoPlayer', {
  templateUrl: 'src/templates/videoPlayer.html',
  controller:function () {
    this.video = exampleVideoData[0];
		 console.log(this.vid)
  },
  bindings:{
	internalState:"<"
  }
});
