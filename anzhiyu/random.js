var posts=["2024/09/01/Bulk_Crap_Uninstaller/","2024/08/14/hello-world/","2024/09/03/LeagueCraft/","2025/01/22/snowy-skirmish/","2025/02/01/hasf/","2025/01/22/ttr/","2024/09/07/how_to_use_createchat/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };