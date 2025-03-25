personas = []

while True:
    nombre = input("Ingrese el nombre: ")
    apellido = input("Ingrese el apellido: ")
    dni = input("Ingrese el DNI: ")

    # Pide un solo número de teléfono
    telefono = input("Ingrese un teléfono: ")

    # Almacena la persona con su teléfono
    personas.append([nombre, apellido, dni, [telefono]])

    # Después de registrar una persona, pregunta si desea agregar otra
    continuar_ingreso = input("¿Desea agregar otra persona? (si/no): ").lower()
    if continuar_ingreso == "no":
        break  # Si responde "no", termina el ciclo de ingreso de personas

print("\nLista de personas registradas:")
print(personas)  # Muestra la lista de personas y sus teléfonos
