class Fathump{
	constructor(num,element){
	 	this.num = num;
	 	this.element = element;
	}
	clickAction(){
		this.element.click (()=>{
			if(this.num < 10){
				this.num = add(this.num);
				$('#thump').css('-webkit-filter','grayscale(0)');
				setTimeout(function(){
					$(".addzan").css('display','none');
				},1000)
			}else{
				$('#thump').css('-webkit-filter','grayscale(1)');
				this.num = 0;
			}
			console.log(this.num);
		})
	}
}

class Thump extends Fathump{
	constructor(num,element){
		super(num,element);
	}
}

export default{Thump}