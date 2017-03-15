var pageTemplDef = `
  <h3>{{title}}</h3>
  <img width="300" src="{{imgUrl}}">
  <p>{{babbel}}</p>
  <ul id="pageoptions">
    {{#each options}}
      <li data-option="{{@index}}">{{this.text}}</li>
    {{/each}}
  </ul>
`;