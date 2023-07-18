export const queryList = [
  "SELECT first_name, age FROM PRODUCTS;",
  "SELECT last_name, age FROM ORDERS;",
  "SELECT address_name, age FROM EMPLOYEE;",
];

export const queryResultsList = [
  [
    {
      productId: 1,
      productName: "Chai",
      supplierId: 1,
      unitPrice: 39,
      quanity: "30 bags",
    },
    {
      productId: 2,
      productName: "Chang",
      supplierId: 1,
      unitPrice: 300,
      quanity: "30 bags",
    },
    {
      productId: 3,
      productName: "Aniseed Syrup",
      supplierId: 10,
      unitPrice: 3,
      quanity: "30 boxes",
    },
    {
      productId: 4,
      productName: "Chef Anton's Cajun Seasoning",
      supplierId: 4,
      unitPrice: 60,
      quanity: "300 bags",
    },
    {
      productId: 5,
      productName: "Grandma's Boysenberry Spread	",
      supplierId: 5,
      unitPrice: 40,
      quanity: "3 pkgs",
    },
  ],
  [
    {
      orderId: 1,
      customerId: "VINET",
      employeeId: 1,
      shipName: "Vins et alcools Chevalier",
      shipAddress: "59 rue de l'Abbaye",
    },
    {
      orderId: 2,
      customerId: "TOMSP",
      employeeId: 2,
      shipName: "Hanari Carnes	",
      shipAddress: "Rua do Paço 67	",
    },
    {
      orderId: 3,
      customerId: "HANAR",
      employeeId: 30,
      shipName: "Richter Supermarkt	",
      shipAddress: "Starenweg 5	",
    },
    {
      orderId: 4,
      customerId: "VICTE",
      employeeId: 11,
      shipName: "Wellington Importadora	",
      shipAddress: "Rua do Mercado 12",
    },
    {
      orderId: 5,
      customerId: "SPRD",
      employeeId: 12,
      shipName: "Ernst Handel",
      shipAddress: "Kirchgasse 6",
    },
  ],
  [
    {
      employeeId: 1,
      firstName: "Davolio",
      lastName: "Nancy",
      title: "Sales Representative",
      city: "Seattle",
    },
    {
      employeeId: 2,
      firstName: "Fuller",
      lastName: "Andrew",
      title: "Vice President Sales",
      city: "Tacoma",
    },
    {
      employeeId: 3,
      firstName: "Leverling",
      lastName: "Janet",
      title: "Sales Representative",
      city: "Redmond",
    },
    {
      employeeId: 4,
      firstName: "Peacock",
      lastName: "MArgaret",
      title: "Sales Manager",
      city: "London",
    },
    {
      employeeId: 5,
      firstName: "Suyama",
      lastName: "Michael",
      title: "Sales Representative",
      city: "London",
    },
  ],
];
