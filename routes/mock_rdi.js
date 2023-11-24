var express = require('express');
var router = express.Router();
const { meccanicoEdile } = require('../jsons/meccanicoEdile');


router.get('/', (req, res, next) => {
	const query = req.query;
	const hasAmbito = query["ambito"];
	const ambito = query["ambito"];
	console.log(query)

	if(hasAmbito && ambito == "meccanico_edile"){
        res.header("Cache-Control", "no-cache, no-store, must-revalidate");
		res.send(meccanicoEdile);
	} else if(hasAmbito && ambito == "edile"){
        res.header("Cache-Control", "no-cache, no-store, must-revalidate");
		const edile = Object.assign({}, meccanicoEdile);

		const edileRdi = meccanicoEdile["lista_rdi"].filter((rdi) => {
			return rdi.descrizione_ambito == "Edile";
		})

		edile["ambiti_correnti"] = ["1"];
		console.log(edileRdi);
		edile["lista_rdi"] = edileRdi;
		res.send(JSON.stringify(edile));
	} else if(hasAmbito && ambito == "meccanico"){
        res.header("Cache-Control", "no-cache, no-store, must-revalidate");
		const meccanico = Object.assign({}, meccanicoEdile);

		const meccanicoRdi = meccanicoEdile["lista_rdi"].filter((rdi) => {
			return rdi.descrizione_ambito == "Meccanico";
		})

		meccanico["ambiti_correnti"] = ["2"];
		console.log(meccanicoRdi);
		meccanico["lista_rdi"] = meccanicoRdi;
		res.send(JSON.stringify(meccanico));
	}
})

module.exports = router;
