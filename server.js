var fs = require('fs'); 

function getProds(req,res){
    fs.readFile('products.json', function(err, data) {
        if (err) throw err;
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(data);
        //console.log(data);
        res.end();
        });
}

function postProds(req,res){
    fs.appendFile('products.json', JSON.stringify(req.body), function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
}

module.exports = {getProds,postProds};