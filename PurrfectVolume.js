class Volimiter {
  constructor(appName, maxVolume) {
    this.app = Application.currentApplication();
    this.app.includeStandardAdditions = true;
    this.appName = appName;
    this.maxVolume = maxVolume;
  }

  get currentVolume() {
    const { outputVolume } = this.app.getVolumeSettings();
    return outputVolume;
  }

  limitVolume() {
		if(this.currentVolume > this.maxVolume) {
			this.app.beep();
	    this.app.setVolume(null, { outputVolume: this.maxVolume });
		}
  }

  showNotification() {
    this.app.displayNotification("", {
      withTitle: this.appName,
      subtitle: `Limiting your 🎧 volume to ${
        this.maxVolume
      }% to protect your ears`
    });
  }
}

const PurrfectVolume = new Volimiter("Purrfect volume 😸", 25);
PurrfectVolume.showNotification();

function idle() {
	PurrfectVolume.limitVolume();
  return 0.5;
}

