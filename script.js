var b = 3
var c = 3
let d = 24
let e = 3
var player1id = ""
var player2id = ""

const Remover = function(exceptor){
  var elem = document.getElementById(exceptor);
    return elem.parentNode.removeChild(elem);
  }
const caller = function(identifyer) {
if(identifyer===1){player1id = "mono"; player2id = "robber"; document.body.style.backgroundImage = "url('http://travelhdwallpapers.com/wp-content/uploads/2014/02/The-Louvre-16.jpg')"}
  if(identifyer===2){player1id = "superman"; player2id = "batman"; document.body.style.backgroundImage = "url('http://www.wallpapermade.com/images/wallpapers/originals/gotham-city-at-night-wallpaper-3248.jpg')"}
  if(identifyer===3){player1id = "jake"; player2id = "finn"; document.body.style.backgroundImage = "url('http://cdn.wallpapersafari.com/56/16/hWl9Qt.jpg')"}
  if(identifyer===4){player1id = "rabbit"; player2id = "carrot"; document.body.style.backgroundImage = "url('http://www.engchou.com/i/2016/10/green-grass-field-wallpaper-high-resolution.jpg')"}
  if(true){ next = next;
    var newgame = document.createElement("button");
      newgame.style.position = "absolute"; newgame.style.top = "673px"
      newgame.style.left = "80px"
      newgame.innerHTML = "Choose Opposition";
      var body = document.getElementsByTagName("body")[0];
      body.appendChild(newgame);
      newgame.addEventListener ("click", function() {location.reload();})
var mazeGen = getMazeGenerator();
    mazeGen();
     Remover("supovsbato"); Remover("jakovsfino"); Remover("rabovscaro"); Remover("monovsrobo")
  }
};

InputTools = {
    num: function(id, lbl) {
        var inputElLbl = document.createElement('label');
        inputElLbl.htmlFor = id;
        inputElLbl.appendChild(document.createTextNode(lbl));

        return [inputEl,  inputElLbl];
    },
    checkbox: function(id, lbl) {
        var animCb = document.createElement('input');
        animCb.type = 'checkbox';
        animCb.id = id;

        var animLbl = document.createElement('label');
        animLbl.htmlFor = id;
        animLbl.appendChild(document.createTextNode(lbl));
        animLbl.style.marginRight = '20px';

        return [animCb, animLbl];
    }
};
    var next = 30
