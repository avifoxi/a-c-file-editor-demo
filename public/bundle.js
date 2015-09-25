(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var data = require('./data/files.json');

console.log(data);

},{"./data/files.json":2}],2:[function(require,module,exports){
module.exports={
    "files": [
        {
            "filename": "text",
            "isFolder": false,
            "filetype": "txt",
            "contents": "Hello this is a test text file!"
        },
        {
            "filename": "anothertext",
            "isFolder": false,
            "filetype": "txt",
            "contents": "Hello this is another\ntest text file!\nYay!"
        },
        {
            "filename": "vacation",
            "isFolder": true,
            "files": [
                {
                    "filename": "vacation_pic1",
                    "isFolder": false,
                    "filetype": "jpg",
                    "contents": "[JPEG IMAGE DATA]"
                },
                {
                    "filename": "vacation_pic2",
                    "isFolder": false,
                    "filetype": "jpg",
                    "contents": "[JPEG IMAGE DATA]"
                },
                {
                    "filename": "vacation_pic3",
                    "isFolder": false,
                    "filetype": "jpg",
                    "contents": "[JPEG IMAGE DATA]"
                },
                {
                    "filename": "vacation_pic4",
                    "isFolder": false,
                    "filetype": "jpg",
                    "contents": "[JPEG IMAGE DATA]"
                },
                {
                    "filename": "vacation_pic5",
                    "isFolder": false,
                    "filetype": "jpg",
                    "contents": "[JPEG IMAGE DATA]"
                },
                {
                    "filename": "vacation_pic6",
                    "isFolder": false,
                    "filetype": "jpg",
                    "contents": "[JPEG IMAGE DATA]"
                }
            ],
        },
        {
            "filename": "workstuff",
            "isFolder": true,
            "files": [
                {
                    "filename": "specs",
                    "isFolder": false,
                    "filetype": "doc",
                    "contents": "Ugh sartorial messenger bag, +1 yr roof party tilde dreamcatcher McSweeney's small batch food truck crucifix. Sustainable bespoke post-ironic jean shorts iPhone, retro Marfa flannel. Paleo Intelligentsia American Apparel lo-fi before they sold out, viral drinking vinegar seitan kogi pour-over single-origin coffee readymade High Life quinoa VHS. Readymade keffiyeh Williamsburg semiotics Godard artisan. Seitan direct trade Thundercats artisan street art. Kitsch Kickstarter shabby chic cronut, church-key drinking vinegar fanny pack hoodie single-origin coffee pour-over chillwave. Trust fund authentic Marfa four dollar toast."
                },
                {
                    "filename": "package",
                    "isFolder": false,
                    "filetyle": "json",
                    "contents": "nothing here"
                },
                {
                    "filename": "assets",
                    "isFolder": true,
                    "files": [
                        {
                            "filename": "img",
                            "isFolder": true,
                            "files": [
                                {
                                    "filename": "megaman",
                                    "isFolder": false,
                                    "filetype": "png",
                                    "contents": "[PNG IMAGE DATA]"
                                },
                                {
                                    "filename": "testimg",
                                    "isFolder": false,
                                    "filetype": "png",
                                    "contents": "[PNG IMAGE DATA]"
                                },
                                {
                                    "filename": "testimg2",
                                    "isFolder": false,
                                    "filetype": "png",
                                    "contents": "[PNG IMAGE DATA]"
                                },
                                {
                                    "filename": "testimg3",
                                    "isFolder": false,
                                    "filetype": "png",
                                    "contents": "[PNG IMAGE DATA]"
                                }
                            ]
                        },
                        {
                            "filename": "js",
                            "isFolder": true,
                            "files": [
                                {
                                    "filename": "components",
                                    "isFolder": true,
                                    "files": [
                                        {
                                            "filename": "MyComponent",
                                            "isFolder": false,
                                            "filetype": "js",
                                            "contents": "define('MyComponent', function(){});"
                                        }
                                    ]
                                },
                                {
                                    "filename": "main",
                                    "isFolder": false,
                                    "filetype": "js",
                                    "contents": "var code = 'stuff';"
                                },
                                {
                                    "filename": "config",
                                    "isFolder": false,
                                    "filetype": "js",
                                    "contents": "window.config = {};"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "filename": "favicon",
            "isFolder": false,
            "filetype": "ico",
            "contents": "[GIF IMAGE DATA]"
        },
        {
            "filename": "secretfolder",
            "isFolder": true,
            "files": []
        }

    ]
}
},{}]},{},[1])


//# sourceMappingURL=bundle.js.map