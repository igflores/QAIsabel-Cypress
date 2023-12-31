## Historia de Usuario: GX-34871

https://upexgalaxy26.atlassian.net/browse/GX-34871

## Titulo: ✅ToolsQA | Forms | Practice Form

### Descripción:

Recuerda tener en cuenta: Revisar la pestaña TEST STRATEGY. La cobertura de los casos de prueba los podrá realizar aleatorios o estáticos. Deberá
presentar sus comentarios (Jira y Github) haciendo uso de reportes y generación de evidencias. Deberá realizar aserciones de lo ingresado en cada
input y que estos se encuentren registrados en el formulario.

El objetivo del test será aprender: Obtener elementos, y realizar acciones; Obtener elementos dentro de otros (primer reto de calendario); Aprender a
utilizar la librería Faker; Pulir el uso del POM dentro del test;

```
✅ACCEPTANCE CRITERIA
As a QA learner,
I want to test:
Filling out a form with:
First Name
Last Name
Email
Mobile Number
Subjects
Current Address
Radio Buttons to choose Gender
Date Picker
Check Boxes to choose Hobbies
Upload picture
Select menu to chooise State and City
Button Register
And Submit it.
So that I can improve my testing skills for this scenario.
```

### Scope:

-   Only Page: https://demoqa.com/automation-practice-form

### OOS:

-   Other Pages

## Business Rules:

```
FEATURE: Practice Form-Student Registration Form
Required fields to submit Form: “First Name”, “Last Name“, “Gender“, “Mobile Number” and “Date of Birth”.

For: “First Name”, “Last Name“
These fields cannot be empty
   IF field is empty = No message is displayed after submitting and the field turns red
   IF the field is filled = A popup appears with information uploaded when the data is submitted

For: “Email”
This field can be invalid, empty or filled.
This field is invalid when:
   Does not contain “@”
   Does not contain (minimum) 1 alphanumeric character before “@”
   Does not contain (minimum) 1 alphanumeric character after “@”
   Does not contain “.” after 1 alphanumeric character after “@”.
   Does not contain (minimum) 2 alphanumeric characters after “.”

Mockup: “x@x.xx”
IF field is invalid =  No message is displayed after submitting and the field turns red
IF field is empty = No message is displayed after submitting.
IF the field is filled correctly = A popup appears with information uploaded when the data is submitted
Radio Buttons to choose “Gender” (Gender is a required field to submit form)
Each Radio Buttons must have the following label, there are a total of 3:
   Male
   Female
   Other
A popup appears with the information chosen when the data is submitted

For “Mobile Number”
This field cannot be empty and only can contain exactly 10 numbers
   IF field is empty OR invalid = No message is displayed after submitting and the field turns red
   IF the field is filled correctly = A popup appears with information uploaded when the data is submitted

Date Picker
The default value is Current Date
   When a user makes clicks on the date appear a menu to choose the date of birth

For “Subjects”
These fields can´t be empty
   IF field is empty = No message is displayed after submitting
   IF the field is filled =A popup appears with information uploaded when the data is submitted
Check Boxes to choose Hobbies
Each Check Boxes must have the following label, there are a total of 3:
   Sports
   Reading
   Music
A popup appears with the information chosen when the data is submitted
Upload picture
   IF the user makes clicks on “Select picture” button
THEN The Explorer is opened to select the file to upload
WHEN the user chooses the picture AND makes clicks to open
THEN the picture is uploaded in the form
   IF the picture is uploaded =A popup appears with picture uploaded when the data is submitted
Select the menu to choose State and City
For “Current Address”
These fields can be empty
   IF field is empty = No message is displayed after submitting
   IF the field is filled =A popup appears with information uploaded when the data is submitted
```