function validate() {
if (document.myform.Name.value == "")
{
  alert( "Please provide your name!" );
  document.myform.Name.focus() ;
  return false;
}

if (document.myform.EMail.value == "")
{
  alert( "Please provide your EMail!" );
  document.myform.EMail.focus() ;
  return false;
}

  var emailID = document.myForm.EMail.value;
  atpos = emailID.indexOf("@");
  dotpos = emailID.lastIndexOf(".");

  if(atpos < 1|| ( dotpos - atpos < 2 )) {
    alert("Please enter correct email ID")
    document.Myform.EMail.focus() ;
    return false;
    }

  if( document.MyForm.Postcode.value == "")
  {
      alert("please provide a postcode in the format ### ###." );
      document.myForm.Postcode.focus() ;
      return false;
  }

  if( document.MyForm.Choice.value == "-1")
  {
      alert("Please select your choice!" );
      return false;
  }
    return( true );
}
