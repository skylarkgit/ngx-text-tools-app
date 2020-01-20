import DiffMatchPatch from 'node_modules/diff-match-patch';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-text-tools-app';
  words = ['apple', 'worst', 'people', 'stable', 'cable', 'able', 'watch', 'drought', 'caught'];
  results = [];
  dmp = new DiffMatchPatch();
  term = '';

  onSearchRank() {
    const dist = this.words.map(word => ({val: word, dist: this.dmp.diff_levenshtein(this.dmp.diff_main(word, this.term))}));
    this.results = dist.sort((val1, val2) => val1.dist > val2.dist ? 1 : (val1.dist === val2.dist ? 0 : -1)).map(word => word.val);
  }
}
