    function showbasis(){
        var al = parseFloat(al);
        var bt = parseFloat(bt);
        var ba=parseFloat(document.getElementById('a').value);
        
        var bc=parseFloat(document.getElementById('c').value);
        var bd=parseFloat(document.getElementById('d').value);
        var be=parseFloat(document.getElementById('e').value);
        var bf=parseFloat(document.getElementById('f').value);
        

        if(document.getElementById('a').value.length == 0){
            alert("Please enter all the values");
            return false
        }
        if(document.getElementById('c').value.length == 0){
            alert("Please enter all the values");
            return false
        }
        if(document.getElementById('d').value.length == 0){
            alert("Please enter all the values");
            return false
        }
        if(document.getElementById('e').value.length == 0){
            alert("Please enter all the values");
            return false
        }
        if(document.getElementById('f').value.length == 0){
            alert("Please enter all the values");
            return false
        }

        if (ba==0){
            alert("Enter valid basis");
            return false
        }

        var m = parseFloat(m);
        m = be/bc;
        if(bf == (m*bd)){
            alert("Please enter valid basis");
            return false
        }

        if(bc == 0){
            if (be == 0){
                alert("Please enter valid basis");
                return false
            }
        }

        document.getElementById('displaybasis1').innerHTML = "<li><i>B</i><sub>1</sub> = {"+ba+"}, <i>B</i><sub>2</sub> = {("+bc +"," +bd +"), (" +be +"," +bf+")}</li>";
        // document.getElementById('displaybasis2').innerHTML = "";
        document.getElementById('displayT').innerHTML = "<li><i>T</i>("+ba+") = ("+ba+", "+(3*ba)+") = &alpha;("+bc+", "+bd+") + &beta;("+be+", "+bf+")</li>";
        //document.getElementById('displayT1').innerHTML = "("+ba+", "+(3*ba)+") = &alpha;("+bc+", "+bd+") + &beta;("+be+", "+bf+")";
        

        bt=(((ba*bd)-(3*ba*bc))/((be*bd)-(bc*bf)));
        al = (((3*ba)-(bt*bf))/bd);
        
        //alert("\\((\\begin{bmatrix} al \\\\ bt \\end{bmatrix})\\)");
        //document.getElementById('displayalbt').innerHTML = "&alpha; = "+al+", &beta; = "+bt;
        //document.getElementById("he").innerHTML ="\\[begin{bmatrix}"+al +"&"+bt+"\\end{bmatrix}\\]"
        //document.getElementById("matrixContainer").innerHTML = "\\((\\begin{bmatrix} al \\\\ bt \\end{bmatrix})\\)";

        document.getElementById('alBt').innerHTML =" &emsp; &rArr; &alpha; = "+al+ ", &beta; = " +bt ;
        document.getElementById('displayT1').innerHTML ="<li>Matrix of <i>T</i> w.r.t. the bases <i>B</i><sub>1</sub> and <i>B</i><sub>2</sub> = </li> ";
        document.getElementById("mat").innerHTML=("\\[ \\begin{pmatrix} &alpha; \\\\ &beta; \\end{pmatrix} \\ =  \\begin{pmatrix} "+al+" \\\\ "+bt+" \\end{pmatrix} \\]");
        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

       

        
    }
