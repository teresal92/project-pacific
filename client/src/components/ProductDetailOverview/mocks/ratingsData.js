// https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/meta?product_id=42366
const reviewsData = {
  "product_id": "42366",
  "ratings": {
      "1": "25",
      "2": "13",
      "3": "58",
      "4": "118",
      "5": "66"
  },
  "recommended": {
      "false": "75",
      "true": "205"
  },
  "characteristics": {
      "Fit": {
          "id": 142032,
          "value": "3.4276315789473684"
      },
      "Length": {
          "id": 142033,
          "value": "3.1619718309859155"
      },
      "Comfort": {
          "id": 142034,
          "value": "3.6344827586206897"
      },
      "Quality": {
          "id": 142035,
          "value": "3.2413793103448276"
      }
  }
}

const ratingsData = reviewsData.ratings;

export default ratingsData;
