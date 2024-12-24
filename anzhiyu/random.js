var posts=["2024/12/24/C/","2024/12/24/C-1/","2024/12/24/Spark/","2024/12/24/Flink/","2024/12/24/Hadoop/","2024/12/24/code/","2024/12/17/hello-world/","2024/12/24/java/","2024/12/24/python/","2024/12/24/scala/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };