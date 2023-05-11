document.querySelector("#ticket-form button.close-button").addEventListener("click", function() {
    document.querySelector("#ticket-form").classList.add("hidden");
  });
  
  document.querySelector("#buy").addEventListener("click", function() {
    // Создаем новый XML-документ
    var xmlDoc = document.implementation.createDocument(null, "tickets");
  
    // Получаем значения полей формы
    var name = document.querySelector("#ticket-form #name").value;
    var cinema = document.querySelector("#ticket-form #cinema").value;
    var row = document.querySelector("#ticket-form #row").value;
    var seat = document.querySelector("#ticket-form #seat").value;
    var date = document.querySelector("#ticket-form #date").value;
    var time = document.querySelector("#ticket-form #time").value;
    var email = document.querySelector("#ticket-form #email").value;
    var phone = document.querySelector("#ticket-form #phone").value;
    var payment = document.querySelector("#ticket-form input[name='payment']:checked").value;
  
    // Создаем элементы XML и добавляем их в документ
    var appendNewLine = function(parentElement) {
        parentElement.appendChild(xmlDoc.createTextNode("\n  "));
      };

    var ticketElement = xmlDoc.createElement("ticket");
    xmlDoc.documentElement.appendChild(ticketElement);

    appendNewLine(ticketElement);
    var nameElement = xmlDoc.createElement("name");
    nameElement.appendChild(xmlDoc.createTextNode(name));
    ticketElement.appendChild(nameElement);
  
    appendNewLine(ticketElement);
    var cinemaElement = xmlDoc.createElement("cinema");
    cinemaElement.appendChild(xmlDoc.createTextNode(cinema));
    ticketElement.appendChild(cinemaElement);
  
    appendNewLine(ticketElement);
    var rowElement = xmlDoc.createElement("row");
    rowElement.appendChild(xmlDoc.createTextNode(row));
    ticketElement.appendChild(rowElement);
  
    appendNewLine(ticketElement);
    var seatElement = xmlDoc.createElement("seat");
    seatElement.appendChild(xmlDoc.createTextNode(seat));
    ticketElement.appendChild(seatElement);
  
    appendNewLine(ticketElement);
    var dateElement = xmlDoc.createElement("date");
    dateElement.appendChild(xmlDoc.createTextNode(date));
    ticketElement.appendChild(dateElement);
  
    appendNewLine(ticketElement);
    var timeElement = xmlDoc.createElement("time");
    timeElement.appendChild(xmlDoc.createTextNode(time));
    ticketElement.appendChild(timeElement);
  
    appendNewLine(ticketElement);
    var emailElement = xmlDoc.createElement("email");
    emailElement.appendChild(xmlDoc.createTextNode(email));
    ticketElement.appendChild(emailElement);
  
    appendNewLine(ticketElement);
    var phoneElement = xmlDoc.createElement("phone");
    phoneElement.appendChild(xmlDoc.createTextNode(phone));
    ticketElement.appendChild(phoneElement);
  
    appendNewLine(ticketElement);
    var paymentElement = xmlDoc.createElement("payment");
    paymentElement.appendChild(xmlDoc.createTextNode(payment));
    ticketElement.appendChild(paymentElement);

    appendNewLine(ticketElement);
  
    // Преобразуем XML-документ в строку
    var xmlString = new XMLSerializer().serializeToString(xmlDoc);
  
    // Создаем ссылку для скачивания XML-файла
    var a = document.createElement("a");
    var file = new Blob([xmlString], {type: "text/xml"});
    a.href = URL.createObjectURL(file);
    a.download = "ticket.xml";
    a.click();
  });
  
  document.querySelector("#show-ticket-form").addEventListener("click", function() {
    document.querySelector("#ticket-form").classList.remove("hidden");
  });
  