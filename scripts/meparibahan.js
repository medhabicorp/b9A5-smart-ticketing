let totalPrice=0;
let grandTotal=0;

function getTextElementValueById(elementId){
    const element=document.getElementById(elementId);
    const elementValueText=element.innerText;
    const value=parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText=value;
}


const seats=document.querySelectorAll(".seat");
// console.log(seats);

for (let i = 0; i < seats.length; i++) {
    const seat = seats[i];
    // console.log(seat.innerText);
    seat.addEventListener("click", function(){
        
        seat.classList.add('bg-green-600');
        
        const seatName=seat.innerText;
        const className=document.getElementById("seat-class").innerText;
        const priceText=document.getElementById("seat-fare").innerText;
        const price=parseInt(priceText);
        // console.log(seatName, className, priceText);
        
        // seat count
        const currentSeat = getTextElementValueById('total-seats-selected');
        const totalSelectedSeats = currentSeat + 1;
        setTextElementValueById('total-seats-selected', totalSelectedSeats);

        // total price
        totalPrice+=price;
        grandTotal+=price;
        document.getElementById('total-amount').innerText=totalPrice;
        document.getElementById('grand-total').innerText=grandTotal;

        if (totalSelectedSeats>4) {
            alert("You can select only 4 seats");
            seat.setAttribute('disabled');
            TotalSeatsLeft.setAttribute('disabled');
        }

        // seat no reduce
        const currentTotalSeat = getTextElementValueById('seat-left');
        const TotalSeatsLeft = currentTotalSeat - 1;
        setTextElementValueById('seat-left', TotalSeatsLeft);
        
        // seat Name append 
        const selectedSeatName=document.getElementById("selected-seat-name");

        const seatNameField=document.createElement("p");
        seatNameField.innerText=seatName;
        selectedSeatName.appendChild(seatNameField);

        // seat Class Append 
        const selectedSeatClass=document.getElementById("seat-class-name");

        const seatClassField=document.createElement("p");
        seatClassField.innerText=className;
        selectedSeatClass.appendChild(seatClassField);

        // seat fare append 
        const selectedSeatPrice=document.getElementById("seat-price-amount");

        const seatPriceField=document.createElement("p");
        seatPriceField.innerText=price;
        selectedSeatPrice.appendChild(seatPriceField);
        
    })
}

    const applyBtn=document.getElementById("apply-btn");
    applyBtn.addEventListener("click", function(){

        const couponElement=document.getElementById("coupon-id").value;
        const couponCode=couponElement.split(" ").join("").toUpperCase();
        

        if (totalPrice>=2200) {
           if(couponCode=== "NEW15"){
            
            const discountedGrandTotal= document.getElementById('grand-total');
            discountedGrandTotal.innerText=totalPrice*0.85;
           }
           else if (couponCode=== "couple20"){
            const discountedGrandTotal= document.getElementById('grand-total');
            discountedGrandTotal.innerText=totalPrice*0.8;
            
           }
                else{
                    alert("invalid coupon");
                }
        }
        else{
            alert("Buy at least 4 tickets");
        }
})