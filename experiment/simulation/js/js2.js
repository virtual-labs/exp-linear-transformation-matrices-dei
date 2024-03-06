    function showbasis(){
        var al = parseFloat(al);
        var bt = parseFloat(bt);
        var ba=parseFloat(document.getElementById('a').value);
        
        var bc=parseFloat(document.getElementById('c').value);
        var bd=parseFloat(document.getElementById('d').value);
        var be=parseFloat(document.getElementById('e').value);
        var bf=parseFloat(document.getElementById('f').value);
        

        if(document.getElementById('a').value.length == 0){
            alert("Please enter the basis");
            return false
        }
        if(document.getElementById('c').value.length == 0){
            alert("Please enter the basis");
            return false
        }
        if(document.getElementById('d').value.length == 0){
            alert("Please enter the basis");
            return false
        }
        if(document.getElementById('e').value.length == 0){
            alert("Please enter the basis");
            return false
        }
        if(document.getElementById('f').value.length == 0){
            alert("Please enter the basis");
            return false
        }

        if (ba==0){
            alert("Enter valid basis");
            return false
        }

        var m = parseFloat(m);
        m = be/bc;
        if(bf == (m*bd)){
            alert("Enter valid basis");
            return false
        }

        if(bc == 0){
            if (be == 0){
                alert("Enter valid basis");
                return false
            }
        }

        document.getElementById('displaybasis1').innerHTML = "B<sub>1</sub> = {"+ba+"} &isin; R";
        document.getElementById('displaybasis2').innerHTML = "B<sub>2</sub> = {("+bc +"," +bd +"), (" +be +"," +bf+")} &isin; R<sup>2</sup>";
        document.getElementById('displayT').innerHTML = "T("+ba+") = ("+ba+", "+(3*ba)+") = &alpha;("+bc+", "+bd+") + &beta;("+be+", "+bf+")";
        //document.getElementById('displayT1').innerHTML = "("+ba+", "+(3*ba)+") = &alpha;("+bc+", "+bd+") + &beta;("+be+", "+bf+")";
        

        bt=(((ba*bd)-(3*ba*bc))/((be*bd)-(bc*bf)));
        al = (((3*ba)-(bt*bf))/bd);
        
        //alert("\\((\\begin{bmatrix} al \\\\ bt \\end{bmatrix})\\)");
        //document.getElementById('displayalbt').innerHTML = "&alpha; = "+al+", &beta; = "+bt;
        //document.getElementById("he").innerHTML ="\\[begin{bmatrix}"+al +"&"+bt+"\\end{bmatrix}\\]"
        //document.getElementById("matrixContainer").innerHTML = "\\((\\begin{bmatrix} al \\\\ bt \\end{bmatrix})\\)";

        document.getElementById('displayT1').innerHTML ="Matrix of T w.r.t. the bases B<sub>1</sub> and B<sub>2</sub> is ";
        document.getElementById("mat").innerHTML=("\\[ \\begin{pmatrix} &alpha; \\\\ &beta; \\end{pmatrix} \\ =  \\begin{pmatrix} "+al+" \\\\ "+bt+" \\end{pmatrix} \\]");
        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

        document.getElementById('note').innerHTML="NOTE: You can observe that different bases may give different matrix w.r.t. the given linear transformation."

        
    }
