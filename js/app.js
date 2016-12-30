var customers = [
	{
        "id":1,
    	"first_name":"Allan",
    	"last_name":"Cerveaux",
    	"company":"Simplon",
        "role":"Formateur",
    	"phone":"06.61.64.13.69",
    	"email":"acerveaux@simplon.co",
    	"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores fugit molestias, voluptatem id blanditiis modi nobis eum esse fugiat debitis dignissimos voluptatum minus iusto provident fuga libero aliquid asperiores omnis quaerat. Incidunt, consequatur dicta quia."
	},
	{
        "id":2,
    	"first_name":"Jean",
    	"last_name":"Pascal",
    	"company":"Simplon",
        "role":"Employé",
    	"phone":"06.61.25.35.69",
    	"email":"jpascal@mail.co",
    	"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores fugit molestias, voluptatem id blanditiis modi nobis eum esse fugiat debitis dignissimos voluptatum minus iusto provident fuga libero aliquid asperiores omnis quaerat. Incidunt, consequatur dicta quia." 
    },
    {
        "id":3,
        "first_name":"Romuald",
        "last_name":"Laurem",
        "company":"S.Lipsum",
        "role":"Manager",
        "phone":"06.61.25.35.69",
        "email":"rlaureml@lipsum.co",
        "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores fugit molestias, voluptatem id blanditiis modi nobis eum esse fugiat debitis dignissimos voluptatum minus iusto provident fuga libero aliquid asperiores omnis quaerat. Incidunt, consequatur dicta quia." 
    }
]

// Write you're code here. Enjoy !
    var customers1 = customers[0]
    console.log(customers1.id, customers1.first_name, customers1.last_name, customers1.company, customers1.role, customers1.phone, customers1.email, customers1.description);

    var customers2 = customers[1]
    console.log(customers1.id, customers1.first_name, customers1.last_name, customers1.company, customers1.role, customers1.phone, customers1.email, customers1.description);

    var customers3 = customers[2]
    console.log(customers1.id, customers1.first_name, customers1.last_name, customers1.company, customers1.role, customers1.phone, customers1.email, customers1.description);

    document.getElementById("customers1").innerHTML = customers1.id +"<br>" +customers1.first_name +"<br>" +customers1.last_name +"<br>" +customers1.company +"<br>" +customers1.role +"<br>" +customers1.phone +"<br>" +customers1.email +"<br>"+customers1.description; 
    document.getElementById("customers2").innerHTML = customers2.id +"<br>" +customers2.first_name +"<br>" +customers2.last_name +"<br>" +customers2.company +"<br>" +customers2.role +"<br>" +customers2.phone +"<br>" +customers2.email +"<br>"+customers2.description; 
    document.getElementById("customers3").innerHTML = customers3.id +"<br>" +customers3.first_name +"<br>" +customers3.last_name +"<br>" +customers3.company +"<br>" +customers3.role +"<br>" +customers3.phone +"<br>" +customers3.email +"<br>"+ customers3.description; 