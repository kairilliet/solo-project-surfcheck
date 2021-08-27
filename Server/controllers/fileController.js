const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
// const https = require('https');
const express = require('express');

const fileController = {};

// GET Request to Surf Forecast API
fileController.getSurfSpots = async (req, res, next) => {
    try {
    	const data = await fetch('https://hawaiibeachsafety.com/rest/conditions.json');
			// res.locals.surfSpots = surfSpots.json();
			const surfSpots = await data.json();
			// console.log(Array.isArray(surfSpots))
			const oahuBeaches = [];
			surfSpots.forEach(beach => {
				if (beach.island === 'Oahu') {
					oahuBeaches.push(beach);
				}
			})
			res.locals.oahu = oahuBeaches;
			fs.writeFile(path.resolve(__dirname,'../data/surfSpots.json'), JSON.stringify(res.locals.oahu), 'UTF-8', (err) => {
				if (err) {
					console.log(err);
				} else {
					console.log('file written!')
				}
			});
			return next();
    // .then(res => console.log(res.body))
    // .then(data => console.log(data[0]))
    } catch (err) {
			console.log('error fetching data');
			return next('could not fetch data');
    }
};


// default export
module.exports = fileController