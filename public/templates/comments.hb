<h3>Comments</h3>
{{#each comments}}
 <div class="comment">
  {{this.content}} <span>posted by {{this.user}} on {{this.createdAt}}</span>
 </div>
 {{/each}}
