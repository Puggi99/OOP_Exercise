/* 

1) Modellare un gestionale di una azienda di vendite. 

Entità/Classi: 

Manager:
- Name (nome)
- Surname (cognome)
- Employees (impiegati) -> Array di Emplyee
Cosa sa fare: 
- sa calcolare gli introiti totali del reparto
    get allEarnings()
- sa fare il suo toString() con il numero degli impiegati totali, numero dei clienti totali e l'earnings

Employee (impiegato):
- Name (nome)
- Surname (cognome)
- Clients (Clienti) -> Array di Clienti
Cosa sa fare: 
- sa calcolare il suo bestClient()
- sa fare il suo toString che ritorna i dati di Employee, il numero dei clienti e quale è il suo miglior cliente

Client(cliente):
- Name (nome)
- Surname (cognome)
- Address (indirizzo)
- Orders (Ordini) -> Array di Order
Cosa sa fare: 
- sa calcolare la somma dei suoi ordini 
    get sumOfOrder()
- sa fare il suo toString() che, oltre a restituire i suoi dati mi lista tutti gli ordini passati

Order (Ordine)
- Product (Nome Prodotto)
- Quantity (Quantità)
- Unity Price (Prezzo Unitario)
Cosa sa fare: 
- sa calcolare il suo prezzo totale
    get totalPrice()
- sa fare il suo toString()

Specifiche:
- Tutti erediteranno da Person

Specifiche facoltative:
 - Person ha una dob (date) (data di nascita)
 - Person ha get age() 
 - Person ha isBirthday()
 - se è il compleanno, aggiungere nota alla string
*/

const person1= new Person('Pasquale','Fantozzi','via mandarino 6/4') // Mananger
const person2= new Person('Filippo','Del nord','via bella 4/2') // negozio 1
const person3= new Person('Ciro','Piano','viale granata argento 1u') // negozio 2
const person4= new Person('Carmine','Rossi','vico scansi 2/5',[order1,order3,order4,order5]) // cliente 1
const person5= new Person('Pamela','Gnoccazzi','via della sapienza 7',[order2,order5,order4]) // cliente 2 
const person6= new Person('Federico','Ferragnez','via gennaro del capo 13',[order4,order3,order5,order1]) // cliente 3 
const person7= new Person('Gino','Sorbillo','viale del ricchi 14',[order1,order2,order3,order4]) // cliente 4
const person8= new Person('Yasuo','Perla','piazza della maddalena 90r',[order1]) // cliente 5
////////////////////////////////////////////////////////////////////////////////////////
// const order1 =new Order(product, quantity, unityPrice)
const order1 =new Order('Margherita',4, 4.50)
const order2 =new Order('Romana',1,5.00)
const order3 =new Order('Capricciosa',5,7.00)
const order4 =new Order('Cotto',7,6.00)
const order5 =new Order('Crudo',9,6.00)

console.log(person7.toString());