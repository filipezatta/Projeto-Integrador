      


            

            document.write("<th>Distância entre as duas cidades </th>");
            document.write("<th>Animal de pequeno ou médio porte (até 4kg)</th>")
            document.write("<th>Animal de grande porte (mais de 4kg) </th>")

            
            for(k = 4; k <= 30; k++)
            {
                var colorCode = ""
                if(k%2 === 0)
                {
                    colorCode = "#eee"
                }else{
                    colorCode = "#99e265"
                }
                
                document.write("<tr>")
                
                var preçop = Math.round(Math.pow((k*10), 0.9))
                var preçog = Math.round(Math.pow((k*10), 0.5))
                {
                 document.write("<td style='border-top: 1px solid black;'>" + "até " + k*10 + "km" + "</td>") 
                 document.write("<td style='border-top: 1px solid black;'>" + "R$" + (preçop + 70) + "</td>")
                 document.write("<td style='border-top: 1px solid black;'>" + "R$" + (preçog + k*10 + 120) + "</td>")  
                }
                
                 document.write("</tr>")
            }

            document.write("</table>")
            





/* 

 D = k*10

pequeno:  preçok = 70 + D^0.9 


 70
 math.pow(D, 0.9)

grande: preçok = 120 + D^0.5

*/
