$(init);

function init(){
var canvas = $(".canvas");
var svg = $("svg");
console.log(svg);
setTextPosition();

$( ".c1" ).draggable({
    snap: "#div1",
    snapMode: "outer", 
    drag:function(e, ui){
        //console.log(svg);        
        ui.helper["0"].setAttribute('cx',ui.position.left);
        ui.helper["0"].setAttribute('cy',ui.position.top);
        //set line attributes
        svg["0"].childNodes["1"].childNodes["1"].setAttribute('x1',ui.position.left);
        svg["0"].childNodes["1"].childNodes["1"].setAttribute('y1',ui.position.top);
        setTextPosition();
    },
    stop:function(e,ui){
        //console.log(ui);
        console.log($(this).data("ui-draggable"));
    }
});

$( ".c2" ).draggable({
    snap: "#div2",
    snapMode: "outer",
    drag:function(e, ui){
        ui.helper["0"].setAttribute('cx',ui.position.left);
        ui.helper["0"].setAttribute('cy',ui.position.top);
        //set line attributes
        svg["0"].childNodes["1"].childNodes["1"].setAttribute('x2',ui.position.left);
        svg["0"].childNodes["1"].childNodes["1"].setAttribute('y2',ui.position.top);   
        setTextPosition();     
    },
    stop:function(e,ui){
        // console.log(ui);
        console.log($(this).data("ui-draggable"));
    }
});

function setTextPosition(){
    var x1= parseInt(svg["0"].childNodes["1"].childNodes["1"].getAttribute('x1'));
    var y1= parseInt(svg["0"].childNodes["1"].childNodes["1"].getAttribute('y1'));
    var x2= parseInt(svg["0"].childNodes["1"].childNodes["1"].getAttribute('x2'));
    var y2= parseInt(svg["0"].childNodes["1"].childNodes["1"].getAttribute('y2'));
    var avgX=((x1+x2)/2)-20;
    var avgY=((y1+y2)/2)-5;
    svg["0"].childNodes["1"].childNodes["5"].setAttribute('x',avgX );
    svg["0"].childNodes["1"].childNodes["5"].setAttribute('y', avgY);
}

$("#div1").draggable({
        drag:function(e,ui){
    }
})
.attr("box-id",1)

$("#div2").draggable({
})
.attr("box-id",2)

canvas.droppable({
})

}

