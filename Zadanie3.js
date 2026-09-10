var liczba = parseInt(prompt("Podaj liczbę całkowitą:"));
 

document.write("Zadanie.1"+ "<br>" + "Wprowadzona liczba: " + liczba + "<br>");

 document.write("<br>")


document.write("Zadanie.2"+ "<br>" + "Liczba o znaku przeciwnym: " + (-liczba) + "<br>");
 
document.write("<br>")


document.write("Zadanie.3"+ "<br>" + "Liczba powiększona o 15: " + (liczba + 15) + "<br>");
 
document.write("<br>")

document.write("Zadanie.4"+ "<br>" + "Liczba powiększona o 0,5: " + (liczba + 0.5) + "<br>");
 
document.write("<br>")

document.write("Zadanie.5"+ "<br>" + "Kwadrat liczby: " + (liczba * liczba) + "<br>");
 
document.write("<br>")

document.write("Zadanie6"+ "<br>" + "Wynik dzielenia przez 2: " + (liczba / 2) + "<br>");
 
document.write("<br>")

document.write("Zadanie7"+ "<br>" + "Reszta z dzielenia przez 2: " + (liczba % 2) + "<br>");
 
document.write("<br>")

document.write("Zadanie8"+ "<br>" + "Liczba o jeden większa: " + (liczba + 1) + "<br>");
 
document.write("<br>")

document.write("Zadanie9"+ "<br>" + "Liczba o jeden mniejsza: " + (liczba - 1) + "<br>");
 
document.write("<br>")

document.write("Zadanie10"+ "<br>" + "Dzielenie przez 3 zaokrąglone w dół: " + Math.floor(liczba / 3) + "<br>");
 
document.write("<br>")

document.write("Zadanie11"+ "<br>" +"Dzielenie przez 3 zaokrąglone w górę: " + Math.ceil(liczba / 3) + "<br>");
 
document.write("<br>")

document.write("Zadanie12"+ "<br>" +"Dzielenie przez 3 zaokrąglone: " + Math.round(liczba / 3) + "<br>");
 
document.write("<br>")

document.write("Zadanie13"+ "<br>" + "Pierwiastek: " + Math.sqrt(liczba) + "<br>");
 
document.write("<br>")

var losowa = Math.floor(Math.random() * 51);
document.write("Zadanie14"+ "<br>" + "Wylosowana liczba: " + losowa + "<br>");
document.write("    Iloczyn: " + (liczba * losowa) + "<br>");
 
document.write("<br>")

document.write("Zadanie15"+ "<br>" + "Wartość absolutna: " + Math.abs(liczba) + "<br>");