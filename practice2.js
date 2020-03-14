var Johntips= []
var total= []
var John ={
    bills : [124, 48, 268, 180, 42],
    tipCalculator : function(){
       
        for (var i=0; i< this.bills.length; i++){
            if (this.bills[i] < 50 ){
                this.tips = this.bills[i] * .2
            }else if ( this.bills[i] >= 50 && this.bills[i] < 200){
                this.tips = this.bills[i] * .15
            } else {
                this.tips = this.bills[i] * .10
            }
            Johntips.push(John.tips)
            total.push(John.tips + this.bills[i])
        }
      
    }
};
John.tipCalculator();

var Mark ={
    bills : [77, 375, 110, 45]
}
var Marktips =[]
function tipCalculator(){
    for ( var i = 0; i < Mark.bills.length; i++){
        if (Mark.bills[i] < 100 ){
            Mark.tips = Mark.bills[i] * .2
        }else if (Mark.bills[i] >= 100 && Mark.bills[i] < 300){
            Mark.tips = Mark.bills[i] * .10
        }else {
            Mark.tips = Mark.bills[i] * .25
        }
        Marktips.push(Mark.tips)
    }
}
tipCalculator()
console.log(Marktips)
function averageTip(tips){
    var sum = 0
    for ( var i=0; i < tips.length; i++){
        sum += tips[i]
    }
    return sum / tips.length
}
var markaverage = averageTip(Marktips)
var Johnaverage = averageTip (Johntips)
console.log(Johntips)
console.log(markaverage, Johnaverage)
