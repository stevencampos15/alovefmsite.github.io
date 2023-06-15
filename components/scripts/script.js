let tangledLanterns = {
	lanternHeight: 80,
	lanternWidth: 86,
	lanterns: [],
	lanternImage: 'https://drive.google.com/uc?export=view&id=1oyJBnKqLetaocwcshEJKANIElvaSh6l-',
	maxlanterns: 50,
	minRatio: 0.01,

	//method draw
	createLatern() {
		this.setCanvasSize();
		this.ctx.clearRect(0, 0, this.w, this.h);

		for (let i = 0; i < this.lanterns.length; i++) {
			let lantern = this.lanterns[i];
			lantern.image = new Image();
			lantern.image.style.height = lantern.height;
			lantern.image.src = this.lanternImage;
			this.ctx.drawImage(lantern.image, lantern.x, lantern.y, lantern.width, lantern.height);
		}
		this.moveLantern();
	},

	moveLantern() {
		for (let i = 0; i < this.lanterns.length; i++) {
			let lantern = this.lanterns[i];
			lantern.y -= lantern.ys;
			if (lantern.y < -this.lanternHeight) {
				lantern.x = Math.random() * this.w;
				lantern.y = 1 * this.lanternHeight + this.h;
			}
		}
	},

	setCanvasSize() {
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		this.w = this.canvas.width;
		this.h = this.canvas.height;
	},

	// initialize is called on window load
	initialize() {
		this.canvas = document.getElementById('canvas');
		if (!this.canvas.getContext) {
			document.getElementById('canvas').innerHTML = 'Sorry, HTML canvas not supported';
			return;
		}

		this.setCanvasSize();
		this.ctx = this.canvas.getContext('2d');

		for (let i = 0; i < this.maxlanterns; i++) {
			let scale = Math.random() * (1 - this.minRatio) + this.minRatio;
			this.lanterns.push({
				x: Math.random() * this.w,
				y: Math.random() * this.h,
				ys: Math.random() + 1,
				height: scale * this.lanternHeight,
				width: scale * this.lanternWidth
			});
		}

		setInterval(
			function () {
				this.createLatern();
			}.bind(this),
			50
		);
	}
};

let tangledLanterns2 = {
	lanternHeight: 80,
	lanternWidth: 86,
	lanterns: [],
	lanternImage: 'https://drive.google.com/uc?export=view&id=1oyJBnKqLetaocwcshEJKANIElvaSh6l-',
	maxlanterns: 50,
	minRatio: 0.01,

	//method draw
	createLatern() {
		this.setCanvasSize();
		this.ctx.clearRect(0, 0, this.w, this.h);

		for (let i = 0; i < this.lanterns.length; i++) {
			let lantern = this.lanterns[i];
			lantern.image = new Image();
			lantern.image.style.height = lantern.height;
			lantern.image.src = this.lanternImage;
			this.ctx.drawImage(lantern.image, lantern.x, lantern.y, lantern.width, lantern.height);
		}
		this.moveLantern();
	},

	moveLantern() {
		for (let i = 0; i < this.lanterns.length; i++) {
			let lantern = this.lanterns[i];
			lantern.y -= lantern.ys;
			if (lantern.y < -this.lanternHeight) {
				lantern.x = Math.random() * this.w;
				lantern.y = 1 * this.lanternHeight + this.h;
			}
		}
	},

	setCanvasSize() {
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		this.w = this.canvas.width;
		this.h = this.canvas.height;
	},

	// initialize is called on window load
	initialize() {
		this.canvas = document.getElementById('lantern');
		if (!this.canvas.getContext) {
			document.getElementById('lantern').innerHTML = 'Sorry, HTML canvas not supported';
			return;
		}

		this.setCanvasSize();
		this.ctx = this.canvas.getContext('2d');

		for (let i = 0; i < this.maxlanterns; i++) {
			let scale = Math.random() * (1 - this.minRatio) + this.minRatio;
			this.lanterns.push({
				x: Math.random() * this.w,
				y: Math.random() * this.h,
				ys: Math.random() + 1,
				height: scale * this.lanternHeight,
				width: scale * this.lanternWidth
			});
		}

		setInterval(
			function () {
				this.createLatern();
			}.bind(this),
			50
		);
	}
};

window.onload = function () {
	tangledLanterns.initialize();
	tangledLanterns2.initialize();
};

const audio = new Audio("/media/song/Congratulations.mp3");
    const audiolove = new Audio("/media/song/love.mp3");
    window.addEventListener("DOMContentLoaded", (event) => {
      audio.play();
      audio.loop = true;
    });
    const el = document.getElementById('selectbasic');

    const imagen = document.getElementById('mostrar');
    const sing = document.getElementById('sing');

    el.addEventListener('change', function handleChange(event) {
      if (event.target.value === 'Si') {
        audio.pause();
        audiolove.play();
        imagen.style.display = 'block';
        sing.style.display = 'block';
      } else {
        box.style.display = 'none';
      }
    });
    document.body.addEventListener('touchstart', function () {
      if (audiosWeWantToUnlock) {
        for (let audio of audiosWeWantToUnlock) {
          audio.play()
          audio.pause()
          audio.currentTime = 0
        } audiosWeWantToUnlock = null
      }
    }, false)
    //where earlier you did:
    var audiosWeWantToUnlock = []
    audiosWeWantToUnlock.push(audio)
    audiosWeWantToUnlock.push(audiolove)
