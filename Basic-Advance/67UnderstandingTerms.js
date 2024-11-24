// Node vs Element
// Attribute vs Properties
// createElement, createTextNode, createComment



// ~~~~~ Node vs Element ~~~~~ //

// HTML => DOM (Nodes)
// Everything we write in HTML gets converted into nodes, it can be elements like head, comment, even enter we press for space.
// Element are special kind of nodes that can only be specified using HTML tags like h1, p, div.

// dir(document.querySelector('#main'));
// --- Special Properties ---
// children          : only returns the elements                                  [  <div id="main">    ]  
// childNode         : returns node also , text (space), comment, elements        [                     ]   
// firstChild        : text(node)                                                 [    <h1>somthing</>  ]     
// firstElementChild : h1(element)                                                [    <h2> --- </>     ]    
// lastChild         : text                                                       [    <p> ---- </>     ]      
// lastElementChild  : p                                                          [  </div>             ]    
  


// ~~~~~ HTML Atrribute and DOM Properties ~~~~~ //         both are same but

// In the context of HTML and JS , it becomes a bit confusing, to display anything we write HTML and browser generate DOM based on HTML.
// HTML: <a href="link.com"> CLICK </a>         <=  =>          DOM: { tageName: 'A', href: 'link.com' }
//     here ~href~ is "attribute"                         here ~href~ is "property" because it is inside object.
// <div class="node" id="main">    In DOM/dir#main/asObject:   id='main', but class changes to className="node"
// HTML attributes becomes DOM properties : Attribute belongs to HTML but Properties belongs to DOM (object) created using the HTML.



// ~~~~~ createElement, createTextNode, createComment ~~~~~ //

// let p = document.createElement('p');                        => <p></p>
// let hello = document.createTextNode('Hello World!');        => "Hello World!"
// let comment = document.createComment("Comment Text");       => <!--Comment Text-->

// p.append(hello, comment);                                   => <p>"Hello World!"
//                                                                   <!--Comment Text-->
//                                                                </p>


 