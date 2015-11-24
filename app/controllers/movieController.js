/*angular.module('myApp', ['ngMaterial', 'ngMdIcons', 'ngAria', 'ngRoute', 'ngAnimate']);
var path = require('path'),
    amazon = require('amazon-product-api'),
    express = require('express'),
    CryptoJS = require('crypto-js'),
    app = express(),
    AWS = require('aws-sdk');
    
    var today = new Date();
    var day = today.toISOString();
    var month = today.toISOString()+1;
    var year = today.getFullYear();
    var hours = today.getHours() < 10 ? "0"+today.getHours() : today.getHours(); 
    var seconds = today.getSeconds() < 10 ? "0"+today.getSeconds() : today.getSeconds();
    var mins = today.getMinutes() < 10 ? "0"+today.getMinutes() : today.getMinutes();
    var time = encodeURIComponent(year+"-"+month+"-"+day+"T"+hours+":"+mins+":"+seconds+"Z");
    var messageToEncrypt ="GET\nwebservices.amazon.com\n\
        /onca/xml\nAWSAccessKeyId=AKIAJZDF75GQNB4AUTOQ&ACCESSID&ItemId=B008NCSZQ8&SignatureMethod=HmacSHA256&SignatureVersion=2&Operation=ItemLookup&ResponseGroup=ItemAttributes%2COffers%2CImages%2CReviews&Service=AWSECommerceService&Timestamp="+time+"&Version=2013-08-01";

    var sig = CryptoJS.HmacSHA256(messageToEncrypt, "SCA7cR8Xqa+n4Jt/sna+3vZJBrxN/P5MgX3ykxkm");
    
    var request = 'http://webservices.amazon.com/onca/xml?Service=AWSECommerceService&AWSAccessKeyId=AKIAJZDF75GQNB4AUTOQ&AssociateTag=mytag-20&Operation=ItemLookup&ItemId=B008NCSZQ8&ResponseGroup=Images,ItemAttributes,Offers,Reviews&Version=2013-08-01&Timestamp=2014-08-18T12:00:00Z&Signature='+sig;

var client = amazon.createClient({
  awsId: "AKIAJZDF75GQNB4AUTOQ",
  awsSecret: "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",
  awsTag: "mytag"
});


client.itemLookup({
  idType: 'Movie',
  itemId: 'B008NCSZQ8',
  responseGroup: 'ItemAttributes,Offers,Images'
}, function (err, results) {
  if (err) {
    console.log(err);
  } else {
    console.log(results);
  }
});

app.get(request);
*/