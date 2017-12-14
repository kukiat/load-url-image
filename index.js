var jsonfile = require('jsonfile')
var axios = require('axios')
var fs = require('fs')
var request = require('request');

var file = 'table_dataset.json'

jsonfile.readFile(file, function(err, data){
    data.forEach((i)=>{
        download(i.original_url, i.image_id, function(){
            console.log('success');
        })
    })
})

var download = function(uri, filename, callback){
    request.head(uri, function(err, res, body){
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);
  
        request(uri).pipe(fs.createWriteStream('table/'+filename)).on('close', callback);
    });
};