import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class BlocksService {

  constructor(private http: Http){

  }

  getBlocks(){
    return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb');
  }

  blocks = [
    {name:'WFM 1', link:'text title 1'},
    {name:'WFM 2', link:'text title 2'},
    {name:'WFM 3', link:'text title 3'},
    {name:'WFM 4', link:'text title 4'},
    {name:'WFM 5', link:'text title 5'},
    {name:'WFM 6', link:'text title 6'}
  ]
}
