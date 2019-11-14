var $cardColors = document.querySelectorAll('.card-colors');

for (var i=0; i<$cardColors.length; i++){
    $cardColors[i].addEventListener('click', function(){
        var $card = this.parentNode.parentNode.parentNode;

        $card.dataset.color = this.dataset.color;
        for (var position=0; position<$cardColors.length; position++){
            $cardColors[position].classList.remove('isActive');
        }
        this.classList.add('isActive');
    });
}

var $cards = document.querySelectorAll('.card');

for(var i=0; i<$cards.length; i++){
    $cards[i].addEventListener('click', function(event){
        var $this = event.target;
        var $card = $this;

        $card.dataset.color = $this.dataset.color;

    });
}