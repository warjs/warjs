function start(wait, result) {
	let res = result;
	if (!wait) {
		res = getRes()
	}
	else {
		result.then(data => {
			this.data = data
		})
	}
	if (!this.data) {
		start(true, res)
	}
	console.log(this.data)
}
start()

async function getRes() {
	const p = await new Promise((res, rej) => {
		setTimeout(() => {
			res('success')
		}, 1000)
	})
	return p;
}
