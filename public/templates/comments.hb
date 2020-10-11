<h3>Comments</h3>
{{#each comments}}
 <div class="comment">
  {{this.content}} <span class="commented-by">posted by {{this.user}} on {{this.createdAt}}</span>
 </div>
 {{/each}}
