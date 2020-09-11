// write your code here

const JSX = (
  <div>
    <h1>JSX Nested HTML</h1>
    <p>All tags nested within a div</p>
    <ul>
      <li>i0</li>
      <li>i1</li>
      <li>i2</li>
    </ul>  
  </div>
)

/*
This one parent element would wrap all of the other levels of nested elements.

For instance, several JSX elements written as siblings with no parent wrapper element will not transpile.

Valid JSX:

<div>
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
  <p>Paragraph Three</p>
</div>

Invalid JSX:

<p>Paragraph One</p>
<p>Paragraph Two</p>
<p>Paragraph Three</p>
*/