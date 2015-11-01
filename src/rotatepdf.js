'use strict';

class Rotatepdf {
  constructor(inputFile, angle) {
    this.inputFile = inputFile;
    this.angle = angle;
  }

  execute_command() {
    var angle_option = '';

    if (this.angle == 0) {
      angle_option = '1-endnorth'
    } else if (this.angle == 90) {
      angle_option = '1-endeast'
    } else if (this.angle == 180) {
      angle_option = '1-endsouth'
    } else if (this.angle == 270) {
      angle_option = '1-endwest'
    }

    return `pdftk ${this.inputFile.path} cat ${angle_option} output ${this.inputFile.path}${this.angle}.pdf`
  }

  run() {
    var command = this.execute_command();
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
