import { Component, OnInit } from '@angular/core';
// import { ipcRenderer } from 'electron';
import { ElectronService } from '../../providers/electron.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = `App works !`;
  message = "";  

  constructor( public electronService: ElectronService ) {    
  }

  public mytestipc() {          
    this.electronService.ipcRenderer.send("hello-world");
  }

  public mytestcp() {
    this.electronService.childProcess.exec("node --version", (error, stdout, stderr) => {
      this.message="Node Version: " + stdout;
    });
    
  }

  ngOnInit() {
    this.electronService.ipcRenderer.on("hello-world-reply", () => {      
      this.message = "hello-world-reply recieved";
    })
    
  }

}
