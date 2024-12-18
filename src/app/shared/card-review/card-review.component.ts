import { Component } from '@angular/core';

@Component({
  selector: 'app-card-review',
  templateUrl: './card-review.component.html',
  styleUrls: ['./card-review.component.scss']
})
export class CardReviewComponent {
  review = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ullam aspernatur nobis perferendis doloremque," +
  "alias rerum officiis nisi corrupti quos, quas culpa itaque sapiente id voluptates natus amet optio in.";

  user = "Mary Jane";
}
