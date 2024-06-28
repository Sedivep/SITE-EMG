function sendEmail() {

    var name = document.getElementById("name").value;
    var pessoa = document.getElementById("pessoa").value;
    var email = document.getElementById("email").value;
    var data = document.getElementById("data").value;
    var factura = document.getElementById("factura").value;
    var Sn = document.getElementById("Sn").value;
    var message = document.getElementById("message").value;


    var messageBody ="Cliente: " + name +
        "<br>Pessoa de Contacto: " + pessoa +
        "<br>Contacto Email: " + email +
        "<br>Data: " + data +
        "<br>Nº da Factura: " + factura +
        "<br>Nº de Série do Equipamento: " + Sn +
        "<br>Descrição da Avaria: " + message;

        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "david@emg.com.pt",
            Password : "349BFCC98FA837E2DCD7A8AEEC8204BF9BB5",
            To : 'david@emg.com.pt',
            From : "david@emg.com.pt",
            Subject : "Massage From "+name,
            Body : messageBody
        }).then(
              message => alert("Email enviado com sucesso!")
            );


    // Email.send({ 
    //     SecureToken : "9ff22ef4-47cc-4c9c-9b79-a291f2ebbf0a",
    //     To : 'david@emg.com.pt',
    //     From : document.getElementById("email").value,
    //     Subject : "Formulário de RMA",
    //     Body : messageBody
    //   }).then(
    //     message => alert("Email enviado com sucesso!")
    //   );
  }