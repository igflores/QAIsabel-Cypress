ID: https://upexgalaxy24.atlassian.net/browse/GX-29819




# Summary: 🪶ToolsQA | Elements | Radio Buttons




Descripción Como QA aprendiz, Quiero testear los Radio Buttons Para practicar hacer este tipo de Escenario de Testing




```

🧪 Test Strategy

Utiilizar Scripts sencillos para tomar elementos con CSS Selectors

No utilizar un enfoque random

No tomar los textos de los elementos clickeados para utilizar luego.

Usar un enfoque sencillo con data esperada.

```




✅ACCEPTANCE CRITERIA (Esta Feature no necesita una US formato BDD; por favor revisar las BRS)




🚩BUSINESS RULES SPEC




Cada Radio Buttons (RB) debe tener la siguiente etiqueta respectiva, hay un total de 3: Yes | Impressive | No




Output: Por cada vez que se seleccione un RB, debe visualizar el mensaje siguiente: “You have selected ” + buttonName (TechNote: tomar en cuenta la

separación)




donde “buttonName” = RB seleccionado




Excepción: El único RB que no debe ser seleccionado es el “No” El cursor del mouse no puede seleccionarlo.