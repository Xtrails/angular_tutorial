import { Component } from '@angular/core';
import {BlocksService} from "./block/blocks.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[BlocksService]
})
export class AppComponent {

  blocks = [];

  constructor( private blocksService: BlocksService ){}


  ngOnInit(){
    this.blocks = this.blocksService.blocks
    /*this.blocksService.getBlocks().subscribe(blocks=>{
      console.log(blocks)
    })*/
  }
}
