'use strict';

class Rotatepdf {
  constructor(inputFile, angle) {
    this.inputFile = inputFile;
    this.angle = angle;
  }

  run() {
    var command = `pdftk ${this.inputFile.path} cat 1-endeast output ${this.inputFile.path}.pdf`
    var cp = require('child_process');
    cp.exec(command, {timeout: 1000}, function(error, stdout, stderr) {
      if(stdout){
        console.log('stdout: ' + stdout);
      }
      if(stderr){
        console.log('stderr: ' + stderr);
      }
      if (error !== null) {
        console.log('Exec error: ' + error);
      }});
  }
}
