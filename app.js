$(document).ready(() => {
  let defaultText = `\
# Welcome to my Markdown Previewer
## This is a subheading
 \`this is an example of inline code\`
 
[Knowledge](https://en.wikipedia.org/wiki/Main_Page)

    () => {    
       let string = 'This is multi-line code'
       return string
      }

1. List item 1
2. List item 2
3. List item 3
  
>Block quotes!!
>
>>Another!

![Allman Brothers with special guest ERIC CLAPTON!!](https://www.whereseric.com/sites/default/files/article-images/Derek-McCabe-Hittin-the-Note3_0.jpg)
  
**Bold**
  `;

  $("#editor").val(defaultText);
  $("#preview").html(marked($("#editor").val()));
  $("#editor").on("input", () => {
    $("#preview").html(marked($("#editor").val()));
    // console.log(marked($("#editor").val()));
  });
});
