
//Asus page table invormation
 var laptops = [];
 
     function Laptop(model, specs, price){    //Giver them appropriate names
       this.model = model;
       this.specs = specs;     //this.var   call and then replace function
       this.price = price;
       this.print = function(){
         console.log("Laptop - " + "Model : " + this.model + "\n" + "First Name : " + this.specs + "\n" + "Last Name : " + this.price  );
       }  // one column will be looking like this
     }
 
     laptops.push(new Laptop("ZenBook 3 Deluxe UX 490", "i7, 16 GB Ram, 512 GB SSD",  "$1700")); // information
     laptops.push(new Laptop("ZenBook Flip S UX370", "i5 8 GB Ram 256 GB SSD", "$1300"));
     laptops.push(new Laptop("ZenBook UX330", "i5 8 GB Ran 256 GB SSD", "$1000"));
     laptops.push(new Laptop("ZenBook UX430", "i3 8 GB Ram 256 GB SSD",  "$900"));
     laptops.push(new Laptop("VivoBook Flip TP510  ", "i3 8 GB Ram 128 GB SSD",  "$800"));
 
     var btn = document.getElementById("show-prices");   // button work
     var tableBody = document.getElementById("table-body");  // get the table
 
     btn.addEventListener('click', ()=>{
       laptops.forEach((laptop)=>{
         var tableRow = document.createElement("tr");
 
         tableRow.innerHTML = "<th scope='row'>" + laptop.model + "</th><td>" + laptop.specs + "</td><td>" + laptop.price + "</td>";	
         
         tableBody.appendChild(tableRow);
         laptop.print();
       });
       document.getElementById("show-prices").hidden = 'true';  //hide the button after click
       
 
     });
       
 