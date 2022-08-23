import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  id: string | null = ''

  constructor(private route: ActivatedRoute) {}

  ngOnInit(){
    // 'bank' is the name of the route parameter
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

  }

}
