var list = event.srcElement.parentElement.parentElement.children.tags("DIV");

if (list.length > 0)
{
  var child = list[0]; 
  var st = child.style;
  if (st)
    if (st.display=="none")
    {
      child.style.display="";
      event.srcElement.src = "minus.gif";
    }
    else
    {
      child.style.display="none";
      event.srcElement.src = "plus.gif";
    }
}
