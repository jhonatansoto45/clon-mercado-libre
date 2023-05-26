import { Injectable } from "@angular/core"
import { IReview } from "src/app/interfaces"

@Injectable({
  providedIn: "root",
})
export class ReviewsService {
  reviews: IReview[] = [
    {
      type: "Positiva",
      user: "david",
      review: "Buen producto",
      date: "23/05/2023",
      rating: 4,
    },
    {
      type: "Positiva",
      user: "david",
      review: "Buen producto",
      date: "23/05/2023",
      rating: 3,
    },
    {
      type: "Positiva",
      user: "david",
      review: "Buen producto",
      date: "23/05/2023",
      rating: 3,
    },
    {
      type: "Negativa",
      user: "david",
      review: "Buen producto",
      date: "23/05/2023",
      rating: 2,
    },
    {
      type: "Negativa",
      user: "david",
      review: "Buen producto",
      date: "23/05/2023",
      rating: 2,
    },
  ]

  constructor() {}

  get allReviews(): IReview[] {
    return this.reviews
  }

  get allPositiveReviews(): IReview[] {
    return this.reviews.filter((item) => item.type === "Positiva")
  }

  get allNegativeReviews(): IReview[] {
    return this.reviews.filter((item) => item.type === "Negativa")
  }
}