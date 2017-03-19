function verifMail(champ)
{
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifForm(f)
{
   var mailOk = verifMail(f.email);
   
   if(mailOK)
      return true;
   else
   {
      alert("Ce mail n'existe pas sur mon web");
      return false;
   }
}

   $(function() {
    $('#mail').hide(); // this or use css to hide the div
   $('#mail').delay(14000).fadeIn('slow');
});