# jquery-html-editable
A tiny jquery replacement for contenteditable

### Whay another one?
This one will work with jquery.on. Just define a #container and the css-selector for editable elements (default: div.html_editable).
On click it will create a textarea.
On blur it will remove the textarea and update the text.
### Usage

     $('#container').html_editable(); // 'div.html-editable' elements in '#container'
     $('#container').html_editable('p.edit'); //all 'p.edit' elements in '#container'editable
     $('#container').html_editable('div.admin p.edit'); //only if some parent div has class admin 

### Todo
some autogrow feature for the texterea would be nice...

### Thanks
http://stackoverflow.com/a/2441686/1385546

