            // ~~~~~ Properties - selected ones ~~~~~ //

// innerHTML : when we update innerHTML property style gets converted.
// innerText : when we update innerText property nothing gets converted.

// children  : it lets us know about children elements: changable.
// style     : we can style any element. (header.style.color = "red");
// tagName   : give us the name of element in upper case (in browser), this property usually use to know the element.

// value     : input element - text.value = "--";
// href      : anchor tag - a.href = "--";
// src       : images - img.src = "--";



                        // ~~~~~ Methods ~~~~~ // 

// getAttribute  : h1.getAttribute('class') ; using the getAtt method we can get the value of any HTML element att of class and id.
// setAttribute  : div.setAttribute('id', 'test') ; using this method we can set new class or id in any element.
// hasAttribute  : h1.getAttribute('class') ; if has then it returns True, if no then false.

// createElement : let li = document.createElement('li'); (li.className = "List"; li.innerText = "QuerySelector"; li2.innerText = 'createElement')
// append        : let ul = document.querySelector('ul');     <--   ul.append(li);   ul.append(li2)   -->     append adds the element as lastChild element.
// prepend       : ul.prepend(li2); it added on top of the list: prepend adds the element as firstChild element.
// remove        : let rm =  document.createElement('li');   <--   (rm.remove())   -->    used for removing firstChild elements.

// classList     : h1.className = "heading2"; -- h1.classList.add('heading); -- h1.classList.remove('heading2'); 
// toggle        : h1.classList.toggle('heading') => it will remove if exist, it will add if doesn't exist.
                   

