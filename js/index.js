// example request using ajax get.
// $.get('data/condensed_data.json', function(data){
//   for (var i = 0; i < data.data.length; i++) {
//     var element = document.createElement("div");
//     var inner = document.createTextNode(data.data[i].author);
//     element.appendChild(inner);
//     document.getElementById('demo').appendChild(element);
//   }
// });

// Example using the Non JQuery AJAX XMLHttpRequest;
// var req = new XMLHttpRequest();
// req.open('GET', 'data/condensed_data.json', true);
// req.send();
// req.onreadystatechange = function (){
//   if (req.readyState === XMLHttpRequest.DONE) {
//     console.log('typeof req.response',typeof req.response);
//     var data = JSON.parse(req.response)
//     console.log(data);
//     for (var i = 0; i < data.data.length; i++) {
//       var element = document.createElement("div");
//       var inner = document.createTextNode(data.data[i].author);
//       element.appendChild(inner);
//       document.getElementById('demo').appendChild(element);
//     }
//   }
// }
window.onload = function () {
  var req = new XMLHttpRequest();
  req.open('GET', 'data/condensed_data.json', true);
  req.send();
  req.onreadystatechange = function (){
    if (req.readyState === XMLHttpRequest.DONE) {
      var data = JSON.parse(req.response)
      window.reddit_feed = data;
      //______
      startProcess();
    }
  }
  var time = document.querySelectorAll('.time')
  for (var i = 0; i < time.length; i++) {
    var unixTime = time[i].innerHTML;
    time[i].innerHTML = moment.unix(unixTime);
  }
}
//All Custom Code in here:
function startProcess(){
for (i = 0; i < window.reddit_feed.data.length; i++){
  var currentArticle = window.reddit_feed.data[i];
  console.log(currentArticle.author);

//create html elements in memory
  var container = document.createElement("div");
  container.className = "col-sm-12 col-md-4";

  var post = document.createElement('div');
  var title = document.createElement("div");
  post.className = "post";
  container.appendChild(post);

  var thumbnail = document.createElement('div');
  container.appendChild(thumbnail);

  var link = document.createElement("a");
  link.href = "javascript.void('0')";
  container.appendChild(link);

  var author = document.createElement('div');
  //assign elements a value:
  title.innerHTML = currentArticle.title;
  link.innerHTML = currentArticle.link;
  //nest elements inside each other:

  container.className = "col-sm-4 col-md-10";
  author.className = "col-sm-5 col-md-9";
  var post = document.createElement('div');
  container.appendChild(title);
  container.appendChild(thumbnail);

  document.getElementById("main").appendChild(container);

  }
}



