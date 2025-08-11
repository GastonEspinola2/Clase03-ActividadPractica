# Actividad 5

Responder lo siguiente:

1.¿Qué diferencias, ventajas y desventajas encontrás entre usar funciones constructoras con prototype y usar class?
2.¿Cuáles son las ventajas de usar getters y setters?
3.¿Qué problemas pueden surgir al modificar prototipos nativos como String?
4.Teniendo en cuenta un objeto personPrototype que contiene un método greet, ¿qué diferencias encontrás entre asignar ese método directamente al prototype de una función constructora o usar Object.assign?

### Respuesta 1

## Diferencias

* Las funciones constructoras son la forma vieja de crear objetos con un molde en JavaScript, usando function y asignando métodos al prototype.
* Class hace lo mismo por debajo, pero con una sintaxis más limpia y parecida a otros lenguajes.
*  En class podés escribir métodos dentro directamente, en la constructora hay que agregarlos a prototype a mano.

## Ventajas de usar funciones constructoras con prototype

* Sirven en cualquier versión vieja de JavaScript (compatibles con navegadores antiguos).

* Te dejan más control de cómo manejar el prototype y cómo asignar métodos.

* Es más fácil “entender lo que pasa por debajo” porque no está oculto por la sintaxis de class.

## Desventajas de usar funciones constructoras con prototype

* La sintaxis es más fea y repetitiva (tenés que andar poniendo NombreConstructor.prototype.metodo = ...).

* Puede ser más difícil de leer para alguien que viene de otros lenguajes.

* Hay más chances de olvidarte cosas como new o de romper el this si no lo usás bien.

## Ventajas de usar class

* Más corto y fácil de leer.

* Más parecido a cómo se definen clases en Java, C#, Python, etc.

* Los métodos ya se asignan al prototype.

* Tiene características nuevas como extends para herencia y super() para llamar al constructor del padre.

## Desventajas de usar class

* No funciona en navegadores muy viejos sin transpilar el código.

### Respuesta 2

## Ventajas de usar getters y setters

1. Controlar el acceso a las propiedades: No dejas que se acceda o cambie un valor directamente, sino que pasa por tu funcion, asi podes validar, modificar o impedir cambios.

2. Validacion de datos: Antes de guardar algo, podes revisar si es correcto(Por ejemplo, que la edad no sea negativa).

3. Encapsulamiento: Esconden la implementacion interna del objeto y te dan una interfaz mas limpia para usarlo.

4. Evitar errores futuros: Si en el futuro se cambia el cómo se gudan los datos, no hace falta cambiar el codigo que lo usa, solo el getter/setter.

### Respuesta 3

## Problemas que pueden surgir

1. Conflictos con otras librerias: Si otra libreria define un metodo con el mismo nombre que se usa, una va a sobrescribir a la otra y puede romper todo.

2. Romper compatibilidad futura: Si en el futuro JS agrega oficialmente un metodo con el mismo nombre pero comportamiento distinto, tu codigo puede comportarse mal o de forma inesperada.

3. Cambiar comportamiento estandar: Si se modifica un metodo que ya existe, todo el codigo que lo use(librerias y el propio navegador) va a verse afectado.

4. Rendimiento mas lento: Metodos extra en los prototipos pueden afectar el rendimientos en bucles o funciones que recorren propiedades, porque hay mas cosas en la cadena de prototipos.

5. Dificil de depurar: Si algo se rompe por una modificacion al prototipo nativo, puede ser muy dificil encontrar el origen, porque el fallo no siempre aparece donde se hizo el cambio.

### Respuesta 5

### Asignar directamente al prototype

MiConstructor.prototype.greet = personPrototype.greet;

* Solo agrega esa funcion en el prototype del constructor

## Ventajas

* Mas rapido y directo si solo quieres copiar un metodo puntual

* Menos memoria usada porque solo estas añadiendo lo que necesitas

## Desventajas

* Si queres copiar varios metodos, tenes que escribir una asignacion por cada uno.

### Usar Object.assign

Object.assign(MiConstructor.prototype, personPrototype);

* Copia todas las propiedades enumerables de personPrototype al prototype del constructor de una sola vez.

## Ventajas

* Mas comodo si tenes muchos metodos que pasar.

* Menos codigo repetido

## Desventajas

* Puede copiar propiedades que no querías (si están en personPrototype).

* Si ya existían propiedades con el mismo nombre, las sobrescribe sin avisar.

* Hace una copia por valor (referencia para funciones), no enlaza el prototipo original, así que si después cambiás personPrototype, el prototype del constructor no se actualiza.
