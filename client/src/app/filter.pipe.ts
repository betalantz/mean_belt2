import { Pipe, PipeTransform } from '@angular/core';
import { Bidder } from './bidder'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(bids: Array<Bidder>, search_text?: string): Array<Bidder> {
    if(!search_text) {return bids}
    
    search_text = search_text.toLowerCase()

    return bids.filter(bidder => bidder.name.toLowerCase().includes(search_text) || String(bidder.amount).includes(search_text));
  }

}
