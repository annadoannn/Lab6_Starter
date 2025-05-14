import { LitElement, html, css } from 'https://unpkg.com/lit@latest?module';

class RecipeCard extends LitElement {
  static styles = css`
    :host {
      font-family: sans-serif;
      display: block;
      border: 1px solid #ccc;
      border-radius: 8px;
      width: 178px;
      padding: 16px;
    }

    img {
      width: 100%;
      border-radius: 8px;
    }

    .title {
      font-weight: bold;
      margin: 8px 0;
    }

    .rating {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .ingredients {
      font-size: 12px;
      margin-top: 8px;
    }

  `;

  static properties = {
    imgSrc: { type: String },
    imgAlt: { type: String },
    titleTxt: { type: String },
    titleLnk: { type: String },
    organization: { type: String },
    rating: { type: Number },
    numRatings: { type: Number },
    lengthTime: { type: String },
    ingredients: { type: String }
  };

  constructor() {
    super();
    // default values 
    this.imgSrc = "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg";
    this.imgAlt = "Default recipe image";
    this.titleTxt = "Sample Recipe";
    this.titleLnk = "https://example.com";
    this.organization = "Example Org";
    this.rating = 4;
    this.numRatings = 123;
    this.lengthTime = "30 min";
    this.ingredients = "Salt, Pepper, Olive Oil";
    }

  render() {
    return html`
      <img src="${this.imgSrc}" alt="${this.imgAlt}">
      <div class="title">
        <a href="${this.titleLnk}" target="_blank">${this.titleTxt}</a>
      </div>
      <div>${this.organization}</div>
      <div class="rating">
        <span>${this.rating} ⭐</span>
        <span>(${this.numRatings})</span>
      </div>
      <div><time>${this.lengthTime}</time></div>
      <div class="ingredients">${this.ingredients}</div>
    `;
  }
}

customElements.define('recipe-card', RecipeCard);