function getMazeGenerator(container) {

    var h = w = next,
        x = 0, y = 0,
        maze = new Array(w),
        path = [],
        cnv, ctx,
        intr,

        outlineSize = 1,
        squareSize = 20,
        totalSize = outlineSize + squareSize,
        squareBackgroundColor = '#ffffff',
        squareFillColor = '#00ff00',

        repAmt = function(){ return 1; },
        animationInProgress, stopAnimationCallback,
        requestAnimationFrame =
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          (alert('Your browser does not support requestAnimationFrame. ' +
                 'MazeGenJS will still work, but may be slower and laggy.' +
                 'Please upgrade your browser if you would like to get the ' +
                 'full experience. The latest version of Google Chrome or ' +
                 'Mozilla Firefox is recommended.'),
           function(f) { setTimeout(f, 1); });

    function init(animate) {
        // initialize squares
        for (var i = 0; i < w; i++) {
            maze[i] = new Array(h);
            for (var i2 = 0; i2 < h; i2++) {
                maze[i][i2] = new Square();
            }
        }

        path = [];
        x = y = 0;
        ctx.clearRect(0, 0, cnv.width, cnv.height);

        animationInProgress = true;
        if (animate) {
            tick();
        } else {
            generate();
        }
    }


    var MoveLookup = [
        ['top', 'bottom', 0, -1],
        ['left', 'right', -1, 0],
        ['bottom', 'top', 0, 1],
        ['right', 'left', 1, 0]
    ];


    function iteration() {

        maze[x][y].traversed = true;
        path.push([x, y]);


        var dirs = [
            y > 0     && !maze[x][y - 1].traversed,
            x > 0     && !maze[x - 1][y].traversed,
            y < h - 1 && !maze[x][y + 1].traversed,
            x < w - 1 && !maze[x + 1][y].traversed
        ];


        var indeces = shuffle([0, 1, 2, 3]);
        for (var i = 0; i < 4; i++) {
            if (dirs[indeces[i]]) {
                var lkp = MoveLookup[indeces[i]];
                maze[x][y][lkp[0]] = false;
                maze[x += lkp[2]][y += lkp[3]][lkp[1]] = false;
                return false;
            }
        }


        path.pop();
        if (path.length === 0) {
            draw();
            return true;
        }

        var oldLoc = path.pop();
        x = oldLoc[0];
        y = oldLoc[1];
        return false;
    }


    function draw(all) {
        for (var i = (all ? 0 : x - 1); i < (all ? w : x + 2); i++) {
            for (var i2 = (all ? 0 : y - 1); i2 < (all ? h : y + 2); i2++) {
                if ((!maze[i]) || (!maze[i][i2])) continue;
                var squareToDraw = maze[i][i2];
                if (squareToDraw.traversed) {
                    var sqX = i * totalSize,
                        sqY = i2 * totalSize;
                    // fill the background
                    ctx.fillStyle = squareBackgroundColor;
                    ctx.fillRect(sqX, sqY, totalSize, totalSize);
                    // fill the borders
                    ctx.fillStyle = squareFillColor;
                    if (squareToDraw.top) {
                        ctx.fillRect(sqX, sqY,  totalSize, outlineSize);
                    }
                    if (squareToDraw.left) {
                        ctx.fillRect(sqX, sqY,  outlineSize, totalSize);
                    }
                    if (squareToDraw.bottom) {
                        ctx.fillRect(sqX, sqY + squareSize, totalSize, outlineSize);
                    }
                    if (squareToDraw.right) {
                        ctx.fillRect(sqX + squareSize, sqY, outlineSize, totalSize);
                    }
                }
            }
        }





var end = document.getElementById("door");
ctx.drawImage(end, cnv.width-17, cnv.width-20);
var player1 = document.getElementById(player1id);
ctx.drawImage(player1, b, c);
var player2 = document.getElementById(player2id);
ctx.drawImage(player2, d, e);
	}
	document.onkeydown = function(event) {
     move(event);
  if([37,38,39,40].indexOf(event.keyCode) > -1){
    event.preventDefault();
  }
       return false;
   }
	let d = 24
	let e = 3


let move = function(event)
		{
	if (event.which == 68 || event.keyCode == 68) { if(maze[(d-3)/21][(e-3)/21].right === false){
			clearer2 ();
            d+=21
            drawer2(player2id); }

		  }

	if (event.which == 65 || event.keyCode == 65) { if(maze[(d-3)/21][(e-3)/21].left === false){
			clearer2 ();
            d-=21
            drawer2(player2id); }

		  }

	 if (event.which == 83 || event.keyCode == 83) { if(maze[(d-3)/21][(e-3)/21].bottom === false){
			clearer2 ();
            e+=21
            drawer2(player2id); }

		  }

	 if (event.which == 87 || event.keyCode == 87) { if(maze[(d-3)/21][(e-3)/21].top === false){
			clearer2 ();
            e-=21
            drawer2(player2id); }

		  }

	if (event.which == 39 || event.keyCode == 39) { if(maze[(b-3)/21][(c-3)/21].right === false){
			clearer1();
            b+=21
            drawer1(player1id); }

		  }
		  if (event.which == 37 || event.keyCode == 37) { if(maze[(b-3)/21][(c-3)/21].left === false){
			  clearer1();
                 b-=21
                 drawer1(player1id); }
		}
		if (event.which == 40 || event.keyCode == 40) { if(maze[(b-3)/21][(c-3)/21].bottom === false){
			clearer1();
		             c+=21
drawer1(player1id); }
    }
		if (event.which == 38 || event.keyCode == 38) { if(maze[(b-3)/21][(c-3)/21].top === false){
			clearer1();
                 c-=21
                 drawer1(player1id);}

		}


	}
	let clearer2 = function() {
		ctx.clearRect(d,e, 17, 17)
		}
  let clearer1 = function (){
	  ctx.clearRect(b,c,15,15)
	  }
    let drawer1 = function(play1) {
	if (b === d && c === e) {
		alert("Black player wins");}
    if((b-3)/21===29 && (c-3)/21 === 29) { //win condition

       alert("xuy ego");
       console.log('yaxq');
    }

      else{
        var player1 = document.getElementById(play1);
ctx.drawImage(player1, b, c);
       //var img = document.getElementById("scream");
       //ctx.drawImage(img, b, c)
  }
 }
let drawer2 = function(play2) {
	if (b === d && c === e) {
		alert("Black player wins");}
    if((d-3)/21===29 && (e-3)/21 === 29) { //win condition

       alert("xuy ego");
       console.log('yaxq');
    }

      else{

var player2 = document.getElementById(play2);
ctx.drawImage(player2, d, e);

  }
 }




    function tick() {
        for (var i = 0; i < repAmt(); i++) {
            if (iteration()) {
                x = y = -1;
                draw();
                animationInProgress = false;
                return;

            }
            draw();
        }
        if (animationInProgress) requestAnimationFrame(tick);
        else if (stopAnimationCallback) stopAnimationCallback();
    }


    function stopTick(callback) {
        animationInProgress = false;
        stopAnimationCallback = callback;
    }


    function mazeFinished() {
        return !animationInProgress;
    }


    function generate() {
        while (!iteration()) {}
        x = y = -1;
        draw(true);
        animationInProgress = false;
    }

    cnv = document.createElement('canvas');
    cnv.width = totalSize * w;
    cnv.height = totalSize * h;
    cnv.style.border = '1px solid black';
    (container || document.body).appendChild(cnv);
    ctx = cnv.getContext('2d');

    var options = document.createElement('div');
    var optForm = document.createElement('form');
    var addOption = function(arr) {
        for (var i = 0; i < arr.length; i ++) options.appendChild(arr[i]);
        options.appendChild(document.createElement('br'));
    };

    var animCb = InputTools.checkbox('animCb', 'Animate');
    addOption(animCb);

    var submitBtn = document.createElement('input');
    submitBtn.type = 'submit';
    submitBtn.value = 'Generate';
    optForm.appendChild(submitBtn);

    optForm.onsubmit = function(e) {
        e.preventDefault();
        if (mazeFinished()) {
            init(animCb[0].checked);
        } else {
            stopTick(function(){ init(animCb[0].checked); });
        }
    };
    options.appendChild(optForm);
    document.body.appendChild(options);


    function Square() {
        this.top = true;
        this.left = true;
        this.bottom = true;
        this.right = true;
        this.traversed = false;
    }

    function shuffle(arr) {
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
        return arr;
    }

    return init;
}
