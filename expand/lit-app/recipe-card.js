import { LitElement, html, css } from 'https://unpkg.com/lit@latest?module';

export class RecipeCard extends LitElement {
  static properties = {
    imgSrc: { type: String },
    imgAlt: { type: String },
    titleTxt: { type: String },
    titleLnk: { type: String },
    organization: { type: String },
    rating: { type: Number },
    numRatings: { type: Number },
    time: { type: String },
    ingredients: { type: String },
  };

  static styles = css`
    :host {
      font-family: sans-serif;
      display: block;
      width: 210px;
      max-width: 225px;
      overflow: hidden;
      border: 1px solid #ccc;
      border-radius: 8px;
      margin: 0;
			padding: 0;
    }
    
    img {
      width: 100%;
      height: 118px;
      object-fit: cover;
    }

    .container {
      padding: 0 16px 0px 16px;
    }

    .title {
      font-size: 16px;
      max-height: 2.8em;
      margin: 10px 1.5px 4px 1.5px;
      overflow: hidden;
      text-overflow: ellipsis;  
      text-wrap: none;
    }

    .title a {
      text-decoration: none;
      color: blue;
    }

    .title a:visited {
      color: purple;
    }

    .title a:hover {
      text-decoration: underline;
    }

    .organization {
      font-size: 12px;
      color: black;
      padding: 0;
    }

    .rating {
      display: flex;
      color: #70757A;
      font-size: 12px;
      align-items: center;
      gap: 4px;
      margin: 8px 0;
      padding: 0;
    }

    .rating img {
      height: 16px;
      width: auto;
      padding: 0;
    }

    time {
      font-size: 12px;
      color: #70757A;
      padding: 0;
    }
    
    .ingredients {
      font-size: 12px;
      margin-top: 8px;
      color: #70757A;
      line-height: 1.4em;
      max-height: 2.8em;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 0;
    }
  `;

  constructor() {
    super();
    this.imgSrc = '';
    this.imgAlt = '';
    this.titleTxt = '';
    this.titleLnk = '';
    this.organization = '';
    this.rating = 0;
    this.numRatings = 0;
    this.time = '';
    this.ingredients = '';
  }

  render() {
    return html`
      <img src="${this.imgSrc}" alt="${this.imgAlt}" />
      <div class="container">
        <p class="title">
          <a href="${this.titleLnk}" target="_blank">${this.titleTxt}</a>
        </p>
        <p class="organization">${this.organization}</p>
        <div class="rating">
          <span>${this.rating}</span>
          <img src="./assets/images/icons/${this.rating}-star.svg" alt="${this.rating} stars" />
          <span>(${this.numRatings})</span>
        </div>
        <time>${this.lengthTime}</time>
        <p class="ingredients">${this.ingredients}</p>
      </div>
    `;
  }
}

customElements.define('recipe-card', RecipeCard);
