<ul class="comments">
{{#each comments}}
  <li>{{this.content}} <span>posted by {{this.user}} at {{this.createdAt}}</span></li>
 {{/each}}
</ul>