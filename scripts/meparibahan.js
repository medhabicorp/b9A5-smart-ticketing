let totalPrice=0;
let grandTotal=0;
let totalSelectedSeats=0;

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
    seat.addEventListener("click", function(event){

        event.target.setAttribute('disabled', false);

        const seatName=seat.innerText;
        const className=document.getElementById("seat-class").innerText;
        const priceText=document.getElementById("seat-fare").innerText;
        const price=parseInt(priceText);
        
        // seat count
        totalSelectedSeats++;
        if (totalSelectedSeats>4) {
            seat.classList.remove('bg-green-600');
            alert("You can select only 4 seats");
            return;
        }


        setTextElementValueById('total-seats-selected', totalSelectedSeats);

        // total price
        totalPrice+=price;
        grandTotal+=price;
        document.getElementById('total-amount').innerText=totalPrice;
        document.getElementById('grand-total').innerText=grandTotal;


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
           if(couponCode==="NEW15"){
            const discountedGrandTotal= document.getElementById('grand-total');
            discountedGrandTotal.innerText=totalPrice*0.85;
            document.getElementById("coupon-id").value="";
           }
           else if (couponCode==="COUPLE20"){
            const discountedGrandTotal= document.getElementById('grand-total');
            discountedGrandTotal.innerText=totalPrice*0.8;
            document.getElementById("coupon-id").value="";
            
           }
                else{
                    alert("invalid coupon");
                    couponElement="";
                }
        }
        else{
            alert("Buy at least 4 tickets");
            couponElement="";
        }
})